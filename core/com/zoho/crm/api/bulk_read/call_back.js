"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallBack = exports.MasterModel = void 0;
class CallBack {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the url
     * @returns A string representing the url
     */
    getUrl() {
        return this.url;
    }
    /**
     * The method to set the value to url
     * @param url A string representing the url
     */
    setUrl(url) {
        this.url = url;
        this.keyModified.set("url", 1);
    }
    /**
     * The method to get the method
     * @returns An instance of Choice<string>
     */
    getMethod() {
        return this.method;
    }
    /**
     * The method to set the value to method
     * @param method An instance of Choice<string>
     */
    setMethod(method) {
        this.method = method;
        this.keyModified.set("method", 1);
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
exports.MasterModel = CallBack;
exports.CallBack = CallBack;
//# sourceMappingURL=call_back.js.map