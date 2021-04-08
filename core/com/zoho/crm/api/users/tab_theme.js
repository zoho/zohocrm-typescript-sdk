"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabTheme = exports.MasterModel = void 0;
class TabTheme {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the fontColor
     * @returns A string representing the fontColor
     */
    getFontColor() {
        return this.fontColor;
    }
    /**
     * The method to set the value to fontColor
     * @param fontColor A string representing the fontColor
     */
    setFontColor(fontColor) {
        this.fontColor = fontColor;
        this.keyModified.set("font_color", 1);
    }
    /**
     * The method to get the background
     * @returns A string representing the background
     */
    getBackground() {
        return this.background;
    }
    /**
     * The method to set the value to background
     * @param background A string representing the background
     */
    setBackground(background) {
        this.background = background;
        this.keyModified.set("background", 1);
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
exports.MasterModel = TabTheme;
exports.TabTheme = TabTheme;
//# sourceMappingURL=tab_theme.js.map