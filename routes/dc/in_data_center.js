"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INDataCenter = void 0;
const data_center_1 = require("./data_center");
/**
 * This class represents the properties of Zoho CRM in IN Domain.
 * @extends DataCenter
 */
class INDataCenter extends data_center_1.DataCenter {
    /**
     * This method represents the Zoho CRM Production environment in IN domain
     * @returns {Environment} An instance of Environment
     */
    static PRODUCTION() {
        if (this.PRODUCTION_ENVIRONMENT == null) {
            this.PRODUCTION_ENVIRONMENT = data_center_1.DataCenter.setEnvironment("https://www.zohoapis.in", new INDataCenter().getIAMUrl(), new INDataCenter().getFileUploadUrl());
        }
        return this.PRODUCTION_ENVIRONMENT;
    }
    /**
     * This method represents the Zoho CRM Sandbox environment in IN domain
     * @returns {Environment} An instance of Environment
     */
    static SANDBOX() {
        if (this.SANDBOX_ENVIRONMENT == null) {
            this.SANDBOX_ENVIRONMENT = data_center_1.DataCenter.setEnvironment("https://sandbox.zohoapis.in", new INDataCenter().getIAMUrl(), new INDataCenter().getFileUploadUrl());
        }
        return this.SANDBOX_ENVIRONMENT;
    }
    /**
     * This method represents the Zoho CRM Developer environment in IN domain
     * @returns {Environment} An instance of Environment
     */
    static DEVELOPER() {
        if (this.DEVELOPER_ENVIRONMENT == null) {
            this.DEVELOPER_ENVIRONMENT = data_center_1.DataCenter.setEnvironment("https://developer.zohoapis.in", new INDataCenter().getIAMUrl(), new INDataCenter().getFileUploadUrl());
        }
        return this.DEVELOPER_ENVIRONMENT;
    }
    getIAMUrl() {
        return "https://accounts.zoho.in/oauth/v2/token";
    }
    getFileUploadUrl() {
        return "https://content.zohoapis.in";
    }
}
exports.INDataCenter = INDataCenter;
//# sourceMappingURL=in_data_center.js.map