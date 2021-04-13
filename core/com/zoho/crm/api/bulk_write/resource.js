"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = exports.MasterModel = void 0;
class Resource {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the status
     * @returns An instance of Choice<string>
     */
    getStatus() {
        return this.status;
    }
    /**
     * The method to set the value to status
     * @param status An instance of Choice<string>
     */
    setStatus(status) {
        this.status = status;
        this.keyModified.set("status", 1);
    }
    /**
     * The method to get the type
     * @returns An instance of Choice<string>
     */
    getType() {
        return this.type;
    }
    /**
     * The method to set the value to type
     * @param type An instance of Choice<string>
     */
    setType(type) {
        this.type = type;
        this.keyModified.set("type", 1);
    }
    /**
     * The method to get the module
     * @returns A string representing the module
     */
    getModule() {
        return this.module;
    }
    /**
     * The method to set the value to module
     * @param module A string representing the module
     */
    setModule(module) {
        this.module = module;
        this.keyModified.set("module", 1);
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
        this.keyModified.set("file_id", 1);
    }
    /**
     * The method to get the ignoreEmpty
     * @returns A boolean representing the ignoreEmpty
     */
    getIgnoreEmpty() {
        return this.ignoreEmpty;
    }
    /**
     * The method to set the value to ignoreEmpty
     * @param ignoreEmpty A boolean representing the ignoreEmpty
     */
    setIgnoreEmpty(ignoreEmpty) {
        this.ignoreEmpty = ignoreEmpty;
        this.keyModified.set("ignore_empty", 1);
    }
    /**
     * The method to get the findBy
     * @returns A string representing the findBy
     */
    getFindBy() {
        return this.findBy;
    }
    /**
     * The method to set the value to findBy
     * @param findBy A string representing the findBy
     */
    setFindBy(findBy) {
        this.findBy = findBy;
        this.keyModified.set("find_by", 1);
    }
    /**
     * The method to get the fieldMappings
     * @returns An Array representing the fieldMappings
     */
    getFieldMappings() {
        return this.fieldMappings;
    }
    /**
     * The method to set the value to fieldMappings
     * @param fieldMappings An Array representing the fieldMappings
     */
    setFieldMappings(fieldMappings) {
        this.fieldMappings = fieldMappings;
        this.keyModified.set("field_mappings", 1);
    }
    /**
     * The method to get the file
     * @returns An instance of File
     */
    getFile() {
        return this.file;
    }
    /**
     * The method to set the value to file
     * @param file An instance of File
     */
    setFile(file) {
        this.file = file;
        this.keyModified.set("file", 1);
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
exports.MasterModel = Resource;
exports.Resource = Resource;
//# sourceMappingURL=resource.js.map