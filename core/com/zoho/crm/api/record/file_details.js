"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileDetails = exports.MasterModel = void 0;
class FileDetails {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the extn
     * @returns A string representing the extn
     */
    getExtn() {
        return this.extn;
    }
    /**
     * The method to set the value to extn
     * @param extn A string representing the extn
     */
    setExtn(extn) {
        this.extn = extn;
        this.keyModified.set("extn", 1);
    }
    /**
     * The method to get the isPreviewAvailable
     * @returns A boolean representing the isPreviewAvailable
     */
    getIsPreviewAvailable() {
        return this.isPreviewAvailable;
    }
    /**
     * The method to set the value to isPreviewAvailable
     * @param isPreviewAvailable A boolean representing the isPreviewAvailable
     */
    setIsPreviewAvailable(isPreviewAvailable) {
        this.isPreviewAvailable = isPreviewAvailable;
        this.keyModified.set("is_Preview_Available", 1);
    }
    /**
     * The method to get the downloadUrl
     * @returns A string representing the downloadUrl
     */
    getDownloadUrl() {
        return this.downloadUrl;
    }
    /**
     * The method to set the value to downloadUrl
     * @param downloadUrl A string representing the downloadUrl
     */
    setDownloadUrl(downloadUrl) {
        this.downloadUrl = downloadUrl;
        this.keyModified.set("download_Url", 1);
    }
    /**
     * The method to get the deleteUrl
     * @returns A string representing the deleteUrl
     */
    getDeleteUrl() {
        return this.deleteUrl;
    }
    /**
     * The method to set the value to deleteUrl
     * @param deleteUrl A string representing the deleteUrl
     */
    setDeleteUrl(deleteUrl) {
        this.deleteUrl = deleteUrl;
        this.keyModified.set("delete_Url", 1);
    }
    /**
     * The method to get the entityId
     * @returns A string representing the entityId
     */
    getEntityId() {
        return this.entityId;
    }
    /**
     * The method to set the value to entityId
     * @param entityId A string representing the entityId
     */
    setEntityId(entityId) {
        this.entityId = entityId;
        this.keyModified.set("entity_Id", 1);
    }
    /**
     * The method to get the mode
     * @returns A string representing the mode
     */
    getMode() {
        return this.mode;
    }
    /**
     * The method to set the value to mode
     * @param mode A string representing the mode
     */
    setMode(mode) {
        this.mode = mode;
        this.keyModified.set("mode", 1);
    }
    /**
     * The method to get the originalSizeByte
     * @returns A string representing the originalSizeByte
     */
    getOriginalSizeByte() {
        return this.originalSizeByte;
    }
    /**
     * The method to set the value to originalSizeByte
     * @param originalSizeByte A string representing the originalSizeByte
     */
    setOriginalSizeByte(originalSizeByte) {
        this.originalSizeByte = originalSizeByte;
        this.keyModified.set("original_Size_Byte", 1);
    }
    /**
     * The method to get the previewUrl
     * @returns A string representing the previewUrl
     */
    getPreviewUrl() {
        return this.previewUrl;
    }
    /**
     * The method to set the value to previewUrl
     * @param previewUrl A string representing the previewUrl
     */
    setPreviewUrl(previewUrl) {
        this.previewUrl = previewUrl;
        this.keyModified.set("preview_Url", 1);
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
        this.keyModified.set("file_Name", 1);
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
        this.keyModified.set("file_Id", 1);
    }
    /**
     * The method to get the attachmentId
     * @returns A string representing the attachmentId
     */
    getAttachmentId() {
        return this.attachmentId;
    }
    /**
     * The method to set the value to attachmentId
     * @param attachmentId A string representing the attachmentId
     */
    setAttachmentId(attachmentId) {
        this.attachmentId = attachmentId;
        this.keyModified.set("attachment_Id", 1);
    }
    /**
     * The method to get the fileSize
     * @returns A string representing the fileSize
     */
    getFileSize() {
        return this.fileSize;
    }
    /**
     * The method to set the value to fileSize
     * @param fileSize A string representing the fileSize
     */
    setFileSize(fileSize) {
        this.fileSize = fileSize;
        this.keyModified.set("file_Size", 1);
    }
    /**
     * The method to get the creatorId
     * @returns A string representing the creatorId
     */
    getCreatorId() {
        return this.creatorId;
    }
    /**
     * The method to set the value to creatorId
     * @param creatorId A string representing the creatorId
     */
    setCreatorId(creatorId) {
        this.creatorId = creatorId;
        this.keyModified.set("creator_Id", 1);
    }
    /**
     * The method to get the linkDocs
     * @returns A number representing the linkDocs
     */
    getLinkDocs() {
        return this.linkDocs;
    }
    /**
     * The method to set the value to linkDocs
     * @param linkDocs A number representing the linkDocs
     */
    setLinkDocs(linkDocs) {
        this.linkDocs = linkDocs;
        this.keyModified.set("link_Docs", 1);
    }
    /**
     * The method to get the delete
     * @returns A string representing the delete1
     */
    getDelete() {
        return this.delete1;
    }
    /**
     * The method to set the value to delete
     * @param delete1 A string representing the delete1
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
exports.MasterModel = FileDetails;
exports.FileDetails = FileDetails;
//# sourceMappingURL=file_details.js.map