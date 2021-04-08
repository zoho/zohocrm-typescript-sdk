import {ContactRoleWrapper} from "./contact_role_wrapper";
import {Model} from "../../../../../../utils/util/model";

class RecordBodyWrapper implements Model{

	private data: Array<ContactRoleWrapper>;
	private keyModified: Map<string, number> = new Map<string, number>();
	public getData(): Array<ContactRoleWrapper>	{
		return this.data;

	}

	public setData(data: Array<ContactRoleWrapper>): void	{
		this.data = data;
		this.keyModified.set("data", 1);

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
	RecordBodyWrapper as MasterModel,
	RecordBodyWrapper as RecordBodyWrapper
}
