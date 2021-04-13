"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingDetails = exports.MasterModel = void 0;
const record_1 = require("./record");
class PricingDetails extends record_1.Record {
    /**
     * The method to get the toRange
     * @returns A number representing the toRange
     */
    getToRange() {
        return this.getKeyValue("to_range");
    }
    /**
     * The method to set the value to toRange
     * @param toRange A number representing the toRange
     */
    setToRange(toRange) {
        this.addKeyValue("to_range", toRange);
    }
    /**
     * The method to get the discount
     * @returns A number representing the discount
     */
    getDiscount() {
        return this.getKeyValue("discount");
    }
    /**
     * The method to set the value to discount
     * @param discount A number representing the discount
     */
    setDiscount(discount) {
        this.addKeyValue("discount", discount);
    }
    /**
     * The method to get the fromRange
     * @returns A number representing the fromRange
     */
    getFromRange() {
        return this.getKeyValue("from_range");
    }
    /**
     * The method to set the value to fromRange
     * @param fromRange A number representing the fromRange
     */
    setFromRange(fromRange) {
        this.addKeyValue("from_range", fromRange);
    }
}
exports.MasterModel = PricingDetails;
exports.PricingDetails = PricingDetails;
//# sourceMappingURL=pricing_details.js.map