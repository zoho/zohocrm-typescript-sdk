import {Record} from "./record";
import {Model} from "../../../../../../utils/util/model";

class Participants extends Record implements Model{

	/**
	 * The method to get the name
	 * @returns A string representing the name
	 */
	public getName(): string	{
		return this.getKeyValue("name");

	}

	/**
	 * The method to set the value to name
	 * @param name A string representing the name
	 */
	public setName(name: string): void	{
		this.addKeyValue("name", name);

	}

	/**
	 * The method to get the email
	 * @returns A string representing the email
	 */
	public getEmail(): string	{
		return this.getKeyValue("Email");

	}

	/**
	 * The method to set the value to email
	 * @param email A string representing the email
	 */
	public setEmail(email: string): void	{
		this.addKeyValue("Email", email);

	}

	/**
	 * The method to get the invited
	 * @returns A boolean representing the invited
	 */
	public getInvited(): boolean	{
		return this.getKeyValue("invited");

	}

	/**
	 * The method to set the value to invited
	 * @param invited A boolean representing the invited
	 */
	public setInvited(invited: boolean): void	{
		this.addKeyValue("invited", invited);

	}

	/**
	 * The method to get the type
	 * @returns A string representing the type
	 */
	public getType(): string	{
		return this.getKeyValue("type");

	}

	/**
	 * The method to set the value to type
	 * @param type A string representing the type
	 */
	public setType(type: string): void	{
		this.addKeyValue("type", type);

	}

	/**
	 * The method to get the participant
	 * @returns A string representing the participant
	 */
	public getParticipant(): string	{
		return this.getKeyValue("participant");

	}

	/**
	 * The method to set the value to participant
	 * @param participant A string representing the participant
	 */
	public setParticipant(participant: string): void	{
		this.addKeyValue("participant", participant);

	}

	/**
	 * The method to get the status
	 * @returns A string representing the status
	 */
	public getStatus(): string	{
		return this.getKeyValue("status");

	}

	/**
	 * The method to set the value to status
	 * @param status A string representing the status
	 */
	public setStatus(status: string): void	{
		this.addKeyValue("status", status);

	}

}
export {
	Participants as MasterModel,
	Participants as Participants
}
