"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BluePrint = exports.MasterModel = void 0;
class BluePrint {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the transitionId
     * @returns A bigint representing the transitionId
     */
    getTransitionId() {
        return this.transitionId;
    }
    /**
     * The method to set the value to transitionId
     * @param transitionId A bigint representing the transitionId
     */
    setTransitionId(transitionId) {
        this.transitionId = transitionId;
        this.keyModified.set("transition_id", 1);
    }
    /**
     * The method to get the data
     * @returns An instance of Record
     */
    getData() {
        return this.data;
    }
    /**
     * The method to set the value to data
     * @param data An instance of Record
     */
    setData(data) {
        this.data = data;
        this.keyModified.set("data", 1);
    }
    /**
     * The method to get the processInfo
     * @returns An instance of ProcessInfo
     */
    getProcessInfo() {
        return this.processInfo;
    }
    /**
     * The method to set the value to processInfo
     * @param processInfo An instance of ProcessInfo
     */
    setProcessInfo(processInfo) {
        this.processInfo = processInfo;
        this.keyModified.set("process_info", 1);
    }
    /**
     * The method to get the transitions
     * @returns An Array representing the transitions
     */
    getTransitions() {
        return this.transitions;
    }
    /**
     * The method to set the value to transitions
     * @param transitions An Array representing the transitions
     */
    setTransitions(transitions) {
        this.transitions = transitions;
        this.keyModified.set("transitions", 1);
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
exports.MasterModel = BluePrint;
exports.BluePrint = BluePrint;
//# sourceMappingURL=blue_print.js.map