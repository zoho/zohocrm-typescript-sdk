"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = exports.MasterModel = void 0;
class Note {
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
     * The method to get the attachments
     * @returns An Array representing the attachments
     */
    getAttachments() {
        return this.attachments;
    }
    /**
     * The method to set the value to attachments
     * @param attachments An Array representing the attachments
     */
    setAttachments(attachments) {
        this.attachments = attachments;
        this.keyModified.set("$attachments", 1);
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
     * The method to get the isSharedToClient
     * @returns A boolean representing the isSharedToClient
     */
    getIsSharedToClient() {
        return this.isSharedToClient;
    }
    /**
     * The method to set the value to isSharedToClient
     * @param isSharedToClient A boolean representing the isSharedToClient
     */
    setIsSharedToClient(isSharedToClient) {
        this.isSharedToClient = isSharedToClient;
        this.keyModified.set("$is_shared_to_client", 1);
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
     * The method to get the size
     * @returns A string representing the size
     */
    getSize() {
        return this.size;
    }
    /**
     * The method to set the value to size
     * @param size A string representing the size
     */
    setSize(size) {
        this.size = size;
        this.keyModified.set("$size", 1);
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
     * The method to get the voiceNote
     * @returns A boolean representing the voiceNote
     */
    getVoiceNote() {
        return this.voiceNote;
    }
    /**
     * The method to set the value to voiceNote
     * @param voiceNote A boolean representing the voiceNote
     */
    setVoiceNote(voiceNote) {
        this.voiceNote = voiceNote;
        this.keyModified.set("$voice_note", 1);
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
     * The method to get the noteTitle
     * @returns A string representing the noteTitle
     */
    getNoteTitle() {
        return this.noteTitle;
    }
    /**
     * The method to set the value to noteTitle
     * @param noteTitle A string representing the noteTitle
     */
    setNoteTitle(noteTitle) {
        this.noteTitle = noteTitle;
        this.keyModified.set("Note_Title", 1);
    }
    /**
     * The method to get the noteContent
     * @returns A string representing the noteContent
     */
    getNoteContent() {
        return this.noteContent;
    }
    /**
     * The method to set the value to noteContent
     * @param noteContent A string representing the noteContent
     */
    setNoteContent(noteContent) {
        this.noteContent = noteContent;
        this.keyModified.set("Note_Content", 1);
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
exports.MasterModel = Note;
exports.Note = Note;
//# sourceMappingURL=note.js.map