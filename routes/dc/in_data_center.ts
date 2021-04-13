import { DataCenter } from './data_center'
import { Environment } from './environment';

/**
 * This class represents the properties of Zoho CRM in IN Domain.
 * @extends DataCenter
 */
export class INDataCenter extends DataCenter {

    private static PRODUCTION_ENVIRONMENT :Environment;

    private static SANDBOX_ENVIRONMENT :Environment;

    private static DEVELOPER_ENVIRONMENT :Environment;

    /**
     * This method represents the Zoho CRM Production environment in IN domain
     * @returns {Environment} An instance of Environment
     */
    public static PRODUCTION() {
        if(this.PRODUCTION_ENVIRONMENT == null) {
            this.PRODUCTION_ENVIRONMENT = DataCenter.setEnvironment("https://www.zohoapis.in" ,new INDataCenter().getIAMUrl(), new INDataCenter().getFileUploadUrl());
        }

        return this.PRODUCTION_ENVIRONMENT;
    }

    /**
     * This method represents the Zoho CRM Sandbox environment in IN domain
     * @returns {Environment} An instance of Environment
     */
    public static SANDBOX() {
        if(this.SANDBOX_ENVIRONMENT == null) {
            this.SANDBOX_ENVIRONMENT = DataCenter.setEnvironment("https://sandbox.zohoapis.in", new INDataCenter().getIAMUrl(), new INDataCenter().getFileUploadUrl());
        }

        return this.SANDBOX_ENVIRONMENT;
    }

    /**
     * This method represents the Zoho CRM Developer environment in IN domain
     * @returns {Environment} An instance of Environment
     */
    public static DEVELOPER() {
        if(this.DEVELOPER_ENVIRONMENT == null) {
            this.DEVELOPER_ENVIRONMENT = DataCenter.setEnvironment("https://developer.zohoapis.in", new INDataCenter().getIAMUrl(), new INDataCenter().getFileUploadUrl());
        }

        return this.DEVELOPER_ENVIRONMENT;
    }

    public getIAMUrl() {
        return "https://accounts.zoho.in/oauth/v2/token";
    }

    public getFileUploadUrl(){
        return "https://content.zohoapis.in"
    }
}