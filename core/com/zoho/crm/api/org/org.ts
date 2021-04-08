import {LicenseDetails} from "./license_details";
import {Model} from "../../../../../../utils/util/model";

class Org implements Model{

	private country: string;
	private photoId: string;
	private city: string;
	private description: string;
	private mcStatus: boolean;
	private gappsEnabled: boolean;
	private domainName: string;
	private translationEnabled: boolean;
	private street: string;
	private alias: string;
	private currency: string;
	private id: bigint;
	private state: string;
	private fax: string;
	private employeeCount: string;
	private zip: string;
	private website: string;
	private currencySymbol: string;
	private mobile: string;
	private currencyLocale: string;
	private primaryZuid: string;
	private ziaPortalId: string;
	private timeZone: string;
	private zgid: string;
	private countryCode: string;
	private licenseDetails: LicenseDetails;
	private phone: string;
	private companyName: string;
	private privacySettings: boolean;
	private primaryEmail: string;
	private isoCode: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the country
	 * @returns A string representing the country
	 */
	public getCountry(): string	{
		return this.country;

	}

	/**
	 * The method to set the value to country
	 * @param country A string representing the country
	 */
	public setCountry(country: string): void	{
		this.country = country;
		this.keyModified.set("country", 1);

	}

	/**
	 * The method to get the photoId
	 * @returns A string representing the photoId
	 */
	public getPhotoId(): string	{
		return this.photoId;

	}

	/**
	 * The method to set the value to photoId
	 * @param photoId A string representing the photoId
	 */
	public setPhotoId(photoId: string): void	{
		this.photoId = photoId;
		this.keyModified.set("photo_id", 1);

	}

	/**
	 * The method to get the city
	 * @returns A string representing the city
	 */
	public getCity(): string	{
		return this.city;

	}

	/**
	 * The method to set the value to city
	 * @param city A string representing the city
	 */
	public setCity(city: string): void	{
		this.city = city;
		this.keyModified.set("city", 1);

	}

	/**
	 * The method to get the description
	 * @returns A string representing the description
	 */
	public getDescription(): string	{
		return this.description;

	}

	/**
	 * The method to set the value to description
	 * @param description A string representing the description
	 */
	public setDescription(description: string): void	{
		this.description = description;
		this.keyModified.set("description", 1);

	}

	/**
	 * The method to get the mcStatus
	 * @returns A boolean representing the mcStatus
	 */
	public getMcStatus(): boolean	{
		return this.mcStatus;

	}

	/**
	 * The method to set the value to mcStatus
	 * @param mcStatus A boolean representing the mcStatus
	 */
	public setMcStatus(mcStatus: boolean): void	{
		this.mcStatus = mcStatus;
		this.keyModified.set("mc_status", 1);

	}

	/**
	 * The method to get the gappsEnabled
	 * @returns A boolean representing the gappsEnabled
	 */
	public getGappsEnabled(): boolean	{
		return this.gappsEnabled;

	}

	/**
	 * The method to set the value to gappsEnabled
	 * @param gappsEnabled A boolean representing the gappsEnabled
	 */
	public setGappsEnabled(gappsEnabled: boolean): void	{
		this.gappsEnabled = gappsEnabled;
		this.keyModified.set("gapps_enabled", 1);

	}

	/**
	 * The method to get the domainName
	 * @returns A string representing the domainName
	 */
	public getDomainName(): string	{
		return this.domainName;

	}

	/**
	 * The method to set the value to domainName
	 * @param domainName A string representing the domainName
	 */
	public setDomainName(domainName: string): void	{
		this.domainName = domainName;
		this.keyModified.set("domain_name", 1);

	}

	/**
	 * The method to get the translationEnabled
	 * @returns A boolean representing the translationEnabled
	 */
	public getTranslationEnabled(): boolean	{
		return this.translationEnabled;

	}

	/**
	 * The method to set the value to translationEnabled
	 * @param translationEnabled A boolean representing the translationEnabled
	 */
	public setTranslationEnabled(translationEnabled: boolean): void	{
		this.translationEnabled = translationEnabled;
		this.keyModified.set("translation_enabled", 1);

	}

	/**
	 * The method to get the street
	 * @returns A string representing the street
	 */
	public getStreet(): string	{
		return this.street;

	}

	/**
	 * The method to set the value to street
	 * @param street A string representing the street
	 */
	public setStreet(street: string): void	{
		this.street = street;
		this.keyModified.set("street", 1);

	}

	/**
	 * The method to get the alias
	 * @returns A string representing the alias
	 */
	public getAlias(): string	{
		return this.alias;

	}

