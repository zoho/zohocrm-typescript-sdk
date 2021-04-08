import * as mysql from 'mysql';
import { SDKException } from '../../../core/com/zoho/crm/api/exception/sdk_exception';
import { UserSignature } from "../../../routes/user_signature";
import { Constants } from "../../../utils/util/constants";
import { OAuthToken, TokenType } from '../oauth_token';
import { Token } from "../token";
import { TokenStore } from "./token_store";

/**
 * This class stores the user token details to the MySQL DataBase.
*/
export class DBStore implements TokenStore {
    private userName: string;
    private portNumber: number;
    private password: string;
    private host: string;
    private databaseName: string;

    /**
     * Creates an DBStore class instance with the specified parameters.
     * @param {string} host - A String containing the DataBase host name. Default value is localhost
     * @param {string} databaseName - A String containing the DataBase name. Default value is zohooauth
     * @param {string} userName - A String containing the DataBase user name. Default value is root
     * @param {string} password - A String containing the DataBase password. Default value is an empty string
     * @param {string} portNumber - A String containing the DataBase port number. Default value is 3306
    */
    constructor(host?: string, databaseName?: string, userName?: string, password?: string, portNumber?: number) {
        this.host = (host != undefined) ? host : Constants.MYSQL_HOST;
        this.databaseName = (databaseName != undefined) ? databaseName : Constants.MYSQL_DATABASE_NAME;
        this.userName = (userName != undefined) ? userName : Constants.MYSQL_USER_NAME;
        this.password = (password != undefined) ? password : "";
        this.portNumber = (portNumber != undefined) ? portNumber : Constants.MYSQL_PORT_NUMBER;
    }

    async getToken(user: UserSignature, token: Token): Promise<Token | undefined> {
        try {
            var connection = this.getConnection();
            if(token instanceof OAuthToken) {
                var sql = this.constructDBQuery(user.getEmail(), token, false);
                var oauthToken = token;
                return new Promise(function(resolve, reject){
                    connection.connect(function(err){
                        if(err) throw err;
                        connection.query(sql, function(err, result){
                            if(err) {
                                connection.end();
                                throw err;
                            }
                            connection.end();
                            if (result.length!=0){
                                oauthToken.setAccessToken(result[0].access_token);
                                oauthToken.setRefreshToken(result[0].refresh_token);
                                oauthToken.setExpiresIn(result[0].expiry_time);
                                resolve(oauthToken);
                            }
                            resolve(undefined);
                        });
                    });
                })
            }
        } catch (error) {
            throw new SDKException(Constants.TOKEN_STORE, Constants.GET_TOKEN_DB_ERROR, null, error);
        }
    }

    async saveToken(user: UserSignature, token: Token): Promise<void> {
        try {
            var connection = this.getConnection();
            var dbStoreInstance = this;
            if(token instanceof OAuthToken){
                token.setUserMail(user.getEmail());
                var sqlQuery = "INSERT INTO oauthtoken(user_mail,client_id,refresh_token,access_token,grant_token,expiry_time) VALUES ('" + user.getEmail() + "'," + "'" + token.getClientID() + "'," + "'" + token.getRefreshToken() + "'," + "'" + token.getAccessToken() + "'," + "'" + token.getGrantToken() + "'," + "'" + token.getExpiresIn() + "')";
                new Promise<void>(function(resolve, reject){
                    dbStoreInstance.deleteToken(token).then(function(){
                        connection.connect(function(err){
                            if(err){
                                connection.end();
                                resolve(undefined);
                            }
                            connection.query(sqlQuery, function(err, result){
                                if (err) {
                                    connection.end();
                                    throw err;
                                }
                                connection.end();
                                resolve();
                            })
                        })
                    })
                })
            }
        } catch (error) {
            throw new SDKException(Constants.TOKEN_STORE, Constants.SAVE_TOKEN_DB_ERROR, null, error);
        }
    }

    async deleteToken(token: Token): Promise<void> {
        try {
            var connection = this.getConnection();
            if(token instanceof OAuthToken){
                var sqlQuery = this.constructDBQuery(token.getUserMail(), token, true);
                new Promise(function(resolve,reject){
                    connection.connect(function(err){
                        if(err) throw err;
                        connection.query(sqlQuery,function(err,result){
                            if(err) {
                                throw err;
                            }
                            connection.end();
                            resolve(result);
                        })
                    })
                })
            }
        } catch (error) {
            throw new SDKException(Constants.TOKEN_STORE, Constants.DELETE_TOKEN_DB_ERROR, null, error);
        }
    }
    async getTokens(): Promise<Token[]> {
        var tokens: Token[] = [];
        try {
            var connection = this.getConnection();
            var sqlQuery = "select * from oauthtoken;";
            var test = new Promise(function(resolve,reject){
                connection.connect(function(err){
                    if(err) throw err;
                    connection.query(sqlQuery,function(err,result){
                        if(err) {
                            connection.end();
                            throw err;
                        }
                        connection.end();
                        if (result.length > 0) {
                            for(let row of result) {
                                let tokenType = (row.grant_token != null && row.grant_token != Constants.NULL_VALUE && row.grant_token.length > 0) ? TokenType.GRANT : TokenType.REFRESH;
                                let tokenValue = (tokenType == TokenType.REFRESH) ? row.refresh_token : row.grant_token;
                                let token = new OAuthToken(row.client_id, "", tokenValue, tokenType);
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
        } catch (error) {
            throw new SDKException(Constants.TOKEN_STORE, Constants.GET_TOKENS_DB_ERROR, null, error);
        }

        return tokens;
    }

    deleteTokens(): void {
        try {
            var connection = this.getConnection();
            var sqlQuery = "delete from oauthtoken";
            new Promise(function(resolve,reject){
                connection.connect(function(err){
                    if(err) throw err;
                    connection.query(sqlQuery,function(err,result){
                        if(err) {
                            throw err;
                        }
                        connection.end();
                        resolve(result);
                    })
                })
            })
        } catch (error) {
            throw new SDKException(Constants.TOKEN_STORE, Constants.DELETE_TOKENS_DB_ERROR, null, error);
        }
    }

    private constructDBQuery(email: string, token: OAuthToken, isDelete: boolean) {
        var query = isDelete? "delete from " : "select * from ";
        query += "oauthtoken " + "where user_mail ='" + email + "' and client_id='" + token.getClientID() + "' and ";
        if(token.getGrantToken() != null) {
            query += "grant_token='" + token.getGrantToken() + "'";
        }
        else {
            query += "refresh_token='" + token.getRefreshToken() + "'";
        }
        return query;
    }

    private getConnection() {
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