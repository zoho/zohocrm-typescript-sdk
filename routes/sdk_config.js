"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDKConfig = void 0;
/**
 * The class to configure the SDK.
 */
class SDKConfig {
    /**
     * Creates an instance of SDKConfig with the given parameters
     * @param {Boolean} autoRefreshFields A boolean representing autoRefreshFields
     * @param {Boolean} pickListValidation A boolean representing pickListValidation
     * @param {number} timeout A Integer representing timeout
     */
    constructor(autoRefreshFields, pickListValidation, timeout) {
        this._timeout = 0;
        this.autoRefreshFields = autoRefreshFields;
        this.pickListValidation = pickListValidation;
        this._timeout = timeout;
    }
    /**
     * This is a getter method to get autoRefreshFields.
     * @returns {Boolean} A boolean representing autoRefreshFields
     */
    getAutoRefreshFields() {
        return this.autoRefreshFields;
    }
    /**
     *  This is a getter method to get pickListValidation.
     * @returns {Boolean} A boolean representing pickListValidation
     */
    getPickListValidation() {
        return this.pickListValidation;
    }
    /**
     *  This is a getter method to get timeout.
     * @returns {number} A Integer representing API timeout
     */
    timeout() {
        return this._timeout;
    }
}
exports.SDKConfig = SDKConfig;
//# sourceMappingURL=sdk_config.js.map