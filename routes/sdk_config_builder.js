"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDKConfigBuilder = exports.MasterModel = void 0;
const sdk_config_1 = require("./sdk_config");
class SDKConfigBuilder {
    constructor() {
        this.autoRefreshFields = false;
        this.pickListValidation = true;
        this._timeout = 0;
    }
    /**
     * This is a setter method to set autoRefreshFields.
     * @param {Boolean} autoRefreshFields A boolean value
     * @returns {SDKConfigBuilder} An instance of SDKConfigBuilder
     */
    setAutoRefreshFields(autoRefreshFields) {
        this.autoRefreshFields = autoRefreshFields;
        return this;
    }
    /**
     * This is a setter method to set pickListValidation.
     * @param {Boolean} pickListValidation A boolean value
     * @returns {SDKConfigBuilder} An instance of SDKConfigBuilder
     */
    setPickListValidation(pickListValidation) {
        this.pickListValidation = pickListValidation;
        return this;
    }
    /**
     * This is a setter method to set API timeout.
     * @param {number} timeout
     * @returns {SDKConfigBuilder} An instance of SDKConfigBuilder
     */
    timeout(timeout) {
        this._timeout = timeout > 0 ? timeout : 0;
        return this;
    }
    /**
     * The method to build the SDKConfig instance
     * @returns {SDKConfig} An instance of SDKConfig
     */
    build() {
        return new sdk_config_1.SDKConfig(this.autoRefreshFields, this.pickListValidation, this._timeout);
    }
}
exports.MasterModel = SDKConfigBuilder;
exports.SDKConfigBuilder = SDKConfigBuilder;
//# sourceMappingURL=sdk_config_builder.js.map