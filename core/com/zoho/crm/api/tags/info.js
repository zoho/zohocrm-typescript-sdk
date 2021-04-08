"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Info = exports.MasterModel = void 0;
class Info {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the count
     * @returns A number representing the count
     */
    getCount() {
        return this.count;
    }
    /**
     * The method to set the value to count
     * @param count A number representing the count
     */
    setCount(count) {
        this.count = count;
        this.keyModified.set("count", 1);
    }
    /**
     * The method to get the allowedCount
     * @returns A number representing the allowedCount
     */
    getAllowedCount() {
        return this.allowedCount;
    }
    /**
     * The method to set the value to allowedCount
     * @param allowedCount A number representing the allowedCount
     */
    setAllowedCount(allowedCount) {
        this.allowedCount = allowedCount;
        this.keyModified.set("allowed_count", 1);
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
exports.MasterModel = Info;
exports.Info = Info;
//# sourceMappingURL=info.js.map