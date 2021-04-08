import {ActionResponse} from "./action_response";
import {RecordActionHandler} from "./record_action_handler";
import {Model} from "../../../../../../utils/util/model";

class RecordActionWrapper implements Model, RecordActionHandler{

	private data: Array<ActionResponse>;
	private keyModified: Map<string, number> = new Map<string, number>();
	public getData(): Array<ActionResponse>	{
		return this.data;

	}

	public setData(data: Array<ActionResponse>): void	{
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
	RecordActionWrapper as MasterModel,
	RecordActionWrapper as RecordActionWrapper
}
