"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Info = exports.MasterModel = void 0;
class Info {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the perPage
     * @returns A number representing the perPage
     */
    getPerPage() {
        return this.perPage;
    }
    /**
     * The method to set the value to perPage
     * @param perPage A number representing the perPage
     */
    setPerPage(perPage) {
        this.perPage = perPage;
        this.keyModified.set("per_page", 1);
    }
    /**
     * The method to get the count
     * @returns A number representing the count
     */
    getCount() {
        return this.count;
    }
    /**
     * The method to set the value to count
     * @param count A number representing the count
     */
    setCount(count) {
        this.count = count;
        this.keyModified.set("count", 1);
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
     * The method to get the moreRecords
     * @returns A boolean representing the moreRecords
     */
    getMoreRecords() {
        return this.moreRecords;
    }
    /**
     * The method to set the value to moreRecords
     * @param moreRecords A boolean representing the moreRecords
     */
    setMoreRecords(moreRecords) {
        this.moreRecords = moreRecords;
        this.keyModified.set("more_records", 1);
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
exports.MasterModel = Info;
exports.Info = Info;
//# sourceMappingURL=info.js.map