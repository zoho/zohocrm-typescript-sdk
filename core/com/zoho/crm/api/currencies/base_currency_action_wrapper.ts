import {ActionResponse} from "./action_response";
import {BaseCurrencyActionHandler} from "./base_currency_action_handler";
import {Model} from "../../../../../../utils/util/model";

class BaseCurrencyActionWrapper implements Model, BaseCurrencyActionHandler{

	private baseCurrency: ActionResponse;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the baseCurrency
	 * @returns An instance of ActionResponse
	 */
	public getBaseCurrency(): ActionResponse	{
		return this.baseCurrency;

	}

	/**
	 * The method to set the value to baseCurrency
	 * @param baseCurrency An instance of ActionResponse
	 */
	public setBaseCurrency(baseCurrency: ActionResponse): void	{
		this.baseCurrency = baseCurrency;
		this.keyModified.set("base_currency", 1);

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
	BaseCurrencyActionWrapper as MasterModel,
	BaseCurrencyActionWrapper as BaseCurrencyActionWrapper
}
