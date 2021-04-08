"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.MasterModel = void 0;
const record_1 = require("../record/record");
class User extends record_1.Record {
    /**
     * The method to get the country
     * @returns A string representing the country
     */
    getCountry() {
        return this.getKeyValue("country");
    }
    /**
     * The method to set the value to country
     * @param country A string representing the country
     */
    setCountry(country) {
        this.addKeyValue("country", country);
    }
    /**
     * The method to get the customizeInfo
     * @returns An instance of CustomizeInfo
     */
    getCustomizeInfo() {
        return this.getKeyValue("customize_info");
    }
    /**
     * The method to set the value to customizeInfo
     * @param customizeInfo An instance of CustomizeInfo
     */
    setCustomizeInfo(customizeInfo) {
        this.addKeyValue("customize_info", customizeInfo);
    }
    /**
     * The method to get the role
     * @returns An instance of Role
     */
    getRole() {
        return this.getKeyValue("role");
    }
    /**
     * The method to set the value to role
     * @param role An instance of Role
     */
    setRole(role) {
        this.addKeyValue("role", role);
    }
    /**
     * The method to get the signature
     * @returns A string representing the signature
     */
    getSignature() {
        return this.getKeyValue("signature");
    }
    /**
     * The method to set the value to signature
     * @param signature A string representing the signature
     */
    setSignature(signature) {
        this.addKeyValue("signature", signature);
    }
    /**
     * The method to get the city
     * @returns A string representing the city
     */
    getCity() {
        return this.getKeyValue("city");
    }
    /**
     * The method to set the value to city
     * @param city A string representing the city
     */
    setCity(city) {
        this.addKeyValue("city", city);
    }
    /**
     * The method to get the nameFormat
     * @returns A string representing the nameFormat
     */
    getNameFormat() {
        return this.getKeyValue("name_format");
    }
    /**
     * The method to set the value to nameFormat
     * @param nameFormat A string representing the nameFormat
     */
    setNameFormat(nameFormat) {
        this.addKeyValue("name_format", nameFormat);
    }
    /**
     * The method to get the personalAccount
     * @returns A boolean representing the personalAccount
     */
    getPersonalAccount() {
        return this.getKeyValue("personal_account");
    }
    /**
     * The method to set the value to personalAccount
     * @param personalAccount A boolean representing the personalAccount
     */
    setPersonalAccount(personalAccount) {
        this.addKeyValue("personal_account", personalAccount);
    }
    /**
     * The method to get the defaultTabGroup
     * @returns A string representing the defaultTabGroup
     */
    getDefaultTabGroup() {
        return this.getKeyValue("default_tab_group");
    }
    /**
     * The method to set the value to defaultTabGroup
     * @param defaultTabGroup A string representing the defaultTabGroup
     */
    setDefaultTabGroup(defaultTabGroup) {
        this.addKeyValue("default_tab_group", defaultTabGroup);
    }
    /**
     * The method to get the language
     * @returns A string representing the language
     */
    getLanguage() {
        return this.getKeyValue("language");
    }
    /**
     * The method to set the value to language
     * @param language A string representing the language
     */
    setLanguage(language) {
        this.addKeyValue("language", language);
    }
    /**
     * The method to get the locale
     * @returns A string representing the locale
     */
    getLocale() {
        return this.getKeyValue("locale");
    }
    /**
     * The method to set the value to locale
     * @param locale A string representing the locale
     */
    setLocale(locale) {
        this.addKeyValue("locale", locale);
    }
    /**
     * The method to get the microsoft
     * @returns A boolean representing the microsoft
     */
    getMicrosoft() {
        return this.getKeyValue("microsoft");
    }
    /**
     * The method to set the value to microsoft
     * @param microsoft A boolean representing the microsoft
     */
    setMicrosoft(microsoft) {
        this.addKeyValue("microsoft", microsoft);
    }
    /**
     * The method to get the isonline
     * @returns A boolean representing the isonline
     */
    getIsonline() {
        return this.getKeyValue("Isonline");
    }
    /**
     * The method to set the value to isonline
     * @param isonline A boolean representing the isonline
     */
    setIsonline(isonline) {
        this.addKeyValue("Isonline", isonline);
    }
    /**
     * The method to get the street
     * @returns A string representing the street
     */
    getStreet() {
        return this.getKeyValue("street");
    }
    /**
     * The method to set the value to street
     * @param street A string representing the street
     */
    setStreet(street) {
        this.addKeyValue("street", street);
    }
    /**
     * The method to get the currency
     * @returns A string representing the currency
     */
    getCurrency() {
        return this.getKeyValue("Currency");
    }
    /**
     * The method to set the value to currency
     * @param currency A string representing the currency
     */
    setCurrency(currency) {
        this.addKeyValue("Currency", currency);
    }
    /**
     * The method to get the alias
     * @returns A string representing the alias
     */
    getAlias() {
        return this.getKeyValue("alias");
    }
    /**
     * The method to set the value to alias
     * @param alias A string representing the alias
     */
    setAlias(alias) {
        this.addKeyValue("alias", alias);
    }
    /**
     * The method to get the theme
     * @returns An instance of Theme
     */
    getTheme() {
        return this.getKeyValue("theme");
    }
    /**
     * The method to set the value to theme
     * @param theme An instance of Theme
     */
    setTheme(theme) {
        this.addKeyValue("theme", theme);
    }
    /**
     * The method to get the state
     * @returns A string representing the state
     */
    getState() {
        return this.getKeyValue("state");
    }
    /**
     * The method to set the value to state
     * @param state A string representing the state
     */
    setState(state) {
        this.addKeyValue("state", state);
    }
    /**
     * The method to get the fax
     * @returns A string representing the fax
     */
    getFax() {
        return this.getKeyValue("fax");
    }
    /**
     * The method to set the value to fax
     * @param fax A string representing the fax
     */
    setFax(fax) {
        this.addKeyValue("fax", fax);
    }
    /**
     * The method to get the countryLocale
     * @returns A string representing the countryLocale
     */
    getCountryLocale() {
        return this.getKeyValue("country_locale");
    }
    /**
     * The method to set the value to countryLocale
     * @param countryLocale A string representing the countryLocale
     */
    setCountryLocale(countryLocale) {
        this.addKeyValue("country_locale", countryLocale);
    }
    /**
     * The method to get the firstName
     * @returns A string representing the firstName
     */
    getFirstName() {
        return this.getKeyValue("first_name");
    }
    /**
     * The method to set the value to firstName
     * @param firstName A string representing the firstName
     */
    setFirstName(firstName) {
        this.addKeyValue("first_name", firstName);
    }
    /**
     * The method to get the email
     * @returns A string representing the email
     */
    getEmail() {
        return this.getKeyValue("email");
    }
    /**
     * The method to set the value to email
     * @param email A string representing the email
     */
    setEmail(email) {
        this.addKeyValue("email", email);
    }
    /**
     * The method to get the reportingTo
     * @returns An instance of User
     */
    getReportingTo() {
        return this.getKeyValue("Reporting_To");
    }
    /**
     * The method to set the value to reportingTo
     * @param reportingTo An instance of User
     */
    setReportingTo(reportingTo) {
        this.addKeyValue("Reporting_To", reportingTo);
    }
    /**
     * The method to get the decimalSeparator
     * @returns A string representing the decimalSeparator
     */
    getDecimalSeparator() {
        return this.getKeyValue("decimal_separator");
    }
    /**
     * The method to set the value to decimalSeparator
     * @param decimalSeparator A string representing the decimalSeparator
     */
    setDecimalSeparator(decimalSeparator) {
        this.addKeyValue("decimal_separator", decimalSeparator);
    }
    /**
     * The method to get the zip
     * @returns A string representing the zip
     */
    getZip() {
        return this.getKeyValue("zip");
    }
    /**
     * The method to set the value to zip
     * @param zip A string representing the zip
     */
    setZip(zip) {
        this.addKeyValue("zip", zip);
    }
    /**
     * The method to get the website
     * @returns A string representing the website
     */
    getWebsite() {
        return this.getKeyValue("website");
    }
    /**
     * The method to set the value to website
     * @param website A string representing the website
     */
    setWebsite(website) {
        this.addKeyValue("website", website);
    }
    /**
     * The method to get the timeFormat
     * @returns A string representing the timeFormat
     */
    getTimeFormat() {
        return this.getKeyValue("time_format");
    }
    /**
     * The method to set the value to timeFormat
     * @param timeFormat A string representing the timeFormat
     */
    setTimeFormat(timeFormat) {
        this.addKeyValue("time_format", timeFormat);
    }
    /**
     * The method to get the offset
     * @returns A bigint representing the offset
     */
    getOffset() {
        return this.getKeyValue("offset");
    }
    /**
     * The method to set the value to offset
     * @param offset A bigint representing the offset
     */
    setOffset(offset) {
        this.addKeyValue("offset", offset);
    }
    /**
     * The method to get the profile
     * @returns An instance of Profile
     */
    getProfile() {
        return this.getKeyValue("profile");
    }
    /**
     * The method to set the value to profile
     * @param profile An instance of Profile
     */
    setProfile(profile) {
        this.addKeyValue("profile", profile);
    }
    /**
     * The method to get the mobile
     * @returns A string representing the mobile
     */
    getMobile() {
        return this.getKeyValue("mobile");
    }
    /**
     * The method to set the value to mobile
     * @param mobile A string representing the mobile
     */
    setMobile(mobile) {
        this.addKeyValue("mobile", mobile);
    }
    /**
     * The method to get the lastName
     * @returns A string representing the lastName
     */
    getLastName() {
        return this.getKeyValue("last_name");
    }
    /**
     * The method to set the value to lastName
     * @param lastName A string representing the lastName
     */
    setLastName(lastName) {
        this.addKeyValue("last_name", lastName);
    }
    /**
     * The method to get the timeZone
     * @returns A string representing the timeZone
     */
    getTimeZone() {
        return this.getKeyValue("time_zone");
    }
    /**
     * The method to set the value to timeZone
     * @param timeZone A string representing the timeZone
     */
    setTimeZone(timeZone) {
        this.addKeyValue("time_zone", timeZone);
    }
    /**
     * The method to get the zuid
     * @returns A string representing the zuid
     */
    getZuid() {
        return this.getKeyValue("zuid");
    }
    /**
     * The method to set the value to zuid
     * @param zuid A string representing the zuid
     */
    setZuid(zuid) {
        this.addKeyValue("zuid", zuid);
    }
    /**
     * The method to get the confirm
     * @returns A boolean representing the confirm
     */
    getConfirm() {
        return this.getKeyValue("confirm");
    }
    /**
     * The method to set the value to confirm
     * @param confirm A boolean representing the confirm
     */
    setConfirm(confirm) {
        this.addKeyValue("confirm", confirm);
    }
    /**
     * The method to get the fullName
     * @returns A string representing the fullName
     */
    getFullName() {
        return this.getKeyValue("full_name");
    }
    /**
     * The method to set the value to fullName
     * @param fullName A string representing the fullName
     */
    setFullName(fullName) {
        this.addKeyValue("full_name", fullName);
    }
    /**
     * The method to get the territories
     * @returns An Array representing the territories
     */
    getTerritories() {
        return this.getKeyValue("territories");
    }
    /**
     * The method to set the value to territories
     * @param territories An Array representing the territories
     */
    setTerritories(territories) {
        this.addKeyValue("territories", territories);
    }
    /**
     * The method to get the phone
     * @returns A string representing the phone
     */
    getPhone() {
        return this.getKeyValue("phone");
    }
    /**
     * The method to set the value to phone
     * @param phone A string representing the phone
     */
    setPhone(phone) {
        this.addKeyValue("phone", phone);
    }
    /**
     * The method to get the dob
     * @returns A string representing the dob
     */
    getDob() {
        return this.getKeyValue("dob");
    }
    /**
     * The method to set the value to dob
     * @param dob A string representing the dob
     */
    setDob(dob) {
        this.addKeyValue("dob", dob);
    }
    /**
     * The method to get the dateFormat
     * @returns A string representing the dateFormat
     */
    getDateFormat() {
        return this.getKeyValue("date_format");
    }
    /**
     * The method to set the value to dateFormat
     * @param dateFormat A string representing the dateFormat
     */
    setDateFormat(dateFormat) {
        this.addKeyValue("date_format", dateFormat);
    }
    /**
     * The method to get the status
     * @returns A string representing the status
     */
    getStatus() {
        return this.getKeyValue("status");
    }
    /**
     * The method to set the value to status
     * @param status A string representing the status
     */
    setStatus(status) {
        this.addKeyValue("status", status);
    }
    /**
     * The method to get the name
     * @returns A string representing the name
     */
    getName() {
        return this.getKeyValue("name");
    }
    /**
     * The method to set the value to name
     * @param name A string representing the name
     */
    setName(name) {
        this.addKeyValue("name", name);
    }
}
exports.MasterModel = User;
exports.User = User;
//# sourceMappingURL=user.js.map