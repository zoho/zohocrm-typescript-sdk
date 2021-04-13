"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictWrapper = exports.MasterModel = void 0;
class ConflictWrapper {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the conflictId
     * @returns A string representing the conflictId
     */
    getConflictId() {
        return this.conflictId;
    }
    /**
     * The method to set the value to conflictId
     * @param conflictId A string representing the conflictId
     */
    setConflictId(conflictId) {
        this.conflictId = conflictId;
        this.keyModified.set("conflict_id", 1);
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
exports.MasterModel = ConflictWrapper;
exports.ConflictWrapper = ConflictWrapper;
//# sourceMappingURL=conflict_wrapper.js.map