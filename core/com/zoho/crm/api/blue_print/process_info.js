"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessInfo = exports.MasterModel = void 0;
class ProcessInfo {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the fieldId
     * @returns A string representing the fieldId
     */
    getFieldId() {
        return this.fieldId;
    }
    /**
     * The method to set the value to fieldId
     * @param fieldId A string representing the fieldId
     */
    setFieldId(fieldId) {
        this.fieldId = fieldId;
        this.keyModified.set("field_id", 1);
    }
    /**
     * The method to get the isContinuous
     * @returns A boolean representing the isContinuous
     */
    getIsContinuous() {
        return this.isContinuous;
    }
    /**
     * The method to set the value to isContinuous
     * @param isContinuous A boolean representing the isContinuous
     */
    setIsContinuous(isContinuous) {
        this.isContinuous = isContinuous;
        this.keyModified.set("is_continuous", 1);
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
     * The method to get the continuous
     * @returns A boolean representing the continuous
     */
    getContinuous() {
        return this.continuous;
    }
    /**
     * The method to set the value to continuous
     * @param continuous A boolean representing the continuous
     */
    setContinuous(continuous) {
        this.continuous = continuous;
        this.keyModified.set("continuous", 1);
    }
    /**
     * The method to get the fieldLabel
     * @returns A string representing the fieldLabel
     */
    getFieldLabel() {
        return this.fieldLabel;
    }
    /**
     * The method to set the value to fieldLabel
     * @param fieldLabel A string representing the fieldLabel
     */
    setFieldLabel(fieldLabel) {
        this.fieldLabel = fieldLabel;
        this.keyModified.set("field_label", 1);
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
     * The method to get the columnName
     * @returns A string representing the columnName
     */
    getColumnName() {
        return this.columnName;
    }
    /**
     * The method to set the value to columnName
     * @param columnName A string representing the columnName
     */
    setColumnName(columnName) {
        this.columnName = columnName;
        this.keyModified.set("column_name", 1);
    }
    /**
     * The method to get the fieldValue
     * @returns A string representing the fieldValue
     */
    getFieldValue() {
        return this.fieldValue;
    }
    /**
     * The method to set the value to fieldValue
     * @param fieldValue A string representing the fieldValue
     */
    setFieldValue(fieldValue) {
        this.fieldValue = fieldValue;
        this.keyModified.set("field_value", 1);
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
     * The method to get the fieldName
     * @returns A string representing the fieldName
     */
    getFieldName() {
        return this.fieldName;
    }
    /**
     * The method to set the value to fieldName
     * @param fieldName A string representing the fieldName
     */
    setFieldName(fieldName) {
        this.fieldName = fieldName;
        this.keyModified.set("field_name", 1);
    }
    /**
     * The method to get the escalation
     * @returns A string representing the escalation
     */
    getEscalation() {
        return this.escalation;
    }
    /**
     * The method to set the value to escalation
     * @param escalation A string representing the escalation
     */
    setEscalation(escalation) {
        this.escalation = escalation;
        this.keyModified.set("escalation", 1);
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
exports.MasterModel = ProcessInfo;
exports.ProcessInfo = ProcessInfo;
//# sourceMappingURL=process_info.js.map