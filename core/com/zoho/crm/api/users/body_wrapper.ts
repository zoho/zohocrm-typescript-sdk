import {User} from "./user";
import {Model} from "../../../../../../utils/util/model";

class BodyWrapper implements Model{

	private users: Array<User>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the users
	 * @returns An Array representing the users
	 */
	public getUsers(): Array<User>	{
		return this.users;

	}

	/**
	 * The method to set the value to users
	 * @param users An Array representing the users
	 */
	public setUsers(users: Array<User>): void	{
		this.users = users;
		this.keyModified.set("users", 1);

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
	BodyWrapper as MasterModel,
	BodyWrapper as BodyWrapper
}
