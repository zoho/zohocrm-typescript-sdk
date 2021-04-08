"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileBodyWrapper = exports.MasterModel = void 0;
class FileBodyWrapper {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the file
     * @returns An instance of StreamWrapper
     */
    getFile() {
        return this.file;
    }
    /**
     * The method to set the value to file
     * @param file An instance of StreamWrapper
     */
    setFile(file) {
        this.file = file;
        this.keyModified.set("file", 1);
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
exports.MasterModel = FileBodyWrapper;
exports.FileBodyWrapper = FileBodyWrapper;
//# sourceMappingURL=file_body_wrapper.js.map