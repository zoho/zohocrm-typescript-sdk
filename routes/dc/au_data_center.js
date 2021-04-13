"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUDataCenter = void 0;
const data_center_1 = require("./data_center");
/**
 * This class represents the properties of Zoho CRM in AU Domain.
 * @extends DataCenter
*/
class AUDataCenter extends data_center_1.DataCenter {
    /**
     * This method represents the Zoho CRM Production environment in AU domain
     * @returns {Environment} An instance of Environment
    */
    static PRODUCTION() {
        if (this.PRODUCTION_ENVIRONMENT == null) {
            this.PRODUCTION_ENVIRONMENT = data_center_1.DataCenter.setEnvironment("https://www.zohoapis.com.au", new AUDataCenter().getIAMUrl(), new AUDataCenter().getFileUploadUrl());
        }
        return this.PRODUCTION_ENVIRONMENT;
    }
    /**
     * This method represents the Zoho CRM Sandbox environment in AU domain
     * @returns {Environment} An instance of Environment
    */
    static SANDBOX() {
        if (this.SANDBOX_ENVIRONMENT == null) {
            this.SANDBOX_ENVIRONMENT = data_center_1.DataCenter.setEnvironment("https://sandbox.zohoapis.com.au", new AUDataCenter().getIAMUrl(), new AUDataCenter().getFileUploadUrl());
        }
        return this.SANDBOX_ENVIRONMENT;
    }
    /**
     * This method represents the Zoho CRM Developer environment in AU domain
     * @returns {Environment} An instance of Environment
    */
    static DEVELOPER() {
        if (this.DEVELOPER_ENVIRONMENT == null) {
            this.DEVELOPER_ENVIRONMENT = data_center_1.DataCenter.setEnvironment("https://developer.zohoapis.com.au", new AUDataCenter().getIAMUrl(), new AUDataCenter().getFileUploadUrl());
        }
        return this.DEVELOPER_ENVIRONMENT;
    }
    getIAMUrl() {
        return "https://accounts.zoho.com.au/oauth/v2/token";
    }
    getFileUploadUrl() {
        return "https://content.zohoapis.com.au";
    }
}
exports.AUDataCenter = AUDataCenter;
//# sourceMappingURL=au_data_center.js.map