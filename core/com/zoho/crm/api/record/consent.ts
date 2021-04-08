import {User} from "../users/user";
import {Record} from "./record";
import {Model} from "../../../../../../utils/util/model";

class Consent extends Record implements Model{

	/**
	 * The method to get the owner
	 * @returns An instance of User
	 */
	public getOwner(): User	{
		return this.getKeyValue("Owner");

	}

	/**
	 * The method to set the value to owner
	 * @param owner An instance of User
	 */
	public setOwner(owner: User): void	{
		this.addKeyValue("Owner", owner);

	}

	/**
	 * The method to get the contactThroughEmail
	 * @returns A boolean representing the contactThroughEmail
	 */
	public getContactThroughEmail(): boolean	{
		return this.getKeyValue("Contact_Through_Email");

	}

	/**
	 * The method to set the value to contactThroughEmail
	 * @param contactThroughEmail A boolean representing the contactThroughEmail
	 */
	public setContactThroughEmail(contactThroughEmail: boolean): void	{
		this.addKeyValue("Contact_Through_Email", contactThroughEmail);

	}

	/**
	 * The method to get the contactThroughSocial
	 * @returns A boolean representing the contactThroughSocial
	 */
	public getContactThroughSocial(): boolean	{
		return this.getKeyValue("Contact_Through_Social");

	}

	/**
	 * The method to set the value to contactThroughSocial
	 * @param contactThroughSocial A boolean representing the contactThroughSocial
	 */
	public setContactThroughSocial(contactThroughSocial: boolean): void	{
		this.addKeyValue("Contact_Through_Social", contactThroughSocial);

	}

	/**
	 * The method to get the contactThroughSurvey
	 * @returns A boolean representing the contactThroughSurvey
	 */
	public getContactThroughSurvey(): boolean	{
		return this.getKeyValue("Contact_Through_Survey");

	}

	/**
	 * The method to set the value to contactThroughSurvey
	 * @param contactThroughSurvey A boolean representing the contactThroughSurvey
	 */
	public setContactThroughSurvey(contactThroughSurvey: boolean): void	{
		this.addKeyValue("Contact_Through_Survey", contactThroughSurvey);

	}

	/**
	 * The method to get the contactThroughPhone
	 * @returns A boolean representing the contactThroughPhone
	 */
	public getContactThroughPhone(): boolean	{
		return this.getKeyValue("Contact_Through_Phone");

	}

	/**
	 * The method to set the value to contactThroughPhone
	 * @param contactThroughPhone A boolean representing the contactThroughPhone
	 */
	public setContactThroughPhone(contactThroughPhone: boolean): void	{
		this.addKeyValue("Contact_Through_Phone", contactThroughPhone);

	}

	/**
	 * The method to get the mailSentTime
	 * @returns An instance of Date
	 */
	public getMailSentTime(): Date	{
		return this.getKeyValue("Mail_Sent_Time");

	}

	/**
	 * The method to set the value to mailSentTime
	 * @param mailSentTime An instance of Date
	 */
	public setMailSentTime(mailSentTime: Date): void	{
		this.addKeyValue("Mail_Sent_Time", mailSentTime);

	}

	/**
	 * The method to get the consentDate
	 * @returns An instance of Date
	 */
	public getConsentDate(): Date	{
		return this.getKeyValue("Consent_Date");

	}

	/**
	 * The method to set the value to consentDate
	 * @param consentDate An instance of Date
	 */
	public setConsentDate(consentDate: Date): void	{
		this.addKeyValue("Consent_Date", consentDate);

	}

	/**
	 * The method to get the consentRemarks
	 * @returns A string representing the consentRemarks
	 */
	public getConsentRemarks(): string	{
		return this.getKeyValue("Consent_Remarks");

	}

	/**
	 * The method to set the value to consentRemarks
	 * @param consentRemarks A string representing the consentRemarks
	 */
	public setConsentRemarks(consentRemarks: string): void	{
		this.addKeyValue("Consent_Remarks", consentRemarks);

	}

	/**
	 * The method to get the consentThrough
	 * @returns A string representing the consentThrough
	 */
	public getConsentThrough(): string	{
		return this.getKeyValue("Consent_Through");

	}

	/**
	 * The method to set the value to consentThrough
	 * @param consentThrough A string representing the consentThrough
	 */
	public setConsentThrough(consentThrough: string): void	{
		this.addKeyValue("Consent_Through", consentThrough);

	}

	/**
	 * The method to get the dataProcessingBasis
	 * @returns A string representing the dataProcessingBasis
	 */
	public getDataProcessingBasis(): string	{
		return this.getKeyValue("Data_Processing_Basis");

	}

	/**
	 * The method to set the value to dataProcessingBasis
	 * @param dataProcessingBasis A string representing the dataProcessingBasis
	 */
	public setDataProcessingBasis(dataProcessingBasis: string): void	{
		this.addKeyValue("Data_Processing_Basis", dataProcessingBasis);

	}

}
export {
	Consent as MasterModel,
	Consent as Consent
}
