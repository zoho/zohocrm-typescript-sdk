import {Profile} from "../profiles/profile";
import {Role} from "../roles/role";
import {CustomizeInfo} from "./customize_info";
import {Territory} from "./territory";
import {Theme} from "./theme";
import {Record} from "../record/record";
import {Model} from "../../../../../../utils/util/model";

class User extends Record implements Model{

	/**
	 * The method to get the country
	 * @returns A string representing the country
	 */
	public getCountry(): string	{
		return this.getKeyValue("country");

	}

	/**
	 * The method to set the value to country
	 * @param country A string representing the country
	 */
	public setCountry(country: string): void	{
		this.addKeyValue("country", country);

	}

	/**
	 * The method to get the customizeInfo
	 * @returns An instance of CustomizeInfo
	 */
	public getCustomizeInfo(): CustomizeInfo	{
		return this.getKeyValue("customize_info");

	}

	/**
	 * The method to set the value to customizeInfo
	 * @param customizeInfo An instance of CustomizeInfo
	 */
	public setCustomizeInfo(customizeInfo: CustomizeInfo): void	{
		this.addKeyValue("customize_info", customizeInfo);

	}

	/**
	 * The method to get the role
	 * @returns An instance of Role
	 */
	public getRole(): Role	{
		return this.getKeyValue("role");

	}

	/**
	 * The method to set the value to role
	 * @param role An instance of Role
	 */
	public setRole(role: Role): void	{
		this.addKeyValue("role", role);

	}

	/**
	 * The method to get the signature
	 * @returns A string representing the signature
	 */
	public getSignature(): string	{
		return this.getKeyValue("signature");

	}

	/**
	 * The method to set the value to signature
	 * @param signature A string representing the signature
	 */
	public setSignature(signature: string): void	{
		this.addKeyValue("signature", signature);

	}

	/**
	 * The method to get the city
	 * @returns A string representing the city
	 */
	public getCity(): string	{
		return this.getKeyValue("city");

	}

	/**
	 * The method to set the value to city
	 * @param city A string representing the city
	 */
	public setCity(city: string): void	{
		this.addKeyValue("city", city);

	}

	/**
	 * The method to get the nameFormat
	 * @returns A string representing the nameFormat
	 */
	public getNameFormat(): string	{
		return this.getKeyValue("name_format");

	}

	/**
	 * The method to set the value to nameFormat
	 * @param nameFormat A string representing the nameFormat
	 */
	public setNameFormat(nameFormat: string): void	{
		this.addKeyValue("name_format", nameFormat);

	}

	/**
	 * The method to get the personalAccount
	 * @returns A boolean representing the personalAccount
	 */
	public getPersonalAccount(): boolean	{
		return this.getKeyValue("personal_account");

	}

	/**
	 * The method to set the value to personalAccount
	 * @param personalAccount A boolean representing the personalAccount
	 */
	public setPersonalAccount(personalAccount: boolean): void	{
		this.addKeyValue("personal_account", personalAccount);

	}

	/**
	 * The method to get the defaultTabGroup
	 * @returns A string representing the defaultTabGroup
	 */
	public getDefaultTabGroup(): string	{
		return this.getKeyValue("default_tab_group");

	}

	/**
	 * The method to set the value to defaultTabGroup
	 * @param defaultTabGroup A string representing the defaultTabGroup
	 */
	public setDefaultTabGroup(defaultTabGroup: string): void	{
		this.addKeyValue("default_tab_group", defaultTabGroup);

	}

	/**
	 * The method to get the language
	 * @returns A string representing the language
	 */
	public getLanguage(): string	{
		return this.getKeyValue("language");

	}

	/**
	 * The method to set the value to language
	 * @param language A string representing the language
	 */
	public setLanguage(language: string): void	{
		this.addKeyValue("language", language);

	}

	/**
	 * The method to get the locale
	 * @returns A string representing the locale
	 */
	public getLocale(): string	{
		return this.getKeyValue("locale");

	}

	/**
	 * The method to set the value to locale
	 * @param locale A string representing the locale
	 */
	public setLocale(locale: string): void	{
		this.addKeyValue("locale", locale);

	}

	/**
	 * The method to get the microsoft
	 * @returns A boolean representing the microsoft
	 */
	public getMicrosoft(): boolean	{
		return this.getKeyValue("microsoft");

	}

	/**
	 * The method to set the value to microsoft
	 * @param microsoft A boolean representing the microsoft
	 */
	public setMicrosoft(microsoft: boolean): void	{
		this.addKeyValue("microsoft", microsoft);

	}

	/**
	 * The method to get the isonline
	 * @returns A boolean representing the isonline
	 */
	public getIsonline(): boolean	{
		return this.getKeyValue("Isonline");

	}

	/**
	 * The method to set the value to isonline
	 * @param isonline A boolean representing the isonline
	 */
	public setIsonline(isonline: boolean): void	{
		this.addKeyValue("Isonline", isonline);

	}

