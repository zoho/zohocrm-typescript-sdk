"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Range = exports.MasterModel = void 0;
class Range {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the from
     * @returns A number representing the from
     */
    getFrom() {
        return this.from;
    }
    /**
     * The method to set the value to from
     * @param from A number representing the from
     */
    setFrom(from) {
        this.from = from;
        this.keyModified.set("from", 1);
    }
    /**
     * The method to get the to
     * @returns A number representing the to
     */
    getTo() {
        return this.to;
    }
    /**
     * The method to set the value to to
     * @param to A number representing the to
     */
    setTo(to) {
        this.to = to;
        this.keyModified.set("to", 1);
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
exports.MasterModel = Range;
exports.Range = Range;
//# sourceMappingURL=range.js.map