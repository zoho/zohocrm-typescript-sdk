"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Territory = exports.MasterModel = void 0;
class Territory {
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
     * The method to get the includeChild
     * @returns A boolean representing the includeChild
     */
    getIncludeChild() {
        return this.includeChild;
    }
    /**
     * The method to set the value to includeChild
     * @param includeChild A boolean representing the includeChild
     */
    setIncludeChild(includeChild) {
        this.includeChild = includeChild;
        this.keyModified.set("include_child", 1);
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
exports.MasterModel = Territory;
exports.Territory = Territory;
//# sourceMappingURL=territory.js.map