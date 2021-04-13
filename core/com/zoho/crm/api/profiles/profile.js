"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = exports.MasterModel = void 0;
class Profile {
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
     * The method to get the permissionsDetails
     * @returns An Array representing the permissionsDetails
     */
    getPermissionsDetails() {
        return this.permissionsDetails;
    }
    /**
     * The method to set the value to permissionsDetails
     * @param permissionsDetails An Array representing the permissionsDetails
     */
    setPermissionsDetails(permissionsDetails) {
        this.permissionsDetails = permissionsDetails;
        this.keyModified.set("permissions_details", 1);
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
     * The method to get the default
     * @returns A boolean representing the default1
     */
    getDefault() {
        return this.default1;
    }
    /**
     * The method to set the value to default
     * @param default1 A boolean representing the default1
     */
    setDefault(default1) {
        this.default1 = default1;
        this.keyModified.set("default", 1);
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
     * The method to get the category
     * @returns A boolean representing the category
     */
    getCategory() {
        return this.category;
    }
    /**
     * The method to set the value to category
     * @param category A boolean representing the category
     */
    setCategory(category) {
        this.category = category;
        this.keyModified.set("category", 1);
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
     * The method to get the sections
     * @returns An Array representing the sections
     */
    getSections() {
        return this.sections;
    }
    /**
     * The method to set the value to sections
     * @param sections An Array representing the sections
     */
    setSections(sections) {
        this.sections = sections;
        this.keyModified.set("sections", 1);
    }
    /**
     * The method to get the delete
     * @returns A boolean representing the delete1
     */
    getDelete() {
        return this.delete1;
    }
    /**
     * The method to set the value to delete
     * @param delete1 A boolean representing the delete1
     */
    setDelete(delete1) {
        this.delete1 = delete1;
        this.keyModified.set("_delete", 1);
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
exports.MasterModel = Profile;
exports.Profile = Profile;
//# sourceMappingURL=profile.js.map