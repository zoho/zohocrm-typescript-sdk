"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = exports.MasterModel = void 0;
class Section {
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
     * The method to get the sequenceNumber
     * @returns A number representing the sequenceNumber
     */
    getSequenceNumber() {
        return this.sequenceNumber;
    }
    /**
     * The method to set the value to sequenceNumber
     * @param sequenceNumber A number representing the sequenceNumber
     */
    setSequenceNumber(sequenceNumber) {
        this.sequenceNumber = sequenceNumber;
        this.keyModified.set("sequence_number", 1);
    }
    /**
     * The method to get the issubformsection
     * @returns A boolean representing the issubformsection
     */
    getIssubformsection() {
        return this.issubformsection;
    }
    /**
     * The method to set the value to issubformsection
     * @param issubformsection A boolean representing the issubformsection
     */
    setIssubformsection(issubformsection) {
        this.issubformsection = issubformsection;
        this.keyModified.set("isSubformSection", 1);
    }
    /**
     * The method to get the tabTraversal
     * @returns A number representing the tabTraversal
     */
    getTabTraversal() {
        return this.tabTraversal;
    }
    /**
     * The method to set the value to tabTraversal
     * @param tabTraversal A number representing the tabTraversal
     */
    setTabTraversal(tabTraversal) {
        this.tabTraversal = tabTraversal;
        this.keyModified.set("tab_traversal", 1);
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
     * The method to get the columnCount
     * @returns A number representing the columnCount
     */
    getColumnCount() {
        return this.columnCount;
    }
    /**
     * The method to set the value to columnCount
     * @param columnCount A number representing the columnCount
     */
    setColumnCount(columnCount) {
        this.columnCount = columnCount;
        this.keyModified.set("column_count", 1);
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
     * The method to get the generatedType
     * @returns A string representing the generatedType
     */
    getGeneratedType() {
        return this.generatedType;
    }
    /**
     * The method to set the value to generatedType
     * @param generatedType A string representing the generatedType
     */
    setGeneratedType(generatedType) {
        this.generatedType = generatedType;
        this.keyModified.set("generated_type", 1);
    }
    /**
     * The method to get the fields
     * @returns An Array representing the fields
     */
    getFields() {
        return this.fields;
    }
    /**
     * The method to set the value to fields
     * @param fields An Array representing the fields
     */
    setFields(fields) {
        this.fields = fields;
        this.keyModified.set("fields", 1);
    }
    /**
     * The method to get the properties
     * @returns An instance of Properties
     */
    getProperties() {
        return this.properties;
    }
    /**
     * The method to set the value to properties
     * @param properties An instance of Properties
     */
    setProperties(properties) {
        this.properties = properties;
        this.keyModified.set("properties", 1);
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
exports.MasterModel = Section;
exports.Section = Section;
//# sourceMappingURL=section.js.map