import {RecordResponseHandler} from "./record_response_handler";
import {Info} from "../record/info";
import {Record} from "../record/record";
import {Model} from "../../../../../../utils/util/model";

class RecordResponseWrapper implements Model, RecordResponseHandler{

	private data: Array<Record>;
	private info: Info;
	private keyModified: Map<string, number> = new Map<string, number>();
	public getData(): Array<Record>	{
		return this.data;

	}

	public setData(data: Array<Record>): void	{
		this.data = data;
		this.keyModified.set("data", 1);

	}

	public getInfo(): Info	{
		return this.info;

	}

	public setInfo(info: Info): void	{
		this.info = info;
		this.keyModified.set("info", 1);

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
	RecordResponseWrapper as MasterModel,
	RecordResponseWrapper as RecordResponseWrapper
}
