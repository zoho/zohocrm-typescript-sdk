"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Theme = exports.MasterModel = void 0;
class Theme {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the normalTab
     * @returns An instance of TabTheme
     */
    getNormalTab() {
        return this.normalTab;
    }
    /**
     * The method to set the value to normalTab
     * @param normalTab An instance of TabTheme
     */
    setNormalTab(normalTab) {
        this.normalTab = normalTab;
        this.keyModified.set("normal_tab", 1);
    }
    /**
     * The method to get the selectedTab
     * @returns An instance of TabTheme
     */
    getSelectedTab() {
        return this.selectedTab;
    }
    /**
     * The method to set the value to selectedTab
     * @param selectedTab An instance of TabTheme
     */
    setSelectedTab(selectedTab) {
        this.selectedTab = selectedTab;
        this.keyModified.set("selected_tab", 1);
    }
    /**
     * The method to get the newBackground
     * @returns A string representing the newBackground
     */
    getNewBackground() {
        return this.newBackground;
    }
    /**
     * The method to set the value to newBackground
     * @param newBackground A string representing the newBackground
     */
    setNewBackground(newBackground) {
        this.newBackground = newBackground;
        this.keyModified.set("new_background", 1);
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
     * The method to get the screen
     * @returns A string representing the screen
     */
    getScreen() {
        return this.screen;
    }
    /**
     * The method to set the value to screen
     * @param screen A string representing the screen
     */
    setScreen(screen) {
        this.screen = screen;
        this.keyModified.set("screen", 1);
    }
    /**
     * The method to get the type
     * @returns A string representing the type
     */
    getType() {
        return this.type;
    }
    /**
     * The method to set the value to type
     * @param type A string representing the type
     */
    setType(type) {
        this.type = type;
        this.keyModified.set("type", 1);
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
exports.MasterModel = Theme;
exports.Theme = Theme;
//# sourceMappingURL=theme.js.map