	/**
	 * The method to set the value to alias
	 * @param alias A string representing the alias
	 */
	public setAlias(alias: string): void	{
		this.alias = alias;
		this.keyModified.set("alias", 1);

	}

	/**
	 * The method to get the currency
	 * @returns A string representing the currency
	 */
	public getCurrency(): string	{
		return this.currency;

	}

	/**
	 * The method to set the value to currency
	 * @param currency A string representing the currency
	 */
	public setCurrency(currency: string): void	{
		this.currency = currency;
		this.keyModified.set("currency", 1);

	}

	/**
	 * The method to get the id
	 * @returns A bigint representing the id
	 */
	public getId(): bigint	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A bigint representing the id
	 */
	public setId(id: bigint): void	{
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the state
	 * @returns A string representing the state
	 */
	public getState(): string	{
		return this.state;

	}

	/**
	 * The method to set the value to state
	 * @param state A string representing the state
	 */
	public setState(state: string): void	{
		this.state = state;
		this.keyModified.set("state", 1);

	}

	/**
	 * The method to get the fax
	 * @returns A string representing the fax
	 */
	public getFax(): string	{
		return this.fax;

	}

	/**
	 * The method to set the value to fax
	 * @param fax A string representing the fax
	 */
	public setFax(fax: string): void	{
		this.fax = fax;
		this.keyModified.set("fax", 1);

	}

	/**
	 * The method to get the employeeCount
	 * @returns A string representing the employeeCount
	 */
	public getEmployeeCount(): string	{
		return this.employeeCount;

	}

	/**
	 * The method to set the value to employeeCount
	 * @param employeeCount A string representing the employeeCount
	 */
	public setEmployeeCount(employeeCount: string): void	{
		this.employeeCount = employeeCount;
		this.keyModified.set("employee_count", 1);

	}

	/**
	 * The method to get the zip
	 * @returns A string representing the zip
	 */
	public getZip(): string	{
		return this.zip;

	}

	/**
	 * The method to set the value to zip
	 * @param zip A string representing the zip
	 */
	public setZip(zip: string): void	{
		this.zip = zip;
		this.keyModified.set("zip", 1);

	}

	/**
	 * The method to get the website
	 * @returns A string representing the website
	 */
	public getWebsite(): string	{
		return this.website;

	}

	/**
	 * The method to set the value to website
	 * @param website A string representing the website
	 */
	public setWebsite(website: string): void	{
		this.website = website;
		this.keyModified.set("website", 1);

	}

	/**
	 * The method to get the currencySymbol
	 * @returns A string representing the currencySymbol
	 */
	public getCurrencySymbol(): string	{
		return this.currencySymbol;

	}

	/**
	 * The method to set the value to currencySymbol
	 * @param currencySymbol A string representing the currencySymbol
	 */
	public setCurrencySymbol(currencySymbol: string): void	{
		this.currencySymbol = currencySymbol;
		this.keyModified.set("currency_symbol", 1);

	}

	/**
	 * The method to get the mobile
	 * @returns A string representing the mobile
	 */
	public getMobile(): string	{
		return this.mobile;

	}

	/**
	 * The method to set the value to mobile
	 * @param mobile A string representing the mobile
	 */
	public setMobile(mobile: string): void	{
		this.mobile = mobile;
		this.keyModified.set("mobile", 1);

	}

	/**
	 * The method to get the currencyLocale
	 * @returns A string representing the currencyLocale
	 */
	public getCurrencyLocale(): string	{
		return this.currencyLocale;

	}

	/**
	 * The method to set the value to currencyLocale
	 * @param currencyLocale A string representing the currencyLocale
	 */
	public setCurrencyLocale(currencyLocale: string): void	{
		this.currencyLocale = currencyLocale;
		this.keyModified.set("currency_locale", 1);

	}

	/**
	 * The method to get the primaryZuid
	 * @returns A string representing the primaryZuid
	 */
	public getPrimaryZuid(): string	{
		return this.primaryZuid;

	}

	/**
	 * The method to set the value to primaryZuid
	 * @param primaryZuid A string representing the primaryZuid
	 */
	public setPrimaryZuid(primaryZuid: string): void	{
		this.primaryZuid = primaryZuid;
		this.keyModified.set("primary_zuid", 1);

	}

	/**
	 * The method to get the ziaPortalId
	 * @returns A string representing the ziaPortalId
	 */
	public getZiaPortalId(): string	{
		return this.ziaPortalId;

	}

	/**
	 * The method to set the value to ziaPortalId
	 * @param ziaPortalId A string representing the ziaPortalId
	 */
	public setZiaPortalId(ziaPortalId: string): void	{
		this.ziaPortalId = ziaPortalId;
		this.keyModified.set("zia_portal_id", 1);

	}

	/**
	 * The method to get the timeZone
	 * @returns A string representing the timeZone
	 */
	public getTimeZone(): string	{
		return this.timeZone;

	}

	/**
	 * The method to set the value to timeZone
	 * @param timeZone A string representing the timeZone
	 */
	public setTimeZone(timeZone: string): void	{
		this.timeZone = timeZone;
		this.keyModified.set("time_zone", 1);

	}

	/**
	 * The method to get the zgid
	 * @returns A string representing the zgid
	 */
	public getZgid(): string	{
		return this.zgid;

	}

	/**
	 * The method to set the value to zgid
	 * @param zgid A string representing the zgid
	 */
	public setZgid(zgid: string): void	{
		this.zgid = zgid;
		this.keyModified.set("zgid", 1);

	}

	/**
	 * The method to get the countryCode
	 * @returns A string representing the countryCode
	 */
	public getCountryCode(): string	{
		return this.countryCode;

	}

	/**
	 * The method to set the value to countryCode
	 * @param countryCode A string representing the countryCode
	 */
	public setCountryCode(countryCode: string): void	{
		this.countryCode = countryCode;
		this.keyModified.set("country_code", 1);

	}

	/**
	 * The method to get the licenseDetails
	 * @returns An instance of LicenseDetails
	 */
	public getLicenseDetails(): LicenseDetails	{
		return this.licenseDetails;

	}

	/**
	 * The method to set the value to licenseDetails
	 * @param licenseDetails An instance of LicenseDetails
	 */
	public setLicenseDetails(licenseDetails: LicenseDetails): void	{
		this.licenseDetails = licenseDetails;
		this.keyModified.set("license_details", 1);

	}

	/**
	 * The method to get the phone
	 * @returns A string representing the phone
	 */
	public getPhone(): string	{
		return this.phone;

	}

	/**
	 * The method to set the value to phone
	 * @param phone A string representing the phone
	 */
	public setPhone(phone: string): void	{
		this.phone = phone;
		this.keyModified.set("phone", 1);

	}

	/**
	 * The method to get the companyName
	 * @returns A string representing the companyName
	 */
	public getCompanyName(): string	{
		return this.companyName;

	}

	/**
	 * The method to set the value to companyName
	 * @param companyName A string representing the companyName
	 */
	public setCompanyName(companyName: string): void	{
		this.companyName = companyName;
		this.keyModified.set("company_name", 1);

	}

	/**
	 * The method to get the privacySettings
	 * @returns A boolean representing the privacySettings
	 */
	public getPrivacySettings(): boolean	{
		return this.privacySettings;

	}

	/**
	 * The method to set the value to privacySettings
	 * @param privacySettings A boolean representing the privacySettings
	 */
	public setPrivacySettings(privacySettings: boolean): void	{
		this.privacySettings = privacySettings;
		this.keyModified.set("privacy_settings", 1);

	}

	/**
	 * The method to get the primaryEmail
	 * @returns A string representing the primaryEmail
	 */
	public getPrimaryEmail(): string	{
		return this.primaryEmail;

	}

	/**
	 * The method to set the value to primaryEmail
	 * @param primaryEmail A string representing the primaryEmail
	 */
	public setPrimaryEmail(primaryEmail: string): void	{
		this.primaryEmail = primaryEmail;
		this.keyModified.set("primary_email", 1);

	}

	/**
	 * The method to get the isoCode
	 * @returns A string representing the isoCode
	 */
	public getIsoCode(): string	{
		return this.isoCode;

	}

	/**
	 * The method to set the value to isoCode
	 * @param isoCode A string representing the isoCode
	 */
	public setIsoCode(isoCode: string): void	{
		this.isoCode = isoCode;
		this.keyModified.set("iso_code", 1);

	}

	/**
	 * The method to check if the user has modified the given key
	 * @param key A string representing the key
	 * @returns A number representing the modification
	 */
	public isKeyModified(key: string): number | null | undefined	{
		if(this.keyModified.has(key))	{
			return this.keyModified.get(key);
		}
		return null;

	}

	/**
	 * The method to mark the given key as modified
	 * @param key A string representing the key
	 * @param modification A number representing the modification
	 */
	public setKeyModified(key: string, modification: number): void	{
		this.keyModified.set(key, modification);

	}

}
export {
	Org as MasterModel,
	Org as Org
}
