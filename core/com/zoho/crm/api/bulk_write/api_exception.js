"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIException = exports.MasterModel = void 0;
class APIException {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the code
     * @returns An instance of Choice<string>
     */
    getCode() {
        return this.code;
    }
    /**
     * The method to set the value to code
     * @param code An instance of Choice<string>
     */
    setCode(code) {
        this.code = code;
        this.keyModified.set("code", 1);
    }
    /**
     * The method to get the message
     * @returns An instance of Choice<string>
     */
    getMessage() {
        return this.message;
    }
    /**
     * The method to set the value to message
     * @param message An instance of Choice<string>
     */
    setMessage(message) {
        this.message = message;
        this.keyModified.set("message", 1);
    }
    /**
     * The method to get the status
     * @returns An instance of Choice<string>
     */
    getStatus() {
        return this.status;
    }
    /**
     * The method to set the value to status
     * @param status An instance of Choice<string>
     */
    setStatus(status) {
        this.status = status;
        this.keyModified.set("status", 1);
    }
    /**
     * The method to get the details
     * @returns A Map representing the details
     */
    getDetails() {
        return this.details;
    }
    /**
     * The method to set the value to details
     * @param details A Map representing the details
     */
    setDetails(details) {
        this.details = details;
        this.keyModified.set("details", 1);
    }
    /**
     * The method to get the errorMessage
     * @returns An instance of Choice<string>
     */
    getErrorMessage() {
        return this.errorMessage;
    }
    /**
     * The method to set the value to errorMessage
     * @param errorMessage An instance of Choice<string>
     */
    setErrorMessage(errorMessage) {
        this.errorMessage = errorMessage;
        this.keyModified.set("ERROR_MESSAGE", 1);
    }
    /**
     * The method to get the errorCode
     * @returns A number representing the errorCode
     */
    getErrorCode() {
        return this.errorCode;
    }
    /**
     * The method to set the value to errorCode
     * @param errorCode A number representing the errorCode
     */
    setErrorCode(errorCode) {
        this.errorCode = errorCode;
        this.keyModified.set("ERROR_CODE", 1);
    }
    /**
     * The method to get the xError
     * @returns An instance of Choice<string>
     */
    getXError() {
        return this.xError;
    }
    /**
     * The method to set the value to xError
     * @param xError An instance of Choice<string>
     */
    setXError(xError) {
        this.xError = xError;
        this.keyModified.set("x-error", 1);
    }
    /**
     * The method to get the info
     * @returns An instance of Choice<string>
     */
    getInfo() {
        return this.info;
    }
    /**
     * The method to set the value to info
     * @param info An instance of Choice<string>
     */
    setInfo(info) {
        this.info = info;
        this.keyModified.set("info", 1);
    }
    /**
     * The method to get the xInfo
     * @returns An instance of Choice<string>
     */
    getXInfo() {
        return this.xInfo;
    }
    /**
     * The method to set the value to xInfo
     * @param xInfo An instance of Choice<string>
     */
    setXInfo(xInfo) {
        this.xInfo = xInfo;
        this.keyModified.set("x-info", 1);
    }
    /**
     * The method to get the httpStatus
     * @returns A string representing the httpStatus
     */
    getHttpStatus() {
        return this.httpStatus;
    }
    /**
     * The method to set the value to httpStatus
     * @param httpStatus A string representing the httpStatus
     */
    setHttpStatus(httpStatus) {
        this.httpStatus = httpStatus;
        this.keyModified.set("http_status", 1);
    }
    /**
     * The method to check if the user has modified the given key
     * @param key A string representing the key
     * @returns A number representing the modification
     */
    isKeyModified(key) {
        if (this.keyModified.has(key)) {
            return this.keyModified.get(key);
        }
        return null;
    }
    /**
     * The method to mark the given key as modified
     * @param key A string representing the key
     * @param modification A number representing the modification
     */
    setKeyModified(key, modification) {
        this.keyModified.set(key, modification);
    }
}
exports.MasterModel = APIException;
exports.APIException = APIException;
//# sourceMappingURL=api_exception.js.map