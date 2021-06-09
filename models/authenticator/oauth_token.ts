import { Initializer } from '../../routes/initializer';
import { Token } from './token';
import FormData = require("form-data");
import { Constants } from '../../utils/util/constants';
import { UserSignature } from '../../routes/user_signature';
import { TokenStore } from './store/token_store';
import * as Logger from 'winston';
import { SDKException } from '../../core/com/zoho/crm/api/exception/sdk_exception';
import got from 'got';
import { APIHTTPConnector } from '../../routes/controllers/api_http_connector';

/**
 * This class contains different types of token.
*/
export class TokenType {
    public static GRANT = 'GRANT';
    public static REFRESH = 'REFRESH';
}

/**
 * This class maintains the tokens and authenticates every request.
*/
export class OAuthToken implements Token {
    private clientID: string;
    private clientSecret: string;
    private redirectURL: string | undefined;
    private grantToken: string | null;
    private refreshToken: string | null;
    private accessToken: string | undefined;
    private expiresIn: string;
    private userMail: string;
    private id: string | undefined;

    /**
     * Creates an OAuthToken class instance with the specified parameters.
     * @param {String} clientID - A String containing the OAuth client id.
     * @param {String} clientSecret - A String containing the OAuth client secret.
     * @param {String} token - A String containing the REFRESH/GRANT token.
     * @param {String} type - A TokenType key containing the given token type.
     * @param {String} redirectURL - A String containing the OAuth redirect URL.
    */
    constructor(clientID: string, clientSecret: string, token: string, type: TokenType, redirectURL?: string) {
        this.clientID = clientID;
        this.clientSecret = clientSecret;
        this.redirectURL = redirectURL;
        this.refreshToken = (type === TokenType.REFRESH) ? token : null;
        this.grantToken = (type === TokenType.GRANT) ? token : null;
    }

    /**
     * This is a getter method to get OAuth client id.
     * @returns A String representing the OAuth client id.
    */
    public getClientID() : string {
        return this.clientID;
    }

    /**
	 * This is a getter method to get OAuth client secret.
	 * @returns A String representing the OAuth client secret.
	*/
    public getClientSecret() : string {
        return this.clientSecret;
    }

    /**
	 * This is a getter method to get OAuth redirect URL.
	 * @returns A String representing the OAuth redirect URL.
	*/
    public getRedirectURL() : string | undefined {
        return this.redirectURL;
    }

    /**
	 * This is a getter method to get grant token.
	 * @returns A String representing the grant token.
	*/
    public getGrantToken() : string | null {
        return this.grantToken;
    }

    /**
	 * This is a getter method to get refresh token.
	 * @returns A String representing the refresh token.
	*/
    public getRefreshToken() : string | null {
        return this.refreshToken;
    }

    /**
	 * This is a setter method to set refresh token.
	 * @param {string} refreshToken - A String containing the refresh token.
	*/
    public setRefreshToken(refreshToken: string | null) {
        this.refreshToken = refreshToken;
    }

    /**
	 * This is a getter method to get access token.
	 * @returns A String representing the access token.
	*/
    public getAccessToken() : string | undefined {
        return this.accessToken;
    }

    /**
	 * This is a setter method to set access token.
	 * @param {string} accessToken A String containing the access token.
	*/
    public setAccessToken(accessToken: string | undefined) {
        this.accessToken = accessToken;
    }

    /**
	 * This is a getter method to get token expire time.
	 * @returns A String representing the token expire time.
	*/
    public getExpiresIn() : string {
        return this.expiresIn;
    }

    /**
	 * This is a setter method to set token expire time.
	 * @param {string} expiresIn A String containing the token expire time.
	*/
    public setExpiresIn(expiresIn: string) {
        this.expiresIn = expiresIn;
    }

    /**
     * This is a getter method to get token user mail.
     * @returns A String representing the userMail
    */
    public getUserMail() : string {
        return this.userMail;
    }

    /**
     * This is a setter method to set token user email.
     * @param {String} userMail A String containing the userMail
    */
    public setUserMail(userMail : string) {
        this.userMail = userMail;
    }

    /**
     * This is a getter method to get the id
     * @returns the id
    */
    public getId() : string | undefined {
        return this.id;
    }

    /**
     * This is a setter method to set the id
     * @param {String} id A String containing the id
    */
    public setId(id : string | undefined) {
        this.id = id;
    }

