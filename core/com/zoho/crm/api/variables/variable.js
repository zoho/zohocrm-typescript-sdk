"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variable = exports.MasterModel = void 0;
class Variable {
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
     * The method to get the description
     * @returns A string representing the description
     */
    getDescription() {
        return this.description;
    }
    /**
     * The method to set the value to description
     * @param description A string representing the description
     */
    setDescription(description) {
        this.description = description;
        this.keyModified.set("description", 1);
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
        this.keyModified.set("type", 1);
    }
    /**
     * The method to get the variableGroup
     * @returns An instance of VariableGroup
     */
    getVariableGroup() {
        return this.variableGroup;
    }
    /**
     * The method to set the value to variableGroup
     * @param variableGroup An instance of VariableGroup
     */
    setVariableGroup(variableGroup) {
        this.variableGroup = variableGroup;
        this.keyModified.set("variable_group", 1);
    }
    /**
     * The method to get the value
     * @returns A object representing the value
     */
    getValue() {
        return this.value;
    }
    /**
     * The method to set the value to value
     * @param value A object representing the value
     */
    setValue(value) {
        this.value = value;
        this.keyModified.set("value", 1);
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
exports.MasterModel = Variable;
exports.Variable = Variable;
//# sourceMappingURL=variable.js.map