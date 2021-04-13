"use strict";
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
exports.HeaderMap = exports.MasterModel = void 0;
const header_param_validator_1 = require("../utils/util/header_param_validator");
const sdk_exception_1 = require("../core/com/zoho/crm/api/exception/sdk_exception");
const constants_1 = require("../utils/util/constants");
/**
 * This class represents the HTTP header name and value.
 */
class HeaderMap {
    constructor() {
        this.headerMap = new Map();
    }
    /**
     * This is a getter method to get the header map.
     * @returns {Map} A Map representing the API request headers.
     */
    getHeaderMap() {
        return this.headerMap;
    }
    /**
     * The method to add the header name and value.
     * @param {Header} header - A Header class instance.
     * @param {object} value - An object containing the header value.
     * @throws {SDKException}
     */
    add(header, value) {
        return __awaiter(this, void 0, void 0, function* () {
            if (header == null || header == undefined) {
                throw new sdk_exception_1.SDKException(constants_1.Constants.HEADER_NULL_ERROR, constants_1.Constants.HEADER_INSTANCE_NULL_ERROR);
            }
            let headerName = header.getName();
            if (headerName == null || headerName == undefined) {
                throw new sdk_exception_1.SDKException(constants_1.Constants.HEADER_NAME_NULL_ERROR, constants_1.Constants.HEADER_NAME_NULL_ERROR_MESSAGE);
            }
            if (value == null) {
                throw new sdk_exception_1.SDKException(constants_1.Constants.HEADER_NULL_ERROR, headerName + constants_1.Constants.NULL_VALUE_ERROR_MESSAGE);
            }
            let headerClassName = header.getClassName();
            let headerValue;
            if (headerClassName !== undefined) {
                headerValue = yield new header_param_validator_1.HeaderParamValidator().validate(header, value);
            }
            if (this.headerMap.has(headerName) && this.headerMap.get(headerName) != null) {
                let existingHeaderValue = this.headerMap.get(headerName);
                if (existingHeaderValue !== undefined) {
                    headerValue = existingHeaderValue.concat(",", headerValue.toString());
                    this.headerMap.set(headerName, headerValue);
                }
            }
            else {
                this.headerMap.set(headerName, headerValue.toString());
            }
        });
    }
}
exports.MasterModel = HeaderMap;
exports.HeaderMap = HeaderMap;
//# sourceMappingURL=header_map.js.map