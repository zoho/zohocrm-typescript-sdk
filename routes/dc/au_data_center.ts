import { DataCenter } from './data_center'
import { Environment } from './environment';

/**
 * This class represents the properties of Zoho CRM in AU Domain.
 * @extends DataCenter
*/
export class AUDataCenter extends DataCenter {

    private static PRODUCTION_ENVIRONMENT :Environment;

    private static SANDBOX_ENVIRONMENT :Environment;

    private static DEVELOPER_ENVIRONMENT :Environment;

    /**
     * This method represents the Zoho CRM Production environment in AU domain
     * @returns {Environment} An instance of Environment
    */
    public static PRODUCTION() {
        if(this.PRODUCTION_ENVIRONMENT == null) {
            this.PRODUCTION_ENVIRONMENT = DataCenter.setEnvironment("https://www.zohoapis.com.au", new AUDataCenter().getIAMUrl(), new AUDataCenter().getFileUploadUrl());
        }

        return this.PRODUCTION_ENVIRONMENT;
    }

    /**
     * This method represents the Zoho CRM Sandbox environment in AU domain
     * @returns {Environment} An instance of Environment
    */
    public static SANDBOX() {
        if(this.SANDBOX_ENVIRONMENT == null) {
            this.SANDBOX_ENVIRONMENT = DataCenter.setEnvironment("https://sandbox.zohoapis.com.au", new AUDataCenter().getIAMUrl(), new AUDataCenter().getFileUploadUrl());
        }

        return this.SANDBOX_ENVIRONMENT;
    }

    /**
     * This method represents the Zoho CRM Developer environment in AU domain
     * @returns {Environment} An instance of Environment
    */
    public static DEVELOPER() {
        if(this.DEVELOPER_ENVIRONMENT == null) {
            this.DEVELOPER_ENVIRONMENT = DataCenter.setEnvironment("https://developer.zohoapis.com.au", new AUDataCenter().getIAMUrl(), new AUDataCenter().getFileUploadUrl());
        }

        return this.DEVELOPER_ENVIRONMENT;
    }

    public getIAMUrl() {
        return "https://accounts.zoho.com.au/oauth/v2/token";
    }

    public getFileUploadUrl(){
        return "https://content.zohoapis.com.au";
    }
}