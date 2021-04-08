import {Format} from "./format";
import {User} from "../users/user";
import {Model} from "../../../../../../utils/util/model";

class Currency implements Model{

	private symbol: string;
	private createdTime: Date;
	private isActive: boolean;
	private exchangeRate: string;
	private format: Format;
	private createdBy: User;
	private prefixSymbol: boolean;
	private isBase: boolean;
	private modifiedTime: Date;
	private name: string;
	private modifiedBy: User;
	private id: bigint;
	private isoCode: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the symbol
	 * @returns A string representing the symbol
	 */
	public getSymbol(): string	{
		return this.symbol;

	}

	/**
	 * The method to set the value to symbol
	 * @param symbol A string representing the symbol
	 */
	public setSymbol(symbol: string): void	{
		this.symbol = symbol;
		this.keyModified.set("symbol", 1);

	}

	/**
	 * The method to get the createdTime
	 * @returns An instance of Date
	 */
	public getCreatedTime(): Date	{
		return this.createdTime;

	}

	/**
	 * The method to set the value to createdTime
	 * @param createdTime An instance of Date
	 */
	public setCreatedTime(createdTime: Date): void	{
		this.createdTime = createdTime;
		this.keyModified.set("created_time", 1);

	}

	/**
	 * The method to get the isActive
	 * @returns A boolean representing the isActive
	 */
	public getIsActive(): boolean	{
		return this.isActive;

	}

	/**
	 * The method to set the value to isActive
	 * @param isActive A boolean representing the isActive
	 */
	public setIsActive(isActive: boolean): void	{
		this.isActive = isActive;
		this.keyModified.set("is_active", 1);

	}

	/**
	 * The method to get the exchangeRate
	 * @returns A string representing the exchangeRate
	 */
	public getExchangeRate(): string	{
		return this.exchangeRate;

	}

	/**
	 * The method to set the value to exchangeRate
	 * @param exchangeRate A string representing the exchangeRate
	 */
	public setExchangeRate(exchangeRate: string): void	{
		this.exchangeRate = exchangeRate;
		this.keyModified.set("exchange_rate", 1);

	}

	/**
	 * The method to get the format
	 * @returns An instance of Format
	 */
	public getFormat(): Format	{
		return this.format;

	}

	/**
	 * The method to set the value to format
	 * @param format An instance of Format
	 */
	public setFormat(format: Format): void	{
		this.format = format;
		this.keyModified.set("format", 1);

	}

	/**
	 * The method to get the createdBy
	 * @returns An instance of User
	 */
	public getCreatedBy(): User	{
		return this.createdBy;

	}

	/**
	 * The method to set the value to createdBy
	 * @param createdBy An instance of User
	 */
	public setCreatedBy(createdBy: User): void	{
		this.createdBy = createdBy;
		this.keyModified.set("created_by", 1);

	}

	/**
	 * The method to get the prefixSymbol
	 * @returns A boolean representing the prefixSymbol
	 */
	public getPrefixSymbol(): boolean	{
		return this.prefixSymbol;

	}

	/**
	 * The method to set the value to prefixSymbol
	 * @param prefixSymbol A boolean representing the prefixSymbol
	 */
	public setPrefixSymbol(prefixSymbol: boolean): void	{
		this.prefixSymbol = prefixSymbol;
		this.keyModified.set("prefix_symbol", 1);

	}

	/**
	 * The method to get the isBase
	 * @returns A boolean representing the isBase
	 */
	public getIsBase(): boolean	{
		return this.isBase;

	}

	/**
	 * The method to set the value to isBase
	 * @param isBase A boolean representing the isBase
	 */
	public setIsBase(isBase: boolean): void	{
		this.isBase = isBase;
		this.keyModified.set("is_base", 1);

	}

	/**
	 * The method to get the modifiedTime
	 * @returns An instance of Date
	 */
	public getModifiedTime(): Date	{
		return this.modifiedTime;

	}

	/**
	 * The method to set the value to modifiedTime
	 * @param modifiedTime An instance of Date
	 */
	public setModifiedTime(modifiedTime: Date): void	{
		this.modifiedTime = modifiedTime;
		this.keyModified.set("modified_time", 1);

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
	 * The method to get the modifiedBy
	 * @returns An instance of User
	 */
	public getModifiedBy(): User	{
		return this.modifiedBy;

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param modifiedBy An instance of User
	 */
	public setModifiedBy(modifiedBy: User): void	{
		this.modifiedBy = modifiedBy;
		this.keyModified.set("modified_by", 1);

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
	 * The method to get the isoCode
	 * @returns A string representing the isoCode
	 */
	public getIsoCode(): string	{
		return this.isoCode;

	}

	/**
	 * The method to set the value to isoCode
	 * @param isoCode A string representing the isoCode
	 */
	public setIsoCode(isoCode: string): void	{
		this.isoCode = isoCode;
		this.keyModified.set("iso_code", 1);

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
	Currency as MasterModel,
	Currency as Currency
}
