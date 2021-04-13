import {Field} from "../fields/field";
import {Properties} from "./properties";
import {Model} from "../../../../../../utils/util/model";

class Section implements Model{

	private displayLabel: string;
	private sequenceNumber: number;
	private issubformsection: boolean;
	private tabTraversal: number;
	private apiName: string;
	private columnCount: number;
	private name: string;
	private generatedType: string;
	private fields: Array<Field>;
	private properties: Properties;
	private keyModified: Map<string, number> = new Map<string, number>();
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
	 * The method to get the sequenceNumber
	 * @returns A number representing the sequenceNumber
	 */
	public getSequenceNumber(): number	{
		return this.sequenceNumber;

	}

	/**
	 * The method to set the value to sequenceNumber
	 * @param sequenceNumber A number representing the sequenceNumber
	 */
	public setSequenceNumber(sequenceNumber: number): void	{
		this.sequenceNumber = sequenceNumber;
		this.keyModified.set("sequence_number", 1);

	}

	/**
	 * The method to get the issubformsection
	 * @returns A boolean representing the issubformsection
	 */
	public getIssubformsection(): boolean	{
		return this.issubformsection;

	}

	/**
	 * The method to set the value to issubformsection
	 * @param issubformsection A boolean representing the issubformsection
	 */
	public setIssubformsection(issubformsection: boolean): void	{
		this.issubformsection = issubformsection;
		this.keyModified.set("isSubformSection", 1);

	}

	/**
	 * The method to get the tabTraversal
	 * @returns A number representing the tabTraversal
	 */
	public getTabTraversal(): number	{
		return this.tabTraversal;

	}

	/**
	 * The method to set the value to tabTraversal
	 * @param tabTraversal A number representing the tabTraversal
	 */
	public setTabTraversal(tabTraversal: number): void	{
		this.tabTraversal = tabTraversal;
		this.keyModified.set("tab_traversal", 1);

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
	 * The method to get the columnCount
	 * @returns A number representing the columnCount
	 */
	public getColumnCount(): number	{
		return this.columnCount;

	}

	/**
	 * The method to set the value to columnCount
	 * @param columnCount A number representing the columnCount
	 */
	public setColumnCount(columnCount: number): void	{
		this.columnCount = columnCount;
		this.keyModified.set("column_count", 1);

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
	 * The method to get the generatedType
	 * @returns A string representing the generatedType
	 */
	public getGeneratedType(): string	{
		return this.generatedType;

	}

	/**
	 * The method to set the value to generatedType
	 * @param generatedType A string representing the generatedType
	 */
	public setGeneratedType(generatedType: string): void	{
		this.generatedType = generatedType;
		this.keyModified.set("generated_type", 1);

	}

	/**
	 * The method to get the fields
	 * @returns An Array representing the fields
	 */
	public getFields(): Array<Field>	{
		return this.fields;

	}

	/**
	 * The method to set the value to fields
	 * @param fields An Array representing the fields
	 */
	public setFields(fields: Array<Field>): void	{
		this.fields = fields;
		this.keyModified.set("fields", 1);

	}

	/**
	 * The method to get the properties
	 * @returns An instance of Properties
	 */
	public getProperties(): Properties	{
		return this.properties;

	}

	/**
	 * The method to set the value to properties
	 * @param properties An instance of Properties
	 */
	public setProperties(properties: Properties): void	{
		this.properties = properties;
		this.keyModified.set("properties", 1);

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
	Section as MasterModel,
	Section as Section
}
