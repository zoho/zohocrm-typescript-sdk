"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobDetail = exports.MasterModel = void 0;
class JobDetail {
    constructor() {
        this.keyModified = new Map();
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
     * The method to get the state
     * @returns An instance of Choice<string>
     */
    getState() {
        return this.state;
    }
    /**
     * The method to set the value to state
     * @param state An instance of Choice<string>
     */
    setState(state) {
        this.state = state;
        this.keyModified.set("state", 1);
    }
    /**
     * The method to get the query
     * @returns An instance of Query
     */
    getQuery() {
        return this.query;
    }
    /**
     * The method to set the value to query
     * @param query An instance of Query
     */
    setQuery(query) {
        this.query = query;
        this.keyModified.set("query", 1);
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
     * The method to get the fileType
     * @returns A string representing the fileType
     */
    getFileType() {
        return this.fileType;
    }
    /**
     * The method to set the value to fileType
     * @param fileType A string representing the fileType
     */
    setFileType(fileType) {
        this.fileType = fileType;
        this.keyModified.set("file_type", 1);
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
exports.MasterModel = JobDetail;
exports.JobDetail = JobDetail;
//# sourceMappingURL=job_detail.js.map