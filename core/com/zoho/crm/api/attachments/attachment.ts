import {Record} from "../record/record";
import {User} from "../users/user";
import {Model} from "../../../../../../utils/util/model";

class Attachment implements Model{

	private owner: User;
	private modifiedTime: Date;
	private fileName: string;
	private createdTime: Date;
	private size: bigint;
	private parentId: Record;
	private editable: boolean;
	private fileId: string;
	private type: string;
	private seModule: string;
	private modifiedBy: User;
	private state: string;
	private id: bigint;
	private createdBy: User;
	private linkUrl: string;
	private description: string;
	private category: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the owner
	 * @returns An instance of User
	 */
	public getOwner(): User	{
		return this.owner;

	}

	/**
	 * The method to set the value to owner
	 * @param owner An instance of User
	 */
	public setOwner(owner: User): void	{
		this.owner = owner;
		this.keyModified.set("Owner", 1);

	}

	/**
	 * The method to get the modifiedTime
	 * @returns An instance of Date
	 */
	public getModifiedTime(): Date	{
		return this.modifiedTime;

	}

	/**
	 * The method to set the value to modifiedTime
	 * @param modifiedTime An instance of Date
	 */
	public setModifiedTime(modifiedTime: Date): void	{
		this.modifiedTime = modifiedTime;
		this.keyModified.set("Modified_Time", 1);

	}

	/**
	 * The method to get the fileName
	 * @returns A string representing the fileName
	 */
	public getFileName(): string	{
		return this.fileName;

	}

	/**
	 * The method to set the value to fileName
	 * @param fileName A string representing the fileName
	 */
	public setFileName(fileName: string): void	{
		this.fileName = fileName;
		this.keyModified.set("File_Name", 1);

	}

	/**
	 * The method to get the createdTime
	 * @returns An instance of Date
	 */
	public getCreatedTime(): Date	{
		return this.createdTime;

	}

	/**
	 * The method to set the value to createdTime
	 * @param createdTime An instance of Date
	 */
	public setCreatedTime(createdTime: Date): void	{
		this.createdTime = createdTime;
		this.keyModified.set("Created_Time", 1);

	}

	/**
	 * The method to get the size
	 * @returns A bigint representing the size
	 */
	public getSize(): bigint	{
		return this.size;

	}

	/**
	 * The method to set the value to size
	 * @param size A bigint representing the size
	 */
	public setSize(size: bigint): void	{
		this.size = size;
		this.keyModified.set("Size", 1);

	}

	/**
	 * The method to get the parentId
	 * @returns An instance of Record
	 */
	public getParentId(): Record	{
		return this.parentId;

	}

	/**
	 * The method to set the value to parentId
	 * @param parentId An instance of Record
	 */
	public setParentId(parentId: Record): void	{
		this.parentId = parentId;
		this.keyModified.set("Parent_Id", 1);

	}

	/**
	 * The method to get the editable
	 * @returns A boolean representing the editable
	 */
	public getEditable(): boolean	{
		return this.editable;

	}

	/**
	 * The method to set the value to editable
	 * @param editable A boolean representing the editable
	 */
	public setEditable(editable: boolean): void	{
		this.editable = editable;
		this.keyModified.set("$editable", 1);

	}

	/**
	 * The method to get the fileId
	 * @returns A string representing the fileId
	 */
	public getFileId(): string	{
		return this.fileId;

	}

	/**
	 * The method to set the value to fileId
	 * @param fileId A string representing the fileId
	 */
	public setFileId(fileId: string): void	{
		this.fileId = fileId;
		this.keyModified.set("$file_id", 1);

	}

	/**
	 * The method to get the type
	 * @returns A string representing the type
	 */
	public getType(): string	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param type A string representing the type
	 */
	public setType(type: string): void	{
		this.type = type;
		this.keyModified.set("$type", 1);

	}

	/**
	 * The method to get the seModule
	 * @returns A string representing the seModule
	 */
	public getSeModule(): string	{
		return this.seModule;

	}

	/**
	 * The method to set the value to seModule
	 * @param seModule A string representing the seModule
	 */
	public setSeModule(seModule: string): void	{
		this.seModule = seModule;
		this.keyModified.set("$se_module", 1);

	}

	/**
	 * The method to get the modifiedBy
	 * @returns An instance of User
	 */
	public getModifiedBy(): User	{
		return this.modifiedBy;

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param modifiedBy An instance of User
	 */
	public setModifiedBy(modifiedBy: User): void	{
		this.modifiedBy = modifiedBy;
		this.keyModified.set("Modified_By", 1);

	}

	/**
	 * The method to get the state
	 * @returns A string representing the state
	 */
	public getState(): string	{
		return this.state;

	}

	/**
	 * The method to set the value to state
	 * @param state A string representing the state
	 */
	public setState(state: string): void	{
		this.state = state;
		this.keyModified.set("$state", 1);

	}

	/**
	 * The method to get the id
	 * @returns A bigint representing the id
	 */
	public getId(): bigint	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A bigint representing the id
	 */
	public setId(id: bigint): void	{
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the createdBy
	 * @returns An instance of User
	 */
	public getCreatedBy(): User	{
		return this.createdBy;

	}

	/**
	 * The method to set the value to createdBy
	 * @param createdBy An instance of User
	 */
	public setCreatedBy(createdBy: User): void	{
		this.createdBy = createdBy;
		this.keyModified.set("Created_By", 1);

	}

	/**
	 * The method to get the linkUrl
	 * @returns A string representing the linkUrl
	 */
	public getLinkUrl(): string	{
		return this.linkUrl;

	}

	/**
	 * The method to set the value to linkUrl
	 * @param linkUrl A string representing the linkUrl
	 */
	public setLinkUrl(linkUrl: string): void	{
		this.linkUrl = linkUrl;
		this.keyModified.set("$link_url", 1);

	}

	/**
	 * The method to get the description
	 * @returns A string representing the description
	 */
	public getDescription(): string	{
		return this.description;

	}

	/**
	 * The method to set the value to description
	 * @param description A string representing the description
	 */
	public setDescription(description: string): void	{
		this.description = description;
		this.keyModified.set("description", 1);

	}

	/**
	 * The method to get the category
	 * @returns A string representing the category
	 */
	public getCategory(): string	{
		return this.category;

	}

	/**
	 * The method to set the value to category
	 * @param category A string representing the category
	 */
	public setCategory(category: string): void	{
		this.category = category;
		this.keyModified.set("category", 1);

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
	Attachment as MasterModel,
	Attachment as Attachment
}
