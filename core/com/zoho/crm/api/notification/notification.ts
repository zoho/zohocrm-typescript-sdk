import {Model} from "../../../../../../utils/util/model";

class Notification implements Model{

	private channelExpiry: Date;
	private resourceUri: string;
	private resourceId: string;
	private notifyUrl: string;
	private resourceName: string;
	private channelId: bigint;
	private events: Array<string>;
	private token: string;
	private notifyOnRelatedAction: boolean;
	private fields: Map<string, any>;
	private deleteevents: boolean;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the channelExpiry
	 * @returns An instance of Date
	 */
	public getChannelExpiry(): Date	{
		return this.channelExpiry;

	}

	/**
	 * The method to set the value to channelExpiry
	 * @param channelExpiry An instance of Date
	 */
	public setChannelExpiry(channelExpiry: Date): void	{
		this.channelExpiry = channelExpiry;
		this.keyModified.set("channel_expiry", 1);

	}

	/**
	 * The method to get the resourceUri
	 * @returns A string representing the resourceUri
	 */
	public getResourceUri(): string	{
		return this.resourceUri;

	}

	/**
	 * The method to set the value to resourceUri
	 * @param resourceUri A string representing the resourceUri
	 */
	public setResourceUri(resourceUri: string): void	{
		this.resourceUri = resourceUri;
		this.keyModified.set("resource_uri", 1);

	}

	/**
	 * The method to get the resourceId
	 * @returns A string representing the resourceId
	 */
	public getResourceId(): string	{
		return this.resourceId;

	}

	/**
	 * The method to set the value to resourceId
	 * @param resourceId A string representing the resourceId
	 */
	public setResourceId(resourceId: string): void	{
		this.resourceId = resourceId;
		this.keyModified.set("resource_id", 1);

	}

	/**
	 * The method to get the notifyUrl
	 * @returns A string representing the notifyUrl
	 */
	public getNotifyUrl(): string	{
		return this.notifyUrl;

	}

	/**
	 * The method to set the value to notifyUrl
	 * @param notifyUrl A string representing the notifyUrl
	 */
	public setNotifyUrl(notifyUrl: string): void	{
		this.notifyUrl = notifyUrl;
		this.keyModified.set("notify_url", 1);

	}

	/**
	 * The method to get the resourceName
	 * @returns A string representing the resourceName
	 */
	public getResourceName(): string	{
		return this.resourceName;

	}

	/**
	 * The method to set the value to resourceName
	 * @param resourceName A string representing the resourceName
	 */
	public setResourceName(resourceName: string): void	{
		this.resourceName = resourceName;
		this.keyModified.set("resource_name", 1);

	}

	/**
	 * The method to get the channelId
	 * @returns A bigint representing the channelId
	 */
	public getChannelId(): bigint	{
		return this.channelId;

	}

	/**
	 * The method to set the value to channelId
	 * @param channelId A bigint representing the channelId
	 */
	public setChannelId(channelId: bigint): void	{
		this.channelId = channelId;
		this.keyModified.set("channel_id", 1);

	}

	/**
	 * The method to get the events
	 * @returns An Array representing the events
	 */
	public getEvents(): Array<string>	{
		return this.events;

	}

	/**
	 * The method to set the value to events
	 * @param events An Array representing the events
	 */
	public setEvents(events: Array<string>): void	{
		this.events = events;
		this.keyModified.set("events", 1);

	}

	/**
	 * The method to get the token
	 * @returns A string representing the token
	 */
	public getToken(): string	{
		return this.token;

	}

	/**
	 * The method to set the value to token
	 * @param token A string representing the token
	 */
	public setToken(token: string): void	{
		this.token = token;
		this.keyModified.set("token", 1);

	}

	/**
	 * The method to get the notifyOnRelatedAction
	 * @returns A boolean representing the notifyOnRelatedAction
	 */
	public getNotifyOnRelatedAction(): boolean	{
		return this.notifyOnRelatedAction;

	}

	/**
	 * The method to set the value to notifyOnRelatedAction
	 * @param notifyOnRelatedAction A boolean representing the notifyOnRelatedAction
	 */
	public setNotifyOnRelatedAction(notifyOnRelatedAction: boolean): void	{
		this.notifyOnRelatedAction = notifyOnRelatedAction;
		this.keyModified.set("notify_on_related_action", 1);

	}

	/**
	 * The method to get the fields
	 * @returns A Map representing the fields
	 */
	public getFields(): Map<string, any>	{
		return this.fields;

	}

	/**
	 * The method to set the value to fields
	 * @param fields A Map representing the fields
	 */
	public setFields(fields: Map<string, any>): void	{
		this.fields = fields;
		this.keyModified.set("fields", 1);

	}

	/**
	 * The method to get the deleteevents
	 * @returns A boolean representing the deleteevents
	 */
	public getDeleteevents(): boolean	{
		return this.deleteevents;

	}

	/**
	 * The method to set the value to deleteevents
	 * @param deleteevents A boolean representing the deleteevents
	 */
	public setDeleteevents(deleteevents: boolean): void	{
		this.deleteevents = deleteevents;
		this.keyModified.set("_delete_events", 1);

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
	Notification as MasterModel,
	Notification as Notification
}
