"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestWrapper = exports.MasterModel = void 0;
class RequestWrapper {
    constructor() {
        this.keyModified = new Map();
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
     * The method to get the query
     * @returns An instance of Query
     */
    getQuery() {
        return this.query;
    }
    /**
     * The method to set the value to query
     * @param query An instance of Query
     */
    setQuery(query) {
        this.query = query;
        this.keyModified.set("query", 1);
    }
    /**
     * The method to get the fileType
     * @returns An instance of Choice<string>
     */
    getFileType() {
        return this.fileType;
    }
    /**
     * The method to set the value to fileType
     * @param fileType An instance of Choice<string>
     */
    setFileType(fileType) {
        this.fileType = fileType;
        this.keyModified.set("file_type", 1);
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