import {Criteria} from "./criteria";
import {SharedDetails} from "./shared_details";
import {Model} from "../../../../../../utils/util/model";

class CustomView implements Model{

	private id: bigint;
	private name: string;
	private systemName: string;
	private displayValue: string;
	private sharedType: string;
	private category: string;
	private sortBy: string;
	private sortOrder: string;
	private favorite: number;
	private offline: boolean;
	private default1: boolean;
	private systemDefined: boolean;
	private criteria: Criteria;
	private sharedDetails: Array<SharedDetails>;
	private fields: Array<string>;
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
	 * The method to get the systemName
	 * @returns A string representing the systemName
	 */
	public getSystemName(): string	{
		return this.systemName;

	}

	/**
	 * The method to set the value to systemName
	 * @param systemName A string representing the systemName
	 */
	public setSystemName(systemName: string): void	{
		this.systemName = systemName;
		this.keyModified.set("system_name", 1);

	}

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
	 * The method to get the sharedType
	 * @returns A string representing the sharedType
	 */
	public getSharedType(): string	{
		return this.sharedType;

	}

	/**
	 * The method to set the value to sharedType
	 * @param sharedType A string representing the sharedType
	 */
	public setSharedType(sharedType: string): void	{
		this.sharedType = sharedType;
		this.keyModified.set("shared_type", 1);

	}

	/**
	 * The method to get the category
	 * @returns A string representing the category
	 */
	public getCategory(): string	{
		return this.category;

	}

	/**
	 * The method to set the value to category
	 * @param category A string representing the category
	 */
	public setCategory(category: string): void	{
		this.category = category;
		this.keyModified.set("category", 1);

	}

	/**
	 * The method to get the sortBy
	 * @returns A string representing the sortBy
	 */
	public getSortBy(): string	{
		return this.sortBy;

	}

	/**
	 * The method to set the value to sortBy
	 * @param sortBy A string representing the sortBy
	 */
	public setSortBy(sortBy: string): void	{
		this.sortBy = sortBy;
		this.keyModified.set("sort_by", 1);

	}

	/**
	 * The method to get the sortOrder
	 * @returns A string representing the sortOrder
	 */
	public getSortOrder(): string	{
		return this.sortOrder;

	}

	/**
	 * The method to set the value to sortOrder
	 * @param sortOrder A string representing the sortOrder
	 */
	public setSortOrder(sortOrder: string): void	{
		this.sortOrder = sortOrder;
		this.keyModified.set("sort_order", 1);

	}

	/**
	 * The method to get the favorite
	 * @returns A number representing the favorite
	 */
	public getFavorite(): number	{
		return this.favorite;

	}

	/**
	 * The method to set the value to favorite
	 * @param favorite A number representing the favorite
	 */
	public setFavorite(favorite: number): void	{
		this.favorite = favorite;
		this.keyModified.set("favorite", 1);

	}

	/**
	 * The method to get the offline
	 * @returns A boolean representing the offline
	 */
	public getOffline(): boolean	{
		return this.offline;

	}

	/**
	 * The method to set the value to offline
	 * @param offline A boolean representing the offline
	 */
	public setOffline(offline: boolean): void	{
		this.offline = offline;
		this.keyModified.set("offline", 1);

	}

	/**
	 * The method to get the default
	 * @returns A boolean representing the default1
	 */
	public getDefault(): boolean	{
		return this.default1;

	}

	/**
	 * The method to set the value to default
	 * @param default1 A boolean representing the default1
	 */
	public setDefault(default1: boolean): void	{
		this.default1 = default1;
		this.keyModified.set("default", 1);

	}

	/**
	 * The method to get the systemDefined
	 * @returns A boolean representing the systemDefined
	 */
	public getSystemDefined(): boolean	{
		return this.systemDefined;

	}

	/**
	 * The method to set the value to systemDefined
	 * @param systemDefined A boolean representing the systemDefined
	 */
	public setSystemDefined(systemDefined: boolean): void	{
		this.systemDefined = systemDefined;
		this.keyModified.set("system_defined", 1);

	}

	/**
	 * The method to get the criteria
	 * @returns An instance of Criteria
	 */
	public getCriteria(): Criteria	{
		return this.criteria;

	}

	/**
	 * The method to set the value to criteria
	 * @param criteria An instance of Criteria
	 */
	public setCriteria(criteria: Criteria): void	{
		this.criteria = criteria;
		this.keyModified.set("criteria", 1);

	}

	/**
	 * The method to get the sharedDetails
	 * @returns An Array representing the sharedDetails
	 */
	public getSharedDetails(): Array<SharedDetails>	{
		return this.sharedDetails;

	}

	/**
	 * The method to set the value to sharedDetails
	 * @param sharedDetails An Array representing the sharedDetails
	 */
	public setSharedDetails(sharedDetails: Array<SharedDetails>): void	{
		this.sharedDetails = sharedDetails;
		this.keyModified.set("shared_details", 1);

	}

	/**
	 * The method to get the fields
	 * @returns An Array representing the fields
	 */
	public getFields(): Array<string>	{
		return this.fields;

	}

	/**
	 * The method to set the value to fields
	 * @param fields An Array representing the fields
	 */
	public setFields(fields: Array<string>): void	{
		this.fields = fields;
		this.keyModified.set("fields", 1);

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
	CustomView as MasterModel,
	CustomView as CustomView
}