	/**
	 * The method to get the street
	 * @returns A string representing the street
	 */
	public getStreet(): string	{
		return this.getKeyValue("street");

	}

	/**
	 * The method to set the value to street
	 * @param street A string representing the street
	 */
	public setStreet(street: string): void	{
		this.addKeyValue("street", street);

	}

	/**
	 * The method to get the currency
	 * @returns A string representing the currency
	 */
	public getCurrency(): string	{
		return this.getKeyValue("Currency");

	}

	/**
	 * The method to set the value to currency
	 * @param currency A string representing the currency
	 */
	public setCurrency(currency: string): void	{
		this.addKeyValue("Currency", currency);

	}

	/**
	 * The method to get the alias
	 * @returns A string representing the alias
	 */
	public getAlias(): string	{
		return this.getKeyValue("alias");

	}

	/**
	 * The method to set the value to alias
	 * @param alias A string representing the alias
	 */
	public setAlias(alias: string): void	{
		this.addKeyValue("alias", alias);

	}

	/**
	 * The method to get the theme
	 * @returns An instance of Theme
	 */
	public getTheme(): Theme	{
		return this.getKeyValue("theme");

	}

	/**
	 * The method to set the value to theme
	 * @param theme An instance of Theme
	 */
	public setTheme(theme: Theme): void	{
		this.addKeyValue("theme", theme);

	}

	/**
	 * The method to get the state
	 * @returns A string representing the state
	 */
	public getState(): string	{
		return this.getKeyValue("state");

	}

	/**
	 * The method to set the value to state
	 * @param state A string representing the state
	 */
	public setState(state: string): void	{
		this.addKeyValue("state", state);

	}

	/**
	 * The method to get the fax
	 * @returns A string representing the fax
	 */
	public getFax(): string	{
		return this.getKeyValue("fax");

	}

	/**
	 * The method to set the value to fax
	 * @param fax A string representing the fax
	 */
	public setFax(fax: string): void	{
		this.addKeyValue("fax", fax);

	}

	/**
	 * The method to get the countryLocale
	 * @returns A string representing the countryLocale
	 */
	public getCountryLocale(): string	{
		return this.getKeyValue("country_locale");

	}

	/**
	 * The method to set the value to countryLocale
	 * @param countryLocale A string representing the countryLocale
	 */
	public setCountryLocale(countryLocale: string): void	{
		this.addKeyValue("country_locale", countryLocale);

	}

	/**
	 * The method to get the firstName
	 * @returns A string representing the firstName
	 */
	public getFirstName(): string	{
		return this.getKeyValue("first_name");

	}

	/**
	 * The method to set the value to firstName
	 * @param firstName A string representing the firstName
	 */
	public setFirstName(firstName: string): void	{
		this.addKeyValue("first_name", firstName);

	}

	/**
	 * The method to get the email
	 * @returns A string representing the email
	 */
	public getEmail(): string	{
		return this.getKeyValue("email");

	}

	/**
	 * The method to set the value to email
	 * @param email A string representing the email
	 */
	public setEmail(email: string): void	{
		this.addKeyValue("email", email);

	}

	/**
	 * The method to get the reportingTo
	 * @returns An instance of User
	 */
	public getReportingTo(): User	{
		return this.getKeyValue("Reporting_To");

	}

	/**
	 * The method to set the value to reportingTo
	 * @param reportingTo An instance of User
	 */
	public setReportingTo(reportingTo: User): void	{
		this.addKeyValue("Reporting_To", reportingTo);

	}

	/**
	 * The method to get the decimalSeparator
	 * @returns A string representing the decimalSeparator
	 */
	public getDecimalSeparator(): string	{
		return this.getKeyValue("decimal_separator");

	}

	/**
	 * The method to set the value to decimalSeparator
	 * @param decimalSeparator A string representing the decimalSeparator
	 */
	public setDecimalSeparator(decimalSeparator: string): void	{
		this.addKeyValue("decimal_separator", decimalSeparator);

	}

	/**
	 * The method to get the zip
	 * @returns A string representing the zip
	 */
	public getZip(): string	{
		return this.getKeyValue("zip");

	}

	/**
	 * The method to set the value to zip
	 * @param zip A string representing the zip
	 */
	public setZip(zip: string): void	{
		this.addKeyValue("zip", zip);

	}

	/**
	 * The method to get the website
	 * @returns A string representing the website
	 */
	public getWebsite(): string	{
		return this.getKeyValue("website");

	}

	/**
	 * The method to set the value to website
	 * @param website A string representing the website
	 */
	public setWebsite(website: string): void	{
		this.addKeyValue("website", website);

	}

	/**
	 * The method to get the timeFormat
	 * @returns A string representing the timeFormat
	 */
	public getTimeFormat(): string	{
		return this.getKeyValue("time_format");

	}

	/**
	 * The method to set the value to timeFormat
	 * @param timeFormat A string representing the timeFormat
	 */
	public setTimeFormat(timeFormat: string): void	{
		this.addKeyValue("time_format", timeFormat);

	}

