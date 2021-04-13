"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MassUpdateSuccessResponse = exports.MasterModel = void 0;
class MassUpdateSuccessResponse {
    constructor() {
        this.keyModified = new Map();
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
exports.MasterModel = MassUpdateSuccessResponse;
exports.MassUpdateSuccessResponse = MassUpdateSuccessResponse;
//# sourceMappingURL=mass_update_success_response.js.map