    public async authenticate(urlConnection: APIHTTPConnector) {
        var token: string | undefined;
        var initializer = await Initializer.getInitializer();
        var store = initializer.getStore();
        var user = initializer.getUser();
        var oauthToken = await store.getToken(user, this) as OAuthToken;
        if(oauthToken == null) {
            token = (this.refreshToken === null) ? (await this.generateAccessToken(user, store)).getAccessToken() : (await this.refreshAccessToken(user, store)).getAccessToken();
        }
        else if (oauthToken.getExpiresIn() !== undefined && (parseInt(oauthToken.getExpiresIn()) - (new Date().getTime())) < 5000) {
            Logger.info(Constants.REFRESH_TOKEN_MESSAGE);
            token = (await this.refreshAccessToken(user, store)).getAccessToken();
        }
        else {
            token = this.getAccessToken();
        }
        if(token !== undefined) {
            urlConnection.addHeader(Constants.AUTHORIZATION, Constants.OAUTH_HEADER_PREFIX.concat(token));
        }
    }

    private async refreshAccessToken(user: UserSignature, store: TokenStore): Promise<OAuthToken> {
        let initializer = await Initializer.getInitializer();
        let url = initializer.getEnvironment().getAccountsUrl();
        var formDataRequestBody = new FormData();
        formDataRequestBody.append(Constants.REFRESH_TOKEN, this.refreshToken);
        formDataRequestBody.append(Constants.CLIENT_ID, this.clientID);
        formDataRequestBody.append(Constants.CLIENT_SECRET, this.clientSecret);
        formDataRequestBody.append(Constants.GRANT_TYPE, Constants.REFRESH_TOKEN);
        if(this.redirectURL !== undefined){
            formDataRequestBody.append(Constants.REDIRECT_URL, this.redirectURL);
        }
        const requestDetails = {
			method : Constants.REQUEST_METHOD_POST,
			headers : {},
			body : formDataRequestBody,
            encoding: "utf8",
			allowGetBody : true,
			throwHttpErrors : false
        };
        var response = await this.getResponse(url, requestDetails);
        try {
            store.saveToken(user, await this.parseResponse(response.body));
        } catch (error) {
            if(error instanceof SDKException) {
                throw error;
            }
            else if(error instanceof Error) {
                throw new SDKException(Constants.SAVE_TOKEN_ERROR, null, null, error);
            }
        }

        return this;
    }

    private async generateAccessToken(user: UserSignature, store: TokenStore): Promise<OAuthToken> {
        let initializer = await Initializer.getInitializer();
        let url = initializer.getEnvironment().getAccountsUrl();
        var formDataRequestBody = new FormData();
        formDataRequestBody.append(Constants.REFRESH_TOKEN, this.refreshToken);
        formDataRequestBody.append(Constants.CLIENT_ID, this.clientID);
        formDataRequestBody.append(Constants.CLIENT_SECRET, this.clientSecret);
        formDataRequestBody.append(Constants.GRANT_TYPE, Constants.GRANT_TYPE_AUTH_CODE);
        formDataRequestBody.append(Constants.CODE, this.grantToken);
        const requestDetails = {
			method : Constants.REQUEST_METHOD_POST,
			headers : {},
			body : formDataRequestBody,
            encoding: "utf8",
			allowGetBody : true,
			throwHttpErrors : false
        };
        var response = await this.getResponse(url, requestDetails);
        try {
            store.saveToken(user, await this.parseResponse(response.body));
        } catch (error) {
            if(error instanceof SDKException) {
                throw error;
            }
            else if(error instanceof Error) {
                throw new SDKException(Constants.SAVE_TOKEN_ERROR, null, null, error);
            }
        }

        return this;
    }

    async getResponse(url: string, requestDetails: {}) {
        return await got(url, requestDetails);
    }

    async parseResponse(response: string){
        var responseJSON = JSON.parse(response);
        if (!responseJSON.hasOwnProperty(Constants.ACCESS_TOKEN)) {
            throw new SDKException(Constants.INVALID_CLIENT_ERROR, responseJSON[Constants.ERROR_KEY].toString());
        }
        this.accessToken = responseJSON[Constants.ACCESS_TOKEN];
        if (responseJSON.hasOwnProperty(Constants.REFRESH_TOKEN)) {
            this.refreshToken = responseJSON[Constants.REFRESH_TOKEN];
        }
        this.expiresIn=(new Date().getTime() + await this.getTokenExpiryTime(responseJSON)).toString();
        return this;
    }

    getTokenExpiryTime(response: any) {
        return response.hasOwnProperty(Constants.EXPIRES_IN_SEC)? response[Constants.EXPIRES_IN] : response[Constants.EXPIRES_IN]*1000;
    }

    async remove(): Promise<boolean> {
        try {
            let initializer = await Initializer.getInitializer();
            await initializer.getStore().deleteToken(this);
            return true;
        }
        catch (error) {
            return false;
        }
    }
}