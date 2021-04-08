"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolTip = exports.MasterModel = void 0;
class ToolTip {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the name
     * @returns A string representing the name
     */
    getName() {
        return this.name;
    }
    /**
     * The method to set the value to name
     * @param name A string representing the name
     */
    setName(name) {
        this.name = name;
        this.keyModified.set("name", 1);
    }
    /**
     * The method to get the value
     * @returns A string representing the value
     */
    getValue() {
        return this.value;
    }
    /**
     * The method to set the value to value
     * @param value A string representing the value
     */
    setValue(value) {
        this.value = value;
        this.keyModified.set("value", 1);
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
exports.MasterModel = ToolTip;
exports.ToolTip = ToolTip;
//# sourceMappingURL=tool_tip.js.map