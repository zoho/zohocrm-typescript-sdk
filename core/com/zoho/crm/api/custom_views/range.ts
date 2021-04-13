import {Model} from "../../../../../../utils/util/model";

class Range implements Model{

	private from: number;
	private to: number;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the from
	 * @returns A number representing the from
	 */
	public getFrom(): number	{
		return this.from;

	}

	/**
	 * The method to set the value to from
	 * @param from A number representing the from
	 */
	public setFrom(from: number): void	{
		this.from = from;
		this.keyModified.set("from", 1);

	}

	/**
	 * The method to get the to
	 * @returns A number representing the to
	 */
	public getTo(): number	{
		return this.to;

	}

	/**
	 * The method to set the value to to
	 * @param to A number representing the to
	 */
	public setTo(to: number): void	{
		this.to = to;
		this.keyModified.set("to", 1);

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
	Range as MasterModel,
	Range as Range
}
