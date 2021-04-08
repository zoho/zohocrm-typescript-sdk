import {Model} from "../../../../../../utils/util/model";

class RecurringActivity implements Model{

	private rrule: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the rrule
	 * @returns A string representing the rrule
	 */
	public getRrule(): string	{
		return this.rrule;

	}

	/**
	 * The method to set the value to rrule
	 * @param rrule A string representing the rrule
	 */
	public setRrule(rrule: string): void	{
		this.rrule = rrule;
		this.keyModified.set("RRULE", 1);

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
	RecurringActivity as MasterModel,
	RecurringActivity as RecurringActivity
}
