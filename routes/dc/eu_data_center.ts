import { DataCenter } from './data_center'
import { Environment } from './environment';

/**
 * This class represents the properties of Zoho CRM in EU Domain.
 * @extends DataCenter
 */
export class EUDataCenter extends DataCenter {

    private static PRODUCTION_ENVIRONMENT :Environment;

    private static SANDBOX_ENVIRONMENT :Environment;

    private static DEVELOPER_ENVIRONMENT :Environment;

    /**
     * This method represents the Zoho CRM Production environment in EU domain
     * @returns {Environment} An instance of Environment
     */
    public static PRODUCTION(): Environment {
        if(this.PRODUCTION_ENVIRONMENT == null) {
            this.PRODUCTION_ENVIRONMENT = DataCenter.setEnvironment("https://www.zohoapis.eu", new EUDataCenter().getIAMUrl(), new EUDataCenter().getFileUploadUrl());
        }

        return this.PRODUCTION_ENVIRONMENT;
    }

    /**
     *  This method represents the Zoho CRM Sandbox environment in EU domain
     * @returns {Environment} An instance of Environment
     */
    public static SANDBOX(): Environment {
        if(this.SANDBOX_ENVIRONMENT == null) {
            this.SANDBOX_ENVIRONMENT = DataCenter.setEnvironment("https://sandbox.zohoapis.eu", new EUDataCenter().getIAMUrl(), new EUDataCenter().getFileUploadUrl());
        }

        return this.SANDBOX_ENVIRONMENT;
    }

    /**
     * This method represents the Zoho CRM Developer environment in EU domain
     * @returns {Environment} An instance of Environment
     */
    public static DEVELOPER(): Environment {
        if(this.DEVELOPER_ENVIRONMENT == null) {
            this.DEVELOPER_ENVIRONMENT = DataCenter.setEnvironment("https://developer.zohoapis.eu", new EUDataCenter().getIAMUrl(), new EUDataCenter().getFileUploadUrl());
        }

        return this.DEVELOPER_ENVIRONMENT;
    }

    public getIAMUrl() {
        return "https://accounts.zoho.eu/oauth/v2/token";
    }

    public getFileUploadUrl(){
        return "https://content.zohoapis.eu";
    }
}