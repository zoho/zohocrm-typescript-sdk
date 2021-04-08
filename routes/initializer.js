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
exports.Initializer = void 0;
const Logger = __importStar(require("winston"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const LoggerFile = __importStar(require("./logger/logger"));
const constants_1 = require("../utils/util/constants");
const sdk_logger_1 = require("./logger/sdk_logger");
const sdk_exception_1 = require("../core/com/zoho/crm/api/exception/sdk_exception");
/**
 * The class to initialize Zoho CRM SDK.
 */
class Initializer {
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
    static initialize(user, enviroment, token, store, sdkConfig, resourcePath, logger, proxy) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (logger === undefined) {
                    let logger = LoggerFile.Logger.getInstance(LoggerFile.Levels.INFO, path.join(__dirname, "..", constants_1.Constants.LOGFILE_NAME));
                    sdk_logger_1.SDKLogger.initialize(logger);
                }
                else {
                    if (logger.getLevel() !== LoggerFile.Levels.OFF) {
                        sdk_logger_1.SDKLogger.initialize(logger);
                    }
                }
                if (resourcePath.length == 0) {
                    throw new sdk_exception_1.SDKException(constants_1.Constants.INITIALIZATION_ERROR, constants_1.Constants.RESOURCE_PATH_ERROR_MESSAGE);
                }
                try {
                    if (!fs.statSync(resourcePath).isDirectory()) {
                        throw new sdk_exception_1.SDKException(constants_1.Constants.INITIALIZATION_ERROR, constants_1.Constants.RESOURCE_PATH_INVALID_ERROR_MESSAGE);
                    }
                }
                catch (error) {
                    throw new sdk_exception_1.SDKException(constants_1.Constants.INITIALIZATION_ERROR, constants_1.Constants.RESOURCE_PATH_INVALID_ERROR_MESSAGE);
                }
                try {
                    Initializer.jsonDetails = Initializer.getJSON(path.join(__dirname, "..", constants_1.Constants.CONFIG_DIRECTORY, constants_1.Constants.JSON_DETAILS_FILE_PATH));
                }
                catch (error) {
                    throw new sdk_exception_1.SDKException(constants_1.Constants.JSON_DETAILS_ERROR, null, null, error);
                }
                let initializer = new Initializer();
                initializer.user = user;
                initializer.enviroment = enviroment;
                initializer.token = token;
                initializer.store = store;
                initializer.sdkConfig = sdkConfig;
                initializer.resourcePath = resourcePath;
                initializer.requestProxy = proxy;
                Initializer.LOCAL.set(yield initializer.getEncodedKey(user, enviroment), initializer);
                Initializer.initializer = initializer;
                Logger.info(constants_1.Constants.INITIALIZATION_SUCCESSFUL.concat(yield Initializer.initializer.toString()));
            }
            catch (err) {
                if (!(err instanceof sdk_exception_1.SDKException)) {
                    err = new sdk_exception_1.SDKException(null, null, null, err);
                }
                throw err;
            }
        });
    }
    /**
     * This is a getter method to get API environment.
     * @returns A Environment representing the API environment.
     */
    getEnvironment() {
        return this.enviroment;
    }
    /**
     * This is a getter method to get Token Store.
     * @returns A TokenStore class instance containing the token store information.
     */
    getStore() {
        return this.store;
    }
    /**
     * This is a getter method to get CRM User.
     * @returns A User class instance representing the CRM user.
     */
    getUser() {
        return this.user;
    }
    /**
     * This is a getter method to get OAuth client application information.
     * @returns A Token class instance representing the OAuth client application information.
     */
    getToken() {
        return this.token;
    }
    /**
     * This is a getter method to get resourcePath value.
     * @returns A String value representing the resourcePath.
     */
    getResourcePath() {
        return this.resourcePath;
    }
    /**
     * This is a getter method to get Proxy information.
     * @returns {RequestProxy} A RequestProxy class instance representing the API Proxy information.
     */
    getRequestProxy() {
        return this.requestProxy;
    }
    /**
     * This is a getter method to get the SDK Configuration
     * @returns {SDKConfig} A SDKConfig instance representing the configuration
     */
    getSDKConfig() {
        return this.sdkConfig;
    }
    /**
     * This method is to get Initializer class instance.
     * @returns A Initializer class instance representing the SDK configuration details.
     */
    static getInitializer() {
        return __awaiter(this, void 0, void 0, function* () {
            if (Array.from(this.LOCAL.keys()).length > 0) {
                let initializer = new Initializer();
                let encodedKey = yield initializer.getEncodedKey(Initializer.initializer.user, Initializer.initializer.enviroment);
                if (Initializer.LOCAL.has(encodedKey)) {
                    let value = Initializer.LOCAL.get(encodedKey);
                    if (value !== undefined) {
                        return value;
                    }
                }
            }
            return Initializer.initializer;
        });
    }
    /**
     * This method is to switch the different user in SDK environment.
     * @param {UserSignature} user - A UserSignature class instance represents the CRM user.
     * @param {Environment} environment - A Environment class instance containing the CRM API base URL and Accounts URL.
     * @param {Token} token - A Token class instance containing the OAuth client application information.
     * @param {SDKConfig} sdkConfig - A SDKConfig instance representing the configuration
     * @param {RequestProxy} proxy - A RequestProxy class instance containing the proxy properties.
     */
    static switchUser(user, environment, token, sdkConfig, proxy) {
        return __awaiter(this, void 0, void 0, function* () {
            let initializer = new Initializer();
            initializer.user = user;
            initializer.enviroment = environment;
            initializer.token = token;
            initializer.store = Initializer.initializer.store;
            initializer.sdkConfig = sdkConfig;
            initializer.resourcePath = Initializer.initializer.resourcePath;
            initializer.requestProxy = proxy;
            Initializer.LOCAL.set(yield initializer.getEncodedKey(user, environment), initializer);
            Initializer.initializer = initializer;
            Logger.info(constants_1.Constants.INITIALIZATION_SWITCHED.concat(yield Initializer.initializer.toString()));
        });
    }
    static removeUserConfiguration(user, environment) {
        return __awaiter(this, void 0, void 0, function* () {
            let initializer = new Initializer();
            let encodedKey = yield initializer.getEncodedKey(user, environment);
            if (Initializer.LOCAL.has(encodedKey)) {
                Initializer.LOCAL.delete(encodedKey);
            }
            else {
                throw new sdk_exception_1.SDKException(constants_1.Constants.USER_NOT_FOUND_ERROR, constants_1.Constants.USER_NOT_FOUND_ERROR);
            }
        });
    }
    /**
     * This method to get record field and class details.
     * @param filePath A String containing the file path.
     * @returns A JSON representing the class information details.
     */
    static getJSON(filePath) {
        let fs = require('fs');
        let fileData = fs.readFileSync(filePath);
        return JSON.parse(fileData);
    }
    toString() {
        return __awaiter(this, void 0, void 0, function* () {
            return constants_1.Constants.FOR_EMAIL_ID.concat(this.user.getEmail()).concat(constants_1.Constants.IN_ENVIRONMENT).concat(this.enviroment.getUrl()).concat(".");
        });
    }
    getEncodedKey(user, environment) {
        return __awaiter(this, void 0, void 0, function* () {
            let key = (user.getEmail()).substring(0, (user.getEmail().indexOf('@'))) + environment.getUrl();
            return Buffer.from(this.toUTF8Array(key)).toString('base64');
        });
    }
    toUTF8Array(str) {
        var utf8 = [];
        for (var i = 0; i < str.length; i++) {
            var charcode = str.charCodeAt(i);
            if (charcode < 0x80)
                utf8.push(charcode);
            else if (charcode < 0x800) {
                utf8.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f));
            }
            else if (charcode < 0xd800 || charcode >= 0xe000) {
                utf8.push(0xe0 | (charcode >> 12), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
            }
            else {
                i++;
                charcode = 0x10000 + (((charcode & 0x3ff) << 10)
                    | (str.charCodeAt(i) & 0x3ff));
                utf8.push(0xf0 | (charcode >> 18), 0x80 | ((charcode >> 12) & 0x3f), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
            }
        }
        return utf8;
    }
}
exports.Initializer = Initializer;
Initializer.LOCAL = new Map();
//# sourceMappingURL=initializer.js.map