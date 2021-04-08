"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Properties = exports.MasterModel = void 0;
class Properties {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the reorderRows
     * @returns A boolean representing the reorderRows
     */
    getReorderRows() {
        return this.reorderRows;
    }
    /**
     * The method to set the value to reorderRows
     * @param reorderRows A boolean representing the reorderRows
     */
    setReorderRows(reorderRows) {
        this.reorderRows = reorderRows;
        this.keyModified.set("reorder_rows", 1);
    }
    /**
     * The method to get the tooltip
     * @returns An instance of ToolTip
     */
    getTooltip() {
        return this.tooltip;
    }
    /**
     * The method to set the value to tooltip
     * @param tooltip An instance of ToolTip
     */
    setTooltip(tooltip) {
        this.tooltip = tooltip;
        this.keyModified.set("tooltip", 1);
    }
    /**
     * The method to get the maximumRows
     * @returns A number representing the maximumRows
     */
    getMaximumRows() {
        return this.maximumRows;
    }
    /**
     * The method to set the value to maximumRows
     * @param maximumRows A number representing the maximumRows
     */
    setMaximumRows(maximumRows) {
        this.maximumRows = maximumRows;
        this.keyModified.set("maximum_rows", 1);
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
exports.MasterModel = Properties;
exports.Properties = Properties;
//# sourceMappingURL=properties.js.map