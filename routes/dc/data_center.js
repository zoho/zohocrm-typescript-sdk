"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataCenter = void 0;
const environment_1 = require("./environment");
/**
 * This class represents the properties of Zoho CRM DataCenter
 */
class DataCenter {
    /**
     * The method to get the accounts URL.
     * @returns A String representing the accounts URL.
     */
    getIAMUrl() {
    }
    /**
     * The method to get the File Upload URL
     * @returns A String representing the File Upload URL.
     */
    getFileUploadUrl() {
    }
    /**
     * This method sets the environment to the calling DataCenter instance
     * @param {string} url - A String representing the domain URL
     * @param {string} accountsUrl - A String representing the accounts URL to fetch tokens.
     * @param {string} fileUploadUrl - A String representing the File Upload URL
     */
    static setEnvironment(url, accountsUrl, fileUploadUrl) {
        return new environment_1.Environment(url, accountsUrl, fileUploadUrl);
    }
}
exports.DataCenter = DataCenter;
//# sourceMappingURL=data_center.js.map