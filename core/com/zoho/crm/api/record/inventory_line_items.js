"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryLineItems = exports.MasterModel = void 0;
const record_1 = require("./record");
class InventoryLineItems extends record_1.Record {
    /**
     * The method to get the product
     * @returns An instance of LineItemProduct
     */
    getProduct() {
        return this.getKeyValue("product");
    }
    /**
     * The method to set the value to product
     * @param product An instance of LineItemProduct
     */
    setProduct(product) {
        this.addKeyValue("product", product);
    }
    /**
     * The method to get the quantity
     * @returns A number representing the quantity
     */
    getQuantity() {
        return this.getKeyValue("quantity");
    }
    /**
     * The method to set the value to quantity
     * @param quantity A number representing the quantity
     */
    setQuantity(quantity) {
        this.addKeyValue("quantity", quantity);
    }
    /**
     * The method to get the discount
     * @returns A string representing the discount
     */
    getDiscount() {
        return this.getKeyValue("Discount");
    }
    /**
     * The method to set the value to discount
     * @param discount A string representing the discount
     */
    setDiscount(discount) {
        this.addKeyValue("Discount", discount);
    }
    /**
     * The method to get the totalAfterDiscount
     * @returns A number representing the totalAfterDiscount
     */
    getTotalAfterDiscount() {
        return this.getKeyValue("total_after_discount");
    }
    /**
     * The method to set the value to totalAfterDiscount
     * @param totalAfterDiscount A number representing the totalAfterDiscount
     */
    setTotalAfterDiscount(totalAfterDiscount) {
        this.addKeyValue("total_after_discount", totalAfterDiscount);
    }
    /**
     * The method to get the netTotal
     * @returns A number representing the netTotal
     */
    getNetTotal() {
        return this.getKeyValue("net_total");
    }
    /**
     * The method to set the value to netTotal
     * @param netTotal A number representing the netTotal
     */
    setNetTotal(netTotal) {
        this.addKeyValue("net_total", netTotal);
    }
    /**
     * The method to get the book
     * @returns A number representing the book
     */
    getBook() {
        return this.getKeyValue("book");
    }
    /**
     * The method to set the value to book
     * @param book A number representing the book
     */
    setBook(book) {
        this.addKeyValue("book", book);
    }
    /**
     * The method to get the tax
     * @returns A number representing the tax
     */
    getTax() {
        return this.getKeyValue("Tax");
    }
    /**
     * The method to set the value to tax
     * @param tax A number representing the tax
     */
    setTax(tax) {
        this.addKeyValue("Tax", tax);
    }
    /**
     * The method to get the listPrice
     * @returns A number representing the listPrice
     */
    getListPrice() {
        return this.getKeyValue("list_price");
    }
    /**
     * The method to set the value to listPrice
     * @param listPrice A number representing the listPrice
     */
    setListPrice(listPrice) {
        this.addKeyValue("list_price", listPrice);
    }
    /**
     * The method to get the unitPrice
     * @returns A number representing the unitPrice
     */
    getUnitPrice() {
        return this.getKeyValue("unit_price");
    }
    /**
     * The method to set the value to unitPrice
     * @param unitPrice A number representing the unitPrice
     */
    setUnitPrice(unitPrice) {
        this.addKeyValue("unit_price", unitPrice);
    }
    /**
     * The method to get the quantityInStock
     * @returns A number representing the quantityInStock
     */
    getQuantityInStock() {
        return this.getKeyValue("quantity_in_stock");
    }
    /**
     * The method to set the value to quantityInStock
     * @param quantityInStock A number representing the quantityInStock
     */
    setQuantityInStock(quantityInStock) {
        this.addKeyValue("quantity_in_stock", quantityInStock);
    }
    /**
     * The method to get the total
     * @returns A number representing the total
     */
    getTotal() {
        return this.getKeyValue("total");
    }
    /**
     * The method to set the value to total
     * @param total A number representing the total
     */
    setTotal(total) {
        this.addKeyValue("total", total);
    }
    /**
     * The method to get the productDescription
     * @returns A string representing the productDescription
     */
    getProductDescription() {
        return this.getKeyValue("product_description");
    }
    /**
     * The method to set the value to productDescription
     * @param productDescription A string representing the productDescription
     */
    setProductDescription(productDescription) {
        this.addKeyValue("product_description", productDescription);
    }
    /**
     * The method to get the lineTax
     * @returns An Array representing the lineTax
     */
    getLineTax() {
        return this.getKeyValue("line_tax");
    }
    /**
     * The method to set the value to lineTax
     * @param lineTax An Array representing the lineTax
     */
    setLineTax(lineTax) {
        this.addKeyValue("line_tax", lineTax);
    }
}
exports.MasterModel = InventoryLineItems;
exports.InventoryLineItems = InventoryLineItems;
//# sourceMappingURL=inventory_line_items.js.map