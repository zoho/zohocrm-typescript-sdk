import {User} from "../users/user";
import {Model} from "../../../../../../utils/util/model";

class Role implements Model{

	private displayLabel: string;
	private forecastManager: User;
	private shareWithPeers: boolean;
	private name: string;
	private description: string;
	private id: bigint;
	private reportingTo: User;
	private adminUser: boolean;
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
	 * The method to get the forecastManager
	 * @returns An instance of User
	 */
	public getForecastManager(): User	{
		return this.forecastManager;

	}

	/**
	 * The method to set the value to forecastManager
	 * @param forecastManager An instance of User
	 */
	public setForecastManager(forecastManager: User): void	{
		this.forecastManager = forecastManager;
		this.keyModified.set("forecast_manager", 1);

	}

	/**
	 * The method to get the shareWithPeers
	 * @returns A boolean representing the shareWithPeers
	 */
	public getShareWithPeers(): boolean	{
		return this.shareWithPeers;

	}

	/**
	 * The method to set the value to shareWithPeers
	 * @param shareWithPeers A boolean representing the shareWithPeers
	 */
	public setShareWithPeers(shareWithPeers: boolean): void	{
		this.shareWithPeers = shareWithPeers;
		this.keyModified.set("share_with_peers", 1);

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
	 * The method to get the reportingTo
	 * @returns An instance of User
	 */
	public getReportingTo(): User	{
		return this.reportingTo;

	}

	/**
	 * The method to set the value to reportingTo
	 * @param reportingTo An instance of User
	 */
	public setReportingTo(reportingTo: User): void	{
		this.reportingTo = reportingTo;
		this.keyModified.set("reporting_to", 1);

	}

	/**
	 * The method to get the adminUser
	 * @returns A boolean representing the adminUser
	 */
	public getAdminUser(): boolean	{
		return this.adminUser;

	}

	/**
	 * The method to set the value to adminUser
	 * @param adminUser A boolean representing the adminUser
	 */
	public setAdminUser(adminUser: boolean): void	{
		this.adminUser = adminUser;
		this.keyModified.set("admin_user", 1);

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
	Role as MasterModel,
	Role as Role
}
