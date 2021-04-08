"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USDataCenter = void 0;
const data_center_1 = require("./data_center");
/**
 * This class represents the properties of Zoho CRM in US Domain.
 */
class USDataCenter extends data_center_1.DataCenter {
    /**
     * This method represents the Zoho CRM Production environment in US domain
     * @returns {Environment} An instance of Environment
     */
    static PRODUCTION() {
        if (this.PRODUCTION_ENVIRONMENT == null) {
            this.PRODUCTION_ENVIRONMENT = data_center_1.DataCenter.setEnvironment("https://www.zohoapis.com", new USDataCenter().getIAMUrl(), new USDataCenter().getFileUploadUrl());
        }
        return this.PRODUCTION_ENVIRONMENT;
    }
    /**
     * This method represents the Zoho CRM Sandbox environment in US domain
     * @returns {Environment} An instance of Environment
     */
    static SANDBOX() {
        if (this.SANDBOX_ENVIRONMENT == null) {
            this.SANDBOX_ENVIRONMENT = data_center_1.DataCenter.setEnvironment("https://sandbox.zohoapis.com", new USDataCenter().getIAMUrl(), new USDataCenter().getFileUploadUrl());
        }
        return this.SANDBOX_ENVIRONMENT;
    }
    /**
     * This method represents the Zoho CRM Developer environment in US domain
     * @returns {Environment} An instance of Environment
     */
    static DEVELOPER() {
        if (this.DEVELOPER_ENVIRONMENT == null) {
            this.DEVELOPER_ENVIRONMENT = data_center_1.DataCenter.setEnvironment("https://developer.zohoapis.com", new USDataCenter().getIAMUrl(), new USDataCenter().getFileUploadUrl());
        }
        return this.DEVELOPER_ENVIRONMENT;
    }
    getIAMUrl() {
        return "https://accounts.zoho.com/oauth/v2/token";
    }
    getFileUploadUrl() {
        return "https://content.zohoapis.com";
    }
}
exports.USDataCenter = USDataCenter;
//# sourceMappingURL=us_data_center.js.map