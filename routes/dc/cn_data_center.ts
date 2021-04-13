import { DataCenter } from './data_center'
import { Environment } from './environment';

/**
 * This class represents the properties of Zoho CRM in CN Domain.
*/
export class CNDataCenter extends DataCenter {

    private static PRODUCTION_ENVIRONMENT :Environment;

    private static SANDBOX_ENVIRONMENT :Environment;

    private static DEVELOPER_ENVIRONMENT :Environment;

    /**
     * This method represents the Zoho CRM Production environment in CN domain
     * @returns {Environment} An instance of Environment
    */
    public static PRODUCTION() {
        if(this.PRODUCTION_ENVIRONMENT == null) {
            this.PRODUCTION_ENVIRONMENT = DataCenter.setEnvironment("https://www.zohoapis.com.cn", new CNDataCenter().getIAMUrl(), new CNDataCenter().getFileUploadUrl());
        }

        return this.PRODUCTION_ENVIRONMENT;
    }

    /**
     *  This method represents the Zoho CRM Sandbox environment in CN domain
     * @returns {Environment} An instance of Environment
    */
    public static SANDBOX() {
        if(this.SANDBOX_ENVIRONMENT == null) {
            this.SANDBOX_ENVIRONMENT = DataCenter.setEnvironment("https://sandbox.zohoapis.com.cn", new CNDataCenter().getIAMUrl(), new CNDataCenter().getFileUploadUrl());
        }

        return this.SANDBOX_ENVIRONMENT;
    }

    /**
     *  This method represents the Zoho CRM Developer environment in CN domain
     * @returns {Environment} An instance of Environment
    */
    public static DEVELOPER() {
        if(this.DEVELOPER_ENVIRONMENT == null) {
            this.DEVELOPER_ENVIRONMENT = DataCenter.setEnvironment("https://developer.zohoapis.com.cn", new CNDataCenter().getIAMUrl(), new CNDataCenter().getFileUploadUrl());
        }

        return this.DEVELOPER_ENVIRONMENT;
    }

    public getIAMUrl() {
        return "https://accounts.zoho.com.cn/oauth/v2/token";
    }

    public getFileUploadUrl(){
        return "https://content.zohoapis.com.cn";
    }
}