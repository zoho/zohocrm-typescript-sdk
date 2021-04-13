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
exports.DBStore = void 0;
const mysql = __importStar(require("mysql"));
const sdk_exception_1 = require("../../../core/com/zoho/crm/api/exception/sdk_exception");
const constants_1 = require("../../../utils/util/constants");
const oauth_token_1 = require("../oauth_token");
/**
 * This class stores the user token details to the MySQL DataBase.
*/
class DBStore {
    /**
     * Creates an DBStore class instance with the specified parameters.
     * @param {string} host - A String containing the DataBase host name. Default value is localhost
     * @param {string} databaseName - A String containing the DataBase name. Default value is zohooauth
     * @param {string} userName - A String containing the DataBase user name. Default value is root
     * @param {string} password - A String containing the DataBase password. Default value is an empty string
     * @param {string} portNumber - A String containing the DataBase port number. Default value is 3306
    */
    constructor(host, databaseName, userName, password, portNumber) {
        this.host = (host != undefined) ? host : constants_1.Constants.MYSQL_HOST;
        this.databaseName = (databaseName != undefined) ? databaseName : constants_1.Constants.MYSQL_DATABASE_NAME;
        this.userName = (userName != undefined) ? userName : constants_1.Constants.MYSQL_USER_NAME;
        this.password = (password != undefined) ? password : "";
        this.portNumber = (portNumber != undefined) ? portNumber : constants_1.Constants.MYSQL_PORT_NUMBER;
    }
    getToken(user, token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var connection = this.getConnection();
                if (token instanceof oauth_token_1.OAuthToken) {
                    var sql = this.constructDBQuery(user.getEmail(), token, false);
                    var oauthToken = token;
                    return new Promise(function (resolve, reject) {
                        connection.connect(function (err) {
                            if (err)
                                throw err;
                            connection.query(sql, function (err, result) {
                                if (err) {
                                    connection.end();
                                    throw err;
                                }
                                connection.end();
                                if (result.length != 0) {
                                    oauthToken.setAccessToken(result[0].access_token);
                                    oauthToken.setRefreshToken(result[0].refresh_token);
                                    oauthToken.setExpiresIn(result[0].expiry_time);
                                    resolve(oauthToken);
                                }
                                resolve(undefined);
                            });
                        });
                    });
                }
            }
            catch (error) {
                throw new sdk_exception_1.SDKException(constants_1.Constants.TOKEN_STORE, constants_1.Constants.GET_TOKEN_DB_ERROR, null, error);
            }
        });
    }
    saveToken(user, token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var connection = this.getConnection();
                var dbStoreInstance = this;
                if (token instanceof oauth_token_1.OAuthToken) {
                    token.setUserMail(user.getEmail());
                    var sqlQuery = "INSERT INTO oauthtoken(user_mail,client_id,refresh_token,access_token,grant_token,expiry_time) VALUES ('" + user.getEmail() + "'," + "'" + token.getClientID() + "'," + "'" + token.getRefreshToken() + "'," + "'" + token.getAccessToken() + "'," + "'" + token.getGrantToken() + "'," + "'" + token.getExpiresIn() + "')";
                    new Promise(function (resolve, reject) {
                        dbStoreInstance.deleteToken(token).then(function () {
                            connection.connect(function (err) {
                                if (err) {
                                    connection.end();
                                    resolve(undefined);
                                }
                                connection.query(sqlQuery, function (err, result) {
                                    if (err) {
                                        connection.end();
                                        throw err;
                                    }
                                    connection.end();
                                    resolve();
                                });
                            });
                        });
                    });
                }
            }
            catch (error) {
                throw new sdk_exception_1.SDKException(constants_1.Constants.TOKEN_STORE, constants_1.Constants.SAVE_TOKEN_DB_ERROR, null, error);
            }
        });
    }
    deleteToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var connection = this.getConnection();
                if (token instanceof oauth_token_1.OAuthToken) {
                    var sqlQuery = this.constructDBQuery(token.getUserMail(), token, true);
                    new Promise(function (resolve, reject) {
                        connection.connect(function (err) {
                            if (err)
                                throw err;
                            connection.query(sqlQuery, function (err, result) {
                                if (err) {
                                    throw err;
                                }
                                connection.end();
                                resolve(result);
                            });
                        });
                    });
                }
            }
            catch (error) {
                throw new sdk_exception_1.SDKException(constants_1.Constants.TOKEN_STORE, constants_1.Constants.DELETE_TOKEN_DB_ERROR, null, error);
            }
        });
    }
    getTokens() {
        return __awaiter(this, void 0, void 0, function* () {
            var tokens = [];
            try {
                var connection = this.getConnection();
                var sqlQuery = "select * from oauthtoken;";
                var test = new Promise(function (resolve, reject) {
                    connection.connect(function (err) {
                        if (err)
                            throw err;
                        connection.query(sqlQuery, function (err, result) {
                            if (err) {
                                connection.end();
                                throw err;
                            }
                            connection.end();
                            if (result.length > 0) {
                                for (let row of result) {
                                    let tokenType = (row.grant_token != null && row.grant_token != constants_1.Constants.NULL_VALUE && row.grant_token.length > 0) ? oauth_token_1.TokenType.GRANT : oauth_token_1.TokenType.REFRESH;
                                    let tokenValue = (tokenType == oauth_token_1.TokenType.REFRESH) ? row.refresh_token : row.grant_token;
                                    let token = new oauth_token_1.OAuthToken(row.client_id, "", tokenValue, tokenType);
                                    token.setId(row.id);
                                    token.setExpiresIn(row.expiry_time);
                                    token.setUserMail(row.user_mail);
                                    token.setAccessToken(row.access_token);
                                    tokens.push(token);
                                }
                                resolve(tokens);
                            }
                            resolve(null);
                        });
                    });
                });
            }
            catch (error) {
                throw new sdk_exception_1.SDKException(constants_1.Constants.TOKEN_STORE, constants_1.Constants.GET_TOKENS_DB_ERROR, null, error);
            }
            return tokens;
        });
    }
    deleteTokens() {
        try {
            var connection = this.getConnection();
            var sqlQuery = "delete from oauthtoken";
            new Promise(function (resolve, reject) {
                connection.connect(function (err) {
                    if (err)
                        throw err;
                    connection.query(sqlQuery, function (err, result) {
                        if (err) {
                            throw err;
                        }
                        connection.end();
                        resolve(result);
                    });
                });
            });
        }
        catch (error) {
            throw new sdk_exception_1.SDKException(constants_1.Constants.TOKEN_STORE, constants_1.Constants.DELETE_TOKENS_DB_ERROR, null, error);
        }
    }
    constructDBQuery(email, token, isDelete) {
        var query = isDelete ? "delete from " : "select * from ";
        query += "oauthtoken " + "where user_mail ='" + email + "' and client_id='" + token.getClientID() + "' and ";
        if (token.getGrantToken() != null) {
            query += "grant_token='" + token.getGrantToken() + "'";
        }
        else {
            query += "refresh_token='" + token.getRefreshToken() + "'";
        }
        return query;
    }
    getConnection() {
        var connection = mysql.createConnection({
            host: this.host,
            user: this.userName,
            password: this.password,
            database: this.databaseName,
            port: this.portNumber
        });
        return connection;
    }
}
exports.DBStore = DBStore;
//# sourceMappingURL=db_store.js.map