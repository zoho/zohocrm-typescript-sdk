"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomView = exports.MasterModel = void 0;
class CustomView {
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
     * The method to get the name
     * @returns A string representing the name
     */
    getName() {
        return this.name;
    }
    /**
     * The method to set the value to name
     * @param name A string representing the name
     */
    setName(name) {
        this.name = name;
        this.keyModified.set("name", 1);
    }
    /**
     * The method to get the systemName
     * @returns A string representing the systemName
     */
    getSystemName() {
        return this.systemName;
    }
    /**
     * The method to set the value to systemName
     * @param systemName A string representing the systemName
     */
    setSystemName(systemName) {
        this.systemName = systemName;
        this.keyModified.set("system_name", 1);
    }
    /**
     * The method to get the displayValue
     * @returns A string representing the displayValue
     */
    getDisplayValue() {
        return this.displayValue;
    }
    /**
     * The method to set the value to displayValue
     * @param displayValue A string representing the displayValue
     */
    setDisplayValue(displayValue) {
        this.displayValue = displayValue;
        this.keyModified.set("display_value", 1);
    }
    /**
     * The method to get the sharedType
     * @returns A string representing the sharedType
     */
    getSharedType() {
        return this.sharedType;
    }
    /**
     * The method to set the value to sharedType
     * @param sharedType A string representing the sharedType
     */
    setSharedType(sharedType) {
        this.sharedType = sharedType;
        this.keyModified.set("shared_type", 1);
    }
    /**
     * The method to get the category
     * @returns A string representing the category
     */
    getCategory() {
        return this.category;
    }
    /**
     * The method to set the value to category
     * @param category A string representing the category
     */
    setCategory(category) {
        this.category = category;
        this.keyModified.set("category", 1);
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
     * The method to get the favorite
     * @returns A number representing the favorite
     */
    getFavorite() {
        return this.favorite;
    }
    /**
     * The method to set the value to favorite
     * @param favorite A number representing the favorite
     */
    setFavorite(favorite) {
        this.favorite = favorite;
        this.keyModified.set("favorite", 1);
    }
    /**
     * The method to get the offline
     * @returns A boolean representing the offline
     */
    getOffline() {
        return this.offline;
    }
    /**
     * The method to set the value to offline
     * @param offline A boolean representing the offline
     */
    setOffline(offline) {
        this.offline = offline;
        this.keyModified.set("offline", 1);
    }
    /**
     * The method to get the default
     * @returns A boolean representing the default1
     */
    getDefault() {
        return this.default1;
    }
    /**
     * The method to set the value to default
     * @param default1 A boolean representing the default1
     */
    setDefault(default1) {
        this.default1 = default1;
        this.keyModified.set("default", 1);
    }
    /**
     * The method to get the systemDefined
     * @returns A boolean representing the systemDefined
     */
    getSystemDefined() {
        return this.systemDefined;
    }
    /**
     * The method to set the value to systemDefined
     * @param systemDefined A boolean representing the systemDefined
     */
    setSystemDefined(systemDefined) {
        this.systemDefined = systemDefined;
        this.keyModified.set("system_defined", 1);
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
     * The method to get the sharedDetails
     * @returns An Array representing the sharedDetails
     */
    getSharedDetails() {
        return this.sharedDetails;
    }
    /**
     * The method to set the value to sharedDetails
     * @param sharedDetails An Array representing the sharedDetails
     */
    setSharedDetails(sharedDetails) {
        this.sharedDetails = sharedDetails;
        this.keyModified.set("shared_details", 1);
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
exports.MasterModel = CustomView;
exports.CustomView = CustomView;
//# sourceMappingURL=custom_view.js.map