"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletedRecord = exports.MasterModel = void 0;
class DeletedRecord {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the deletedBy
     * @returns An instance of User
     */
    getDeletedBy() {
        return this.deletedBy;
    }
    /**
     * The method to set the value to deletedBy
     * @param deletedBy An instance of User
     */
    setDeletedBy(deletedBy) {
        this.deletedBy = deletedBy;
        this.keyModified.set("deleted_by", 1);
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
     * The method to get the displayName
     * @returns A string representing the displayName
     */
    getDisplayName() {
        return this.displayName;
    }
    /**
     * The method to set the value to displayName
     * @param displayName A string representing the displayName
     */
    setDisplayName(displayName) {
        this.displayName = displayName;
        this.keyModified.set("display_name", 1);
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
     * The method to get the deletedTime
     * @returns An instance of Date
     */
    getDeletedTime() {
        return this.deletedTime;
    }
    /**
     * The method to set the value to deletedTime
     * @param deletedTime An instance of Date
     */
    setDeletedTime(deletedTime) {
        this.deletedTime = deletedTime;
        this.keyModified.set("deleted_time", 1);
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
exports.MasterModel = DeletedRecord;
exports.DeletedRecord = DeletedRecord;
//# sourceMappingURL=deleted_record.js.map