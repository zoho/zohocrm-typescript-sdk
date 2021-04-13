"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transition = exports.MasterModel = void 0;
class Transition {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the nextTransitions
     * @returns An Array representing the nextTransitions
     */
    getNextTransitions() {
        return this.nextTransitions;
    }
    /**
     * The method to set the value to nextTransitions
     * @param nextTransitions An Array representing the nextTransitions
     */
    setNextTransitions(nextTransitions) {
        this.nextTransitions = nextTransitions;
        this.keyModified.set("next_transitions", 1);
    }
    /**
     * The method to get the percentPartialSave
     * @returns A number representing the percentPartialSave
     */
    getPercentPartialSave() {
        return this.percentPartialSave;
    }
    /**
     * The method to set the value to percentPartialSave
     * @param percentPartialSave A number representing the percentPartialSave
     */
    setPercentPartialSave(percentPartialSave) {
        this.percentPartialSave = percentPartialSave;
        this.keyModified.set("percent_partial_save", 1);
    }
    /**
     * The method to get the data
     * @returns An instance of Record
     */
    getData() {
        return this.data;
    }
    /**
     * The method to set the value to data
     * @param data An instance of Record
     */
    setData(data) {
        this.data = data;
        this.keyModified.set("data", 1);
    }
    /**
     * The method to get the nextFieldValue
     * @returns A string representing the nextFieldValue
     */
    getNextFieldValue() {
        return this.nextFieldValue;
    }
    /**
     * The method to set the value to nextFieldValue
     * @param nextFieldValue A string representing the nextFieldValue
     */
    setNextFieldValue(nextFieldValue) {
        this.nextFieldValue = nextFieldValue;
        this.keyModified.set("next_field_value", 1);
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
     * The method to get the criteriaMatched
     * @returns A boolean representing the criteriaMatched
     */
    getCriteriaMatched() {
        return this.criteriaMatched;
    }
    /**
     * The method to set the value to criteriaMatched
     * @param criteriaMatched A boolean representing the criteriaMatched
     */
    setCriteriaMatched(criteriaMatched) {
        this.criteriaMatched = criteriaMatched;
        this.keyModified.set("criteria_matched", 1);
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
     * The method to get the criteriaMessage
     * @returns A string representing the criteriaMessage
     */
    getCriteriaMessage() {
        return this.criteriaMessage;
    }
    /**
     * The method to set the value to criteriaMessage
     * @param criteriaMessage A string representing the criteriaMessage
     */
    setCriteriaMessage(criteriaMessage) {
        this.criteriaMessage = criteriaMessage;
        this.keyModified.set("criteria_message", 1);
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
     * The method to get the executionTime
     * @returns An instance of Date
     */
    getExecutionTime() {
        return this.executionTime;
    }
    /**
     * The method to set the value to executionTime
     * @param executionTime An instance of Date
     */
    setExecutionTime(executionTime) {
        this.executionTime = executionTime;
        this.keyModified.set("execution_time", 1);
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
exports.MasterModel = Transition;
exports.Transition = Transition;
//# sourceMappingURL=transition.js.map