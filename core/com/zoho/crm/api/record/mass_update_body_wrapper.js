"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MassUpdateBodyWrapper = exports.MasterModel = void 0;
class MassUpdateBodyWrapper {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the data
     * @returns An Array representing the data
     */
    getData() {
        return this.data;
    }
    /**
     * The method to set the value to data
     * @param data An Array representing the data
     */
    setData(data) {
        this.data = data;
        this.keyModified.set("data", 1);
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
     * The method to get the ids
     * @returns An Array representing the ids
     */
    getIds() {
        return this.ids;
    }
    /**
     * The method to set the value to ids
     * @param ids An Array representing the ids
     */
    setIds(ids) {
        this.ids = ids;
        this.keyModified.set("ids", 1);
    }
    /**
     * The method to get the territory
     * @returns An instance of Territory
     */
    getTerritory() {
        return this.territory;
    }
    /**
     * The method to set the value to territory
     * @param territory An instance of Territory
     */
    setTerritory(territory) {
        this.territory = territory;
        this.keyModified.set("territory", 1);
    }
    /**
     * The method to get the overWrite
     * @returns A boolean representing the overWrite
     */
    getOverWrite() {
        return this.overWrite;
    }
    /**
     * The method to set the value to overWrite
     * @param overWrite A boolean representing the overWrite
     */
    setOverWrite(overWrite) {
        this.overWrite = overWrite;
        this.keyModified.set("over_write", 1);
    }
    /**
     * The method to get the criteria
     * @returns An Array representing the criteria
     */
    getCriteria() {
        return this.criteria;
    }
    /**
     * The method to set the value to criteria
     * @param criteria An Array representing the criteria
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
exports.MasterModel = MassUpdateBodyWrapper;
exports.MassUpdateBodyWrapper = MassUpdateBodyWrapper;
//# sourceMappingURL=mass_update_body_wrapper.js.map