"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CNDataCenter = void 0;
const data_center_1 = require("./data_center");
/**
 * This class represents the properties of Zoho CRM in CN Domain.
*/
class CNDataCenter extends data_center_1.DataCenter {
    /**
     * This method represents the Zoho CRM Production environment in CN domain
     * @returns {Environment} An instance of Environment
    */
    static PRODUCTION() {
        if (this.PRODUCTION_ENVIRONMENT == null) {
            this.PRODUCTION_ENVIRONMENT = data_center_1.DataCenter.setEnvironment("https://www.zohoapis.com.cn", new CNDataCenter().getIAMUrl(), new CNDataCenter().getFileUploadUrl());
        }
        return this.PRODUCTION_ENVIRONMENT;
    }
    /**
     *  This method represents the Zoho CRM Sandbox environment in CN domain
     * @returns {Environment} An instance of Environment
    */
    static SANDBOX() {
        if (this.SANDBOX_ENVIRONMENT == null) {
            this.SANDBOX_ENVIRONMENT = data_center_1.DataCenter.setEnvironment("https://sandbox.zohoapis.com.cn", new CNDataCenter().getIAMUrl(), new CNDataCenter().getFileUploadUrl());
        }
        return this.SANDBOX_ENVIRONMENT;
    }
    /**
     *  This method represents the Zoho CRM Developer environment in CN domain
     * @returns {Environment} An instance of Environment
    */
    static DEVELOPER() {
        if (this.DEVELOPER_ENVIRONMENT == null) {
            this.DEVELOPER_ENVIRONMENT = data_center_1.DataCenter.setEnvironment("https://developer.zohoapis.com.cn", new CNDataCenter().getIAMUrl(), new CNDataCenter().getFileUploadUrl());
        }
        return this.DEVELOPER_ENVIRONMENT;
    }
    getIAMUrl() {
        return "https://accounts.zoho.com.cn/oauth/v2/token";
    }
    getFileUploadUrl() {
        return "https://content.zohoapis.com.cn";
    }
}
exports.CNDataCenter = CNDataCenter;
//# sourceMappingURL=cn_data_center.js.map