"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicenseDetails = exports.MasterModel = void 0;
class LicenseDetails {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the paidExpiry
     * @returns An instance of Date
     */
    getPaidExpiry() {
        return this.paidExpiry;
    }
    /**
     * The method to set the value to paidExpiry
     * @param paidExpiry An instance of Date
     */
    setPaidExpiry(paidExpiry) {
        this.paidExpiry = paidExpiry;
        this.keyModified.set("paid_expiry", 1);
    }
    /**
     * The method to get the usersLicensePurchased
     * @returns A bigint representing the usersLicensePurchased
     */
    getUsersLicensePurchased() {
        return this.usersLicensePurchased;
    }
    /**
     * The method to set the value to usersLicensePurchased
     * @param usersLicensePurchased A bigint representing the usersLicensePurchased
     */
    setUsersLicensePurchased(usersLicensePurchased) {
        this.usersLicensePurchased = usersLicensePurchased;
        this.keyModified.set("users_license_purchased", 1);
    }
    /**
     * The method to get the trialType
     * @returns A string representing the trialType
     */
    getTrialType() {
        return this.trialType;
    }
    /**
     * The method to set the value to trialType
     * @param trialType A string representing the trialType
     */
    setTrialType(trialType) {
        this.trialType = trialType;
        this.keyModified.set("trial_type", 1);
    }
    /**
     * The method to get the trialExpiry
     * @returns A string representing the trialExpiry
     */
    getTrialExpiry() {
        return this.trialExpiry;
    }
    /**
     * The method to set the value to trialExpiry
     * @param trialExpiry A string representing the trialExpiry
     */
    setTrialExpiry(trialExpiry) {
        this.trialExpiry = trialExpiry;
        this.keyModified.set("trial_expiry", 1);
    }
    /**
     * The method to get the paid
     * @returns A boolean representing the paid
     */
    getPaid() {
        return this.paid;
    }
    /**
     * The method to set the value to paid
     * @param paid A boolean representing the paid
     */
    setPaid(paid) {
        this.paid = paid;
        this.keyModified.set("paid", 1);
    }
    /**
     * The method to get the paidType
     * @returns A string representing the paidType
     */
    getPaidType() {
        return this.paidType;
    }
    /**
     * The method to set the value to paidType
     * @param paidType A string representing the paidType
     */
    setPaidType(paidType) {
        this.paidType = paidType;
        this.keyModified.set("paid_type", 1);
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
exports.MasterModel = LicenseDetails;
exports.LicenseDetails = LicenseDetails;
//# sourceMappingURL=license_details.js.map