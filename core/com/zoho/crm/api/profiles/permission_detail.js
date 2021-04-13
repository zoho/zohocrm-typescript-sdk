"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionDetail = exports.MasterModel = void 0;
class PermissionDetail {
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
     * The method to get the module
     * @returns A string representing the module
     */
    getModule() {
        return this.module;
    }
    /**
     * The method to set the value to module
     * @param module A string representing the module
     */
    setModule(module) {
        this.module = module;
        this.keyModified.set("module", 1);
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
     * The method to get the id
     * @returns A bigint representing the id
     */
    getId() {
        return this.id;
    }
    /**
     * The method to set the value to id
     * @param id A bigint representing the id
     */
    setId(id) {
        this.id = id;
        this.keyModified.set("id", 1);
    }
    /**
     * The method to get the enabled
     * @returns A boolean representing the enabled
     */
    getEnabled() {
        return this.enabled;
    }
    /**
     * The method to set the value to enabled
     * @param enabled A boolean representing the enabled
     */
    setEnabled(enabled) {
        this.enabled = enabled;
        this.keyModified.set("enabled", 1);
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
exports.MasterModel = PermissionDetail;
exports.PermissionDetail = PermissionDetail;
//# sourceMappingURL=permission_detail.js.map