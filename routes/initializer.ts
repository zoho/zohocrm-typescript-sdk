import * as Logger from 'winston';
import * as fs from 'fs';
import * as path from "path";
import {UserSignature} from './user_signature';
import {Environment} from '../routes/dc/environment';
import {Token} from '../models/authenticator/token';
import { RequestProxy } from './request_proxy';
import { SDKConfig } from './sdk_config';
import { TokenStore } from '../models/authenticator/store/token_store';
import * as LoggerFile from './logger/logger';
import { Constants } from '../utils/util/constants';
import { SDKLogger } from './logger/sdk_logger';
import { SDKException } from '../core/com/zoho/crm/api/exception/sdk_exception';

/**
 * The class to initialize Zoho CRM SDK.
 */
export class Initializer {
	private enviroment: Environment;
	private store: TokenStore;
    private user: UserSignature;
	private token: Token;
    private resourcePath: string;
    private requestProxy: RequestProxy | undefined;
    private sdkConfig: SDKConfig;
    public static jsonDetails: {[key: string]: {[key: string]: any}};
    public static initializer: Initializer;
    private static LOCAL: Map<string,Initializer> = new Map<string,Initializer>();

    /**
	 * The method is to initialize the SDK.
	 * @param {UserSignature} user - A UserSignature class instance represents the CRM user.
	 * @param {Environment} environment - A Environment class instance containing the CRM API base URL and Accounts URL.
	 * @param {Token} token - A Token class instance containing the OAuth client application information.
	 * @param {TokenStore} store - A TokenStore class instance containing the token store information.
	 * @param {SDKConfig} sdkConfig - A SDKConfig class instance containing the configuration.
	 * @param {String} resourcePath - A String containing the absolute directory path to store user specific JSON files containing module fields information.
	 * @param {loggerFile.Logger} logger - A Logger class instance containing the log file path and Logger type.
	 * @param {RequestProxy} proxy - A RequestProxy class instance containing the proxy properties of the user.
	 * @throws {SDKException}
	 */
    public static async initialize(user: UserSignature, enviroment: Environment, token: Token, store: TokenStore, sdkConfig: SDKConfig, resourcePath: string, logger?: LoggerFile.Logger, proxy?: RequestProxy) {
		try {
			if(logger === undefined){
				let logger: LoggerFile.Logger = LoggerFile.Logger.getInstance(LoggerFile.Levels.INFO, path.join(__dirname, "..", Constants.LOGFILE_NAME));
				SDKLogger.initialize(logger);
			}
			else{
				if(logger.getLevel() !== LoggerFile.Levels.OFF){
					SDKLogger.initialize(logger);
				}
			}

			if(resourcePath.length == 0){
				throw new SDKException(Constants.INITIALIZATION_ERROR, Constants.RESOURCE_PATH_ERROR_MESSAGE);
			}

			try{
				if(!fs.statSync(resourcePath).isDirectory()) {
					throw new SDKException(Constants.INITIALIZATION_ERROR, Constants.RESOURCE_PATH_INVALID_ERROR_MESSAGE);
				}
			}catch(error){
				throw new SDKException(Constants.INITIALIZATION_ERROR, Constants.RESOURCE_PATH_INVALID_ERROR_MESSAGE);
			}

			try {
				Initializer.jsonDetails = Initializer.getJSON(path.join(__dirname, "..", Constants.CONFIG_DIRECTORY, Constants.JSON_DETAILS_FILE_PATH));
			} catch (error) {
				throw new SDKException(Constants.JSON_DETAILS_ERROR, null, null, error);
			}
			let initializer = new Initializer();
			initializer.user = user;
			initializer.enviroment = enviroment;
			initializer.token = token;
			initializer.store = store;
			initializer.sdkConfig = sdkConfig;
			initializer.resourcePath = resourcePath;
			initializer.requestProxy = proxy;
			Initializer.LOCAL.set(await initializer.getEncodedKey(user, enviroment), initializer);
			Initializer.initializer = initializer;
			Logger.info(Constants.INITIALIZATION_SUCCESSFUL.concat(await Initializer.initializer.toString()));
		} catch (err) {
			if(!(err instanceof SDKException)) {
				err = new SDKException(null, null, null, err);
			}
			throw err;
		}
	}

	/**
	 * This is a getter method to get API environment.
	 * @returns A Environment representing the API environment.
	 */
	public getEnvironment(): Environment {
		return this.enviroment;
	}

	/**
	 * This is a getter method to get Token Store.
	 * @returns A TokenStore class instance containing the token store information.
	 */
	public getStore(): TokenStore {
		return this.store;
	}

	/**
	 * This is a getter method to get CRM User.
	 * @returns A User class instance representing the CRM user.
	 */
	public getUser(): UserSignature {
		return this.user;
	}

	/**
	 * This is a getter method to get OAuth client application information.
	 * @returns A Token class instance representing the OAuth client application information.
	 */
	public getToken(): Token {
		return this.token;
	}

