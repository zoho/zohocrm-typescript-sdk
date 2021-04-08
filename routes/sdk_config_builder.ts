import { SDKConfig } from './sdk_config'

class SDKConfigBuilder {
    private autoRefreshFields: boolean = false;
    private pickListValidation: boolean = true;
    private _timeout : number = 0;

    /**
     * This is a setter method to set autoRefreshFields.
     * @param {Boolean} autoRefreshFields A boolean value
     * @returns {SDKConfigBuilder} An instance of SDKConfigBuilder
     */
    public setAutoRefreshFields(autoRefreshFields: boolean): SDKConfigBuilder{
        this.autoRefreshFields = autoRefreshFields;
        return this;
    }

    /**
     * This is a setter method to set pickListValidation.
     * @param {Boolean} pickListValidation A boolean value
     * @returns {SDKConfigBuilder} An instance of SDKConfigBuilder
     */
    public setPickListValidation(pickListValidation: boolean): SDKConfigBuilder {
        this.pickListValidation = pickListValidation;
        return this;
    }

    /**
     * This is a setter method to set API timeout.
     * @param {number} timeout
     * @returns {SDKConfigBuilder} An instance of SDKConfigBuilder
     */
    public timeout(timeout: number) {

        this._timeout = timeout > 0 ? timeout : 0;

        return this;
    }

    /**
     * The method to build the SDKConfig instance
     * @returns {SDKConfig} An instance of SDKConfig
     */
    public build(): SDKConfig {
        return new SDKConfig(this.autoRefreshFields, this.pickListValidation, this._timeout);
    }
}

export {
    SDKConfigBuilder as MasterModel,
    SDKConfigBuilder as SDKConfigBuilder
}