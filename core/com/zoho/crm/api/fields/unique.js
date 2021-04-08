"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unique = exports.MasterModel = void 0;
class Unique {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the casesensitive
     * @returns A string representing the casesensitive
     */
    getCasesensitive() {
        return this.casesensitive;
    }
    /**
     * The method to set the value to casesensitive
     * @param casesensitive A string representing the casesensitive
     */
    setCasesensitive(casesensitive) {
        this.casesensitive = casesensitive;
        this.keyModified.set("casesensitive", 1);
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
exports.MasterModel = Unique;
exports.Unique = Unique;
//# sourceMappingURL=unique.js.map