import {Model} from "../../../../../../utils/util/model";

class ProcessInfo implements Model{

	private fieldId: string;
	private isContinuous: boolean;
	private apiName: string;
	private continuous: boolean;
	private fieldLabel: string;
	private name: string;
	private columnName: string;
	private fieldValue: string;
	private id: bigint;
	private fieldName: string;
	private escalation: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the fieldId
	 * @returns A string representing the fieldId
	 */
	public getFieldId(): string	{
		return this.fieldId;

	}

	/**
	 * The method to set the value to fieldId
	 * @param fieldId A string representing the fieldId
	 */
	public setFieldId(fieldId: string): void	{
		this.fieldId = fieldId;
		this.keyModified.set("field_id", 1);

	}

	/**
	 * The method to get the isContinuous
	 * @returns A boolean representing the isContinuous
	 */
	public getIsContinuous(): boolean	{
		return this.isContinuous;

	}

	/**
	 * The method to set the value to isContinuous
	 * @param isContinuous A boolean representing the isContinuous
	 */
	public setIsContinuous(isContinuous: boolean): void	{
		this.isContinuous = isContinuous;
		this.keyModified.set("is_continuous", 1);

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
	 * The method to get the continuous
	 * @returns A boolean representing the continuous
	 */
	public getContinuous(): boolean	{
		return this.continuous;

	}

	/**
	 * The method to set the value to continuous
	 * @param continuous A boolean representing the continuous
	 */
	public setContinuous(continuous: boolean): void	{
		this.continuous = continuous;
		this.keyModified.set("continuous", 1);

	}

	/**
	 * The method to get the fieldLabel
	 * @returns A string representing the fieldLabel
	 */
	public getFieldLabel(): string	{
		return this.fieldLabel;

	}

	/**
	 * The method to set the value to fieldLabel
	 * @param fieldLabel A string representing the fieldLabel
	 */
	public setFieldLabel(fieldLabel: string): void	{
		this.fieldLabel = fieldLabel;
		this.keyModified.set("field_label", 1);

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
	 * The method to get the columnName
	 * @returns A string representing the columnName
	 */
	public getColumnName(): string	{
		return this.columnName;

	}

	/**
	 * The method to set the value to columnName
	 * @param columnName A string representing the columnName
	 */
	public setColumnName(columnName: string): void	{
		this.columnName = columnName;
		this.keyModified.set("column_name", 1);

	}

	/**
	 * The method to get the fieldValue
	 * @returns A string representing the fieldValue
	 */
	public getFieldValue(): string	{
		return this.fieldValue;

	}

	/**
	 * The method to set the value to fieldValue
	 * @param fieldValue A string representing the fieldValue
	 */
	public setFieldValue(fieldValue: string): void	{
		this.fieldValue = fieldValue;
		this.keyModified.set("field_value", 1);

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
	 * The method to get the fieldName
	 * @returns A string representing the fieldName
	 */
	public getFieldName(): string	{
		return this.fieldName;

	}

	/**
	 * The method to set the value to fieldName
	 * @param fieldName A string representing the fieldName
	 */
	public setFieldName(fieldName: string): void	{
		this.fieldName = fieldName;
		this.keyModified.set("field_name", 1);

	}

	/**
	 * The method to get the escalation
	 * @returns A string representing the escalation
	 */
	public getEscalation(): string	{
		return this.escalation;

	}

	/**
	 * The method to set the value to escalation
	 * @param escalation A string representing the escalation
	 */
	public setEscalation(escalation: string): void	{
		this.escalation = escalation;
		this.keyModified.set("escalation", 1);

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
	ProcessInfo as MasterModel,
	ProcessInfo as ProcessInfo
}
