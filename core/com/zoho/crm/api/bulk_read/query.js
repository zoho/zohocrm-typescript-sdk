"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = exports.MasterModel = void 0;
class Query {
    constructor() {
        this.keyModified = new Map();
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
     * The method to get the cvid
     * @returns A string representing the cvid
     */
    getCvid() {
        return this.cvid;
    }
    /**
     * The method to set the value to cvid
     * @param cvid A string representing the cvid
     */
    setCvid(cvid) {
        this.cvid = cvid;
        this.keyModified.set("cvid", 1);
    }
    /**
     * The method to get the fields
     * @returns An Array representing the fields
     */
    getFields() {
        return this.fields;
    }
    /**
     * The method to set the value to fields
     * @param fields An Array representing the fields
     */
    setFields(fields) {
        this.fields = fields;
        this.keyModified.set("fields", 1);
    }
    /**
     * The method to get the page
     * @returns A number representing the page
     */
    getPage() {
        return this.page;
    }
    /**
     * The method to set the value to page
     * @param page A number representing the page
     */
    setPage(page) {
        this.page = page;
        this.keyModified.set("page", 1);
    }
    /**
     * The method to get the criteria
     * @returns An instance of Criteria
     */
    getCriteria() {
        return this.criteria;
    }
    /**
     * The method to set the value to criteria
     * @param criteria An instance of Criteria
     */
    setCriteria(criteria) {
        this.criteria = criteria;
        this.keyModified.set("criteria", 1);
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
exports.MasterModel = Query;
exports.Query = Query;
//# sourceMappingURL=query.js.map