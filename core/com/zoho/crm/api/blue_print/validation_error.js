"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = exports.MasterModel = void 0;
class ValidationError {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the apiName
     * @returns A string representing the apiName
     */
    getAPIName() {
        return this.apiName;
    }
    /**
     * The method to set the value to apiName
     * @param apiName A string representing the apiName
     */
    setAPIName(apiName) {
        this.apiName = apiName;
        this.keyModified.set("api_name", 1);
    }
    /**
     * The method to get the message
     * @returns A string representing the message
     */
    getMessage() {
        return this.message;
    }
    /**
     * The method to set the value to message
     * @param message A string representing the message
     */
    setMessage(message) {
        this.message = message;
        this.keyModified.set("message", 1);
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
exports.MasterModel = ValidationError;
exports.ValidationError = ValidationError;
//# sourceMappingURL=validation_error.js.map