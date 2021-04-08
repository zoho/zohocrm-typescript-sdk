import {Record} from "./record";
import {Model} from "../../../../../../utils/util/model";

class PricingDetails extends Record implements Model{

	/**
	 * The method to get the toRange
	 * @returns A number representing the toRange
	 */
	public getToRange(): number	{
		return this.getKeyValue("to_range");

	}

	/**
	 * The method to set the value to toRange
	 * @param toRange A number representing the toRange
	 */
	public setToRange(toRange: number): void	{
		this.addKeyValue("to_range", toRange);

	}

	/**
	 * The method to get the discount
	 * @returns A number representing the discount
	 */
	public getDiscount(): number	{
		return this.getKeyValue("discount");

	}

	/**
	 * The method to set the value to discount
	 * @param discount A number representing the discount
	 */
	public setDiscount(discount: number): void	{
		this.addKeyValue("discount", discount);

	}

	/**
	 * The method to get the fromRange
	 * @returns A number representing the fromRange
	 */
	public getFromRange(): number	{
		return this.getKeyValue("from_range");

	}

	/**
	 * The method to set the value to fromRange
	 * @param fromRange A number representing the fromRange
	 */
	public setFromRange(fromRange: number): void	{
		this.addKeyValue("from_range", fromRange);

	}

}
export {
	PricingDetails as MasterModel,
	PricingDetails as PricingDetails
}
