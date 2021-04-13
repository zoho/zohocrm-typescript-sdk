"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordBodyWrapper = exports.MasterModel = void 0;
class RecordBodyWrapper {
    constructor() {
        this.keyModified = new Map();
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
        this.keyModified.set("data", 1);
    }
    isKeyModified(key) {
        if (this.keyModified.has(key)) {
            return this.keyModified.get(key);
        }
        return null;
    }
    setKeyModified(key, modification) {
        this.keyModified.set(key, modification);
    }
}
exports.MasterModel = RecordBodyWrapper;
exports.RecordBodyWrapper = RecordBodyWrapper;
//# sourceMappingURL=record_body_wrapper.js.map