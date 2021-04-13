"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordActionWrapper = exports.MasterModel = void 0;
class RecordActionWrapper {
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
     * The method to get the wfScheduler
     * @returns A boolean representing the wfScheduler
     */
    getWfScheduler() {
        return this.wfScheduler;
    }
    /**
     * The method to set the value to wfScheduler
     * @param wfScheduler A boolean representing the wfScheduler
     */
    setWfScheduler(wfScheduler) {
        this.wfScheduler = wfScheduler;
        this.keyModified.set("wf_scheduler", 1);
    }
    /**
     * The method to get the successCount
     * @returns A string representing the successCount
     */
    getSuccessCount() {
        return this.successCount;
    }
    /**
     * The method to set the value to successCount
     * @param successCount A string representing the successCount
     */
    setSuccessCount(successCount) {
        this.successCount = successCount;
        this.keyModified.set("success_count", 1);
    }
    /**
     * The method to get the lockedCount
     * @returns A number representing the lockedCount
     */
    getLockedCount() {
        return this.lockedCount;
    }
    /**
     * The method to set the value to lockedCount
     * @param lockedCount A number representing the lockedCount
     */
    setLockedCount(lockedCount) {
        this.lockedCount = lockedCount;
        this.keyModified.set("locked_count", 1);
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
exports.MasterModel = RecordActionWrapper;
exports.RecordActionWrapper = RecordActionWrapper;
//# sourceMappingURL=record_action_wrapper.js.map