	/**
	 * This is a getter method to get resourcePath value.
	 * @returns A String value representing the resourcePath.
	 */
	public getResourcePath(): string {
		return this.resourcePath;
	}

	/**
	 * This is a getter method to get Proxy information.
	 * @returns {RequestProxy} A RequestProxy class instance representing the API Proxy information.
	 */
	public getRequestProxy(): RequestProxy | undefined {
		return this.requestProxy;
	}

	/**
	 * This is a getter method to get the SDK Configuration
	 * @returns {SDKConfig} A SDKConfig instance representing the configuration
	 */
	public getSDKConfig(): SDKConfig {
		return this.sdkConfig;
	}

    /**
	 * This method is to get Initializer class instance.
	 * @returns A Initializer class instance representing the SDK configuration details.
	 */
    public static async getInitializer(): Promise<Initializer>{
        if(Array.from(this.LOCAL.keys()).length > 0) {
            let initializer = new Initializer();
			let encodedKey = await initializer.getEncodedKey(Initializer.initializer.user, Initializer.initializer.enviroment);
			if(Initializer.LOCAL.has(encodedKey)){
				let value = Initializer.LOCAL.get(encodedKey);
				if(value !== undefined){
					return value;
				}
			}
        }
        return Initializer.initializer;
	}

	/**
	 * This method is to switch the different user in SDK environment.
	 * @param {UserSignature} user - A UserSignature class instance represents the CRM user.
	 * @param {Environment} environment - A Environment class instance containing the CRM API base URL and Accounts URL.
	 * @param {Token} token - A Token class instance containing the OAuth client application information.
	 * @param {SDKConfig} sdkConfig - A SDKConfig instance representing the configuration
	 * @param {RequestProxy} proxy - A RequestProxy class instance containing the proxy properties.
	 */
	public static async switchUser(user: UserSignature, environment: Environment, token: Token, sdkConfig: SDKConfig, proxy?: RequestProxy) {
		let initializer = new Initializer();
		initializer.user = user;
		initializer.enviroment = environment;
		initializer.token = token;
		initializer.store = Initializer.initializer.store;
		initializer.sdkConfig = sdkConfig;
		initializer.resourcePath = Initializer.initializer.resourcePath;
		initializer.requestProxy = proxy;
		Initializer.LOCAL.set(await initializer.getEncodedKey(user, environment), initializer);
		Initializer.initializer = initializer;
		Logger.info(Constants.INITIALIZATION_SWITCHED.concat(await Initializer.initializer.toString()))
	}

	public static async removeUserConfiguration(user: UserSignature, environment: Environment) {
		let initializer = new Initializer();
		let encodedKey = await initializer.getEncodedKey(user, environment);
		if(Initializer.LOCAL.has(encodedKey)){
			Initializer.LOCAL.delete(encodedKey);
		}
		else{
			throw new SDKException(Constants.USER_NOT_FOUND_ERROR, Constants.USER_NOT_FOUND_ERROR);
		}
	}

	/**
	 * This method to get record field and class details.
	 * @param filePath A String containing the file path.
	 * @returns A JSON representing the class information details.
	 */
	public static getJSON(filePath: string): any{
		let fs = require('fs');
		let fileData = fs.readFileSync(filePath);
		return JSON.parse(fileData);
	}

	private async toString(){
		return Constants.FOR_EMAIL_ID.concat(this.user.getEmail()).concat(Constants.IN_ENVIRONMENT).concat(this.enviroment.getUrl()).concat(".");
	}

    public async getEncodedKey(user: UserSignature, environment: Environment){
		let key = (user.getEmail()).substring(0,(user.getEmail().indexOf( '@' ))) + environment.getUrl();
		return Buffer.from(this.toUTF8Array(key)).toString('base64');
	}

	toUTF8Array(str: string) {
		var utf8 = [];
		for (var i=0; i < str.length; i++) {
			var charcode = str.charCodeAt(i);
			if (charcode < 0x80) utf8.push(charcode);
			else if (charcode < 0x800) {
				utf8.push(0xc0 | (charcode >> 6),
						  0x80 | (charcode & 0x3f));
			}
			else if (charcode < 0xd800 || charcode >= 0xe000) {
				utf8.push(0xe0 | (charcode >> 12),
						  0x80 | ((charcode>>6) & 0x3f),
						  0x80 | (charcode & 0x3f));
			}
			else {
				i++;
				charcode = 0x10000 + (((charcode & 0x3ff)<<10)
						  | (str.charCodeAt(i) & 0x3ff));
				utf8.push(0xf0 | (charcode >>18),
						  0x80 | ((charcode>>12) & 0x3f),
						  0x80 | ((charcode>>6) & 0x3f),
						  0x80 | (charcode & 0x3f));
			}
		}
		return utf8;
	}

}