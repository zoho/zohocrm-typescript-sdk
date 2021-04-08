import {Section} from "./section";
import {Profile} from "../profiles/profile";
import {User} from "../users/user";
import {Model} from "../../../../../../utils/util/model";

class Layout implements Model{

	private createdTime: Date;
	private convertMapping: Map<string, any>;
	private modifiedTime: Date;
	private visible: boolean;
	private createdFor: User;
	private name: string;
	private modifiedBy: User;
	private profiles: Array<Profile>;
	private id: bigint;
	private createdBy: User;
	private sections: Array<Section>;
	private status: number;
	private keyModified: Map<string, number> = new Map<string, number>();
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
		this.keyModified.set("created_time", 1);

	}

	/**
	 * The method to get the convertMapping
	 * @returns A Map representing the convertMapping
	 */
	public getConvertMapping(): Map<string, any>	{
		return this.convertMapping;

	}

	/**
	 * The method to set the value to convertMapping
	 * @param convertMapping A Map representing the convertMapping
	 */
	public setConvertMapping(convertMapping: Map<string, any>): void	{
		this.convertMapping = convertMapping;
		this.keyModified.set("convert_mapping", 1);

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
		this.keyModified.set("modified_time", 1);

	}

	/**
	 * The method to get the visible
	 * @returns A boolean representing the visible
	 */
	public getVisible(): boolean	{
		return this.visible;

	}

	/**
	 * The method to set the value to visible
	 * @param visible A boolean representing the visible
	 */
	public setVisible(visible: boolean): void	{
		this.visible = visible;
		this.keyModified.set("visible", 1);

	}

	/**
	 * The method to get the createdFor
	 * @returns An instance of User
	 */
	public getCreatedFor(): User	{
		return this.createdFor;

	}

	/**
	 * The method to set the value to createdFor
	 * @param createdFor An instance of User
	 */
	public setCreatedFor(createdFor: User): void	{
		this.createdFor = createdFor;
		this.keyModified.set("created_for", 1);

	}

	/**
	 * The method to get the name
	 * @returns A string representing the name
	 */
	public getName(): string	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param name A string representing the name
	 */
	public setName(name: string): void	{
		this.name = name;
		this.keyModified.set("name", 1);

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
		this.keyModified.set("modified_by", 1);

	}

	/**
	 * The method to get the profiles
	 * @returns An Array representing the profiles
	 */
	public getProfiles(): Array<Profile>	{
		return this.profiles;

	}

	/**
	 * The method to set the value to profiles
	 * @param profiles An Array representing the profiles
	 */
	public setProfiles(profiles: Array<Profile>): void	{
		this.profiles = profiles;
		this.keyModified.set("profiles", 1);

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
		this.keyModified.set("created_by", 1);

	}

	/**
	 * The method to get the sections
	 * @returns An Array representing the sections
	 */
	public getSections(): Array<Section>	{
		return this.sections;

	}

	/**
	 * The method to set the value to sections
	 * @param sections An Array representing the sections
	 */
	public setSections(sections: Array<Section>): void	{
		this.sections = sections;
		this.keyModified.set("sections", 1);

	}

	/**
	 * The method to get the status
	 * @returns A number representing the status
	 */
	public getStatus(): number	{
		return this.status;

	}

	/**
	 * The method to set the value to status
	 * @param status A number representing the status
	 */
	public setStatus(status: number): void	{
		this.status = status;
		this.keyModified.set("status", 1);

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
	Layout as MasterModel,
	Layout as Layout
}
