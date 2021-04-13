"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomizeInfo = exports.MasterModel = void 0;
class CustomizeInfo {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the notesDesc
     * @returns A boolean representing the notesDesc
     */
    getNotesDesc() {
        return this.notesDesc;
    }
    /**
     * The method to set the value to notesDesc
     * @param notesDesc A boolean representing the notesDesc
     */
    setNotesDesc(notesDesc) {
        this.notesDesc = notesDesc;
        this.keyModified.set("notes_desc", 1);
    }
    /**
     * The method to get the showRightPanel
     * @returns A string representing the showRightPanel
     */
    getShowRightPanel() {
        return this.showRightPanel;
    }
    /**
     * The method to set the value to showRightPanel
     * @param showRightPanel A string representing the showRightPanel
     */
    setShowRightPanel(showRightPanel) {
        this.showRightPanel = showRightPanel;
        this.keyModified.set("show_right_panel", 1);
    }
    /**
     * The method to get the bcView
     * @returns A string representing the bcView
     */
    getBcView() {
        return this.bcView;
    }
    /**
     * The method to set the value to bcView
     * @param bcView A string representing the bcView
     */
    setBcView(bcView) {
        this.bcView = bcView;
        this.keyModified.set("bc_view", 1);
    }
    /**
     * The method to get the showHome
     * @returns A boolean representing the showHome
     */
    getShowHome() {
        return this.showHome;
    }
    /**
     * The method to set the value to showHome
     * @param showHome A boolean representing the showHome
     */
    setShowHome(showHome) {
        this.showHome = showHome;
        this.keyModified.set("show_home", 1);
    }
    /**
     * The method to get the showDetailView
     * @returns A boolean representing the showDetailView
     */
    getShowDetailView() {
        return this.showDetailView;
    }
    /**
     * The method to set the value to showDetailView
     * @param showDetailView A boolean representing the showDetailView
     */
    setShowDetailView(showDetailView) {
        this.showDetailView = showDetailView;
        this.keyModified.set("show_detail_view", 1);
    }
    /**
     * The method to get the unpinRecentItem
     * @returns A string representing the unpinRecentItem
     */
    getUnpinRecentItem() {
        return this.unpinRecentItem;
    }
    /**
     * The method to set the value to unpinRecentItem
     * @param unpinRecentItem A string representing the unpinRecentItem
     */
    setUnpinRecentItem(unpinRecentItem) {
        this.unpinRecentItem = unpinRecentItem;
        this.keyModified.set("unpin_recent_item", 1);
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
exports.MasterModel = CustomizeInfo;
exports.CustomizeInfo = CustomizeInfo;
//# sourceMappingURL=customize_info.js.map