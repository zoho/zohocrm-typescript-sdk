"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldMapping = exports.MasterModel = void 0;
class FieldMapping {
    constructor() {
        this.keyModified = new Map();
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
     * The method to get the index
     * @returns A number representing the index
     */
    getIndex() {
        return this.index;
    }
    /**
     * The method to set the value to index
     * @param index A number representing the index
     */
    setIndex(index) {
        this.index = index;
        this.keyModified.set("index", 1);
    }
    /**
     * The method to get the format
     * @returns A string representing the format
     */
    getFormat() {
        return this.format;
    }
    /**
     * The method to set the value to format
     * @param format A string representing the format
     */
    setFormat(format) {
        this.format = format;
        this.keyModified.set("format", 1);
    }
    /**
     * The method to get the findBy
     * @returns A string representing the findBy
     */
    getFindBy() {
        return this.findBy;
    }
    /**
     * The method to set the value to findBy
     * @param findBy A string representing the findBy
     */
    setFindBy(findBy) {
        this.findBy = findBy;
        this.keyModified.set("find_by", 1);
    }
    /**
     * The method to get the defaultValue
     * @returns A Map representing the defaultValue
     */
    getDefaultValue() {
        return this.defaultValue;
    }
    /**
     * The method to set the value to defaultValue
     * @param defaultValue A Map representing the defaultValue
     */
    setDefaultValue(defaultValue) {
        this.defaultValue = defaultValue;
        this.keyModified.set("default_value", 1);
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
exports.MasterModel = FieldMapping;
exports.FieldMapping = FieldMapping;
//# sourceMappingURL=field_mapping.js.map