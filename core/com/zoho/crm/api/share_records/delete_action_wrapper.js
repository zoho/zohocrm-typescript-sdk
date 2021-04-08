"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteActionWrapper = exports.MasterModel = void 0;
class DeleteActionWrapper {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the share
     * @returns An instance of DeleteActionResponse
     */
    getShare() {
        return this.share;
    }
    /**
     * The method to set the value to share
     * @param share An instance of DeleteActionResponse
     */
    setShare(share) {
        this.share = share;
        this.keyModified.set("share", 1);
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
exports.MasterModel = DeleteActionWrapper;
exports.DeleteActionWrapper = DeleteActionWrapper;
//# sourceMappingURL=delete_action_wrapper.js.map