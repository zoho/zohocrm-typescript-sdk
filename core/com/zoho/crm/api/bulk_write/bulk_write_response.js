"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkWriteResponse = exports.MasterModel = void 0;
class BulkWriteResponse {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the status
     * @returns A string representing the status
     */
    getStatus() {
        return this.status;
    }
    /**
     * The method to set the value to status
     * @param status A string representing the status
     */
    setStatus(status) {
        this.status = status;
        this.keyModified.set("status", 1);
    }
    /**
     * The method to get the characterEncoding
     * @returns A string representing the characterEncoding
     */
    getCharacterEncoding() {
        return this.characterEncoding;
    }
    /**
     * The method to set the value to characterEncoding
     * @param characterEncoding A string representing the characterEncoding
     */
    setCharacterEncoding(characterEncoding) {
        this.characterEncoding = characterEncoding;
        this.keyModified.set("character_encoding", 1);
    }
    /**
     * The method to get the resource
     * @returns An Array representing the resource
     */
    getResource() {
        return this.resource;
    }
    /**
     * The method to set the value to resource
     * @param resource An Array representing the resource
     */
    setResource(resource) {
        this.resource = resource;
        this.keyModified.set("resource", 1);
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
     * The method to get the callback
     * @returns An instance of CallBack
     */
    getCallback() {
        return this.callback;
    }
    /**
     * The method to set the value to callback
     * @param callback An instance of CallBack
     */
    setCallback(callback) {
        this.callback = callback;
        this.keyModified.set("callback", 1);
    }
    /**
     * The method to get the result
     * @returns An instance of Result
     */
    getResult() {
        return this.result;
    }
    /**
     * The method to set the value to result
     * @param result An instance of Result
     */
    setResult(result) {
        this.result = result;
        this.keyModified.set("result", 1);
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
     * The method to get the operation
     * @returns A string representing the operation
     */
    getOperation() {
        return this.operation;
    }
    /**
     * The method to set the value to operation
     * @param operation A string representing the operation
     */
    setOperation(operation) {
        this.operation = operation;
        this.keyModified.set("operation", 1);
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
exports.MasterModel = BulkWriteResponse;
exports.BulkWriteResponse = BulkWriteResponse;
//# sourceMappingURL=bulk_write_response.js.map