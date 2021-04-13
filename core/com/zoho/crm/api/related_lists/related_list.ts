import {Model} from "../../../../../../utils/util/model";

class RelatedList implements Model{

	private id: bigint;
	private sequenceNumber: string;
	private displayLabel: string;
	private apiName: string;
	private module: string;
	private name: string;
	private action: string;
	private href: string;
	private type: string;
	private connectedmodule: string;
	private linkingmodule: string;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the sequenceNumber
	 * @returns A string representing the sequenceNumber
	 */
	public getSequenceNumber(): string	{
		return this.sequenceNumber;

	}

	/**
	 * The method to set the value to sequenceNumber
	 * @param sequenceNumber A string representing the sequenceNumber
	 */
	public setSequenceNumber(sequenceNumber: string): void	{
		this.sequenceNumber = sequenceNumber;
		this.keyModified.set("sequence_number", 1);

	}

	/**
	 * The method to get the displayLabel
	 * @returns A string representing the displayLabel
	 */
	public getDisplayLabel(): string	{
		return this.displayLabel;

	}

	/**
	 * The method to set the value to displayLabel
	 * @param displayLabel A string representing the displayLabel
	 */
	public setDisplayLabel(displayLabel: string): void	{
		this.displayLabel = displayLabel;
		this.keyModified.set("display_label", 1);

	}

	/**
	 * The method to get the apiName
	 * @returns A string representing the apiName
	 */
	public getAPIName(): string	{
		return this.apiName;

	}

	/**
	 * The method to set the value to apiName
	 * @param apiName A string representing the apiName
	 */
	public setAPIName(apiName: string): void	{
		this.apiName = apiName;
		this.keyModified.set("api_name", 1);

	}

	/**
	 * The method to get the module
	 * @returns A string representing the module
	 */
	public getModule(): string	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param module A string representing the module
	 */
	public setModule(module: string): void	{
		this.module = module;
		this.keyModified.set("module", 1);

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
	 * The method to get the action
	 * @returns A string representing the action
	 */
	public getAction(): string	{
		return this.action;

	}

	/**
	 * The method to set the value to action
	 * @param action A string representing the action
	 */
	public setAction(action: string): void	{
		this.action = action;
		this.keyModified.set("action", 1);

	}

	/**
	 * The method to get the href
	 * @returns A string representing the href
	 */
	public getHref(): string	{
		return this.href;

	}

	/**
	 * The method to set the value to href
	 * @param href A string representing the href
	 */
	public setHref(href: string): void	{
		this.href = href;
		this.keyModified.set("href", 1);

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
		this.keyModified.set("type", 1);

	}

	/**
	 * The method to get the connectedmodule
	 * @returns A string representing the connectedmodule
	 */
	public getConnectedmodule(): string	{
		return this.connectedmodule;

	}

	/**
	 * The method to set the value to connectedmodule
	 * @param connectedmodule A string representing the connectedmodule
	 */
	public setConnectedmodule(connectedmodule: string): void	{
		this.connectedmodule = connectedmodule;
		this.keyModified.set("connectedmodule", 1);

	}

	/**
	 * The method to get the linkingmodule
	 * @returns A string representing the linkingmodule
	 */
	public getLinkingmodule(): string	{
		return this.linkingmodule;

	}

	/**
	 * The method to set the value to linkingmodule
	 * @param linkingmodule A string representing the linkingmodule
	 */
	public setLinkingmodule(linkingmodule: string): void	{
		this.linkingmodule = linkingmodule;
		this.keyModified.set("linkingmodule", 1);

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
	RelatedList as MasterModel,
	RelatedList as RelatedList
}
