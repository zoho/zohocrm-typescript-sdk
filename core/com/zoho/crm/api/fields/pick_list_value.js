"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickListValue = exports.MasterModel = void 0;
class PickListValue {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the displayValue
     * @returns A string representing the displayValue
     */
    getDisplayValue() {
        return this.displayValue;
    }
    /**
     * The method to set the value to displayValue
     * @param displayValue A string representing the displayValue
     */
    setDisplayValue(displayValue) {
        this.displayValue = displayValue;
        this.keyModified.set("display_value", 1);
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
     * The method to get the expectedDataType
     * @returns A string representing the expectedDataType
     */
    getExpectedDataType() {
        return this.expectedDataType;
    }
    /**
     * The method to set the value to expectedDataType
     * @param expectedDataType A string representing the expectedDataType
     */
    setExpectedDataType(expectedDataType) {
        this.expectedDataType = expectedDataType;
        this.keyModified.set("expected_data_type", 1);
    }
    /**
     * The method to get the maps
     * @returns An Array representing the maps
     */
    getMaps() {
        return this.maps;
    }
    /**
     * The method to set the value to maps
     * @param maps An Array representing the maps
     */
    setMaps(maps) {
        this.maps = maps;
        this.keyModified.set("maps", 1);
    }
    /**
     * The method to get the actualValue
     * @returns A string representing the actualValue
     */
    getActualValue() {
        return this.actualValue;
    }
    /**
     * The method to set the value to actualValue
     * @param actualValue A string representing the actualValue
     */
    setActualValue(actualValue) {
        this.actualValue = actualValue;
        this.keyModified.set("actual_value", 1);
    }
    /**
     * The method to get the sysRefName
     * @returns A string representing the sysRefName
     */
    getSysRefName() {
        return this.sysRefName;
    }
    /**
     * The method to set the value to sysRefName
     * @param sysRefName A string representing the sysRefName
     */
    setSysRefName(sysRefName) {
        this.sysRefName = sysRefName;
        this.keyModified.set("sys_ref_name", 1);
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
exports.MasterModel = PickListValue;
exports.PickListValue = PickListValue;
//# sourceMappingURL=pick_list_value.js.map