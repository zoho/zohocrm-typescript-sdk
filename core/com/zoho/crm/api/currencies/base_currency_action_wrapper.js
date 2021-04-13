"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCurrencyActionWrapper = exports.MasterModel = void 0;
class BaseCurrencyActionWrapper {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the baseCurrency
     * @returns An instance of ActionResponse
     */
    getBaseCurrency() {
        return this.baseCurrency;
    }
    /**
     * The method to set the value to baseCurrency
     * @param baseCurrency An instance of ActionResponse
     */
    setBaseCurrency(baseCurrency) {
        this.baseCurrency = baseCurrency;
        this.keyModified.set("base_currency", 1);
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
exports.MasterModel = BaseCurrencyActionWrapper;
exports.BaseCurrencyActionWrapper = BaseCurrencyActionWrapper;
//# sourceMappingURL=base_currency_action_wrapper.js.map