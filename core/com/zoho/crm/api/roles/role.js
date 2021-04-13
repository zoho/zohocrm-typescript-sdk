"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = exports.MasterModel = void 0;
class Role {
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
     * The method to get the forecastManager
     * @returns An instance of User
     */
    getForecastManager() {
        return this.forecastManager;
    }
    /**
     * The method to set the value to forecastManager
     * @param forecastManager An instance of User
     */
    setForecastManager(forecastManager) {
        this.forecastManager = forecastManager;
        this.keyModified.set("forecast_manager", 1);
    }
    /**
     * The method to get the shareWithPeers
     * @returns A boolean representing the shareWithPeers
     */
    getShareWithPeers() {
        return this.shareWithPeers;
    }
    /**
     * The method to set the value to shareWithPeers
     * @param shareWithPeers A boolean representing the shareWithPeers
     */
    setShareWithPeers(shareWithPeers) {
        this.shareWithPeers = shareWithPeers;
        this.keyModified.set("share_with_peers", 1);
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
     * The method to get the description
     * @returns A string representing the description
     */
    getDescription() {
        return this.description;
    }
    /**
     * The method to set the value to description
     * @param description A string representing the description
     */
    setDescription(description) {
        this.description = description;
        this.keyModified.set("description", 1);
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
     * The method to get the reportingTo
     * @returns An instance of User
     */
    getReportingTo() {
        return this.reportingTo;
    }
    /**
     * The method to set the value to reportingTo
     * @param reportingTo An instance of User
     */
    setReportingTo(reportingTo) {
        this.reportingTo = reportingTo;
        this.keyModified.set("reporting_to", 1);
    }
    /**
     * The method to get the adminUser
     * @returns A boolean representing the adminUser
     */
    getAdminUser() {
        return this.adminUser;
    }
    /**
     * The method to set the value to adminUser
     * @param adminUser A boolean representing the adminUser
     */
    setAdminUser(adminUser) {
        this.adminUser = adminUser;
        this.keyModified.set("admin_user", 1);
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
exports.MasterModel = Role;
exports.Role = Role;
//# sourceMappingURL=role.js.map