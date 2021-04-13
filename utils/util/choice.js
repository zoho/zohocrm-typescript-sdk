"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Choice = exports.MasterModel = void 0;
/**
 * Common Class to provide or obtain a value, when there are multiple supported values.
 */
class Choice {
    constructor(value) {
        this.value = value;
    }
    /**
     * getValue
     */
    getValue() {
        return this.value;
    }
}
exports.MasterModel = Choice;
exports.Choice = Choice;
//# sourceMappingURL=choice.js.map