"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = exports.MasterModel = void 0;
class Category {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the displayLabel
     * @returns A string representing the displayLabel
     */
    getDisplayLabel() {
        return this.displayLabel;
    }
    /**
     * The method to set the value to displayLabel
     * @param displayLabel A string representing the displayLabel
     */
    setDisplayLabel(displayLabel) {
        this.displayLabel = displayLabel;
        this.keyModified.set("display_label", 1);
    }
    /**
     * The method to get the permissionsDetails
     * @returns An Array representing the permissionsDetails
     */
    getPermissionsDetails() {
        return this.permissionsDetails;
    }
    /**
     * The method to set the value to permissionsDetails
     * @param permissionsDetails An Array representing the permissionsDetails
     */
    setPermissionsDetails(permissionsDetails) {
        this.permissionsDetails = permissionsDetails;
        this.keyModified.set("permissions_details", 1);
    }
    /**
     * The method to get the name
     * @returns A string representing the name
     */
    getName() {
        return this.name;
    }
    /**
     * The method to set the value to name
     * @param name A string representing the name
     */
    setName(name) {
        this.name = name;
        this.keyModified.set("name", 1);
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
exports.MasterModel = Category;
exports.Category = Category;
//# sourceMappingURL=category.js.map