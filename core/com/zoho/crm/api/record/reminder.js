"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reminder = exports.MasterModel = void 0;
class Reminder {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the period
     * @returns A string representing the period
     */
    getPeriod() {
        return this.period;
    }
    /**
     * The method to set the value to period
     * @param period A string representing the period
     */
    setPeriod(period) {
        this.period = period;
        this.keyModified.set("period", 1);
    }
    /**
     * The method to get the unit
     * @returns A string representing the unit
     */
    getUnit() {
        return this.unit;
    }
    /**
     * The method to set the value to unit
     * @param unit A string representing the unit
     */
    setUnit(unit) {
        this.unit = unit;
        this.keyModified.set("unit", 1);
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
exports.MasterModel = Reminder;
exports.Reminder = Reminder;
//# sourceMappingURL=reminder.js.map