"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyWrapper = exports.MasterModel = void 0;
class BodyWrapper {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the tags
     * @returns An Array representing the tags
     */
    getTags() {
        return this.tags;
    }
    /**
     * The method to set the value to tags
     * @param tags An Array representing the tags
     */
    setTags(tags) {
        this.tags = tags;
        this.keyModified.set("tags", 1);
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
exports.MasterModel = BodyWrapper;
exports.BodyWrapper = BodyWrapper;
//# sourceMappingURL=body_wrapper.js.map