"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency = exports.MasterModel = void 0;
class Currency {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the roundingOption
     * @returns A string representing the roundingOption
     */
    getRoundingOption() {
        return this.roundingOption;
    }
    /**
     * The method to set the value to roundingOption
     * @param roundingOption A string representing the roundingOption
     */
    setRoundingOption(roundingOption) {
        this.roundingOption = roundingOption;
        this.keyModified.set("rounding_option", 1);
    }
    /**
     * The method to get the precision
     * @returns A number representing the precision
     */
    getPrecision() {
        return this.precision;
    }
    /**
     * The method to set the value to precision
     * @param precision A number representing the precision
     */
    setPrecision(precision) {
        this.precision = precision;
        this.keyModified.set("precision", 1);
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
exports.MasterModel = Currency;
exports.Currency = Currency;
//# sourceMappingURL=currency.js.map