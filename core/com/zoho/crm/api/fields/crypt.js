"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crypt = exports.MasterModel = void 0;
class Crypt {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the mode
     * @returns A string representing the mode
     */
    getMode() {
        return this.mode;
    }
    /**
     * The method to set the value to mode
     * @param mode A string representing the mode
     */
    setMode(mode) {
        this.mode = mode;
        this.keyModified.set("mode", 1);
    }
    /**
     * The method to get the column
     * @returns A string representing the column
     */
    getColumn() {
        return this.column;
    }
    /**
     * The method to set the value to column
     * @param column A string representing the column
     */
    setColumn(column) {
        this.column = column;
        this.keyModified.set("column", 1);
    }
    /**
     * The method to get the encfldids
     * @returns An Array representing the encfldids
     */
    getEncfldids() {
        return this.encfldids;
    }
    /**
     * The method to set the value to encfldids
     * @param encfldids An Array representing the encfldids
     */
    setEncfldids(encfldids) {
        this.encfldids = encfldids;
        this.keyModified.set("encFldIds", 1);
    }
    /**
     * The method to get the notify
     * @returns A string representing the notify
     */
    getNotify() {
        return this.notify;
    }
    /**
     * The method to set the value to notify
     * @param notify A string representing the notify
     */
    setNotify(notify) {
        this.notify = notify;
        this.keyModified.set("notify", 1);
    }
    /**
     * The method to get the table
     * @returns A string representing the table
     */
    getTable() {
        return this.table;
    }
    /**
     * The method to set the value to table
     * @param table A string representing the table
     */
    setTable(table) {
        this.table = table;
        this.keyModified.set("table", 1);
    }
    /**
     * The method to get the status
     * @returns A number representing the status
     */
    getStatus() {
        return this.status;
    }
    /**
     * The method to set the value to status
     * @param status A number representing the status
     */
    setStatus(status) {
        this.status = status;
        this.keyModified.set("status", 1);
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
exports.MasterModel = Crypt;
exports.Crypt = Crypt;
//# sourceMappingURL=crypt.js.map