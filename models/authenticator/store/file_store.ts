import * as fs from 'fs';
import { SDKException } from '../../../core/com/zoho/crm/api/exception/sdk_exception';
import { UserSignature } from "../../../routes/user_signature";
import { Constants } from "../../../utils/util/constants";
import { OAuthToken, TokenType } from '../oauth_token';
import { Token } from "../token";
import { TokenStore } from "./token_store";

/**
 * This class stores the user token details to the file.
*/
export class FileStore implements TokenStore {
    private filePath: string;
    private headers: string[];

    /**
     * Creates an FileStore class instance with the specified parameters.
     * @param {string} filePath
    */
    constructor(filePath: string) {
        this.filePath = filePath;
        this.headers = [Constants.USER_MAIL, Constants.CLIENT_ID, Constants.REFRESH_TOKEN, Constants.ACCESS_TOKEN, Constants.GRANT_TOKEN, Constants.EXPIRY_TIME];
        if(!fs.existsSync(this.filePath) || (fs.existsSync(this.filePath) && fs.readFileSync(this.filePath, 'utf-8') === "")) {
            fs.writeFileSync(filePath, this.headers.join(), 'utf-8');
        }
    }

    async getToken(user: UserSignature, token: Token): Promise<Token | undefined> {
        var oauth = undefined;
        try {
            var array = fs.readFileSync(this.filePath,'utf-8').toString().split("\n");
            if(token instanceof OAuthToken){
                for(var i=0; i < array.length; i++){
                    var line = array[i];
                    var nextRecord = line.split(",");
                    if(this.checkTokenExists(user.getEmail(), token, nextRecord)) {
                        oauth = token;
                        oauth.setRefreshToken(nextRecord[2]);
                        oauth.setAccessToken(nextRecord[3]);
                        oauth.setExpiresIn(nextRecord[5]);
                        break;
                    }
                }
            }
        }
        catch (error) {
            throw new SDKException(Constants.TOKEN_STORE, Constants.GET_TOKEN_FILE_ERROR, null, error);
        }

        return oauth;
    }

    async saveToken(user: UserSignature, token: Token): Promise<void> {
        try {
            if(token instanceof OAuthToken){
                token.setUserMail(user.getEmail());
                await this.deleteToken(token);
                var data = [];
                data[0] = user.getEmail();
                data[1] = token.getClientID();
                data[2] = token.getRefreshToken();
                data[3] = token.getAccessToken();
                data[4] = token.getGrantToken();
                data[5] = token.getExpiresIn();
                fs.appendFileSync(this.filePath, "\n" + data.join());
            }
        }
        catch (e) {
            throw new SDKException(Constants.TOKEN_STORE, Constants.SAVE_TOKEN_FILE_ERROR, null, e);
        }
    }

    async deleteToken(token: Token): Promise<void> {
        try {
            var array: string[] = [];
            array = fs.readFileSync(this.filePath,'utf-8').toString().split("\n");
            if(token instanceof OAuthToken) {
                for (var i=0;i<array.length;i++) {
                    var nextRecord = array[i].toString().split(",");
                    if(this.checkTokenExists(token.getUserMail(), token, nextRecord)) {
                        array.splice(i,1);
                        break;
                    }
                }
                fs.writeFileSync(this.filePath, array.join("\n"), 'utf8');
            }
        }
        catch (e) {
            throw new SDKException(Constants.TOKEN_STORE, Constants.DELETE_TOKEN_FILE_ERROR, null, e);
        }
    }

    async getTokens(): Promise<Token[]> {
        var tokens = [];
        try {
            var array = fs.readFileSync(this.filePath,'utf-8').toString().split("\n");

            for(var i=1; i<array.length; i++){
                let line=array[i];
                let nextRecord = line.split(",");
                let tokenType = (nextRecord[4] != null && nextRecord[4].length > 0) ? TokenType.GRANT : TokenType.REFRESH;
                let tokenValue = (tokenType == TokenType.REFRESH) ? nextRecord[2] : nextRecord[4];
                let token = new OAuthToken(nextRecord[1], "", tokenValue, tokenType);
                token.setUserMail(nextRecord[0]);
                token.setExpiresIn(nextRecord[5]);
                token.setAccessToken(nextRecord[3]);
                tokens.push(token);
            }
        }
        catch (error) {
            throw new SDKException(Constants.TOKEN_STORE, Constants.GET_TOKENS_FILE_ERROR, null, error);
        }
        return tokens;
    }

    deleteTokens(): void {
        try {
            fs.writeFileSync(this.filePath, this.headers.join(), 'utf-8');
        }
        catch (error) {
            throw new SDKException(Constants.TOKEN_STORE, Constants.DELETE_TOKENS_FILE_ERROR, null, error);
        }
    }

    private checkTokenExists(email: string | undefined, token: OAuthToken, row:Array<string>): boolean {
        var clientId = token.getClientID();
        var grantToken = token.getGrantToken();
        var refreshToken = token.getRefreshToken();
        var tokenCheck = grantToken != null ? grantToken===row[4] : refreshToken===row[2];
        if(row[0] === email && row[1] === clientId && tokenCheck) {
            return true;
        }
        return false;
    }

}