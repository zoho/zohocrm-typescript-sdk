import {Attachment} from "../attachments/attachment";
import {Record} from "../record/record";
import {User} from "../users/user";
import {Model} from "../../../../../../utils/util/model";

class Note implements Model{

	private owner: User;
	private modifiedTime: Date;
	private attachments: Array<Attachment>;
	private createdTime: Date;
	private parentId: Record;
	private editable: boolean;
	private seModule: string;
	private isSharedToClient: boolean;
	private modifiedBy: User;
	private size: string;
	private state: string;
	private voiceNote: boolean;
	private id: bigint;
	private createdBy: User;
	private noteTitle: string;
	private noteContent: string;
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
	 * The method to get the attachments
	 * @returns An Array representing the attachments
	 */
	public getAttachments(): Array<Attachment>	{
		return this.attachments;

	}

	/**
	 * The method to set the value to attachments
	 * @param attachments An Array representing the attachments
	 */
	public setAttachments(attachments: Array<Attachment>): void	{
		this.attachments = attachments;
		this.keyModified.set("$attachments", 1);

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
	 * The method to get the isSharedToClient
	 * @returns A boolean representing the isSharedToClient
	 */
	public getIsSharedToClient(): boolean	{
		return this.isSharedToClient;

	}

	/**
	 * The method to set the value to isSharedToClient
	 * @param isSharedToClient A boolean representing the isSharedToClient
	 */
	public setIsSharedToClient(isSharedToClient: boolean): void	{
		this.isSharedToClient = isSharedToClient;
		this.keyModified.set("$is_shared_to_client", 1);

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
	 * The method to get the size
	 * @returns A string representing the size
	 */
	public getSize(): string	{
		return this.size;

	}

	/**
	 * The method to set the value to size
	 * @param size A string representing the size
	 */
	public setSize(size: string): void	{
		this.size = size;
		this.keyModified.set("$size", 1);

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
	 * The method to get the voiceNote
	 * @returns A boolean representing the voiceNote
	 */
	public getVoiceNote(): boolean	{
		return this.voiceNote;

	}

	/**
	 * The method to set the value to voiceNote
	 * @param voiceNote A boolean representing the voiceNote
	 */
	public setVoiceNote(voiceNote: boolean): void	{
		this.voiceNote = voiceNote;
		this.keyModified.set("$voice_note", 1);

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
	 * The method to get the noteTitle
	 * @returns A string representing the noteTitle
	 */
	public getNoteTitle(): string	{
		return this.noteTitle;

	}

	/**
	 * The method to set the value to noteTitle
	 * @param noteTitle A string representing the noteTitle
	 */
	public setNoteTitle(noteTitle: string): void	{
		this.noteTitle = noteTitle;
		this.keyModified.set("Note_Title", 1);

	}

	/**
	 * The method to get the noteContent
	 * @returns A string representing the noteContent
	 */
	public getNoteContent(): string	{
		return this.noteContent;

	}

	/**
	 * The method to set the value to noteContent
	 * @param noteContent A string representing the noteContent
	 */
	public setNoteContent(noteContent: string): void	{
		this.noteContent = noteContent;
		this.keyModified.set("Note_Content", 1);

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
	Note as MasterModel,
	Note as Note
}
