"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = exports.MasterModel = void 0;
class File {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the status
     * @returns An instance of Choice<string>
     */
    getStatus() {
        return this.status;
    }
    /**
     * The method to set the value to status
     * @param status An instance of Choice<string>
     */
    setStatus(status) {
        this.status = status;
        this.keyModified.set("status", 1);
    }
    /**
     * The method to get the name
     * @returns A string representing the name
     */
    getName() {
        return this.name;
    }
    /**
     * The method to set the value to name
     * @param name A string representing the name
     */
    setName(name) {
        this.name = name;
        this.keyModified.set("name", 1);
    }
    /**
     * The method to get the addedCount
     * @returns A number representing the addedCount
     */
    getAddedCount() {
        return this.addedCount;
    }
    /**
     * The method to set the value to addedCount
     * @param addedCount A number representing the addedCount
     */
    setAddedCount(addedCount) {
        this.addedCount = addedCount;
        this.keyModified.set("added_count", 1);
    }
    /**
     * The method to get the skippedCount
     * @returns A number representing the skippedCount
     */
    getSkippedCount() {
        return this.skippedCount;
    }
    /**
     * The method to set the value to skippedCount
     * @param skippedCount A number representing the skippedCount
     */
    setSkippedCount(skippedCount) {
        this.skippedCount = skippedCount;
        this.keyModified.set("skipped_count", 1);
    }
    /**
     * The method to get the updatedCount
     * @returns A number representing the updatedCount
     */
    getUpdatedCount() {
        return this.updatedCount;
    }
    /**
     * The method to set the value to updatedCount
     * @param updatedCount A number representing the updatedCount
     */
    setUpdatedCount(updatedCount) {
        this.updatedCount = updatedCount;
        this.keyModified.set("updated_count", 1);
    }
    /**
     * The method to get the totalCount
     * @returns A number representing the totalCount
     */
    getTotalCount() {
        return this.totalCount;
    }
    /**
     * The method to set the value to totalCount
     * @param totalCount A number representing the totalCount
     */
    setTotalCount(totalCount) {
        this.totalCount = totalCount;
        this.keyModified.set("total_count", 1);
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
exports.MasterModel = File;
exports.File = File;
//# sourceMappingURL=file.js.map