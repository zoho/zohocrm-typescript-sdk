"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionWrapper = exports.MasterModel = void 0;
class ActionWrapper {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the share
     * @returns An Array representing the share
     */
    getShare() {
        return this.share;
    }
    /**
     * The method to set the value to share
     * @param share An Array representing the share
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
exports.MasterModel = ActionWrapper;
exports.ActionWrapper = ActionWrapper;
//# sourceMappingURL=action_wrapper.js.map