"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedThrough = exports.MasterModel = void 0;
class SharedThrough {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the module
     * @returns An instance of Module
     */
    getModule() {
        return this.module;
    }
    /**
     * The method to set the value to module
     * @param module An instance of Module
     */
    setModule(module) {
        this.module = module;
        this.keyModified.set("module", 1);
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
     * The method to get the entityName
     * @returns A string representing the entityName
     */
    getEntityName() {
        return this.entityName;
    }
    /**
     * The method to set the value to entityName
     * @param entityName A string representing the entityName
     */
    setEntityName(entityName) {
        this.entityName = entityName;
        this.keyModified.set("entity_name", 1);
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
exports.MasterModel = SharedThrough;
exports.SharedThrough = SharedThrough;
//# sourceMappingURL=shared_through.js.map