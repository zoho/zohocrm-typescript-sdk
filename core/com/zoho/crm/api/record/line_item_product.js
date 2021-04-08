"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItemProduct = exports.MasterModel = void 0;
const record_1 = require("./record");
class LineItemProduct extends record_1.Record {
    /**
     * The method to get the productCode
     * @returns A string representing the productCode
     */
    getProductCode() {
        return this.getKeyValue("Product_Code");
    }
    /**
     * The method to set the value to productCode
     * @param productCode A string representing the productCode
     */
    setProductCode(productCode) {
        this.addKeyValue("Product_Code", productCode);
    }
    /**
     * The method to get the currency
     * @returns A string representing the currency
     */
    getCurrency() {
        return this.getKeyValue("Currency");
    }
    /**
     * The method to set the value to currency
     * @param currency A string representing the currency
     */
    setCurrency(currency) {
        this.addKeyValue("Currency", currency);
    }
    /**
     * The method to get the name
     * @returns A string representing the name
     */
    getName() {
        return this.getKeyValue("name");
    }
    /**
     * The method to set the value to name
     * @param name A string representing the name
     */
    setName(name) {
        this.addKeyValue("name", name);
    }
}
exports.MasterModel = LineItemProduct;
exports.LineItemProduct = LineItemProduct;
//# sourceMappingURL=line_item_product.js.map