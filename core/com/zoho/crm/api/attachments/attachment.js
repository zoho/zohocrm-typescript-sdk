"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attachment = exports.MasterModel = void 0;
class Attachment {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the owner
     * @returns An instance of User
     */
    getOwner() {
        return this.owner;
    }
    /**
     * The method to set the value to owner
     * @param owner An instance of User
     */
    setOwner(owner) {
        this.owner = owner;
        this.keyModified.set("Owner", 1);
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
        this.keyModified.set("Modified_Time", 1);
    }
    /**
     * The method to get the fileName
     * @returns A string representing the fileName
     */
    getFileName() {
        return this.fileName;
    }
    /**
     * The method to set the value to fileName
     * @param fileName A string representing the fileName
     */
    setFileName(fileName) {
        this.fileName = fileName;
        this.keyModified.set("File_Name", 1);
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
        this.keyModified.set("Created_Time", 1);
    }
    /**
     * The method to get the size
     * @returns A bigint representing the size
     */
    getSize() {
        return this.size;
    }
    /**
     * The method to set the value to size
     * @param size A bigint representing the size
     */
    setSize(size) {
        this.size = size;
        this.keyModified.set("Size", 1);
    }
    /**
     * The method to get the parentId
     * @returns An instance of Record
     */
    getParentId() {
        return this.parentId;
    }
    /**
     * The method to set the value to parentId
     * @param parentId An instance of Record
     */
    setParentId(parentId) {
        this.parentId = parentId;
        this.keyModified.set("Parent_Id", 1);
    }
    /**
     * The method to get the editable
     * @returns A boolean representing the editable
     */
    getEditable() {
        return this.editable;
    }
    /**
     * The method to set the value to editable
     * @param editable A boolean representing the editable
     */
    setEditable(editable) {
        this.editable = editable;
        this.keyModified.set("$editable", 1);
    }
    /**
     * The method to get the fileId
     * @returns A string representing the fileId
     */
    getFileId() {
        return this.fileId;
    }
    /**
     * The method to set the value to fileId
     * @param fileId A string representing the fileId
     */
    setFileId(fileId) {
        this.fileId = fileId;
        this.keyModified.set("$file_id", 1);
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
        this.keyModified.set("$type", 1);
    }
    /**
     * The method to get the seModule
     * @returns A string representing the seModule
     */
    getSeModule() {
        return this.seModule;
    }
    /**
     * The method to set the value to seModule
     * @param seModule A string representing the seModule
     */
    setSeModule(seModule) {
        this.seModule = seModule;
        this.keyModified.set("$se_module", 1);
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
        this.keyModified.set("Modified_By", 1);
    }
    /**
     * The method to get the state
     * @returns A string representing the state
     */
    getState() {
        return this.state;
    }
    /**
     * The method to set the value to state
     * @param state A string representing the state
     */
    setState(state) {
        this.state = state;
        this.keyModified.set("$state", 1);
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
        this.keyModified.set("Created_By", 1);
    }
    /**
     * The method to get the linkUrl
     * @returns A string representing the linkUrl
     */
    getLinkUrl() {
        return this.linkUrl;
    }
    /**
     * The method to set the value to linkUrl
     * @param linkUrl A string representing the linkUrl
     */
    setLinkUrl(linkUrl) {
        this.linkUrl = linkUrl;
        this.keyModified.set("$link_url", 1);
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
     * The method to get the category
     * @returns A string representing the category
     */
    getCategory() {
        return this.category;
    }
    /**
     * The method to set the value to category
     * @param category A string representing the category
     */
    setCategory(category) {
        this.category = category;
        this.keyModified.set("category", 1);
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
exports.MasterModel = Attachment;
exports.Attachment = Attachment;
//# sourceMappingURL=attachment.js.map