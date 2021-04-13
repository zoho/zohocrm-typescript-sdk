"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax = exports.MasterModel = void 0;
class Tax {
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
     * The method to get the value
     * @returns A number representing the value
     */
    getValue() {
        return this.value;
    }
    /**
     * The method to set the value to value
     * @param value A number representing the value
     */
    setValue(value) {
        this.value = value;
        this.keyModified.set("value", 1);
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
exports.MasterModel = Tax;
exports.Tax = Tax;
//# sourceMappingURL=tax.js.map