"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseWrapper = exports.MasterModel = void 0;
class ResponseWrapper {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the customViews
     * @returns An Array representing the customViews
     */
    getCustomViews() {
        return this.customViews;
    }
    /**
     * The method to set the value to customViews
     * @param customViews An Array representing the customViews
     */
    setCustomViews(customViews) {
        this.customViews = customViews;
        this.keyModified.set("custom_views", 1);
    }
    /**
     * The method to get the info
     * @returns An instance of Info
     */
    getInfo() {
        return this.info;
    }
    /**
     * The method to set the value to info
     * @param info An instance of Info
     */
    setInfo(info) {
        this.info = info;
        this.keyModified.set("info", 1);
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
exports.MasterModel = ResponseWrapper;
exports.ResponseWrapper = ResponseWrapper;
//# sourceMappingURL=response_wrapper.js.map