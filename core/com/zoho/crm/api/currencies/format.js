"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Format = exports.MasterModel = void 0;
class Format {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the decimalSeparator
     * @returns An instance of Choice<string>
     */
    getDecimalSeparator() {
        return this.decimalSeparator;
    }
    /**
     * The method to set the value to decimalSeparator
     * @param decimalSeparator An instance of Choice<string>
     */
    setDecimalSeparator(decimalSeparator) {
        this.decimalSeparator = decimalSeparator;
        this.keyModified.set("decimal_separator", 1);
    }
    /**
     * The method to get the thousandSeparator
     * @returns An instance of Choice<string>
     */
    getThousandSeparator() {
        return this.thousandSeparator;
    }
    /**
     * The method to set the value to thousandSeparator
     * @param thousandSeparator An instance of Choice<string>
     */
    setThousandSeparator(thousandSeparator) {
        this.thousandSeparator = thousandSeparator;
        this.keyModified.set("thousand_separator", 1);
    }
    /**
     * The method to get the decimalPlaces
     * @returns An instance of Choice<string>
     */
    getDecimalPlaces() {
        return this.decimalPlaces;
    }
    /**
     * The method to set the value to decimalPlaces
     * @param decimalPlaces An instance of Choice<string>
     */
    setDecimalPlaces(decimalPlaces) {
        this.decimalPlaces = decimalPlaces;
        this.keyModified.set("decimal_places", 1);
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
exports.MasterModel = Format;
exports.Format = Format;
//# sourceMappingURL=format.js.map