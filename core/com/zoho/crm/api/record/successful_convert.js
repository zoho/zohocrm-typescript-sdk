"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessfulConvert = exports.MasterModel = void 0;
class SuccessfulConvert {
    constructor() {
        this.keyModified = new Map();
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
     * The method to get the deals
     * @returns A string representing the deals
     */
    getDeals() {
        return this.deals;
    }
    /**
     * The method to set the value to deals
     * @param deals A string representing the deals
     */
    setDeals(deals) {
        this.deals = deals;
        this.keyModified.set("Deals", 1);
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
exports.MasterModel = SuccessfulConvert;
exports.SuccessfulConvert = SuccessfulConvert;
//# sourceMappingURL=successful_convert.js.map