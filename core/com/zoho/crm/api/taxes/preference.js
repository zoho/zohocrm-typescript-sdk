"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preference = exports.MasterModel = void 0;
class Preference {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the autoPopulateTax
     * @returns A boolean representing the autoPopulateTax
     */
    getAutoPopulateTax() {
        return this.autoPopulateTax;
    }
    /**
     * The method to set the value to autoPopulateTax
     * @param autoPopulateTax A boolean representing the autoPopulateTax
     */
    setAutoPopulateTax(autoPopulateTax) {
        this.autoPopulateTax = autoPopulateTax;
        this.keyModified.set("auto_populate_tax", 1);
    }
    /**
     * The method to get the modifyTaxRates
     * @returns A boolean representing the modifyTaxRates
     */
    getModifyTaxRates() {
        return this.modifyTaxRates;
    }
    /**
     * The method to set the value to modifyTaxRates
     * @param modifyTaxRates A boolean representing the modifyTaxRates
     */
    setModifyTaxRates(modifyTaxRates) {
        this.modifyTaxRates = modifyTaxRates;
        this.keyModified.set("modify_tax_rates", 1);
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
exports.MasterModel = Preference;
exports.Preference = Preference;
//# sourceMappingURL=preference.js.map