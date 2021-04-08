"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consent = exports.MasterModel = void 0;
const record_1 = require("./record");
class Consent extends record_1.Record {
    /**
     * The method to get the owner
     * @returns An instance of User
     */
    getOwner() {
        return this.getKeyValue("Owner");
    }
    /**
     * The method to set the value to owner
     * @param owner An instance of User
     */
    setOwner(owner) {
        this.addKeyValue("Owner", owner);
    }
    /**
     * The method to get the contactThroughEmail
     * @returns A boolean representing the contactThroughEmail
     */
    getContactThroughEmail() {
        return this.getKeyValue("Contact_Through_Email");
    }
    /**
     * The method to set the value to contactThroughEmail
     * @param contactThroughEmail A boolean representing the contactThroughEmail
     */
    setContactThroughEmail(contactThroughEmail) {
        this.addKeyValue("Contact_Through_Email", contactThroughEmail);
    }
    /**
     * The method to get the contactThroughSocial
     * @returns A boolean representing the contactThroughSocial
     */
    getContactThroughSocial() {
        return this.getKeyValue("Contact_Through_Social");
    }
    /**
     * The method to set the value to contactThroughSocial
     * @param contactThroughSocial A boolean representing the contactThroughSocial
     */
    setContactThroughSocial(contactThroughSocial) {
        this.addKeyValue("Contact_Through_Social", contactThroughSocial);
    }
    /**
     * The method to get the contactThroughSurvey
     * @returns A boolean representing the contactThroughSurvey
     */
    getContactThroughSurvey() {
        return this.getKeyValue("Contact_Through_Survey");
    }
    /**
     * The method to set the value to contactThroughSurvey
     * @param contactThroughSurvey A boolean representing the contactThroughSurvey
     */
    setContactThroughSurvey(contactThroughSurvey) {
        this.addKeyValue("Contact_Through_Survey", contactThroughSurvey);
    }
    /**
     * The method to get the contactThroughPhone
     * @returns A boolean representing the contactThroughPhone
     */
    getContactThroughPhone() {
        return this.getKeyValue("Contact_Through_Phone");
    }
    /**
     * The method to set the value to contactThroughPhone
     * @param contactThroughPhone A boolean representing the contactThroughPhone
     */
    setContactThroughPhone(contactThroughPhone) {
        this.addKeyValue("Contact_Through_Phone", contactThroughPhone);
    }
    /**
     * The method to get the mailSentTime
     * @returns An instance of Date
     */
    getMailSentTime() {
        return this.getKeyValue("Mail_Sent_Time");
    }
    /**
     * The method to set the value to mailSentTime
     * @param mailSentTime An instance of Date
     */
    setMailSentTime(mailSentTime) {
        this.addKeyValue("Mail_Sent_Time", mailSentTime);
    }
    /**
     * The method to get the consentDate
     * @returns An instance of Date
     */
    getConsentDate() {
        return this.getKeyValue("Consent_Date");
    }
    /**
     * The method to set the value to consentDate
     * @param consentDate An instance of Date
     */
    setConsentDate(consentDate) {
        this.addKeyValue("Consent_Date", consentDate);
    }
    /**
     * The method to get the consentRemarks
     * @returns A string representing the consentRemarks
     */
    getConsentRemarks() {
        return this.getKeyValue("Consent_Remarks");
    }
    /**
     * The method to set the value to consentRemarks
     * @param consentRemarks A string representing the consentRemarks
     */
    setConsentRemarks(consentRemarks) {
        this.addKeyValue("Consent_Remarks", consentRemarks);
    }
    /**
     * The method to get the consentThrough
     * @returns A string representing the consentThrough
     */
    getConsentThrough() {
        return this.getKeyValue("Consent_Through");
    }
    /**
     * The method to set the value to consentThrough
     * @param consentThrough A string representing the consentThrough
     */
    setConsentThrough(consentThrough) {
        this.addKeyValue("Consent_Through", consentThrough);
    }
    /**
     * The method to get the dataProcessingBasis
     * @returns A string representing the dataProcessingBasis
     */
    getDataProcessingBasis() {
        return this.getKeyValue("Data_Processing_Basis");
    }
    /**
     * The method to set the value to dataProcessingBasis
     * @param dataProcessingBasis A string representing the dataProcessingBasis
     */
    setDataProcessingBasis(dataProcessingBasis) {
        this.addKeyValue("Data_Processing_Basis", dataProcessingBasis);
    }
}
exports.MasterModel = Consent;
exports.Consent = Consent;
//# sourceMappingURL=consent.js.map