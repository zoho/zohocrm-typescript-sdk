"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Criteria = exports.MasterModel = void 0;
class Criteria {
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
     * The method to get the groupOperator
     * @returns An instance of Choice<string>
     */
    getGroupOperator() {
        return this.groupOperator;
    }
    /**
     * The method to set the value to groupOperator
     * @param groupOperator An instance of Choice<string>
     */
    setGroupOperator(groupOperator) {
        this.groupOperator = groupOperator;
        this.keyModified.set("group_operator", 1);
    }
    /**
     * The method to get the group
     * @returns An Array representing the group
     */
    getGroup() {
        return this.group;
    }
    /**
     * The method to set the value to group
     * @param group An Array representing the group
     */
    setGroup(group) {
        this.group = group;
        this.keyModified.set("group", 1);
    }
    /**
     * The method to get the comparator
     * @returns An instance of Choice<string>
     */
    getComparator() {
        return this.comparator;
    }
    /**
     * The method to set the value to comparator
     * @param comparator An instance of Choice<string>
     */
    setComparator(comparator) {
        this.comparator = comparator;
        this.keyModified.set("comparator", 1);
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
exports.MasterModel = Criteria;
exports.Criteria = Criteria;
//# sourceMappingURL=criteria.js.map