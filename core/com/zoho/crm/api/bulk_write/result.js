"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = exports.MasterModel = void 0;
class Result {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the downloadUrl
     * @returns A string representing the downloadUrl
     */
    getDownloadUrl() {
        return this.downloadUrl;
    }
    /**
     * The method to set the value to downloadUrl
     * @param downloadUrl A string representing the downloadUrl
     */
    setDownloadUrl(downloadUrl) {
        this.downloadUrl = downloadUrl;
        this.keyModified.set("download_url", 1);
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
exports.MasterModel = Result;
exports.Result = Result;
//# sourceMappingURL=result.js.map