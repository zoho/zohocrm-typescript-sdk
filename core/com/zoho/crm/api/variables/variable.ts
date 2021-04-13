import {VariableGroup} from "../variable_groups/variable_group";
import {Model} from "../../../../../../utils/util/model";

class Variable implements Model{

	private apiName: string;
	private name: string;
	private description: string;
	private id: bigint;
	private type: string;
	private variableGroup: VariableGroup;
	private value: any;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the variableGroup
	 * @returns An instance of VariableGroup
	 */
	public getVariableGroup(): VariableGroup	{
		return this.variableGroup;

	}

	/**
	 * The method to set the value to variableGroup
	 * @param variableGroup An instance of VariableGroup
	 */
	public setVariableGroup(variableGroup: VariableGroup): void	{
		this.variableGroup = variableGroup;
		this.keyModified.set("variable_group", 1);

	}

	/**
	 * The method to get the value
	 * @returns A object representing the value
	 */
	public getValue(): any	{
		return this.value;

	}

	/**
	 * The method to set the value to value
	 * @param value A object representing the value
	 */
	public setValue(value: any): void	{
		this.value = value;
		this.keyModified.set("value", 1);

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
	Variable as MasterModel,
	Variable as Variable
}
