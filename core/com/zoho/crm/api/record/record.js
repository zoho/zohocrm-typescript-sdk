"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Record = exports.MasterModel = void 0;
class Record {
    constructor() {
        this.keyValues = new Map();
        this.keyModified = new Map();
    }
    /**
     * The method to get the id
     * @returns A bigint representing the id
     */
    getId() {
        return this.getKeyValue("id");
    }
    /**
     * The method to set the value to id
     * @param id A bigint representing the id
     */
    setId(id) {
        this.addKeyValue("id", id);
    }
    /**
     * The method to get the createdBy
     * @returns An instance of User
     */
    getCreatedBy() {
        return this.getKeyValue("Created_By");
    }
    /**
     * The method to set the value to createdBy
     * @param createdBy An instance of User
     */
    setCreatedBy(createdBy) {
        this.addKeyValue("Created_By", createdBy);
    }
    /**
     * The method to get the createdTime
     * @returns An instance of Date
     */
    getCreatedTime() {
        return this.getKeyValue("Created_Time");
    }
    /**
     * The method to set the value to createdTime
     * @param createdTime An instance of Date
     */
    setCreatedTime(createdTime) {
        this.addKeyValue("Created_Time", createdTime);
    }
    /**
     * The method to get the modifiedBy
     * @returns An instance of User
     */
    getModifiedBy() {
        return this.getKeyValue("Modified_By");
    }
    /**
     * The method to set the value to modifiedBy
     * @param modifiedBy An instance of User
     */
    setModifiedBy(modifiedBy) {
        this.addKeyValue("Modified_By", modifiedBy);
    }
    /**
     * The method to get the modifiedTime
     * @returns An instance of Date
     */
    getModifiedTime() {
        return this.getKeyValue("Modified_Time");
    }
    /**
     * The method to set the value to modifiedTime
     * @param modifiedTime An instance of Date
     */
    setModifiedTime(modifiedTime) {
        this.addKeyValue("Modified_Time", modifiedTime);
    }
    /**
     * The method to get the tag
     * @returns An Array representing the tag
     */
    getTag() {
        return this.getKeyValue("Tag");
    }
    /**
     * The method to set the value to tag
     * @param tag An Array representing the tag
     */
    setTag(tag) {
        this.addKeyValue("Tag", tag);
    }
    /**
     * The method to add field value
     * @param <T> T containing the specified type
     * @param field An instance of Field<T>
     * @param value T
     */
    addFieldValue(field, value) {
        this.addKeyValue(field.getAPIName(), value);
    }
    /**
     * The method to add key value
     * @param apiName A string representing the apiName
     * @param value A object representing the value
     */
    addKeyValue(apiName, value) {
        this.keyValues.set(apiName, value);
        this.keyModified.set(apiName, 1);
    }
    /**
     * The method to get key value
     * @param apiName A string representing the apiName
     * @returns A object representing the keyValue
     */
    getKeyValue(apiName) {
        if (this.keyValues.has(apiName)) {
            return this.keyValues.get(apiName);
        }
        return null;
    }
    /**
     * The method to get key values
     * @returns A Map representing the keyValues
     */
    getKeyValues() {
        return this.keyValues;
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
exports.MasterModel = Record;
exports.Record = Record;
//# sourceMappingURL=record.js.map