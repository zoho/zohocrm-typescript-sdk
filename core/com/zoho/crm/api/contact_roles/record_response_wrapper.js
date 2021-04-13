"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordResponseWrapper = exports.MasterModel = void 0;
class RecordResponseWrapper {
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
    getInfo() {
        return this.info;
    }
    setInfo(info) {
        this.info = info;
        this.keyModified.set("info", 1);
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
exports.MasterModel = RecordResponseWrapper;
exports.RecordResponseWrapper = RecordResponseWrapper;
//# sourceMappingURL=record_response_wrapper.js.map