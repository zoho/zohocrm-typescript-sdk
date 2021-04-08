import {Environment} from './environment'

/**
 * This class represents the properties of Zoho CRM DataCenter
 */
export class DataCenter {

    /**
     * The method to get the accounts URL.
     * @returns A String representing the accounts URL.
     */
    public getIAMUrl() {
    }

    /**
     * The method to get the File Upload URL
     * @returns A String representing the File Upload URL.
     */
    public getFileUploadUrl() {
    }

    /**
     * This method sets the environment to the calling DataCenter instance
     * @param {string} url - A String representing the domain URL
     * @param {string} accountsUrl - A String representing the accounts URL to fetch tokens.
     * @param {string} fileUploadUrl - A String representing the File Upload URL
     */
    static setEnvironment(url: string, accountsUrl: string, fileUploadUrl: string){
        return new Environment(url, accountsUrl, fileUploadUrl);
    }
}