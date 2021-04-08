"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyWrapper = exports.MasterModel = void 0;
class BodyWrapper {
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
     * The method to get the trigger
     * @returns An Array representing the trigger
     */
    getTrigger() {
        return this.trigger;
    }
    /**
     * The method to set the value to trigger
     * @param trigger An Array representing the trigger
     */
    setTrigger(trigger) {
        this.trigger = trigger;
        this.keyModified.set("trigger", 1);
    }
    /**
     * The method to get the process
     * @returns An Array representing the process
     */
    getProcess() {
        return this.process;
    }
    /**
     * The method to set the value to process
     * @param process An Array representing the process
     */
    setProcess(process) {
        this.process = process;
        this.keyModified.set("process", 1);
    }
    /**
     * The method to get the duplicateCheckFields
     * @returns An Array representing the duplicateCheckFields
     */
    getDuplicateCheckFields() {
        return this.duplicateCheckFields;
    }
    /**
     * The method to set the value to duplicateCheckFields
     * @param duplicateCheckFields An Array representing the duplicateCheckFields
     */
    setDuplicateCheckFields(duplicateCheckFields) {
        this.duplicateCheckFields = duplicateCheckFields;
        this.keyModified.set("duplicate_check_fields", 1);
    }
    /**
     * The method to get the wfTrigger
     * @returns A string representing the wfTrigger
     */
    getWfTrigger() {
        return this.wfTrigger;
    }
    /**
     * The method to set the value to wfTrigger
     * @param wfTrigger A string representing the wfTrigger
     */
    setWfTrigger(wfTrigger) {
        this.wfTrigger = wfTrigger;
        this.keyModified.set("wf_trigger", 1);
    }
    /**
     * The method to get the larId
     * @returns A string representing the larId
     */
    getLarId() {
        return this.larId;
    }
    /**
     * The method to set the value to larId
     * @param larId A string representing the larId
     */
    setLarId(larId) {
        this.larId = larId;
        this.keyModified.set("lar_id", 1);
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
exports.MasterModel = BodyWrapper;
exports.BodyWrapper = BodyWrapper;
//# sourceMappingURL=body_wrapper.js.map