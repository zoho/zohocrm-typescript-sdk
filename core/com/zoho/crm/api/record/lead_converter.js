"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadConverter = exports.MasterModel = void 0;
class LeadConverter {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the overwrite
     * @returns A boolean representing the overwrite
     */
    getOverwrite() {
        return this.overwrite;
    }
    /**
     * The method to set the value to overwrite
     * @param overwrite A boolean representing the overwrite
     */
    setOverwrite(overwrite) {
        this.overwrite = overwrite;
        this.keyModified.set("overwrite", 1);
    }
    /**
     * The method to get the notifyLeadOwner
     * @returns A boolean representing the notifyLeadOwner
     */
    getNotifyLeadOwner() {
        return this.notifyLeadOwner;
    }
    /**
     * The method to set the value to notifyLeadOwner
     * @param notifyLeadOwner A boolean representing the notifyLeadOwner
     */
    setNotifyLeadOwner(notifyLeadOwner) {
        this.notifyLeadOwner = notifyLeadOwner;
        this.keyModified.set("notify_lead_owner", 1);
    }
    /**
     * The method to get the notifyNewEntityOwner
     * @returns A boolean representing the notifyNewEntityOwner
     */
    getNotifyNewEntityOwner() {
        return this.notifyNewEntityOwner;
    }
    /**
     * The method to set the value to notifyNewEntityOwner
     * @param notifyNewEntityOwner A boolean representing the notifyNewEntityOwner
     */
    setNotifyNewEntityOwner(notifyNewEntityOwner) {
        this.notifyNewEntityOwner = notifyNewEntityOwner;
        this.keyModified.set("notify_new_entity_owner", 1);
    }
    /**
     * The method to get the accounts
     * @returns A string representing the accounts
     */
    getAccounts() {
        return this.accounts;
    }
    /**
     * The method to set the value to accounts
     * @param accounts A string representing the accounts
     */
    setAccounts(accounts) {
        this.accounts = accounts;
        this.keyModified.set("Accounts", 1);
    }
    /**
     * The method to get the contacts
     * @returns A string representing the contacts
     */
    getContacts() {
        return this.contacts;
    }
    /**
     * The method to set the value to contacts
     * @param contacts A string representing the contacts
     */
    setContacts(contacts) {
        this.contacts = contacts;
        this.keyModified.set("Contacts", 1);
    }
    /**
     * The method to get the assignTo
     * @returns A string representing the assignTo
     */
    getAssignTo() {
        return this.assignTo;
    }
    /**
     * The method to set the value to assignTo
     * @param assignTo A string representing the assignTo
     */
    setAssignTo(assignTo) {
        this.assignTo = assignTo;
        this.keyModified.set("assign_to", 1);
    }
    /**
     * The method to get the deals
     * @returns An instance of Record
     */
    getDeals() {
        return this.deals;
    }
    /**
     * The method to set the value to deals
     * @param deals An instance of Record
     */
    setDeals(deals) {
        this.deals = deals;
        this.keyModified.set("Deals", 1);
    }
    /**
     * The method to get the carryOverTags
     * @returns An instance of CarryOverTags
     */
    getCarryOverTags() {
        return this.carryOverTags;
    }
    /**
     * The method to set the value to carryOverTags
     * @param carryOverTags An instance of CarryOverTags
     */
    setCarryOverTags(carryOverTags) {
        this.carryOverTags = carryOverTags;
        this.keyModified.set("carry_over_tags", 1);
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
exports.MasterModel = LeadConverter;
exports.LeadConverter = LeadConverter;
//# sourceMappingURL=lead_converter.js.map