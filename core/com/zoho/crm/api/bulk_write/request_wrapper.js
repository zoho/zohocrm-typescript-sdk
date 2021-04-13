"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestWrapper = exports.MasterModel = void 0;
class RequestWrapper {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the characterEncoding
     * @returns A string representing the characterEncoding
     */
    getCharacterEncoding() {
        return this.characterEncoding;
    }
    /**
     * The method to set the value to characterEncoding
     * @param characterEncoding A string representing the characterEncoding
     */
    setCharacterEncoding(characterEncoding) {
        this.characterEncoding = characterEncoding;
        this.keyModified.set("character_encoding", 1);
    }
    /**
     * The method to get the operation
     * @returns An instance of Choice<string>
     */
    getOperation() {
        return this.operation;
    }
    /**
     * The method to set the value to operation
     * @param operation An instance of Choice<string>
     */
    setOperation(operation) {
        this.operation = operation;
        this.keyModified.set("operation", 1);
    }
    /**
     * The method to get the callback
     * @returns An instance of CallBack
     */
    getCallback() {
        return this.callback;
    }
    /**
     * The method to set the value to callback
     * @param callback An instance of CallBack
     */
    setCallback(callback) {
        this.callback = callback;
        this.keyModified.set("callback", 1);
    }
    /**
     * The method to get the resource
     * @returns An Array representing the resource
     */
    getResource() {
        return this.resource;
    }
    /**
     * The method to set the value to resource
     * @param resource An Array representing the resource
     */
    setResource(resource) {
        this.resource = resource;
        this.keyModified.set("resource", 1);
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
exports.MasterModel = RequestWrapper;
exports.RequestWrapper = RequestWrapper;
//# sourceMappingURL=request_wrapper.js.map