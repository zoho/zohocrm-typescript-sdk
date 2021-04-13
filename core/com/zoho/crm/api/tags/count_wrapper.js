"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountWrapper = exports.MasterModel = void 0;
class CountWrapper {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the count
     * @returns A string representing the count
     */
    getCount() {
        return this.count;
    }
    /**
     * The method to set the value to count
     * @param count A string representing the count
     */
    setCount(count) {
        this.count = count;
        this.keyModified.set("count", 1);
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
exports.MasterModel = CountWrapper;
exports.CountWrapper = CountWrapper;
//# sourceMappingURL=count_wrapper.js.map