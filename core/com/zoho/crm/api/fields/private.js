"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Private = exports.MasterModel = void 0;
class Private {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the restricted
     * @returns A boolean representing the restricted
     */
    getRestricted() {
        return this.restricted;
    }
    /**
     * The method to set the value to restricted
     * @param restricted A boolean representing the restricted
     */
    setRestricted(restricted) {
        this.restricted = restricted;
        this.keyModified.set("restricted", 1);
    }
    /**
     * The method to get the export
     * @returns A boolean representing the export1
     */
    getExport() {
        return this.export1;
    }
    /**
     * The method to set the value to export
     * @param export1 A boolean representing the export1
     */
    setExport(export1) {
        this.export1 = export1;
        this.keyModified.set("export", 1);
    }
    /**
     * The method to get the type
     * @returns A string representing the type
     */
    getType() {
        return this.type;
    }
    /**
     * The method to set the value to type
     * @param type A string representing the type
     */
    setType(type) {
        this.type = type;
        this.keyModified.set("type", 1);
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
exports.MasterModel = Private;
exports.Private = Private;
//# sourceMappingURL=private.js.map