import {LineItemProduct} from "./line_item_product";
import {LineTax} from "./line_tax";
import {Record} from "./record";
import {Model} from "../../../../../../utils/util/model";

class InventoryLineItems extends Record implements Model{

	/**
	 * The method to get the product
	 * @returns An instance of LineItemProduct
	 */
	public getProduct(): LineItemProduct	{
		return this.getKeyValue("product");

	}

	/**
	 * The method to set the value to product
	 * @param product An instance of LineItemProduct
	 */
	public setProduct(product: LineItemProduct): void	{
		this.addKeyValue("product", product);

	}

	/**
	 * The method to get the quantity
	 * @returns A number representing the quantity
	 */
	public getQuantity(): number	{
		return this.getKeyValue("quantity");

	}

	/**
	 * The method to set the value to quantity
	 * @param quantity A number representing the quantity
	 */
	public setQuantity(quantity: number): void	{
		this.addKeyValue("quantity", quantity);

	}

	/**
	 * The method to get the discount
	 * @returns A string representing the discount
	 */
	public getDiscount(): string	{
		return this.getKeyValue("Discount");

	}

	/**
	 * The method to set the value to discount
	 * @param discount A string representing the discount
	 */
	public setDiscount(discount: string): void	{
		this.addKeyValue("Discount", discount);

	}

	/**
	 * The method to get the totalAfterDiscount
	 * @returns A number representing the totalAfterDiscount
	 */
	public getTotalAfterDiscount(): number	{
		return this.getKeyValue("total_after_discount");

	}

	/**
	 * The method to set the value to totalAfterDiscount
	 * @param totalAfterDiscount A number representing the totalAfterDiscount
	 */
	public setTotalAfterDiscount(totalAfterDiscount: number): void	{
		this.addKeyValue("total_after_discount", totalAfterDiscount);

	}

	/**
	 * The method to get the netTotal
	 * @returns A number representing the netTotal
	 */
	public getNetTotal(): number	{
		return this.getKeyValue("net_total");

	}

	/**
	 * The method to set the value to netTotal
	 * @param netTotal A number representing the netTotal
	 */
	public setNetTotal(netTotal: number): void	{
		this.addKeyValue("net_total", netTotal);

	}

	/**
	 * The method to get the book
	 * @returns A number representing the book
	 */
	public getBook(): number	{
		return this.getKeyValue("book");

	}

	/**
	 * The method to set the value to book
	 * @param book A number representing the book
	 */
	public setBook(book: number): void	{
		this.addKeyValue("book", book);

	}

	/**
	 * The method to get the tax
	 * @returns A number representing the tax
	 */
	public getTax(): number	{
		return this.getKeyValue("Tax");

	}

	/**
	 * The method to set the value to tax
	 * @param tax A number representing the tax
	 */
	public setTax(tax: number): void	{
		this.addKeyValue("Tax", tax);

	}

	/**
	 * The method to get the listPrice
	 * @returns A number representing the listPrice
	 */
	public getListPrice(): number	{
		return this.getKeyValue("list_price");

	}

	/**
	 * The method to set the value to listPrice
	 * @param listPrice A number representing the listPrice
	 */
	public setListPrice(listPrice: number): void	{
		this.addKeyValue("list_price", listPrice);

	}

	/**
	 * The method to get the unitPrice
	 * @returns A number representing the unitPrice
	 */
	public getUnitPrice(): number	{
		return this.getKeyValue("unit_price");

	}

	/**
	 * The method to set the value to unitPrice
	 * @param unitPrice A number representing the unitPrice
	 */
	public setUnitPrice(unitPrice: number): void	{
		this.addKeyValue("unit_price", unitPrice);

	}

	/**
	 * The method to get the quantityInStock
	 * @returns A number representing the quantityInStock
	 */
	public getQuantityInStock(): number	{
		return this.getKeyValue("quantity_in_stock");

	}

	/**
	 * The method to set the value to quantityInStock
	 * @param quantityInStock A number representing the quantityInStock
	 */
	public setQuantityInStock(quantityInStock: number): void	{
		this.addKeyValue("quantity_in_stock", quantityInStock);

	}

	/**
	 * The method to get the total
	 * @returns A number representing the total
	 */
	public getTotal(): number	{
		return this.getKeyValue("total");

	}

	/**
	 * The method to set the value to total
	 * @param total A number representing the total
	 */
	public setTotal(total: number): void	{
		this.addKeyValue("total", total);

	}

	/**
	 * The method to get the productDescription
	 * @returns A string representing the productDescription
	 */
	public getProductDescription(): string	{
		return this.getKeyValue("product_description");

	}

	/**
	 * The method to set the value to productDescription
	 * @param productDescription A string representing the productDescription
	 */
	public setProductDescription(productDescription: string): void	{
		this.addKeyValue("product_description", productDescription);

	}

	/**
	 * The method to get the lineTax
	 * @returns An Array representing the lineTax
	 */
	public getLineTax(): Array<LineTax>	{
		return this.getKeyValue("line_tax");

	}

	/**
	 * The method to set the value to lineTax
	 * @param lineTax An Array representing the lineTax
	 */
	public setLineTax(lineTax: Array<LineTax>): void	{
		this.addKeyValue("line_tax", lineTax);

	}

}
export {
	InventoryLineItems as MasterModel,
	InventoryLineItems as InventoryLineItems
}
