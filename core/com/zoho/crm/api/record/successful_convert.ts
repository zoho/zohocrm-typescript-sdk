import {ConvertActionResponse} from "./convert_action_response";
import {Model} from "../../../../../../utils/util/model";

class SuccessfulConvert implements Model, ConvertActionResponse{

	private contacts: string;
	private deals: string;
	private accounts: string;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the deals
	 * @returns A string representing the deals
	 */
	public getDeals(): string	{
		return this.deals;

	}

	/**
	 * The method to set the value to deals
	 * @param deals A string representing the deals
	 */
	public setDeals(deals: string): void	{
		this.deals = deals;
		this.keyModified.set("Deals", 1);

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
	SuccessfulConvert as MasterModel,
	SuccessfulConvert as SuccessfulConvert
}
