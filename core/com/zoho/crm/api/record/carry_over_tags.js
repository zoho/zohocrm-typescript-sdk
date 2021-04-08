"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarryOverTags = exports.MasterModel = void 0;
class CarryOverTags {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the contacts
     * @returns An Array representing the contacts
     */
    getContacts() {
        return this.contacts;
    }
    /**
     * The method to set the value to contacts
     * @param contacts An Array representing the contacts
     */
    setContacts(contacts) {
        this.contacts = contacts;
        this.keyModified.set("Contacts", 1);
    }
    /**
     * The method to get the accounts
     * @returns An Array representing the accounts
     */
    getAccounts() {
        return this.accounts;
    }
    /**
     * The method to set the value to accounts
     * @param accounts An Array representing the accounts
     */
    setAccounts(accounts) {
        this.accounts = accounts;
        this.keyModified.set("Accounts", 1);
    }
    /**
     * The method to get the deals
     * @returns An Array representing the deals
     */
    getDeals() {
        return this.deals;
    }
    /**
     * The method to set the value to deals
     * @param deals An Array representing the deals
     */
    setDeals(deals) {
        this.deals = deals;
        this.keyModified.set("Deals", 1);
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
exports.MasterModel = CarryOverTags;
exports.CarryOverTags = CarryOverTags;
//# sourceMappingURL=carry_over_tags.js.map