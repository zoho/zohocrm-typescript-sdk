"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiSelectLookup = exports.MasterModel = void 0;
class MultiSelectLookup {
    constructor() {
        this.keyModified = new Map();
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
     * The method to get the linkingModule
     * @returns A string representing the linkingModule
     */
    getLinkingModule() {
        return this.linkingModule;
    }
    /**
     * The method to set the value to linkingModule
     * @param linkingModule A string representing the linkingModule
     */
    setLinkingModule(linkingModule) {
        this.linkingModule = linkingModule;
        this.keyModified.set("linking_module", 1);
    }
    /**
     * The method to get the lookupApiname
     * @returns A string representing the lookupApiname
     */
    getLookupApiname() {
        return this.lookupApiname;
    }
    /**
     * The method to set the value to lookupApiname
     * @param lookupApiname A string representing the lookupApiname
     */
    setLookupApiname(lookupApiname) {
        this.lookupApiname = lookupApiname;
        this.keyModified.set("lookup_apiname", 1);
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
     * The method to get the connectedlookupApiname
     * @returns A string representing the connectedlookupApiname
     */
    getConnectedlookupApiname() {
        return this.connectedlookupApiname;
    }
    /**
     * The method to set the value to connectedlookupApiname
     * @param connectedlookupApiname A string representing the connectedlookupApiname
     */
    setConnectedlookupApiname(connectedlookupApiname) {
        this.connectedlookupApiname = connectedlookupApiname;
        this.keyModified.set("connectedlookup_apiname", 1);
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
exports.MasterModel = MultiSelectLookup;
exports.MultiSelectLookup = MultiSelectLookup;
//# sourceMappingURL=multi_select_lookup.js.map