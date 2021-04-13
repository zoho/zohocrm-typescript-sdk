"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestWrapper = exports.MasterModel = void 0;
class RequestWrapper {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the users
     * @returns An Array representing the users
     */
    getUsers() {
        return this.users;
    }
    /**
     * The method to set the value to users
     * @param users An Array representing the users
     */
    setUsers(users) {
        this.users = users;
        this.keyModified.set("users", 1);
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
exports.MasterModel = RequestWrapper;
exports.RequestWrapper = RequestWrapper;
//# sourceMappingURL=request_wrapper.js.map