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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileStore = void 0;
const fs = __importStar(require("fs"));
const sdk_exception_1 = require("../../../core/com/zoho/crm/api/exception/sdk_exception");
const constants_1 = require("../../../utils/util/constants");
const oauth_token_1 = require("../oauth_token");
/**
 * This class stores the user token details to the file.
*/
class FileStore {
    /**
     * Creates an FileStore class instance with the specified parameters.
     * @param {string} filePath
    */
    constructor(filePath) {
        this.filePath = filePath;
        this.headers = [constants_1.Constants.USER_MAIL, constants_1.Constants.CLIENT_ID, constants_1.Constants.REFRESH_TOKEN, constants_1.Constants.ACCESS_TOKEN, constants_1.Constants.GRANT_TOKEN, constants_1.Constants.EXPIRY_TIME];
        if (!fs.existsSync(this.filePath) || (fs.existsSync(this.filePath) && fs.readFileSync(this.filePath, 'utf-8') === "")) {
            fs.writeFileSync(filePath, this.headers.join(), 'utf-8');
        }
    }
    getToken(user, token) {
        return __awaiter(this, void 0, void 0, function* () {
            var oauth = undefined;
            try {
                var array = fs.readFileSync(this.filePath, 'utf-8').toString().split("\n");
                if (token instanceof oauth_token_1.OAuthToken) {
                    for (var i = 0; i < array.length; i++) {
                        var line = array[i];
                        var nextRecord = line.split(",");
                        if (this.checkTokenExists(user.getEmail(), token, nextRecord)) {
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
                throw new sdk_exception_1.SDKException(constants_1.Constants.TOKEN_STORE, constants_1.Constants.GET_TOKEN_FILE_ERROR, null, error);
            }
            return oauth;
        });
    }
    saveToken(user, token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (token instanceof oauth_token_1.OAuthToken) {
                    token.setUserMail(user.getEmail());
                    yield this.deleteToken(token);
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
                throw new sdk_exception_1.SDKException(constants_1.Constants.TOKEN_STORE, constants_1.Constants.SAVE_TOKEN_FILE_ERROR, null, e);
            }
        });
    }
    deleteToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var array = [];
                array = fs.readFileSync(this.filePath, 'utf-8').toString().split("\n");
                if (token instanceof oauth_token_1.OAuthToken) {
                    for (var i = 0; i < array.length; i++) {
                        var nextRecord = array[i].toString().split(",");
                        if (this.checkTokenExists(token.getUserMail(), token, nextRecord)) {
                            array.splice(i, 1);
                            break;
                        }
                    }
                    fs.writeFileSync(this.filePath, array.join("\n"), 'utf8');
                }
            }
            catch (e) {
                throw new sdk_exception_1.SDKException(constants_1.Constants.TOKEN_STORE, constants_1.Constants.DELETE_TOKEN_FILE_ERROR, null, e);
            }
        });
    }
    getTokens() {
        return __awaiter(this, void 0, void 0, function* () {
            var tokens = [];
            try {
                var array = fs.readFileSync(this.filePath, 'utf-8').toString().split("\n");
                for (var i = 1; i < array.length; i++) {
                    let line = array[i];
                    let nextRecord = line.split(",");
                    let tokenType = (nextRecord[4] != null && nextRecord[4].length > 0) ? oauth_token_1.TokenType.GRANT : oauth_token_1.TokenType.REFRESH;
                    let tokenValue = (tokenType == oauth_token_1.TokenType.REFRESH) ? nextRecord[2] : nextRecord[4];
                    let token = new oauth_token_1.OAuthToken(nextRecord[1], "", tokenValue, tokenType);
                    token.setUserMail(nextRecord[0]);
                    token.setExpiresIn(nextRecord[5]);
                    token.setAccessToken(nextRecord[3]);
                    tokens.push(token);
                }
            }
            catch (error) {
                throw new sdk_exception_1.SDKException(constants_1.Constants.TOKEN_STORE, constants_1.Constants.GET_TOKENS_FILE_ERROR, null, error);
            }
            return tokens;
        });
    }
    deleteTokens() {
        try {
            fs.writeFileSync(this.filePath, this.headers.join(), 'utf-8');
        }
        catch (error) {
            throw new sdk_exception_1.SDKException(constants_1.Constants.TOKEN_STORE, constants_1.Constants.DELETE_TOKENS_FILE_ERROR, null, error);
        }
    }
    checkTokenExists(email, token, row) {
        var clientId = token.getClientID();
        var grantToken = token.getGrantToken();
        var refreshToken = token.getRefreshToken();
        var tokenCheck = grantToken != null ? grantToken === row[4] : refreshToken === row[2];
        if (row[0] === email && row[1] === clientId && tokenCheck) {
            return true;
        }
        return false;
    }
}
exports.FileStore = FileStore;
//# sourceMappingURL=file_store.js.map