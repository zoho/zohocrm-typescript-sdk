"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertBodyWrapper = exports.MasterModel = void 0;
class ConvertBodyWrapper {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the data
     * @returns An Array representing the data
     */
    getData() {
        return this.data;
    }
    /**
     * The method to set the value to data
     * @param data An Array representing the data
     */
    setData(data) {
        this.data = data;
        this.keyModified.set("data", 1);
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
exports.MasterModel = ConvertBodyWrapper;
exports.ConvertBodyWrapper = ConvertBodyWrapper;
//# sourceMappingURL=convert_body_wrapper.js.map