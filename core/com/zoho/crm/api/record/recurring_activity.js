"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecurringActivity = exports.MasterModel = void 0;
class RecurringActivity {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the rrule
     * @returns A string representing the rrule
     */
    getRrule() {
        return this.rrule;
    }
    /**
     * The method to set the value to rrule
     * @param rrule A string representing the rrule
     */
    setRrule(rrule) {
        this.rrule = rrule;
        this.keyModified.set("RRULE", 1);
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
exports.MasterModel = RecurringActivity;
exports.RecurringActivity = RecurringActivity;
//# sourceMappingURL=recurring_activity.js.map