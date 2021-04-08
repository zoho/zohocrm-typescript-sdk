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
exports.APIHTTPConnector = void 0;
const constants_1 = require("../../utils/util/constants");
const got_1 = __importDefault(require("got"));
const Logger = __importStar(require("winston"));
const initializer_1 = require("../initializer");
const tunnel = __importStar(require("tunnel"));
/**
 * This module is to make HTTP connections, trigger the requests and receive the response
 */
class APIHTTPConnector {
    constructor() {
        this.headers = new Map();
        this.parameters = new Map();
        this.requestBody = {};
    }
    /**
     * This is a getter method to get the ContentType.
     * @returns A String representing the ContentType.
    */
    getContentType() {
        return this.contentType;
    }
    /**
     * This is a setter method to set the ContentType.
     * @param {string} contentType A String containing the ContentType.
    */
    setContentType(contentType) {
        this.contentType = contentType;
    }
    /**
     * This is a setter method to set the API URL.
     * @param {string} url A String containing the API Request URL.
    */
    setUrl(url) {
        this.url = url;
    }
    /**
     * This is a setter method to set the API request method.
     * @param {string} httpMethod - A String containing the API request method.
    */
    setRequestMethod(requestMethod) {
        this.requestMethod = requestMethod;
    }
    /**
     * This is a getter method to get API request headers.
     * @returns A Map representing the API request headers.
    */
    getHeaders() {
        return this.headers;
    }
    /**
     * This is a setter method to set API request headers.
     * @param {Map} headers - A Map containing the API request headers.
    */
    setHeaders(headers) {
        this.headers = headers;
    }
    /**
     * This is a setter method to set the API request body.
     * @param {object} requestBody - A Object containing the API request body.
    */
    setRequestBody(requestBody) {
        this.requestBody = requestBody;
    }
    getRequestBody() {
        return this.requestBody;
    }
    /**
     * This is a setter method to set API request parameters.
     * @param {Map} params - A Map containing the API request parameters.
    */
    setParams(params) {
        this.parameters = params;
    }
    /**
     * This is a getter method to get API request parameters.
     * @returns A Map representing the API request parameters.
    */
    getParams() {
        return this.parameters;
    }
    /**
     * This method to add API request param name and value.
     * @param {string} paramName - A String containing the API request param name.
     * @param {string} paramValue - A String containing the API request param value.
    */
    addParam(paramName, paramValue) {
        this.parameters.set(paramName, paramValue);
    }
    /**
     * This method to add API request header name and value.
     * @param {string} headerName - A String containing the API request header name.
     * @param {string} headerValue - A String containing the API request header value.
    */
    addHeader(headerName, headerValue) {
        this.headers.set(headerName, headerValue);
    }
    /**
     * This method makes the Zoho CRM Rest API request.
     * @param {object} converterInstance A Converter class instance to call appendToRequest method.
     * @returns got instance or null
    */
    fireRequest(converterInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            var apiHeaders = {};
            var apiParameters = {};
            var modifiedRequestBody;
            if (this.contentType !== undefined) {
                this.setContentTypeHeader();
            }
            if (this.headers) {
                this.headers.forEach(function (value, key) {
                    apiHeaders[key] = value;
                });
            }
            if (this.parameters) {
                this.parameters.forEach(function (value, key) {
                    apiParameters[key] = value;
                });
            }
            if (this.requestBody !== undefined && this.requestBody !== null && Array.from(Object.keys(this.requestBody)).length > 0 && converterInstance !== null) {
                modifiedRequestBody = yield converterInstance.appendToRequest(this);
            }
            let initializer = yield initializer_1.Initializer.getInitializer();
            var requestDetails = {
                method: this.requestMethod,
                headers: apiHeaders,
                searchParams: apiParameters,
                body: modifiedRequestBody,
                encoding: "utf8",
                allowGetBody: true,
                throwHttpErrors: false
            };
            let timeout = initializer.getSDKConfig().timeout();
            if (timeout > 0) {
                requestDetails.timeout = timeout;
            }
            let requestProxy = initializer.getRequestProxy();
            if (requestProxy !== undefined) {
                let proxyAuthorization = undefined;
                if (requestProxy.getUser() != null) {
                    proxyAuthorization = requestProxy.getUser() + ":" + requestProxy.getPassword();
                }
                let httpTunnel = tunnel.httpOverHttp({
                    proxy: {
                        host: requestProxy.getHost(),
                        port: requestProxy.getPort(),
                        proxyAuth: proxyAuthorization
                    }
                });
                let httpsTunnel = tunnel.httpsOverHttp({
                    proxy: {
                        host: requestProxy.getHost(),
                        port: requestProxy.getPort(),
                        proxyAuth: proxyAuthorization
                    }
                });
                let agents = {
                    http: httpTunnel,
                    https: httpsTunnel
                };
                requestDetails.agent = agents;
                Logger.info(yield this.proxyLog(requestProxy));
            }
            Logger.info(yield this.toString());
            return yield got_1.default(this.url, requestDetails);
        });
    }
    toString() {
        return __awaiter(this, void 0, void 0, function* () {
            let headers = new Map(this.headers);
            headers.set(constants_1.Constants.AUTHORIZATION, constants_1.Constants.CANT_DISCLOSE);
            let headerMapString = JSON.stringify(headers, (key, value) => (value instanceof Map ? [...value] : value));
            let paramMapString = JSON.stringify(this.parameters, (key, value) => (value instanceof Map ? [...value] : value));
            return constants_1.Constants.REQUEST_METHOD.concat(" = ").concat(this.requestMethod).concat(" , ").concat(constants_1.Constants.URL).concat(" = ").concat(this.url).concat(" , ").concat(constants_1.Constants.HEADERS).concat(" = ").concat(headerMapString).concat(" , ").concat(constants_1.Constants.PARAMS).concat(" = ").concat(paramMapString).concat(".");
        });
    }
    proxyLog(requestProxy) {
        return __awaiter(this, void 0, void 0, function* () {
            let proxyDetails = constants_1.Constants.PROXY_SETTINGS.concat(constants_1.Constants.PROXY_HOST).concat(requestProxy.getHost()).concat(" , ").concat(constants_1.Constants.PROXY_PORT).concat(requestProxy.getPort().toString());
            let user = requestProxy.getUser();
            if (user != null) {
                proxyDetails = proxyDetails.concat(" , ").concat(constants_1.Constants.PROXY_USER).concat(user);
            }
            return proxyDetails;
        });
    }
    setContentTypeHeader() {
        for (let url of constants_1.Constants.SET_TO_CONTENT_TYPE) {
            if (this.contentType !== undefined) {
                this.headers.set(constants_1.Constants.CONTENT_TYPE_HEADER, this.contentType);
                return;
            }
        }
    }
}
exports.APIHTTPConnector = APIHTTPConnector;
//# sourceMappingURL=api_http_connector.js.map