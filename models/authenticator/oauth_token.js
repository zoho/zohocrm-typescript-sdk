"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuthToken = exports.TokenType = void 0;
const initializer_1 = require("../../routes/initializer");
const FormData = require("form-data");
const constants_1 = require("../../utils/util/constants");
const Logger = __importStar(require("winston"));
const sdk_exception_1 = require("../../core/com/zoho/crm/api/exception/sdk_exception");
const got_1 = __importDefault(require("got"));
/**
 * This class contains different types of token.
*/
class TokenType {
}
exports.TokenType = TokenType;
TokenType.GRANT = 'GRANT';
TokenType.REFRESH = 'REFRESH';
/**
 * This class maintains the tokens and authenticates every request.
*/
class OAuthToken {
    /**
     * Creates an OAuthToken class instance with the specified parameters.
     * @param {String} clientID - A String containing the OAuth client id.
     * @param {String} clientSecret - A String containing the OAuth client secret.
     * @param {String} token - A String containing the REFRESH/GRANT token.
     * @param {String} type - A TokenType key containing the given token type.
     * @param {String} redirectURL - A String containing the OAuth redirect URL.
    */
    constructor(clientID, clientSecret, token, type, redirectURL) {
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
    getClientID() {
        return this.clientID;
    }
    /**
     * This is a getter method to get OAuth client secret.
     * @returns A String representing the OAuth client secret.
    */
    getClientSecret() {
        return this.clientSecret;
    }
    /**
     * This is a getter method to get OAuth redirect URL.
     * @returns A String representing the OAuth redirect URL.
    */
    getRedirectURL() {
        return this.redirectURL;
    }
    /**
     * This is a getter method to get grant token.
     * @returns A String representing the grant token.
    */
    getGrantToken() {
        return this.grantToken;
    }
    /**
     * This is a getter method to get refresh token.
     * @returns A String representing the refresh token.
    */
    getRefreshToken() {
        return this.refreshToken;
    }
    /**
     * This is a setter method to set refresh token.
     * @param {string} refreshToken - A String containing the refresh token.
    */
    setRefreshToken(refreshToken) {
        this.refreshToken = refreshToken;
    }
    /**
     * This is a getter method to get access token.
     * @returns A String representing the access token.
    */
    getAccessToken() {
        return this.accessToken;
    }
    /**
     * This is a setter method to set access token.
     * @param {string} accessToken A String containing the access token.
    */
    setAccessToken(accessToken) {
        this.accessToken = accessToken;
    }
    /**
     * This is a getter method to get token expire time.
     * @returns A String representing the token expire time.
    */
    getExpiresIn() {
        return this.expiresIn;
    }
    /**
     * This is a setter method to set token expire time.
     * @param {string} expiresIn A String containing the token expire time.
    */
    setExpiresIn(expiresIn) {
        this.expiresIn = expiresIn;
    }
    /**
     * This is a getter method to get token user mail.
     * @returns A String representing the userMail
    */
    getUserMail() {
        return this.userMail;
    }
    /**
     * This is a setter method to set token user email.
     * @param {String} userMail A String containing the userMail
    */
    setUserMail(userMail) {
        this.userMail = userMail;
    }
    /**
     * This is a getter method to get the id
     * @returns the id
    */
    getId() {
        return this.id;
    }
    /**
     * This is a setter method to set the id
     * @param {String} id A String containing the id
    */
    setId(id) {
        this.id = id;
    }
    authenticate(urlConnection) {
        return __awaiter(this, void 0, void 0, function* () {
            var token;
            var initializer = yield initializer_1.Initializer.getInitializer();
            var store = initializer.getStore();
            var user = initializer.getUser();
            var oauthToken = yield store.getToken(user, this);
            if (oauthToken == null) {
                token = (this.refreshToken === null) ? (yield this.generateAccessToken(user, store)).getAccessToken() : (yield this.refreshAccessToken(user, store)).getAccessToken();
            }
            else if (oauthToken.getExpiresIn() !== undefined && (parseInt(oauthToken.getExpiresIn()) - (new Date().getTime())) < 5000) {
                Logger.info(constants_1.Constants.REFRESH_TOKEN_MESSAGE);
                token = (yield this.refreshAccessToken(user, store)).getAccessToken();
            }
            else {
                token = this.getAccessToken();
            }
            if (token !== undefined) {
                urlConnection.addHeader(constants_1.Constants.AUTHORIZATION, constants_1.Constants.OAUTH_HEADER_PREFIX.concat(token));
            }
        });
    }
    refreshAccessToken(user, store) {
        return __awaiter(this, void 0, void 0, function* () {
            let initializer = yield initializer_1.Initializer.getInitializer();
            let url = initializer.getEnvironment().getAccountsUrl();
            var formDataRequestBody = new FormData();
            formDataRequestBody.append(constants_1.Constants.REFRESH_TOKEN, this.refreshToken);
            formDataRequestBody.append(constants_1.Constants.CLIENT_ID, this.clientID);
            formDataRequestBody.append(constants_1.Constants.CLIENT_SECRET, this.clientSecret);
            formDataRequestBody.append(constants_1.Constants.GRANT_TYPE, constants_1.Constants.REFRESH_TOKEN);
            if (this.redirectURL !== undefined) {
                formDataRequestBody.append(constants_1.Constants.REDIRECT_URL, this.redirectURL);
            }
            const requestDetails = {
                method: constants_1.Constants.REQUEST_METHOD_POST,
                headers: {},
                body: formDataRequestBody,
                encoding: "utf8",
                allowGetBody: true,
                throwHttpErrors: false
            };
            var response = yield this.getResponse(url, requestDetails);
            try {
                store.saveToken(user, yield this.parseResponse(response.body));
            }
            catch (error) {
                if (error instanceof sdk_exception_1.SDKException) {
                    throw error;
                }
                else if (error instanceof Error) {
                    throw new sdk_exception_1.SDKException(constants_1.Constants.SAVE_TOKEN_ERROR, null, null, error);
                }
            }
            return this;
        });
    }
    generateAccessToken(user, store) {
        return __awaiter(this, void 0, void 0, function* () {
            let initializer = yield initializer_1.Initializer.getInitializer();
            let url = initializer.getEnvironment().getAccountsUrl();
            var formDataRequestBody = new FormData();
            formDataRequestBody.append(constants_1.Constants.REFRESH_TOKEN, this.refreshToken);
            formDataRequestBody.append(constants_1.Constants.CLIENT_ID, this.clientID);
            formDataRequestBody.append(constants_1.Constants.CLIENT_SECRET, this.clientSecret);
            formDataRequestBody.append(constants_1.Constants.GRANT_TYPE, constants_1.Constants.GRANT_TYPE_AUTH_CODE);
            formDataRequestBody.append(constants_1.Constants.CODE, this.grantToken);
            const requestDetails = {
                method: constants_1.Constants.REQUEST_METHOD_POST,
                headers: {},
                body: formDataRequestBody,
                encoding: "utf8",
                allowGetBody: true,
                throwHttpErrors: false
            };
            var response = yield this.getResponse(url, requestDetails);
            try {
                store.saveToken(user, yield this.parseResponse(response.body));
            }
            catch (error) {
                if (error instanceof sdk_exception_1.SDKException) {
                    throw error;
                }
                else if (error instanceof Error) {
                    throw new sdk_exception_1.SDKException(constants_1.Constants.SAVE_TOKEN_ERROR, null, null, error);
                }
            }
            return this;
        });
    }
    getResponse(url, requestDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield got_1.default(url, requestDetails);
        });
    }
    parseResponse(response) {
        return __awaiter(this, void 0, void 0, function* () {
            var responseJSON = JSON.parse(response);
            if (!responseJSON.hasOwnProperty(constants_1.Constants.ACCESS_TOKEN)) {
                throw new sdk_exception_1.SDKException(constants_1.Constants.INVALID_CLIENT_ERROR, responseJSON[constants_1.Constants.ERROR_KEY].toString());
            }
            this.accessToken = responseJSON[constants_1.Constants.ACCESS_TOKEN];
            if (responseJSON.hasOwnProperty(constants_1.Constants.REFRESH_TOKEN)) {
                this.refreshToken = responseJSON[constants_1.Constants.REFRESH_TOKEN];
            }
            this.expiresIn = (new Date().getTime() + (yield this.getTokenExpiryTime(responseJSON))).toString();
            return this;
        });
    }
    getTokenExpiryTime(response) {
        return response.hasOwnProperty(constants_1.Constants.EXPIRES_IN_SEC) ? response[constants_1.Constants.EXPIRES_IN] : response[constants_1.Constants.EXPIRES_IN] * 1000;
    }
    remove() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let initializer = yield initializer_1.Initializer.getInitializer();
                yield initializer.getStore().deleteToken(this);
                return true;
            }
            catch (error) {
                return false;
            }
        });
    }
}
exports.OAuthToken = OAuthToken;
//# sourceMappingURL=oauth_token.js.map