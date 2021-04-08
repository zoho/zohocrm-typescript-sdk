"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatedList = exports.MasterModel = void 0;
class RelatedList {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the id
     * @returns A bigint representing the id
     */
    getId() {
        return this.id;
    }
    /**
     * The method to set the value to id
     * @param id A bigint representing the id
     */
    setId(id) {
        this.id = id;
        this.keyModified.set("id", 1);
    }
    /**
     * The method to get the sequenceNumber
     * @returns A string representing the sequenceNumber
     */
    getSequenceNumber() {
        return this.sequenceNumber;
    }
    /**
     * The method to set the value to sequenceNumber
     * @param sequenceNumber A string representing the sequenceNumber
     */
    setSequenceNumber(sequenceNumber) {
        this.sequenceNumber = sequenceNumber;
        this.keyModified.set("sequence_number", 1);
    }
    /**
     * The method to get the displayLabel
     * @returns A string representing the displayLabel
     */
    getDisplayLabel() {
        return this.displayLabel;
    }
    /**
     * The method to set the value to displayLabel
     * @param displayLabel A string representing the displayLabel
     */
    setDisplayLabel(displayLabel) {
        this.displayLabel = displayLabel;
        this.keyModified.set("display_label", 1);
    }
    /**
     * The method to get the apiName
     * @returns A string representing the apiName
     */
    getAPIName() {
        return this.apiName;
    }
    /**
     * The method to set the value to apiName
     * @param apiName A string representing the apiName
     */
    setAPIName(apiName) {
        this.apiName = apiName;
        this.keyModified.set("api_name", 1);
    }
    /**
     * The method to get the module
     * @returns A string representing the module
     */
    getModule() {
        return this.module;
    }
    /**
     * The method to set the value to module
     * @param module A string representing the module
     */
    setModule(module) {
        this.module = module;
        this.keyModified.set("module", 1);
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
     * The method to get the action
     * @returns A string representing the action
     */
    getAction() {
        return this.action;
    }
    /**
     * The method to set the value to action
     * @param action A string representing the action
     */
    setAction(action) {
        this.action = action;
        this.keyModified.set("action", 1);
    }
    /**
     * The method to get the href
     * @returns A string representing the href
     */
    getHref() {
        return this.href;
    }
    /**
     * The method to set the value to href
     * @param href A string representing the href
     */
    setHref(href) {
        this.href = href;
        this.keyModified.set("href", 1);
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
     * The method to get the connectedmodule
     * @returns A string representing the connectedmodule
     */
    getConnectedmodule() {
        return this.connectedmodule;
    }
    /**
     * The method to set the value to connectedmodule
     * @param connectedmodule A string representing the connectedmodule
     */
    setConnectedmodule(connectedmodule) {
        this.connectedmodule = connectedmodule;
        this.keyModified.set("connectedmodule", 1);
    }
    /**
     * The method to get the linkingmodule
     * @returns A string representing the linkingmodule
     */
    getLinkingmodule() {
        return this.linkingmodule;
    }
    /**
     * The method to set the value to linkingmodule
     * @param linkingmodule A string representing the linkingmodule
     */
    setLinkingmodule(linkingmodule) {
        this.linkingmodule = linkingmodule;
        this.keyModified.set("linkingmodule", 1);
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
exports.MasterModel = RelatedList;
exports.RelatedList = RelatedList;
//# sourceMappingURL=related_list.js.map