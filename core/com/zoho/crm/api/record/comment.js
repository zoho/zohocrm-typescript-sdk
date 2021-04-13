"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = exports.MasterModel = void 0;
class Comment {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the commentedBy
     * @returns A string representing the commentedBy
     */
    getCommentedBy() {
        return this.commentedBy;
    }
    /**
     * The method to set the value to commentedBy
     * @param commentedBy A string representing the commentedBy
     */
    setCommentedBy(commentedBy) {
        this.commentedBy = commentedBy;
        this.keyModified.set("commented_by", 1);
    }
    /**
     * The method to get the commentedTime
     * @returns An instance of Date
     */
    getCommentedTime() {
        return this.commentedTime;
    }
    /**
     * The method to set the value to commentedTime
     * @param commentedTime An instance of Date
     */
    setCommentedTime(commentedTime) {
        this.commentedTime = commentedTime;
        this.keyModified.set("commented_time", 1);
    }
    /**
     * The method to get the commentContent
     * @returns A string representing the commentContent
     */
    getCommentContent() {
        return this.commentContent;
    }
    /**
     * The method to set the value to commentContent
     * @param commentContent A string representing the commentContent
     */
    setCommentContent(commentContent) {
        this.commentContent = commentContent;
        this.keyModified.set("comment_content", 1);
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
exports.MasterModel = Comment;
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map