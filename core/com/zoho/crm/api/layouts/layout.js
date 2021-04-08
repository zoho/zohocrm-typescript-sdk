"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = exports.MasterModel = void 0;
class Layout {
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
     * The method to get the convertMapping
     * @returns A Map representing the convertMapping
     */
    getConvertMapping() {
        return this.convertMapping;
    }
    /**
     * The method to set the value to convertMapping
     * @param convertMapping A Map representing the convertMapping
     */
    setConvertMapping(convertMapping) {
        this.convertMapping = convertMapping;
        this.keyModified.set("convert_mapping", 1);
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
     * The method to get the visible
     * @returns A boolean representing the visible
     */
    getVisible() {
        return this.visible;
    }
    /**
     * The method to set the value to visible
     * @param visible A boolean representing the visible
     */
    setVisible(visible) {
        this.visible = visible;
        this.keyModified.set("visible", 1);
    }
    /**
     * The method to get the createdFor
     * @returns An instance of User
     */
    getCreatedFor() {
        return this.createdFor;
    }
    /**
     * The method to set the value to createdFor
     * @param createdFor An instance of User
     */
    setCreatedFor(createdFor) {
        this.createdFor = createdFor;
        this.keyModified.set("created_for", 1);
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
     * The method to get the profiles
     * @returns An Array representing the profiles
     */
    getProfiles() {
        return this.profiles;
    }
    /**
     * The method to set the value to profiles
     * @param profiles An Array representing the profiles
     */
    setProfiles(profiles) {
        this.profiles = profiles;
        this.keyModified.set("profiles", 1);
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
     * The method to get the status
     * @returns A number representing the status
     */
    getStatus() {
        return this.status;
    }
    /**
     * The method to set the value to status
     * @param status A number representing the status
     */
    setStatus(status) {
        this.status = status;
        this.keyModified.set("status", 1);
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
exports.MasterModel = Layout;
exports.Layout = Layout;
//# sourceMappingURL=layout.js.map