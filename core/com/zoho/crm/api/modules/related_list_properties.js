"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedListProperties = exports.MasterModel = void 0;
class RelatedListProperties {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the sortBy
     * @returns A string representing the sortBy
     */
    getSortBy() {
        return this.sortBy;
    }
    /**
     * The method to set the value to sortBy
     * @param sortBy A string representing the sortBy
     */
    setSortBy(sortBy) {
        this.sortBy = sortBy;
        this.keyModified.set("sort_by", 1);
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
     * The method to get the sortOrder
     * @returns A string representing the sortOrder
     */
    getSortOrder() {
        return this.sortOrder;
    }
    /**
     * The method to set the value to sortOrder
     * @param sortOrder A string representing the sortOrder
     */
    setSortOrder(sortOrder) {
        this.sortOrder = sortOrder;
        this.keyModified.set("sort_order", 1);
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
exports.MasterModel = RelatedListProperties;
exports.RelatedListProperties = RelatedListProperties;
//# sourceMappingURL=related_list_properties.js.map