	/**
	 * The method to get the offset
	 * @returns A bigint representing the offset
	 */
	public getOffset(): bigint	{
		return this.getKeyValue("offset");

	}

	/**
	 * The method to set the value to offset
	 * @param offset A bigint representing the offset
	 */
	public setOffset(offset: bigint): void	{
		this.addKeyValue("offset", offset);

	}

	/**
	 * The method to get the profile
	 * @returns An instance of Profile
	 */
	public getProfile(): Profile	{
		return this.getKeyValue("profile");

	}

	/**
	 * The method to set the value to profile
	 * @param profile An instance of Profile
	 */
	public setProfile(profile: Profile): void	{
		this.addKeyValue("profile", profile);

	}

	/**
	 * The method to get the mobile
	 * @returns A string representing the mobile
	 */
	public getMobile(): string	{
		return this.getKeyValue("mobile");

	}

	/**
	 * The method to set the value to mobile
	 * @param mobile A string representing the mobile
	 */
	public setMobile(mobile: string): void	{
		this.addKeyValue("mobile", mobile);

	}

	/**
	 * The method to get the lastName
	 * @returns A string representing the lastName
	 */
	public getLastName(): string	{
		return this.getKeyValue("last_name");

	}

	/**
	 * The method to set the value to lastName
	 * @param lastName A string representing the lastName
	 */
	public setLastName(lastName: string): void	{
		this.addKeyValue("last_name", lastName);

	}

	/**
	 * The method to get the timeZone
	 * @returns A string representing the timeZone
	 */
	public getTimeZone(): string	{
		return this.getKeyValue("time_zone");

	}

	/**
	 * The method to set the value to timeZone
	 * @param timeZone A string representing the timeZone
	 */
	public setTimeZone(timeZone: string): void	{
		this.addKeyValue("time_zone", timeZone);

	}

	/**
	 * The method to get the zuid
	 * @returns A string representing the zuid
	 */
	public getZuid(): string	{
		return this.getKeyValue("zuid");

	}

	/**
	 * The method to set the value to zuid
	 * @param zuid A string representing the zuid
	 */
	public setZuid(zuid: string): void	{
		this.addKeyValue("zuid", zuid);

	}

	/**
	 * The method to get the confirm
	 * @returns A boolean representing the confirm
	 */
	public getConfirm(): boolean	{
		return this.getKeyValue("confirm");

	}

	/**
	 * The method to set the value to confirm
	 * @param confirm A boolean representing the confirm
	 */
	public setConfirm(confirm: boolean): void	{
		this.addKeyValue("confirm", confirm);

	}

	/**
	 * The method to get the fullName
	 * @returns A string representing the fullName
	 */
	public getFullName(): string	{
		return this.getKeyValue("full_name");

	}

	/**
	 * The method to set the value to fullName
	 * @param fullName A string representing the fullName
	 */
	public setFullName(fullName: string): void	{
		this.addKeyValue("full_name", fullName);

	}

	/**
	 * The method to get the territories
	 * @returns An Array representing the territories
	 */
	public getTerritories(): Array<Territory>	{
		return this.getKeyValue("territories");

	}

	/**
	 * The method to set the value to territories
	 * @param territories An Array representing the territories
	 */
	public setTerritories(territories: Array<Territory>): void	{
		this.addKeyValue("territories", territories);

	}

	/**
	 * The method to get the phone
	 * @returns A string representing the phone
	 */
	public getPhone(): string	{
		return this.getKeyValue("phone");

	}

	/**
	 * The method to set the value to phone
	 * @param phone A string representing the phone
	 */
	public setPhone(phone: string): void	{
		this.addKeyValue("phone", phone);

	}

	/**
	 * The method to get the dob
	 * @returns A string representing the dob
	 */
	public getDob(): string	{
		return this.getKeyValue("dob");

	}

	/**
	 * The method to set the value to dob
	 * @param dob A string representing the dob
	 */
	public setDob(dob: string): void	{
		this.addKeyValue("dob", dob);

	}

	/**
	 * The method to get the dateFormat
	 * @returns A string representing the dateFormat
	 */
	public getDateFormat(): string	{
		return this.getKeyValue("date_format");

	}

	/**
	 * The method to set the value to dateFormat
	 * @param dateFormat A string representing the dateFormat
	 */
	public setDateFormat(dateFormat: string): void	{
		this.addKeyValue("date_format", dateFormat);

	}

	/**
	 * The method to get the status
	 * @returns A string representing the status
	 */
	public getStatus(): string	{
		return this.getKeyValue("status");

	}

	/**
	 * The method to set the value to status
	 * @param status A string representing the status
	 */
	public setStatus(status: string): void	{
		this.addKeyValue("status", status);

	}

	/**
	 * The method to get the name
	 * @returns A string representing the name
	 */
	public getName(): string	{
		return this.getKeyValue("name");

	}

	/**
	 * The method to set the value to name
	 * @param name A string representing the name
	 */
	public setName(name: string): void	{
		this.addKeyValue("name", name);

	}

}
export {
	User as MasterModel,
	User as User
}
