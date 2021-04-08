import {Model} from "../../../../../../utils/util/model";

class ContactRoleWrapper implements Model{

	private contactRole: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	public getContactRole(): string	{
		return this.contactRole;

	}

	public setContactRole(contactRole: string): void	{
		this.contactRole = contactRole;
		this.keyModified.set("Contact_Role", 1);

	}

	public isKeyModified(key: string): number | null | undefined	{
		if(this.keyModified.has(key))	{
			return this.keyModified.get(key);
		}
		return null;

	}

	public setKeyModified(key: string, modification: number): void	{
		this.keyModified.set(key, modification);

	}

}
export {
	ContactRoleWrapper as MasterModel,
	ContactRoleWrapper as ContactRoleWrapper
}
