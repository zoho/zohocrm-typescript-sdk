"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewType = exports.MasterModel = void 0;
class ViewType {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the view
     * @returns A boolean representing the view
     */
    getView() {
        return this.view;
    }
    /**
     * The method to set the value to view
     * @param view A boolean representing the view
     */
    setView(view) {
        this.view = view;
        this.keyModified.set("view", 1);
    }
    /**
     * The method to get the edit
     * @returns A boolean representing the edit
     */
    getEdit() {
        return this.edit;
    }
    /**
     * The method to set the value to edit
     * @param edit A boolean representing the edit
     */
    setEdit(edit) {
        this.edit = edit;
        this.keyModified.set("edit", 1);
    }
    /**
     * The method to get the create
     * @returns A boolean representing the create
     */
    getCreate() {
        return this.create;
    }
    /**
     * The method to set the value to create
     * @param create A boolean representing the create
     */
    setCreate(create) {
        this.create = create;
        this.keyModified.set("create", 1);
    }
    /**
     * The method to get the quickCreate
     * @returns A boolean representing the quickCreate
     */
    getQuickCreate() {
        return this.quickCreate;
    }
    /**
     * The method to set the value to quickCreate
     * @param quickCreate A boolean representing the quickCreate
     */
    setQuickCreate(quickCreate) {
        this.quickCreate = quickCreate;
        this.keyModified.set("quick_create", 1);
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
exports.MasterModel = ViewType;
exports.ViewType = ViewType;
//# sourceMappingURL=view_type.js.map