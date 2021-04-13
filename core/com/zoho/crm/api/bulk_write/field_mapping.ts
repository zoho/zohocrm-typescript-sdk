import {Model} from "../../../../../../utils/util/model";

class FieldMapping implements Model{

	private apiName: string;
	private index: number;
	private format: string;
	private findBy: string;
	private defaultValue: Map<string, any>;
	private module: string;
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
	 * The method to get the index
	 * @returns A number representing the index
	 */
	public getIndex(): number	{
		return this.index;

	}

	/**
	 * The method to set the value to index
	 * @param index A number representing the index
	 */
	public setIndex(index: number): void	{
		this.index = index;
		this.keyModified.set("index", 1);

	}

	/**
	 * The method to get the format
	 * @returns A string representing the format
	 */
	public getFormat(): string	{
		return this.format;

	}

	/**
	 * The method to set the value to format
	 * @param format A string representing the format
	 */
	public setFormat(format: string): void	{
		this.format = format;
		this.keyModified.set("format", 1);

	}

	/**
	 * The method to get the findBy
	 * @returns A string representing the findBy
	 */
	public getFindBy(): string	{
		return this.findBy;

	}

	/**
	 * The method to set the value to findBy
	 * @param findBy A string representing the findBy
	 */
	public setFindBy(findBy: string): void	{
		this.findBy = findBy;
		this.keyModified.set("find_by", 1);

	}

	/**
	 * The method to get the defaultValue
	 * @returns A Map representing the defaultValue
	 */
	public getDefaultValue(): Map<string, any>	{
		return this.defaultValue;

	}

	/**
	 * The method to set the value to defaultValue
	 * @param defaultValue A Map representing the defaultValue
	 */
	public setDefaultValue(defaultValue: Map<string, any>): void	{
		this.defaultValue = defaultValue;
		this.keyModified.set("default_value", 1);

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
	FieldMapping as MasterModel,
	FieldMapping as FieldMapping
}
