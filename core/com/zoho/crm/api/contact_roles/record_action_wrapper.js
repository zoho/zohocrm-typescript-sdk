"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordActionWrapper = exports.MasterModel = void 0;
class RecordActionWrapper {
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
exports.MasterModel = RecordActionWrapper;
exports.RecordActionWrapper = RecordActionWrapper;
//# sourceMappingURL=record_action_wrapper.js.map