"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Org = exports.MasterModel = void 0;
class Org {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the country
     * @returns A string representing the country
     */
    getCountry() {
        return this.country;
    }
    /**
     * The method to set the value to country
     * @param country A string representing the country
     */
    setCountry(country) {
        this.country = country;
        this.keyModified.set("country", 1);
    }
    /**
     * The method to get the photoId
     * @returns A string representing the photoId
     */
    getPhotoId() {
        return this.photoId;
    }
    /**
     * The method to set the value to photoId
     * @param photoId A string representing the photoId
     */
    setPhotoId(photoId) {
        this.photoId = photoId;
        this.keyModified.set("photo_id", 1);
    }
    /**
     * The method to get the city
     * @returns A string representing the city
     */
    getCity() {
        return this.city;
    }
    /**
     * The method to set the value to city
     * @param city A string representing the city
     */
    setCity(city) {
        this.city = city;
        this.keyModified.set("city", 1);
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
     * The method to get the mcStatus
     * @returns A boolean representing the mcStatus
     */
    getMcStatus() {
        return this.mcStatus;
    }
    /**
     * The method to set the value to mcStatus
     * @param mcStatus A boolean representing the mcStatus
     */
    setMcStatus(mcStatus) {
        this.mcStatus = mcStatus;
        this.keyModified.set("mc_status", 1);
    }
    /**
     * The method to get the gappsEnabled
     * @returns A boolean representing the gappsEnabled
     */
    getGappsEnabled() {
        return this.gappsEnabled;
    }
    /**
     * The method to set the value to gappsEnabled
     * @param gappsEnabled A boolean representing the gappsEnabled
     */
    setGappsEnabled(gappsEnabled) {
        this.gappsEnabled = gappsEnabled;
        this.keyModified.set("gapps_enabled", 1);
    }
    /**
     * The method to get the domainName
     * @returns A string representing the domainName
     */
    getDomainName() {
        return this.domainName;
    }
    /**
     * The method to set the value to domainName
     * @param domainName A string representing the domainName
     */
    setDomainName(domainName) {
        this.domainName = domainName;
        this.keyModified.set("domain_name", 1);
    }
    /**
     * The method to get the translationEnabled
     * @returns A boolean representing the translationEnabled
     */
    getTranslationEnabled() {
        return this.translationEnabled;
    }
    /**
     * The method to set the value to translationEnabled
     * @param translationEnabled A boolean representing the translationEnabled
     */
    setTranslationEnabled(translationEnabled) {
        this.translationEnabled = translationEnabled;
        this.keyModified.set("translation_enabled", 1);
    }
    /**
     * The method to get the street
     * @returns A string representing the street
     */
    getStreet() {
        return this.street;
    }
    /**
     * The method to set the value to street
     * @param street A string representing the street
     */
    setStreet(street) {
        this.street = street;
        this.keyModified.set("street", 1);
    }
    /**
     * The method to get the alias
     * @returns A string representing the alias
     */
    getAlias() {
        return this.alias;
    }
    /**
     * The method to set the value to alias
     * @param alias A string representing the alias
     */
    setAlias(alias) {
        this.alias = alias;
        this.keyModified.set("alias", 1);
    }
    /**
     * The method to get the currency
     * @returns A string representing the currency
     */
    getCurrency() {
        return this.currency;
    }
    /**
     * The method to set the value to currency
     * @param currency A string representing the currency
     */
    setCurrency(currency) {
        this.currency = currency;
        this.keyModified.set("currency", 1);
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
     * The method to get the state
     * @returns A string representing the state
     */
    getState() {
        return this.state;
    }
    /**
     * The method to set the value to state
     * @param state A string representing the state
     */
    setState(state) {
        this.state = state;
        this.keyModified.set("state", 1);
    }
    /**
     * The method to get the fax
     * @returns A string representing the fax
     */
    getFax() {
        return this.fax;
    }
    /**
     * The method to set the value to fax
     * @param fax A string representing the fax
     */
    setFax(fax) {
        this.fax = fax;
        this.keyModified.set("fax", 1);
    }
    /**
     * The method to get the employeeCount
     * @returns A string representing the employeeCount
     */
    getEmployeeCount() {
        return this.employeeCount;
    }
    /**
     * The method to set the value to employeeCount
     * @param employeeCount A string representing the employeeCount
     */
    setEmployeeCount(employeeCount) {
        this.employeeCount = employeeCount;
        this.keyModified.set("employee_count", 1);
    }
    /**
     * The method to get the zip
     * @returns A string representing the zip
     */
    getZip() {
        return this.zip;
    }
    /**
     * The method to set the value to zip
     * @param zip A string representing the zip
     */
    setZip(zip) {
        this.zip = zip;
        this.keyModified.set("zip", 1);
    }
    /**
     * The method to get the website
     * @returns A string representing the website
     */
    getWebsite() {
        return this.website;
    }
    /**
     * The method to set the value to website
     * @param website A string representing the website
     */
    setWebsite(website) {
        this.website = website;
        this.keyModified.set("website", 1);
    }
    /**
     * The method to get the currencySymbol
     * @returns A string representing the currencySymbol
     */
    getCurrencySymbol() {
        return this.currencySymbol;
    }
    /**
     * The method to set the value to currencySymbol
     * @param currencySymbol A string representing the currencySymbol
     */
    setCurrencySymbol(currencySymbol) {
        this.currencySymbol = currencySymbol;
        this.keyModified.set("currency_symbol", 1);
    }
    /**
     * The method to get the mobile
     * @returns A string representing the mobile
     */
    getMobile() {
        return this.mobile;
    }
    /**
     * The method to set the value to mobile
     * @param mobile A string representing the mobile
     */
    setMobile(mobile) {
        this.mobile = mobile;
        this.keyModified.set("mobile", 1);
    }
    /**
     * The method to get the currencyLocale
     * @returns A string representing the currencyLocale
     */
    getCurrencyLocale() {
        return this.currencyLocale;
    }
    /**
     * The method to set the value to currencyLocale
     * @param currencyLocale A string representing the currencyLocale
     */
    setCurrencyLocale(currencyLocale) {
        this.currencyLocale = currencyLocale;
        this.keyModified.set("currency_locale", 1);
    }
    /**
     * The method to get the primaryZuid
     * @returns A string representing the primaryZuid
     */
    getPrimaryZuid() {
        return this.primaryZuid;
    }
    /**
     * The method to set the value to primaryZuid
     * @param primaryZuid A string representing the primaryZuid
     */
    setPrimaryZuid(primaryZuid) {
        this.primaryZuid = primaryZuid;
        this.keyModified.set("primary_zuid", 1);
    }
    /**
     * The method to get the ziaPortalId
     * @returns A string representing the ziaPortalId
     */
    getZiaPortalId() {
        return this.ziaPortalId;
    }
    /**
     * The method to set the value to ziaPortalId
     * @param ziaPortalId A string representing the ziaPortalId
     */
    setZiaPortalId(ziaPortalId) {
        this.ziaPortalId = ziaPortalId;
        this.keyModified.set("zia_portal_id", 1);
    }
    /**
     * The method to get the timeZone
     * @returns A string representing the timeZone
     */
    getTimeZone() {
        return this.timeZone;
    }
    /**
     * The method to set the value to timeZone
     * @param timeZone A string representing the timeZone
     */
    setTimeZone(timeZone) {
        this.timeZone = timeZone;
        this.keyModified.set("time_zone", 1);
    }
    /**
     * The method to get the zgid
     * @returns A string representing the zgid
     */
    getZgid() {
        return this.zgid;
    }
    /**
     * The method to set the value to zgid
     * @param zgid A string representing the zgid
     */
    setZgid(zgid) {
        this.zgid = zgid;
        this.keyModified.set("zgid", 1);
    }
    /**
     * The method to get the countryCode
     * @returns A string representing the countryCode
     */
    getCountryCode() {
        return this.countryCode;
    }
    /**
     * The method to set the value to countryCode
     * @param countryCode A string representing the countryCode
     */
    setCountryCode(countryCode) {
        this.countryCode = countryCode;
        this.keyModified.set("country_code", 1);
    }
    /**
     * The method to get the licenseDetails
     * @returns An instance of LicenseDetails
     */
    getLicenseDetails() {
        return this.licenseDetails;
    }
    /**
     * The method to set the value to licenseDetails
     * @param licenseDetails An instance of LicenseDetails
     */
    setLicenseDetails(licenseDetails) {
        this.licenseDetails = licenseDetails;
        this.keyModified.set("license_details", 1);
    }
    /**
     * The method to get the phone
     * @returns A string representing the phone
     */
    getPhone() {
        return this.phone;
    }
    /**
     * The method to set the value to phone
     * @param phone A string representing the phone
     */
    setPhone(phone) {
        this.phone = phone;
        this.keyModified.set("phone", 1);
    }
    /**
     * The method to get the companyName
     * @returns A string representing the companyName
     */
    getCompanyName() {
        return this.companyName;
    }
    /**
     * The method to set the value to companyName
     * @param companyName A string representing the companyName
     */
    setCompanyName(companyName) {
        this.companyName = companyName;
        this.keyModified.set("company_name", 1);
    }
    /**
     * The method to get the privacySettings
     * @returns A boolean representing the privacySettings
     */
    getPrivacySettings() {
        return this.privacySettings;
    }
    /**
     * The method to set the value to privacySettings
     * @param privacySettings A boolean representing the privacySettings
     */
    setPrivacySettings(privacySettings) {
        this.privacySettings = privacySettings;
        this.keyModified.set("privacy_settings", 1);
    }
    /**
     * The method to get the primaryEmail
     * @returns A string representing the primaryEmail
     */
    getPrimaryEmail() {
        return this.primaryEmail;
    }
    /**
     * The method to set the value to primaryEmail
     * @param primaryEmail A string representing the primaryEmail
     */
    setPrimaryEmail(primaryEmail) {
        this.primaryEmail = primaryEmail;
        this.keyModified.set("primary_email", 1);
    }
    /**
     * The method to get the isoCode
     * @returns A string representing the isoCode
     */
    getIsoCode() {
        return this.isoCode;
    }
    /**
     * The method to set the value to isoCode
     * @param isoCode A string representing the isoCode
     */
    setIsoCode(isoCode) {
        this.isoCode = isoCode;
        this.keyModified.set("iso_code", 1);
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
exports.MasterModel = Org;
exports.Org = Org;
//# sourceMappingURL=org.js.map