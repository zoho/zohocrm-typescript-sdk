# Archival Notice:

This SDK is archived. You can continue to use it, but no new features or support requests will be accepted. For the new version, refer to

ZOHO CRM v2 API SDK :
- [GitHub Repository](https://github.com/zoho/zohocrm-typescript-sdk-2.0)
- [Help Doc](https://www.zoho.com/crm/developer/docs/server-side-sdks/v2/typescript.html)

ZOHO CRM v2.1 API SDK :
- [GitHub Repository](https://github.com/zoho/zohocrm-typescript-sdk-2.1)

# ZOHO CRM TYPESCRIPT SDK

## Table Of Contents

* [Overview](#overview)
* [Registering a Zoho Client](#registering-a-zoho-client)
* [Environmental Setup](#environmental-setup)
* [Including the SDK in your project](#including-the-sdk-in-your-project)
* [Persistence](#token-persistence)
  * [DataBase Persistence](#database-persistence)
  * [File Persistence](#file-persistence)
  * [Custom Persistence](#custom-persistence)
* [Configuration](#configuration)
* [Initialization](#initializing-the-application)
* [Class Hierarchy](#class-hierarchy)
* [Responses And Exceptions](#responses-and-exceptions)
* [Multi User Support](#multi-user-support-in-the-typescript-sdk)
* [Sample Code](#sdk-sample-code)

## Overview

Zoho CRM TypeScript SDK offers a way to create client TypeScript applications that can be integrated with Zoho CRM.

## Registering a Zoho Client

Since Zoho CRM APIs are authenticated with OAuth2 standards, you should register your client app with Zoho. To register your app:

- Visit this page [https://api-console.zoho.com/](https://api-console.zoho.com)

- Click on `ADD CLIENT`.

- Choose a `Client Type`.

- Enter **Client Name**, **Client Domain** or **Homepage URL** and **Authorized Redirect URIs** then click `CREATE`.

- Your Client app would have been created and displayed by now.

- Select the created OAuth client.

- Generate grant token by providing the necessary scopes, time duration (the duration for which the generated token is valid) and Scope Description.

## Environmental Setup

TypeScript SDK is installable through **npm**. **npm** is a tool for dependency management in TypeScript. SDK expects the following from the client app.

- Client app must have Node(version 12 and above)

- TypeScript SDK must be installed into client app through **npm**.

## Including the SDK in your project

You can include the SDK to your project using:

- Install **Node** from [nodejs.org](https://nodejs.org/en/download/) (if not installed).

- Install **TypeScript NPM** package.

    ```sh
    npm install -g typescript
    ```

- Install **TypeScript SDK**
    - Navigate to the workspace of your client app.
    - Run the command below:

    ```sh
    npm install @zohocrm/typescript-sdk
    ```
- The TypeScript SDK will be installed and a package named **@zohocrm/typescript-sdk** will be created in the local machine.

- Another method to install the SDK
    - Add dependencies to the package.json of the node server with the latest version (recommended)
    - Run **npm install** in the directory which installs all the dependencies mentioned in package.json.


## Token Persistence

Token persistence refers to storing and utilizing the authentication tokens that are provided by Zoho. There are three ways provided by the SDK in which persistence can be utilized. They are DataBase Persistence, File Persistence and Custom Persistence.

### Table of Contents

- [DataBase Persistence](#database-persistence)

- [File Persistence](#file-persistence)

- [Custom Persistence](#custom-persistence)

### Implementing OAuth Persistence

Once the application is authorized, OAuth access and refresh tokens can be used for subsequent user data requests to Zoho CRM. Hence, they need to be persisted by the client app.

The persistence is achieved by writing an implementation of the inbuilt **[TokenStore](models/authenticator/store/token_store.ts) Class**, which has the following callback methods.

- **getToken(user : [UserSignature](routes/user_signature.ts), token : [Token](models/authenticator/token.ts))** - invoked before firing a request to fetch the saved tokens. This method should return implementation **Token Class** object for the library to process it.

- **saveToken(user: [UserSignature](routes/user_signature.ts), token : [Token](models/authenticator/token.ts))** - invoked after fetching access and refresh tokens from Zoho.

- **deleteToken(token : [Token](models/authenticator/token.ts))** - invoked before saving the latest tokens.

- **getTokens()** - The method to retrieve all the stored tokens.

- **deleteTokens()** - The method to delete all the stored tokens.


### DataBase Persistence

In case the user prefers to use default DataBase persistence, **MySQL** can be used.

- The database name should be **zohooauth**.

- There must be a table name **oauthtoken** with columns.

  - user_mail varchar(255)

  - client_id varchar(255)

  - refresh_token varchar(255)

  - access_token varchar(255)

  - grant_token varchar(255)

  - expiry_time varchar(20)

#### MySQL Query

```sql
create table oauthtoken(id int(11) not null auto_increment, user_mail varchar(255) not null, client_id varchar(255), refresh_token varchar(255), access_token varchar(255), grant_token varchar(255), expiry_time varchar(20), primary key (id));

alter table oauthtoken auto_increment = 1;
```

#### Create DBStore object

```ts
import {DBStore} from "@zohocrm/typescript-sdk/models/authenticator/store/db_store";
/*
 * DBStore takes the following parameters
 * 1 -> DataBase host name. Default value "localhost"
 * 2 -> DataBase name. Default  value "zohooauth"
 * 3 -> DataBase user name. Default value "root"
 * 4 -> DataBase password. Default value ""
 * 5 -> DataBase port number. Default value "3306"
*/

let tokenstore: DBStore = new DBStore();

let tokenstore: DBStore = new DBStore("hostName", "dataBaseName", "userName", "password", "portNumber");
```

### File Persistence

In case of default File Persistence, the user can persist tokens in the local drive, by providing the the absolute file path to the FileStore object. The File contains the following

- user_mail

- client_id

- refresh_token

- access_token

- grant_token

- expiry_time

#### Create FileStore object

```ts
import {FileStore} from "@zohocrm/typescript-sdk/models/authenticator/store/file_store";
/*
 * FileStore takes the following parameter
 * 1 -> Absolute file path of the file to persist tokens
*/
let tokenstore: FileStore = new FileStore("/Users/username/Documents/ts_sdk_tokens.txt");
```

### Custom Persistence

To use Custom Persistence, the user must extend **TokenStore Class** (**@zohocrm/typescript-sdk/models/authenticator/store/token_store**) and override the methods.

```ts
import { TokenStore } from "@zohocrm/typescript-sdk/models/authenticator/store/token_store";

export class CustomStore implements TokenStore {

    constructor(){
    }

    /**
     *
     * @param {UserSignature} user A UserSignature class instance.
     * @param {Token} token A Token (@zohocrm/typescript-sdk/models/authenticator/oauth_token) class instance.
     * @returns A Token class instance representing the user token details.
     * @throws {SDKException} if any error occurs.
     */
    async getToken(user: UserSignature, token: Token): Promise<Token | undefined> {
        // Add code to get the token
        return undefined;
    }

    /**
     *
     * @param {UserSignature} user A UserSignature class instance.
     * @param {Token} token A Token (@zohocrm/typescript-sdk/models/authenticator/oauth_token) class instance.
     * @throws {SDKException} if any error occurs.
     */
    async saveToken(user: UserSignature, token: Token): Promise<void>{
        // Add code to save the token
    }

    /**
     *
     * @param {Token} token A Token (@zohocrm/typescript-sdk/models/authenticator/oauth_token) class instance.
     * @throws {SDKException} if any error occurs.
     */
    async deleteToken(token: Token): Promise<void> {
        // Add code to delete the token
    }

    /**
     * @returns {Array} - An array of Token class instances
     * @throws {SDKException}
     */
    async getTokens(): Promise<Token[]> {
        //Add code to retrieve all the stored tokens.
    }

    /**
     * @throws {SDKException}
     */
    deleteTokens(): void {
        //Add code to delete all the stored tokens.
    }
}

module.exports = {CustomStore}
```

## Configuration

Before you get started with creating your TypeScript application, you need to register your client and authenticate the app with Zoho.

- Create an instance of **[Logger](routes/logger/logger.ts)** Class to log exception and API information.
    ```ts
    import {Levels,Logger} from "@zohocrm/typescript-sdk/routes/logger/logger"
    /*
     * Create an instance of Logger Class that takes two parameters
     * 1 -> Level of the log messages to be logged. Can be configured by typing Levels "." and choose any level from the list displayed.
     * 2 -> Absolute file path, where messages need to be logged.
    */
    let logger: Logger = Logger.getInstance(Levels.INFO, "/Users/user_name/Documents/ts_sdk_log.log");
    ```

- Create an instance of **[UserSignature](routes/user_signature.ts)** Class that identifies the current user.
    ```ts
    import {UserSignature} from "@zohocrm/typescript-sdk/routes/user_signature"
    //Create an UserSignature instance that takes user Email as parameter
    let user: UserSignature = new UserSignature("abc@zoho.com");
    ```

- Configure API environment which decides the domain and the URL to make API calls.
    ```ts
    import {USDataCenter} from "@zohocrm/typescript-sdk/routes/dc/us_data_center"
    /*
     * Configure the environment
     * which is of the pattern Domain.Environment
     * Available Domains: USDataCenter, EUDataCenter, INDataCenter, CNDataCenter, AUDataCenter
     * Available Environments: PRODUCTION(), DEVELOPER(), SANDBOX()
    */
    let environment: Environment = USDataCenter.PRODUCTION();
    ```

- Create an instance of **[OAuthToken](models/authenticator/oauth_token.ts)** with the information that you get after registering your Zoho client.
    ```ts
    import { OAuthToken,TokenType } from "@zohocrm/typescript-sdk/models/authenticator/oauth_token"
    /*
     * Create a Token instance
     * 1 -> OAuth client id.
     * 2 -> OAuth client secret.
     * 3 -> REFRESH/GRANT token.
     * 4 -> token type.
     * 5 -> OAuth redirect URL.
    */
    let token: OAuthToken = new OAuthToken("clientId", "clientSecret", "REFRESH/ GRANT Token", TokenType.REFRESH/TokenType.GRANT, "redirectURL");
    ```

- Create an instance of **[TokenStore](models/authenticator/store/token_store.ts)** to persist tokens, used for authenticating all the requests.
    ```ts
    import {DBStore} from "@zohocrm/typescript-sdk/models/authenticator/store/db_store"
    import {FileStore} from "@zohocrm/typescript-sdk/models/authenticator/store/file_store"
    /*
     * DBStore takes the following parameters
     * 1 -> DataBase host name. Default value "localhost"
     * 2 -> DataBase name. Default  value "zohooauth"
     * 3 -> DataBase user name. Default value "root"
     * 4 -> DataBase password. Default value ""
     * 5 -> DataBase port number. Default value "3306"
    */

    let tokenstore: DBStore = new DBStore();

    let tokenstore: DBStore = new DBStore("hostName", "dataBaseName", "userName", "password", "portNumber");

    //let tokenstore: FileStore = new FileStore("/Users/userName/Documents/tssdk-tokens.txt")
    ```

- Create an instance of **SDKConfig** containing the SDK configuration.
    ```ts
    import {SDKConfig} from "@zohocrm/typescript-sdk/routes/sdk_config";
    import {SDKConfigBuilder} from "@zohocrm/typescript-sdk/routes/sdk_config_builder";

    /*
     * autoRefreshFields
     * if true - all the modules' fields will be auto-refreshed in the background, every hour.
     * if false - the fields will not be auto-refreshed in the background. The user can manually delete the file(s) or refresh the fields using methods from ModuleFieldsHandler(utils/util/module_fields_handler.ts)
     *
     * pickListValidation
     * A boolean field that validates user input for a pick list field and allows or disallows the addition of a new value to the list.
     * if true - the SDK validates the input. If the value does not exist in the pick list, the SDK throws an error.
     * if false - the SDK does not validate the input and makes the API request with the user’s input to the pick list
     */
    let sdkConfig: SDKConfig = new SDKConfigBuilder().setPickListValidation(false).setAutoRefreshFields(true).build();
    ```

- The path containing the absolute directory path (in the key resourcePath) to store user-specific files containing information about fields in modules.
    ```ts
    let resourcePath: string = "/Users/user_name/Documents/typescript-app";
    ```

- Create an instance of [RequestProxy](routes/request_proxy.ts) containing the proxy properties of the user.
    ```ts
    import { RequestProxy} from "@zohocrm/typescript-sdk/routes/request_proxy";

    /*
     * RequestProxy class takes the following parameters
     * 1 -> Host
     * 2 -> Port Number
     * 3 -> User Name. Default null.
     * 4 -> Password. Default null
     */
    let requestProxy: RequestProxy = new RequestProxy("proxyHost", 80, "proxyUser", "password");
    ```

## Initializing the Application

Initialize the SDK using the following code.

```ts
    import {UserSignature} from "@zohocrm/typescript-sdk/routes/user_signature"
    import {SDKConfigBuilder} from "@zohocrm/typescript-sdk/routes/sdk_config_builder"
    import {DBStore} from "@zohocrm/typescript-sdk/models/authenticator/store/db_store"
    import {FileStore} from "@zohocrm/typescript-sdk/models/authenticator/store/file_store"
    import {SDKConfig} from "@zohocrm/typescript-sdk/routes/sdk_config"
    import {Levels,Logger} from "@zohocrm/typescript-sdk/routes/logger/logger"
    import {Environment} from "@zohocrm/typescript-sdk/routes/dc/environment"
    import {USDataCenter} from "@zohocrm/typescript-sdk/routes/dc/us_data_center"
    import {OAuthToken,TokenType} from "@zohocrm/typescript-sdk/models/authenticator/oauth_token"
    import {Initializer} from "@zohocrm/typescript-sdk/routes/initializer"
    import {RequestProxy} from "@zohocrm/typescript-sdk/routes/request_proxy"

    export class Initializer{

        public static async initialize(){

            /*
    * Create an instance of Logger Class that takes two parameters
    * 1 -> Level of the log messages to be logged. Can be configured by typing Levels "." and choose any level from the list displayed.
    * 2 -> Absolute file path, where messages need to be logged.
    */
            let logger: Logger = Logger.getInstance(Levels.INFO, "/Users/user_name/Documents/ts_sdk_log.log");

            /*
            * Create an UserSignature instance that takes user Email as parameter
            */
            let user: UserSignature = new UserSignature("abc@zoho.com");

            /*
    * Configure the environment
    * which is of the pattern Domain.Environment
    * Available Domains: USDataCenter, EUDataCenter, INDataCenter, CNDataCenter, AUDataCenter
    * Available Environments: PRODUCTION(), DEVELOPER(), SANDBOX()
    */
            let environment: Environment = USDataCenter.PRODUCTION();

            /*
    * Create a Token instance
    * 1 -> OAuth client id.
    * 2 -> OAuth client secret.
    * 3 -> REFRESH/GRANT token.
    * 4 -> token type.
            * 5 -> OAuth redirect URL. Default value is null
    */
            let token: OAuthToken = new OAuthToken("clientId", "clientSecret", "REFRESH/ GRANT Token", TokenType.REFRESH/TokenType.GRANT, "redirectURL");

            /*
    * Create an instance of TokenStore.
    * 1 -> DataBase host name. Default "localhost"
    * 2 -> DataBase name. Default "zohooauth"
    * 3 -> DataBase user name. Default "root"
    * 4 -> DataBase password. Default ""
    * 5 -> DataBase port number. Default "3306"
    */
            // let tokenstore = new DBStore();

            let tokenstore: DBStore = new DBStore("hostName", "dataBaseName", "userName", "password", "portNumber");

            /*
    * Create an instance of FileStore that takes absolute file path as parameter
    */
            // let tokenstore: FileStore = new FileStore("/Users/username/Documents/ts_sdk_tokens.txt");

            /*
    * autoRefreshFields
            * if true - all the modules' fields will be auto-refreshed in the background, every    hour.
    * if false - the fields will not be auto-refreshed in the background. The user can manually delete the file(s) or refresh the fields using methods from ModuleFieldsHandler(utils/util/module_fields_handler.ts)
    *
    * pickListValidation
    * if true - value for any picklist field will be validated with the available values.
    * if false - value for any picklist field will not be validated, resulting in creation of a new value.
    */
    let sdkConfig: SDKConfig = new SDKConfigBuilder().setPickListValidation(false).setAutoRefreshFields(true).build();

            /*
            * The path containing the absolute directory path to store user specific JSON files containing module fields information.
            */
            let resourcePath: string = "/Users/user_name/Documents/tsssdk-application";

            /*
    * Create an instance of RequestProxy class that takes the following parameters
    * 1 -> Host
    * 2 -> Port Number
    * 3 -> User Name
    * 4 -> Password
    */
            let proxy: RequestProxy = new RequestProxy("proxyHost", 80);

            let proxy: RequestProxy = new RequestProxy("proxyHost", 80, "proxyUser", "password");

            /*
            * Call the static initialize method of Initializer class that takes the following arguments
            * 1 -> UserSignature instance
            * 2 -> Environment instance
            * 3 -> Token instance
            * 4 -> TokenStore instance
            * 5 -> SDKConfig instance
            * 6 -> resourcePath
            * 7 -> Logger instance. Default value is null
            * 8 -> RequestProxy instance. Default value is null
            */
            // The SDK can be initialized by any of the following methods
            // await Initializer.initialize(user, environment, token, store, sdkConfig, resourcePath)

            await Initializer.initialize(user, environment, token, store, sdkConfig, resourcePath, logger, proxy);
        }
    }
    Initializer.initialize()
```

- You can now access the functionalities of the SDK. Refer to the sample codes to make various API calls through the SDK.

## Class Hierarchy

![classdiagram](class_hierarchy.png)

## Responses and Exceptions

All SDK method calls return an instance of **[APIResponse](routes/controllers/api_response.ts)**.

After a successful API request, the **getObject()** method returns an instance of the ResponseWrapper (for **GET**) or the ActionWrapper (for **POST, PUT, DELETE**).

Whenever the API returns an error response, the **getObject()** returns an instance of **APIException** class.

**ResponseWrapper** (for **GET** requests) and ActionWrapper (for **POST, PUT, DELETE** requests) are the expected objects for Zoho CRM APIs’ responses

However, some specific operations have different expected objects, such as the following

- Operations involving records in Tags
    - **RecordActionWrapper**

- Getting Record Count for a specific Tag operation
    - **CountWrapper**

- Operations involving BaseCurrency
    - **BaseCurrencyActionWrapper**

- Lead convert operation
    - **ConvertActionWrapper**

- Retrieving Deleted records operation
    - **DeletedRecordsWrapper**

- Record image download operation
    - **FileBodyWrapper**

- MassUpdate record operations
    - **MassUpdateActionWrapper**
    - **MassUpdateResponseWrapper**

### GET Requests

- The **getObject()** returns instance of one of the following classes, based on the return type.
    - For  **application/json** responses
        - **ResponseWrapper**
        - **CountWrapper**
        - **DeletedRecordsWrapper**
        - **MassUpdateResponseWrapper**
        - **APIException**

    - For **file download** responses
        - **FileBodyWrapper**
        - **APIException**

### POST, PUT, DELETE Requests

- The **getObject()** returns instance of one of the following classes
    - **ActionWrapper**
    - **RecordActionWrapper**
    - **BaseCurrencyActionWrapper**
    - **MassUpdateActionWrapper**
    - **ConvertActionWrapper**
    - **APIException**

- These wrapper classes may contain one or an array of instances of the following classes, depending on the response
    - **SuccessResponse Class**, if the request was successful.
    - **APIException Class**, if the request was erroneous.

For example, when you insert two records, and one of them was inserted successfully while the other one failed, the ActionWrapper will contain one instance each of the SuccessResponse and APIException classes.

All other exceptions such as SDK anomalies and other unexpected behaviours are thrown under the **SDKException** class.

## Multi-User support in the TypeScript SDK

The **TypeScript SDK** (from version 1.x.x) supports both single-user and multi-user app.

### Multi-user App

Multi-users functionality is achieved using Initializer's static **switchUser()** method.

```ts
//If proxy needs to be configured for the User
await Initializer.switchUser(user, environment, token, sdkConfig, requestProxy)

//Without proxy
await Initializer.switchUser(user, environment, token, sdkConfig)
```

To Remove a user's configuration in SDK. Use the below code
```js
await Initializer.removeUserConfiguration(user, environment)
```

### Sample Multi-user code

```ts
    import {UserSignature} from "@zohocrm/typescript-sdk/routes/user_signature"
    import {SDKConfigBuilder} from "@zohocrm/typescript-sdk/routes/sdk_config_builder"
    import {DBStore} from "@zohocrm/typescript-sdk/models/authenticator/store/db_store"
    import {FileStore} from "@zohocrm/typescript-sdk/models/authenticator/store/file_store"
    import {SDKConfig} from "@zohocrm/typescript-sdk/routes/sdk_config"
    import {Levels,Logger} from "@zohocrm/typescript-sdk/routes/logger/logger"
    import {Environment} from "@zohocrm/typescript-sdk/routes/dc/environment"
    import {USDataCenter} from "@zohocrm/typescript-sdk/routes/dc/us_data_center"
    import {EUDataCenter} from "@zohocrm/typescript-sdk/routes/dc/eu_data_center"
    import { OAuthToken,TokenType } from "@zohocrm/typescript-sdk/models/authenticator/oauth_token"
    import { Initializer} from "@zohocrm/typescript-sdk/routes/initializer"
    import { RequestProxy} from "@zohocrm/typescript-sdk/routes/request_proxy"

    import {RecordOperations, GetRecordsHeader, GetRecordsParam} from "@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/record_operations";
    import {ResponseWrapper} from  "@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/response_wrapper";
    import {ResponseHandler} from  "@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/response_handler";
    import {Record} from "@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/record";
    import {Tag} from "@zohocrm/typescript-sdk/core/com/zoho/crm/api/tags/tag";

    import {APIResponse} from "@zohocrm/typescript-sdk/routes/controllers/api_response";
    import { SDKException } from "@zohocrm/typescript-sdk/core/com/zoho/crm/api/exception/sdk_exception";
    import {ParameterMap} from "@zohocrm/typescript-sdk/routes/parameter_map";
    import {HeaderMap} from "@zohocrm/typescript-sdk/routes/header_map";

    class SampleRecord{

        public static async call(){

            /*
            * Create an instance of Logger Class that takes two parameters
            * 1 -> Level of the log messages to be logged. Can be configured by typing Levels "." and choose any level from the list displayed.
            * 2 -> Absolute file path, where messages need to be logged.
            */
            let logger = Logger.getInstance(Levels.INFO, "/Users/user_name/Documents/ts_sdk_log.log");

            /*
            * Create an UserSignature instance that takes user Email as parameter
            */
            let user1 = new UserSignature("abc@zoho.com");

            /*
            * Configure the environment
            * which is of the pattern Domain.Environment
            * Available Domains: USDataCenter, EUDataCenter, INDataCenter, CNDataCenter, AUDataCenter
            * Available Environments: PRODUCTION(), DEVELOPER(), SANDBOX()
            */
            let environment1: Environment = USDataCenter.PRODUCTION();

            /*
            * Create a Token instance
            * 1 -> OAuth client id.
            * 2 -> OAuth client secret.
            * 3 -> REFRESH/GRANT token.
            * 4 -> token type.
            * 5 -> OAuth redirect URL. Default value is null
            */
            let token1 = new OAuthToken("clientId1", "clientSecret1", "REFRESH/ GRANT Token", TokenType.REFRESH/TokenType.GRANT, "redirectURL");

            /*
            * Create an instance of TokenStore.
            * 1 -> DataBase host name. Default "localhost"
            * 2 -> DataBase name. Default "zohooauth"
            * 3 -> DataBase user name. Default "root"
            * 4 -> DataBase password. Default ""
            * 5 -> DataBase port number. Default "3306"
            */
            let store: DBStore = new DBStore();

            let store: DBStore = new DBStore("hostName", "dataBaseName", "userName", "password", "portNumber");

            /*
            * Create an instance of FileStore that takes absolute file path as parameter
            */
            let store: FileStore = new FileStore("/Users/username/Documents/ts_sdk_tokens.txt");

            /*
            * autoRefreshFields
            * if true - all the modules' fields will be auto-refreshed in the background, every    hour.
            * if false - the fields will not be auto-refreshed in the background. The user can manually delete the file(s) or refresh the fields using methods from ModuleFieldsHandler(utils/util/module_fields_handler.ts)
            *
            * pickListValidation
            * A boolean field that validates user input for a pick list field and allows or disallows the addition of a new value to the list.
            * True - the SDK validates the input. If the value does not exist in the pick list, the SDK throws an error.
            * False - the SDK does not validate the input and makes the API request with the user’s input to the pick list
            */
            let sdkConfig: SDKConfig = new SDKConfigBuilder().setPickListValidation(false).setAutoRefreshFields(true).build();

            /*
            * The path containing the absolute directory path to store user specific JSON files containing module fields information.
            */
            let resourcePath: string = "/Users/user_name/Documents/ts-app";

            /*
            * Call the static initialize method of Initializer class that takes the following arguments
            * 1 -> UserSignature instance
            * 2 -> Environment instance
            * 3 -> Token instance
            * 4 -> TokenStore instance
            * 5 -> SDKConfig instance
            * 6 -> resourcePath
            * 7 -> Logger instance. Default value is null
            * 8 -> RequestProxy instance. Default value is null
            */
            await Initializer.initialize(user1, environment1, token1, store, sdkConfig, resourcePath, logger);

            await SampleRecord.getRecords("Leads");

            await Initializer.removeUserConfiguration(user1, environment1);

            let user2: UserSignature = new UserSignature("abc2@zoho.eu");

            let environment2: Environment = EUDataCenter.SANDBOX();

            let token2: OAuthToken = new OAuthToken("clientId2", "clientSecret2", "REFRESH/ GRANT Token", TokenType.REFRESH, "redirectURL");

            let requestProxy: RequestProxy = new RequestProxy("proxyHost", 80, "proxyUser", "password");

            let sdkConfig2: SDKConfig = new SDKConfigBuilder().setPickListValidation(true).setAutoRefreshFields(true).build();

            await Initializer.switchUser(user2, environment2, token2, sdkConfig2, requestProxy);

            await SampleRecord.getRecords("Leads");
        }

        static async getRecords(moduleAPIName: string){
            try {
                let moduleAPIName = "Leads";
                //Get instance of RecordOperations Class
                let recordOperations: RecordOperations = new RecordOperations();
                let paramInstance: ParameterMap = new ParameterMap();
                await paramInstance.add(GetRecordsParam.APPROVED, "both");
                let headerInstance: HeaderMap  = new HeaderMap();
                await headerInstance.add(GetRecordsHeader.IF_MODIFIED_SINCE, new Date("2020-01-01T00:00:00+05:30"));
                //Call getRecords method that takes paramInstance, headerInstance and moduleAPIName as parameters
                let response: APIResponse<ResponseHandler> = await recordOperations.getRecords(moduleAPIName, paramInstance, headerInstance);
                if(response != null){

                    //Get the status code from response
                    console.log("Status Code: " + response.getStatusCode());
                    if([204, 304].includes(response.getStatusCode())){
                        console.log(response.getStatusCode() == 204? "No Content" : "Not Modified");
                        return;
                    }
                    //Get the object from response
                    let responseObject: ResponseHandler = response.getObject();
                    if(responseObject != null){
                        //Check if expected ResponseWrapper instance is received
                        if(responseObject instanceof ResponseWrapper){
                            //Get the array of obtained Record instances
                            let records: Record[] = responseObject.getData();
                            for (let record of records) {

                                //Get the ID of each Record
                                console.log("Record ID: " + record.getId());
                                //Get the createdBy User instance of each Record
                                let createdBy = record.getCreatedBy();
                                //Check if createdBy is not null
                                if(createdBy != null)
                                {
                                    //Get the ID of the createdBy User
                                    console.log("Record Created By User-ID: " + createdBy.getId());
                                    //Get the name of the createdBy User
                                    console.log("Record Created By User-Name: " + createdBy.getName());
                                    //Get the Email of the createdBy User
                                    console.log("Record Created By User-Email: " + createdBy.getEmail());
                                }
                                //Get the CreatedTime of each Record
                                console.log("Record CreatedTime: " + record.getCreatedTime());
                                //Get the modifiedBy User instance of each Record
                                let modifiedBy = record.getModifiedBy();
                                //Check if modifiedBy is not null
                                if(modifiedBy != null){
                                    //Get the ID of the modifiedBy User
                                    console.log("Record Modified By User-ID: " + modifiedBy.getId());
                                    //Get the name of the modifiedBy User
                                    console.log("Record Modified By User-Name: " + modifiedBy.getName());
                                    //Get the Email of the modifiedBy User
                                    console.log("Record Modified By User-Email: " + modifiedBy.getEmail());
                                }
                                //Get the ModifiedTime of each Record
                                console.log("Record ModifiedTime: " + record.getModifiedTime());
                                //Get the list of Tag instance each Record
                                let tags: Tag[] = record.getTag();
                                //Check if tags is not null
                                if(tags != null){
                                    tags.forEach(tag => {
                                        //Get the Name of each Tag
                                        console.log("Record Tag Name: " + tag.getName());
                                        //Get the Id of each Tag
                                        console.log("Record Tag ID: " + tag.getId());
                                    });
                                }
                                //To get particular field value
                                console.log("Record Field Value: " + record.getKeyValue("Last_Name"));// FieldApiName

                                console.log("Record KeyValues: " );
                                let keyValues: Map<string,any> = record.getKeyValues();
                                let keyArray: string[] = Array.from(keyValues.keys());
                                for (let keyName of keyArray) {
                                    let value: any = keyValues.get(keyName);
                                    console.log(keyName + " : " + value);
                                }
                            }
                        }
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    SampleRecord.call();
```

- The program execution starts from call().

- The details of **"user1"** are is given in the variables user1, token1, environment1.

- Similarly, the details of another user **"user2"** is given in the variables user2, token2, environment2.

- The **switchUser()** function is used to switch between the **"user1"** and **"user2"** as required.

- Based on the latest switched user, the **SampleRecord.getRecords(moduleAPIName)** will fetch records.

## SDK Sample code

```js
    import {UserSignature} from "@zohocrm/typescript-sdk/routes/user_signature"
    import {SDKConfigBuilder} from "@zohocrm/typescript-sdk/routes/sdk_config_builder"
    import {DBStore} from "@zohocrm/typescript-sdk/models/authenticator/store/db_store"
    import {FileStore} from "@zohocrm/typescript-sdk/models/authenticator/store/file_store"
    import {SDKConfig} from "@zohocrm/typescript-sdk/routes/sdk_config"
    import {Levels,Logger} from "@zohocrm/typescript-sdk/routes/logger/logger"
    import {Environment} from "@zohocrm/typescript-sdk/routes/dc/environment"
    import {USDataCenter} from "@zohocrm/typescript-sdk/routes/dc/us_data_center"
    import { OAuthToken,TokenType } from "@zohocrm/typescript-sdk/models/authenticator/oauth_token"
    import { Initializer} from "@zohocrm/typescript-sdk/routes/initializer"

    import {RecordOperations, GetRecordsHeader, GetRecordsParam} from "@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/record_operations";
    import {ParameterMap} from "@zohocrm/typescript-sdk/routes/parameter_map";
    import {HeaderMap} from "@zohocrm/typescript-sdk/routes/header_map";
    import {ResponseWrapper} from  "@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/response_wrapper";
    import {ResponseHandler} from  "@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/response_handler";
    import {Record} from "@zohocrm/typescript-sdk/core/com/zoho/crm/api/record/record";
    import {Tag} from "@zohocrm/typescript-sdk/core/com/zoho/crm/api/tags/tag";

    import {APIResponse} from "@zohocrm/typescript-sdk/routes/controllers/api_response";
    class SampleRecord {

        public static async getRecords(){

            let user: UserSignature = new UserSignature("abc@zoho.com");
            let myLogger: Logger = Logger.getInstance(Levels.INFO, "/Users/user_name/Documents/ts_sdk_log.log");
            let dc: Environment = USDataCenter.PRODUCTION();
            let sdkConfig: SDKConfig = new SDKConfigBuilder().setAutoRefreshFields(false).setPickListValidation(true).build();
            let store: FileStore = new FileStore("/Users/username/Documents/ts_sdk_tokens.txt");
            let oauth: OAuthToken = new OAuthToken("clientId", "clientSecret", "REFRESH/ GRANT Token", TokenType.REFRESH/TokenType.GRANT);
            let path: string = "/Users/user_name/Documents/ts-app";
            await Initializer.initialize(user, dc, oauth, store, sdkConfig, path, myLogger);

            try {
                let moduleAPIName = "Leads";
                //Get instance of RecordOperations Class
                let recordOperations: RecordOperations = new RecordOperations();
                let paramInstance: ParameterMap = new ParameterMap();
                await paramInstance.add(GetRecordsParam.APPROVED, "both");
                let headerInstance: HeaderMap  = new HeaderMap();
                await headerInstance.add(GetRecordsHeader.IF_MODIFIED_SINCE, new Date("2020-01-01T00:00:00+05:30"));
                //Call getRecords method that takes paramInstance, headerInstance and moduleAPIName as parameters
                let response: APIResponse<ResponseHandler> = await recordOperations.getRecords(moduleAPIName, paramInstance, headerInstance);
                if(response != null){

                    //Get the status code from response
                    console.log("Status Code: " + response.getStatusCode());
                    if([204, 304].includes(response.getStatusCode())){
                        console.log(response.getStatusCode() == 204? "No Content" : "Not Modified");
                        return;
                    }
                    //Get the object from response
                    let responseObject: ResponseHandler = response.getObject();
                    if(responseObject != null){
                        //Check if expected ResponseWrapper instance is received
                        if(responseObject instanceof ResponseWrapper){
                            //Get the array of obtained Record instances
                            let records: Record[] = responseObject.getData();
                            for (let record of records) {

                                //Get the ID of each Record
                                console.log("Record ID: " + record.getId());
                                //Get the createdBy User instance of each Record
                                let createdBy = record.getCreatedBy();
                                //Check if createdBy is not null
                                if(createdBy != null)
                                {
                                    //Get the ID of the createdBy User
                                    console.log("Record Created By User-ID: " + createdBy.getId());
                                    //Get the name of the createdBy User
                                    console.log("Record Created By User-Name: " + createdBy.getName());
                                    //Get the Email of the createdBy User
                                    console.log("Record Created By User-Email: " + createdBy.getEmail());
                                }
                                //Get the CreatedTime of each Record
                                console.log("Record CreatedTime: " + record.getCreatedTime());
                                //Get the modifiedBy User instance of each Record
                                let modifiedBy = record.getModifiedBy();
                                //Check if modifiedBy is not null
                                if(modifiedBy != null){
                                    //Get the ID of the modifiedBy User
                                    console.log("Record Modified By User-ID: " + modifiedBy.getId());
                                    //Get the name of the modifiedBy User
                                    console.log("Record Modified By User-Name: " + modifiedBy.getName());
                                    //Get the Email of the modifiedBy User
                                    console.log("Record Modified By User-Email: " + modifiedBy.getEmail());
                                }
                                //Get the ModifiedTime of each Record
                                console.log("Record ModifiedTime: " + record.getModifiedTime());
                                //Get the list of Tag instance each Record
                                let tags: Tag[] = record.getTag();
                                //Check if tags is not null
                                if(tags != null){
                                    tags.forEach(tag => {
                                        //Get the Name of each Tag
                                        console.log("Record Tag Name: " + tag.getName());
                                        //Get the Id of each Tag
                                        console.log("Record Tag ID: " + tag.getId());
                                    });
                                }
                                //To get particular field value
                                console.log("Record Field Value: " + record.getKeyValue("Last_Name"));// FieldApiName

                                console.log("Record KeyValues: " );
                                let keyValues: Map<string,any> = record.getKeyValues();
                                let keyArray: string[] = Array.from(keyValues.keys());
                                for (let keyName of keyArray) {
                                    let value: any = keyValues.get(keyName);
                                    console.log(keyName + " : " + value);
                                }
                            }
                        }
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    SampleRecord.getRecords();
```
