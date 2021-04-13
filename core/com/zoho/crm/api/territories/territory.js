"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Territory = exports.MasterModel = void 0;
class Territory {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the createdTime
     * @returns An instance of Date
     */
    getCreatedTime() {
        return this.createdTime;
    }
    /**
     * The method to set the value to createdTime
     * @param createdTime An instance of Date
     */
    setCreatedTime(createdTime) {
        this.createdTime = createdTime;
        this.keyModified.set("created_time", 1);
    }
    /**
     * The method to get the modifiedTime
     * @returns An instance of Date
     */
    getModifiedTime() {
        return this.modifiedTime;
    }
    /**
     * The method to set the value to modifiedTime
     * @param modifiedTime An instance of Date
     */
    setModifiedTime(modifiedTime) {
        this.modifiedTime = modifiedTime;
        this.keyModified.set("modified_time", 1);
    }
    /**
     * The method to get the manager
     * @returns An instance of User
     */
    getManager() {
        return this.manager;
    }
    /**
     * The method to set the value to manager
     * @param manager An instance of User
     */
    setManager(manager) {
        this.manager = manager;
        this.keyModified.set("manager", 1);
    }
    /**
     * The method to get the parentId
     * @returns A string representing the parentId
     */
    getParentId() {
        return this.parentId;
    }
    /**
     * The method to set the value to parentId
     * @param parentId A string representing the parentId
     */
    setParentId(parentId) {
        this.parentId = parentId;
        this.keyModified.set("parent_id", 1);
    }
    /**
     * The method to get the criteria
     * @returns An instance of Criteria
     */
    getCriteria() {
        return this.criteria;
    }
    /**
     * The method to set the value to criteria
     * @param criteria An instance of Criteria
     */
    setCriteria(criteria) {
        this.criteria = criteria;
        this.keyModified.set("criteria", 1);
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
     * The method to get the modifiedBy
     * @returns An instance of User
     */
    getModifiedBy() {
        return this.modifiedBy;
    }
    /**
     * The method to set the value to modifiedBy
     * @param modifiedBy An instance of User
     */
    setModifiedBy(modifiedBy) {
        this.modifiedBy = modifiedBy;
        this.keyModified.set("modified_by", 1);
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
     * The method to get the createdBy
     * @returns An instance of User
     */
    getCreatedBy() {
        return this.createdBy;
    }
    /**
     * The method to set the value to createdBy
     * @param createdBy An instance of User
     */
    setCreatedBy(createdBy) {
        this.createdBy = createdBy;
        this.keyModified.set("created_by", 1);
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
exports.MasterModel = Territory;
exports.Territory = Territory;
//# sourceMappingURL=territory.js.map