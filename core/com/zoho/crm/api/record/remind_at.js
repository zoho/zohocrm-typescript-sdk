"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemindAt = exports.MasterModel = void 0;
class RemindAt {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the alarm
     * @returns A string representing the alarm
     */
    getAlarm() {
        return this.alarm;
    }
    /**
     * The method to set the value to alarm
     * @param alarm A string representing the alarm
     */
    setAlarm(alarm) {
        this.alarm = alarm;
        this.keyModified.set("ALARM", 1);
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
exports.MasterModel = RemindAt;
exports.RemindAt = RemindAt;
//# sourceMappingURL=remind_at.js.map