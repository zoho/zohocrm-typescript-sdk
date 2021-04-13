import {NextTransition} from "./next_transition";
import {Field} from "../fields/field";
import {Record} from "../record/record";
import {Model} from "../../../../../../utils/util/model";

class Transition implements Model{

	private nextTransitions: Array<NextTransition>;
	private percentPartialSave: number;
	private data: Record;
	private nextFieldValue: string;
	private name: string;
	private criteriaMatched: boolean;
	private id: bigint;
	private fields: Array<Field>;
	private criteriaMessage: string;
	private type: string;
	private executionTime: Date;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the nextTransitions
	 * @returns An Array representing the nextTransitions
	 */
	public getNextTransitions(): Array<NextTransition>	{
		return this.nextTransitions;

	}

	/**
	 * The method to set the value to nextTransitions
	 * @param nextTransitions An Array representing the nextTransitions
	 */
	public setNextTransitions(nextTransitions: Array<NextTransition>): void	{
		this.nextTransitions = nextTransitions;
		this.keyModified.set("next_transitions", 1);

	}

	/**
	 * The method to get the percentPartialSave
	 * @returns A number representing the percentPartialSave
	 */
	public getPercentPartialSave(): number	{
		return this.percentPartialSave;

	}

	/**
	 * The method to set the value to percentPartialSave
	 * @param percentPartialSave A number representing the percentPartialSave
	 */
	public setPercentPartialSave(percentPartialSave: number): void	{
		this.percentPartialSave = percentPartialSave;
		this.keyModified.set("percent_partial_save", 1);

	}

	/**
	 * The method to get the data
	 * @returns An instance of Record
	 */
	public getData(): Record	{
		return this.data;

	}

	/**
	 * The method to set the value to data
	 * @param data An instance of Record
	 */
	public setData(data: Record): void	{
		this.data = data;
		this.keyModified.set("data", 1);

	}

	/**
	 * The method to get the nextFieldValue
	 * @returns A string representing the nextFieldValue
	 */
	public getNextFieldValue(): string	{
		return this.nextFieldValue;

	}

	/**
	 * The method to set the value to nextFieldValue
	 * @param nextFieldValue A string representing the nextFieldValue
	 */
	public setNextFieldValue(nextFieldValue: string): void	{
		this.nextFieldValue = nextFieldValue;
		this.keyModified.set("next_field_value", 1);

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
	 * The method to get the criteriaMatched
	 * @returns A boolean representing the criteriaMatched
	 */
	public getCriteriaMatched(): boolean	{
		return this.criteriaMatched;

	}

	/**
	 * The method to set the value to criteriaMatched
	 * @param criteriaMatched A boolean representing the criteriaMatched
	 */
	public setCriteriaMatched(criteriaMatched: boolean): void	{
		this.criteriaMatched = criteriaMatched;
		this.keyModified.set("criteria_matched", 1);

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
	 * The method to get the criteriaMessage
	 * @returns A string representing the criteriaMessage
	 */
	public getCriteriaMessage(): string	{
		return this.criteriaMessage;

	}

	/**
	 * The method to set the value to criteriaMessage
	 * @param criteriaMessage A string representing the criteriaMessage
	 */
	public setCriteriaMessage(criteriaMessage: string): void	{
		this.criteriaMessage = criteriaMessage;
		this.keyModified.set("criteria_message", 1);

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
	 * The method to get the executionTime
	 * @returns An instance of Date
	 */
	public getExecutionTime(): Date	{
		return this.executionTime;

	}

	/**
	 * The method to set the value to executionTime
	 * @param executionTime An instance of Date
	 */
	public setExecutionTime(executionTime: Date): void	{
		this.executionTime = executionTime;
		this.keyModified.set("execution_time", 1);

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
	Transition as MasterModel,
	Transition as Transition
}
