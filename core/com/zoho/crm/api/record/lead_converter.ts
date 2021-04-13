import {CarryOverTags} from "./carry_over_tags";
import {Record} from "./record";
import {Model} from "../../../../../../utils/util/model";

class LeadConverter implements Model{

	private overwrite: boolean;
	private notifyLeadOwner: boolean;
	private notifyNewEntityOwner: boolean;
	private accounts: string;
	private contacts: string;
	private assignTo: string;
	private deals: Record;
	private carryOverTags: CarryOverTags;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the overwrite
	 * @returns A boolean representing the overwrite
	 */
	public getOverwrite(): boolean	{
		return this.overwrite;

	}

	/**
	 * The method to set the value to overwrite
	 * @param overwrite A boolean representing the overwrite
	 */
	public setOverwrite(overwrite: boolean): void	{
		this.overwrite = overwrite;
		this.keyModified.set("overwrite", 1);

	}

	/**
	 * The method to get the notifyLeadOwner
	 * @returns A boolean representing the notifyLeadOwner
	 */
	public getNotifyLeadOwner(): boolean	{
		return this.notifyLeadOwner;

	}

	/**
	 * The method to set the value to notifyLeadOwner
	 * @param notifyLeadOwner A boolean representing the notifyLeadOwner
	 */
	public setNotifyLeadOwner(notifyLeadOwner: boolean): void	{
		this.notifyLeadOwner = notifyLeadOwner;
		this.keyModified.set("notify_lead_owner", 1);

	}

	/**
	 * The method to get the notifyNewEntityOwner
	 * @returns A boolean representing the notifyNewEntityOwner
	 */
	public getNotifyNewEntityOwner(): boolean	{
		return this.notifyNewEntityOwner;

	}

	/**
	 * The method to set the value to notifyNewEntityOwner
	 * @param notifyNewEntityOwner A boolean representing the notifyNewEntityOwner
	 */
	public setNotifyNewEntityOwner(notifyNewEntityOwner: boolean): void	{
		this.notifyNewEntityOwner = notifyNewEntityOwner;
		this.keyModified.set("notify_new_entity_owner", 1);

	}

	/**
	 * The method to get the accounts
	 * @returns A string representing the accounts
	 */
	public getAccounts(): string	{
		return this.accounts;

	}

	/**
	 * The method to set the value to accounts
	 * @param accounts A string representing the accounts
	 */
	public setAccounts(accounts: string): void	{
		this.accounts = accounts;
		this.keyModified.set("Accounts", 1);

	}

	/**
	 * The method to get the contacts
	 * @returns A string representing the contacts
	 */
	public getContacts(): string	{
		return this.contacts;

	}

	/**
	 * The method to set the value to contacts
	 * @param contacts A string representing the contacts
	 */
	public setContacts(contacts: string): void	{
		this.contacts = contacts;
		this.keyModified.set("Contacts", 1);

	}

	/**
	 * The method to get the assignTo
	 * @returns A string representing the assignTo
	 */
	public getAssignTo(): string	{
		return this.assignTo;

	}

	/**
	 * The method to set the value to assignTo
	 * @param assignTo A string representing the assignTo
	 */
	public setAssignTo(assignTo: string): void	{
		this.assignTo = assignTo;
		this.keyModified.set("assign_to", 1);

	}

	/**
	 * The method to get the deals
	 * @returns An instance of Record
	 */
	public getDeals(): Record	{
		return this.deals;

	}

	/**
	 * The method to set the value to deals
	 * @param deals An instance of Record
	 */
	public setDeals(deals: Record): void	{
		this.deals = deals;
		this.keyModified.set("Deals", 1);

	}

	/**
	 * The method to get the carryOverTags
	 * @returns An instance of CarryOverTags
	 */
	public getCarryOverTags(): CarryOverTags	{
		return this.carryOverTags;

	}

	/**
	 * The method to set the value to carryOverTags
	 * @param carryOverTags An instance of CarryOverTags
	 */
	public setCarryOverTags(carryOverTags: CarryOverTags): void	{
		this.carryOverTags = carryOverTags;
		this.keyModified.set("carry_over_tags", 1);

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
	LeadConverter as MasterModel,
	LeadConverter as LeadConverter
}
