import {Model} from "../../../../../../utils/util/model";

class PickListValue implements Model{

	private displayValue: string;
	private sequenceNumber: number;
	private expectedDataType: string;
	private maps: Array<any>;
	private actualValue: string;
	private sysRefName: string;
	private type: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the displayValue
	 * @returns A string representing the displayValue
	 */
	public getDisplayValue(): string	{
		return this.displayValue;

	}

	/**
	 * The method to set the value to displayValue
	 * @param displayValue A string representing the displayValue
	 */
	public setDisplayValue(displayValue: string): void	{
		this.displayValue = displayValue;
		this.keyModified.set("display_value", 1);

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
	 * The method to get the expectedDataType
	 * @returns A string representing the expectedDataType
	 */
	public getExpectedDataType(): string	{
		return this.expectedDataType;

	}

	/**
	 * The method to set the value to expectedDataType
	 * @param expectedDataType A string representing the expectedDataType
	 */
	public setExpectedDataType(expectedDataType: string): void	{
		this.expectedDataType = expectedDataType;
		this.keyModified.set("expected_data_type", 1);

	}

	/**
	 * The method to get the maps
	 * @returns An Array representing the maps
	 */
	public getMaps(): Array<any>	{
		return this.maps;

	}

	/**
	 * The method to set the value to maps
	 * @param maps An Array representing the maps
	 */
	public setMaps(maps: Array<any>): void	{
		this.maps = maps;
		this.keyModified.set("maps", 1);

	}

	/**
	 * The method to get the actualValue
	 * @returns A string representing the actualValue
	 */
	public getActualValue(): string	{
		return this.actualValue;

	}

	/**
	 * The method to set the value to actualValue
	 * @param actualValue A string representing the actualValue
	 */
	public setActualValue(actualValue: string): void	{
		this.actualValue = actualValue;
		this.keyModified.set("actual_value", 1);

	}

	/**
	 * The method to get the sysRefName
	 * @returns A string representing the sysRefName
	 */
	public getSysRefName(): string	{
		return this.sysRefName;

	}

	/**
	 * The method to set the value to sysRefName
	 * @param sysRefName A string representing the sysRefName
	 */
	public setSysRefName(sysRefName: string): void	{
		this.sysRefName = sysRefName;
		this.keyModified.set("sys_ref_name", 1);

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
	PickListValue as MasterModel,
	PickListValue as PickListValue
}
