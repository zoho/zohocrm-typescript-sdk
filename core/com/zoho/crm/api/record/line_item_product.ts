import {Record} from "./record";
import {Model} from "../../../../../../utils/util/model";

class LineItemProduct extends Record implements Model{

	/**
	 * The method to get the productCode
	 * @returns A string representing the productCode
	 */
	public getProductCode(): string	{
		return this.getKeyValue("Product_Code");

	}

	/**
	 * The method to set the value to productCode
	 * @param productCode A string representing the productCode
	 */
	public setProductCode(productCode: string): void	{
		this.addKeyValue("Product_Code", productCode);

	}

	/**
	 * The method to get the currency
	 * @returns A string representing the currency
	 */
	public getCurrency(): string	{
		return this.getKeyValue("Currency");

	}

	/**
	 * The method to set the value to currency
	 * @param currency A string representing the currency
	 */
	public setCurrency(currency: string): void	{
		this.addKeyValue("Currency", currency);

	}

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

}
export {
	LineItemProduct as MasterModel,
	LineItemProduct as LineItemProduct
}
