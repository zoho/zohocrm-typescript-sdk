"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Translation = exports.MasterModel = void 0;
class Translation {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the publicViews
     * @returns A string representing the publicViews
     */
    getPublicViews() {
        return this.publicViews;
    }
    /**
     * The method to set the value to publicViews
     * @param publicViews A string representing the publicViews
     */
    setPublicViews(publicViews) {
        this.publicViews = publicViews;
        this.keyModified.set("public_views", 1);
    }
    /**
     * The method to get the otherUsersViews
     * @returns A string representing the otherUsersViews
     */
    getOtherUsersViews() {
        return this.otherUsersViews;
    }
    /**
     * The method to set the value to otherUsersViews
     * @param otherUsersViews A string representing the otherUsersViews
     */
    setOtherUsersViews(otherUsersViews) {
        this.otherUsersViews = otherUsersViews;
        this.keyModified.set("other_users_views", 1);
    }
    /**
     * The method to get the sharedWithMe
     * @returns A string representing the sharedWithMe
     */
    getSharedWithMe() {
        return this.sharedWithMe;
    }
    /**
     * The method to set the value to sharedWithMe
     * @param sharedWithMe A string representing the sharedWithMe
     */
    setSharedWithMe(sharedWithMe) {
        this.sharedWithMe = sharedWithMe;
        this.keyModified.set("shared_with_me", 1);
    }
    /**
     * The method to get the createdByMe
     * @returns A string representing the createdByMe
     */
    getCreatedByMe() {
        return this.createdByMe;
    }
    /**
     * The method to set the value to createdByMe
     * @param createdByMe A string representing the createdByMe
     */
    setCreatedByMe(createdByMe) {
        this.createdByMe = createdByMe;
        this.keyModified.set("created_by_me", 1);
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
exports.MasterModel = Translation;
exports.Translation = Translation;
//# sourceMappingURL=translation.js.map