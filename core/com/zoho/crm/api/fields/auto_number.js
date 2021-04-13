"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoNumber = exports.MasterModel = void 0;
class AutoNumber {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the prefix
     * @returns A string representing the prefix
     */
    getPrefix() {
        return this.prefix;
    }
    /**
     * The method to set the value to prefix
     * @param prefix A string representing the prefix
     */
    setPrefix(prefix) {
        this.prefix = prefix;
        this.keyModified.set("prefix", 1);
    }
    /**
     * The method to get the suffix
     * @returns A string representing the suffix
     */
    getSuffix() {
        return this.suffix;
    }
    /**
     * The method to set the value to suffix
     * @param suffix A string representing the suffix
     */
    setSuffix(suffix) {
        this.suffix = suffix;
        this.keyModified.set("suffix", 1);
    }
    /**
     * The method to get the startNumber
     * @returns A number representing the startNumber
     */
    getStartNumber() {
        return this.startNumber;
    }
    /**
     * The method to set the value to startNumber
     * @param startNumber A number representing the startNumber
     */
    setStartNumber(startNumber) {
        this.startNumber = startNumber;
        this.keyModified.set("start_number", 1);
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
exports.MasterModel = AutoNumber;
exports.AutoNumber = AutoNumber;
//# sourceMappingURL=auto_number.js.map