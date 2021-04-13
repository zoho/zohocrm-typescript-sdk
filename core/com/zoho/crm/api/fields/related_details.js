"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedDetails = exports.MasterModel = void 0;
class RelatedDetails {
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
     * The method to get the apiName
     * @returns A string representing the apiName
     */
    getAPIName() {
        return this.apiName;
    }
    /**
     * The method to set the value to apiName
     * @param apiName A string representing the apiName
     */
    setAPIName(apiName) {
        this.apiName = apiName;
        this.keyModified.set("api_name", 1);
    }
    /**
     * The method to get the module
     * @returns An instance of Module
     */
    getModule() {
        return this.module;
    }
    /**
     * The method to set the value to module
     * @param module An instance of Module
     */
    setModule(module) {
        this.module = module;
        this.keyModified.set("module", 1);
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
        this.keyModified.set("_type", 1);
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
exports.MasterModel = RelatedDetails;
exports.RelatedDetails = RelatedDetails;
//# sourceMappingURL=related_details.js.map