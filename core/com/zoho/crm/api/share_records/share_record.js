"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShareRecord = exports.MasterModel = void 0;
class ShareRecord {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the shareRelatedRecords
     * @returns A boolean representing the shareRelatedRecords
     */
    getShareRelatedRecords() {
        return this.shareRelatedRecords;
    }
    /**
     * The method to set the value to shareRelatedRecords
     * @param shareRelatedRecords A boolean representing the shareRelatedRecords
     */
    setShareRelatedRecords(shareRelatedRecords) {
        this.shareRelatedRecords = shareRelatedRecords;
        this.keyModified.set("share_related_records", 1);
    }
    /**
     * The method to get the sharedThrough
     * @returns An instance of SharedThrough
     */
    getSharedThrough() {
        return this.sharedThrough;
    }
    /**
     * The method to set the value to sharedThrough
     * @param sharedThrough An instance of SharedThrough
     */
    setSharedThrough(sharedThrough) {
        this.sharedThrough = sharedThrough;
        this.keyModified.set("shared_through", 1);
    }
    /**
     * The method to get the sharedTime
     * @returns An instance of Date
     */
    getSharedTime() {
        return this.sharedTime;
    }
    /**
     * The method to set the value to sharedTime
     * @param sharedTime An instance of Date
     */
    setSharedTime(sharedTime) {
        this.sharedTime = sharedTime;
        this.keyModified.set("shared_time", 1);
    }
    /**
     * The method to get the permission
     * @returns A string representing the permission
     */
    getPermission() {
        return this.permission;
    }
    /**
     * The method to set the value to permission
     * @param permission A string representing the permission
     */
    setPermission(permission) {
        this.permission = permission;
        this.keyModified.set("permission", 1);
    }
    /**
     * The method to get the sharedBy
     * @returns An instance of User
     */
    getSharedBy() {
        return this.sharedBy;
    }
    /**
     * The method to set the value to sharedBy
     * @param sharedBy An instance of User
     */
    setSharedBy(sharedBy) {
        this.sharedBy = sharedBy;
        this.keyModified.set("shared_by", 1);
    }
    /**
     * The method to get the user
     * @returns An instance of User
     */
    getUser() {
        return this.user;
    }
    /**
     * The method to set the value to user
     * @param user An instance of User
     */
    setUser(user) {
        this.user = user;
        this.keyModified.set("user", 1);
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
exports.MasterModel = ShareRecord;
exports.ShareRecord = ShareRecord;
//# sourceMappingURL=share_record.js.map