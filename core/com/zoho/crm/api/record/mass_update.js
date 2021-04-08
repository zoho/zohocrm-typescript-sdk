"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MassUpdate = exports.MasterModel = void 0;
class MassUpdate {
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
        this.keyModified.set("Status", 1);
    }
    /**
     * The method to get the failedCount
     * @returns A number representing the failedCount
     */
    getFailedCount() {
        return this.failedCount;
    }
    /**
     * The method to set the value to failedCount
     * @param failedCount A number representing the failedCount
     */
    setFailedCount(failedCount) {
        this.failedCount = failedCount;
        this.keyModified.set("Failed_Count", 1);
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
        this.keyModified.set("Updated_Count", 1);
    }
    /**
     * The method to get the notUpdatedCount
     * @returns A number representing the notUpdatedCount
     */
    getNotUpdatedCount() {
        return this.notUpdatedCount;
    }
    /**
     * The method to set the value to notUpdatedCount
     * @param notUpdatedCount A number representing the notUpdatedCount
     */
    setNotUpdatedCount(notUpdatedCount) {
        this.notUpdatedCount = notUpdatedCount;
        this.keyModified.set("Not_Updated_Count", 1);
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
        this.keyModified.set("Total_Count", 1);
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
exports.MasterModel = MassUpdate;
exports.MassUpdate = MassUpdate;
//# sourceMappingURL=mass_update.js.map