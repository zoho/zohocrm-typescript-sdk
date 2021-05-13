import { SDKException } from "../../core/com/zoho/crm/api/exception/sdk_exception";
import { Field } from "../../core/com/zoho/crm/api/fields/field";
import { Module } from "../../core/com/zoho/crm/api/modules/module";
import { HeaderMap } from "../../routes/header_map";
import { Initializer } from "../../routes/initializer";
import { CommonAPIHandler } from "../../routes/middlewares/common_api_handler";
import { Constants } from "./constants";
import * as path from "path";
import * as fs from 'fs';
import { Converter } from "./converter";
import * as Logger from "winston";

/**
 * This class handles module field details.
*/
class Utility{
    private static apiTypeVsdataType: Map<string,string> = new Map<string,string>();
    private static apiTypeVsStructureName: Map<string,string> = new Map<string,string>();
    private static newFile: boolean = false;
    private static getModifiedModules: boolean = false;
    private static forceRefresh: boolean = false;
    private static moduleAPIName: string | null = null;

    public static async getFields(moduleAPIName: string | null) {
        this.moduleAPIName = moduleAPIName;

        await this.getFieldsInfo(moduleAPIName);
    }

    /**
     * This method to fetch field details of the current module for the current user and store the result in a JSON file.
     * @param {string} moduleAPIName - A String containing the CRM module API name.
    */
    public static async getFieldsInfo(moduleAPIName: string | null) {
        let lastModifiedTime: number | null = null;
        var recordFieldDetailsPath: string | null = null;
        try {
            if(moduleAPIName != null && await Utility.searchJSONDetails(moduleAPIName) != null){
                return;
            }
            let initializer = await Initializer.getInitializer();
            var resourcesPath = path.join(initializer.getResourcePath(), Constants.FIELD_DETAILS_DIRECTORY);
            if(!fs.existsSync(resourcesPath)) {
                fs.mkdirSync(resourcesPath, { recursive: true });
            }
            recordFieldDetailsPath = await this.getFileName();
            if(fs.existsSync(recordFieldDetailsPath)) {
                var recordFieldDetailsJson = Initializer.getJSON(recordFieldDetailsPath);
                if(initializer.getSDKConfig().getAutoRefreshFields() == true && !this.newFile && !this.getModifiedModules && (!(recordFieldDetailsJson.hasOwnProperty(Constants.FIELDS_LAST_MODIFIED_TIME)) || this.forceRefresh || (new Date().getTime() - recordFieldDetailsJson[Constants.FIELDS_LAST_MODIFIED_TIME]) > 3600000)) {
                    this.getModifiedModules = true;
                    lastModifiedTime = recordFieldDetailsJson.hasOwnProperty(Constants.FIELDS_LAST_MODIFIED_TIME) ? recordFieldDetailsJson[Constants.FIELDS_LAST_MODIFIED_TIME] : null;
                    await Utility.modifyFields(recordFieldDetailsPath, lastModifiedTime);
                    this.getModifiedModules = false;
                }
                else if(initializer.getSDKConfig().getAutoRefreshFields() == false && this.forceRefresh && !this.getModifiedModules) {
                    this.getModifiedModules = true;
                    await Utility.modifyFields(recordFieldDetailsPath, lastModifiedTime);
                    this.getModifiedModules = false;
                }
                recordFieldDetailsJson = Initializer.getJSON(recordFieldDetailsPath);
                if (moduleAPIName == null || recordFieldDetailsJson.hasOwnProperty(moduleAPIName.toLowerCase())) {
                    return;
                }
                else {
                    await Utility.fillDataType();
                    recordFieldDetailsJson[moduleAPIName.toLowerCase()] = {};
                    fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
                    let fieldsDetails = await Utility.getFieldsDetails(moduleAPIName);
                    recordFieldDetailsJson = await Initializer.getJSON(recordFieldDetailsPath);
                    recordFieldDetailsJson[moduleAPIName.toLowerCase()] = fieldsDetails;
                    fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
                }
            }
            else if(initializer.getSDKConfig().getAutoRefreshFields() == true){
                this.newFile = true;
                await Utility.fillDataType();
                let moduleAPINames = await Utility.getAllModules(null);
                let recordFieldDetailsJson: {[key:string]: any} = {};
                recordFieldDetailsJson[Constants.FIELDS_LAST_MODIFIED_TIME] = new Date().getTime();
                for(let module of moduleAPINames) {
                    if(!recordFieldDetailsJson.hasOwnProperty(module.toLowerCase())) {
                        recordFieldDetailsJson[module.toLowerCase()] = {};
                        fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
                        let fieldsDetails = await Utility.getFieldsDetails(module);
                        recordFieldDetailsJson = await Initializer.getJSON(recordFieldDetailsPath);
                        recordFieldDetailsJson[module.toLowerCase()] = fieldsDetails;
                        fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
                    }
                }
                this.newFile = false;
            }
            else if(this.forceRefresh && !this.getModifiedModules) {
                this.getModifiedModules = true;
                let recordFieldDetailsJson = {};
                fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
                await Utility.modifyFields(recordFieldDetailsPath, lastModifiedTime);
                this.getModifiedModules = false;
            }
            else {
                await Utility.fillDataType();
                let recordFieldDetailsJson: {[key:string]: any} = {};
                if(moduleAPIName !== null){
                    recordFieldDetailsJson[moduleAPIName.toLowerCase()] = {};
                    fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
                    let fieldsDetails = await Utility.getFieldsDetails(moduleAPIName);
                    recordFieldDetailsJson = await Initializer.getJSON(recordFieldDetailsPath);
                    recordFieldDetailsJson[moduleAPIName.toLowerCase()] = fieldsDetails;
                    fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
                }
            }
        } catch (error) {
            if(recordFieldDetailsPath != null && fs.existsSync(recordFieldDetailsPath)) {
                try {
                    let recordFieldDetailsJson = await Initializer.getJSON(recordFieldDetailsPath);
                    if(moduleAPIName !== null && recordFieldDetailsJson.hasOwnProperty(moduleAPIName.toLowerCase())){
                        delete recordFieldDetailsJson[moduleAPIName.toLowerCase()];
                    }
                    if(this.newFile){
                        if(recordFieldDetailsJson.hasOwnProperty(Constants.FIELDS_LAST_MODIFIED_TIME)){
                            delete recordFieldDetailsJson[Constants.FIELDS_LAST_MODIFIED_TIME]
                        }
                        this.newFile = false;
                    }
                    if(this.getModifiedModules || this.forceRefresh){
                        this.getModifiedModules = false;
                        this.forceRefresh = false;
                        if(lastModifiedTime != null){
                            recordFieldDetailsJson[Constants.FIELDS_LAST_MODIFIED_TIME] = lastModifiedTime;
                        }
                    }
                    fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
                }
                catch (error) {
                    error = new SDKException(null, null, null, error);
                    Logger.error(Constants.EXCEPTION, error);
                    throw error;
                }
            }
            if(!(error instanceof SDKException)) {
                error = new SDKException(null, null, null, error);
            }
            Logger.error(Constants.EXCEPTION, error);
            throw error;
        }
    }

    private static async modifyFields(recordFieldDetailsPath: string, modifiedTime: number | null): Promise<void> {
        let modifiedModules: string[] = await this.getAllModules(modifiedTime);
        let recordFieldDetailsJson: {[key:string]: any} = await Initializer.getJSON(recordFieldDetailsPath);
        recordFieldDetailsJson[Constants.FIELDS_LAST_MODIFIED_TIME] = new Date().getTime();
        fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
        if(modifiedModules.length > 0){
            for(let module of modifiedModules){
                if(recordFieldDetailsJson.hasOwnProperty(module.toLowerCase())){
                    await this.deleteFields(recordFieldDetailsJson, module);
                }
            }
            fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
            for(let module of modifiedModules) {
                await Utility.getFieldsInfo(module);
            }
        }
    }

    public static async deleteFields(recordFieldDetailsJson: {[key:string]: any}, module: string): Promise<void> {
        let subformModules: string[] = [];
        let fieldsJSON = recordFieldDetailsJson[module.toLowerCase()];
        for (let keyName of Object.keys(fieldsJSON)) {
            if(fieldsJSON[keyName].hasOwnProperty(Constants.SUBFORM) && fieldsJSON[keyName][Constants.SUBFORM] == true && recordFieldDetailsJson.hasOwnProperty((fieldsJSON[keyName][Constants.MODULE]).toLowerCase())) {
                subformModules.push(fieldsJSON[keyName][Constants.MODULE]);
            }
        }
        delete recordFieldDetailsJson[module.toLowerCase()];
        if(subformModules.length > 0) {
            for(let subformModule of subformModules) {
                await this.deleteFields(recordFieldDetailsJson, subformModule);
            }
        }
    }

    private static async getFileName(): Promise<string> {
        let initializer = await Initializer.getInitializer();
        return path.join(initializer.getResourcePath(), Constants.FIELD_DETAILS_DIRECTORY, await Converter.getEncodedFileName());
    }

    public static async getRelatedLists(relatedModuleName: string, moduleAPIName: string, commonAPIHandler: CommonAPIHandler) {
        try {
            let isnewData: boolean = false;
            let key = (moduleAPIName + Constants.UNDERSCORE + Constants.RELATED_LISTS).toLowerCase();
            let initializer = await Initializer.getInitializer();
            let resourcesPath = path.join(initializer.getResourcePath(), Constants.FIELD_DETAILS_DIRECTORY);
            var recordFieldDetailsPath = await this.getFileName();
            if(!fs.existsSync(resourcesPath)) {
                fs.mkdirSync(resourcesPath, { recursive: true });
            }
            if(!fs.existsSync(recordFieldDetailsPath) || (fs.existsSync(recordFieldDetailsPath) && !Initializer.getJSON(recordFieldDetailsPath).hasOwnProperty(key))) {
                isnewData = true;
                let relatedListValues = await this.getRelatedListDetails(moduleAPIName);
                let recordFieldDetailsJSON: {[key:string]: any} = fs.existsSync(recordFieldDetailsPath) ? await Initializer.getJSON(recordFieldDetailsPath) : {};
                recordFieldDetailsJSON[key] = relatedListValues;
                fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJSON));
            }
            let recordFieldDetailsJSON: {[key:string]: any} = await Initializer.getJSON(recordFieldDetailsPath)
            let moduleRelatedList = recordFieldDetailsJSON[key];
            if(!(await this.checkRelatedListExists(relatedModuleName, moduleRelatedList, commonAPIHandler)) && !isnewData){
                delete recordFieldDetailsJSON[key];
                fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJSON));
                await Utility.getRelatedLists(relatedModuleName, moduleAPIName, commonAPIHandler);
            }
        }
        catch (error) {
            if(!(error instanceof SDKException)) {
                error = new SDKException(null, null, null, error);
            }
            Logger.error(Constants.EXCEPTION, error);
            throw error;
        }
    }

    private static async checkRelatedListExists(relatedModuleName: string, modulerelatedListArray: any[], commonAPIHandler: CommonAPIHandler): Promise<boolean> {
        for (let index = 0; index < modulerelatedListArray.length; index++) {
            const relatedListObject = modulerelatedListArray[index];
            if(relatedListObject[Constants.API_NAME] != null && relatedListObject[Constants.API_NAME].toLowerCase() == relatedModuleName.toLowerCase()) {
                if(relatedListObject[Constants.HREF].toLowerCase() == Constants.NULL_VALUE) {
                    throw new SDKException(Constants.UNSUPPORTED_IN_API, commonAPIHandler.getHttpMethod() + " " + commonAPIHandler.getAPIPath() + Constants.UNSUPPORTED_IN_API_MESSAGE);
                }
                if(relatedListObject[Constants.MODULE].toLowerCase() != Constants.NULL_VALUE) {
                    commonAPIHandler.setModuleAPIName(relatedListObject[Constants.MODULE]);
                    await Utility.getFieldsInfo(relatedListObject[Constants.MODULE]);
                }
                return true;
            }
        }
        return false;
    }

    private static async getRelatedListDetails(moduleAPIName: string): Promise<any[]> {
        let RelatedListsOperations = (await import("../../core/com/zoho/crm/api/related_lists/related_lists_operations")).RelatedListsOperations;
        let ResponseWrapper = (await import("../../core/com/zoho/crm/api/related_lists/response_wrapper")).ResponseWrapper;
        let APIException = (await import("../../core/com/zoho/crm/api/related_lists/api_exception")).APIException;
        let relatedListArray: any[] = [];
        let response = await new RelatedListsOperations(moduleAPIName).getRelatedLists();
        if(response !== null) {
            if(response.getStatusCode() === Constants.NO_CONTENT_STATUS_CODE) {
                return relatedListArray;
            }
            let responseObject = response.getObject();
            if(responseObject !== null) {
                if(responseObject instanceof ResponseWrapper) {
                    let relatedLists = responseObject.getRelatedLists();
                    relatedLists.forEach(relatedList => {
                        let relatedListDetail: {[key:string]: any} = {};
                        relatedListDetail[Constants.API_NAME] = relatedList.getAPIName();
                        relatedListDetail[Constants.MODULE] = relatedList.getModule() != null ? relatedList.getModule() : Constants.NULL_VALUE;
                        relatedListDetail[Constants.NAME] = relatedList.getName();
                        relatedListDetail[Constants.HREF] = relatedList.getHref() != null? relatedList.getHref() : Constants.NULL_VALUE;
                        relatedListArray.push(relatedListDetail);
                    });
                }
                else if(responseObject instanceof APIException) {
                    let errorResponse: {[key:string]: any} = {};
                    errorResponse[Constants.CODE] = responseObject.getCode().getValue();
                    errorResponse[Constants.STATUS] = responseObject.getStatus().getValue();
                    errorResponse[Constants.MESSAGE] = responseObject.getMessage().getValue();
                    throw new SDKException(Constants.API_EXCEPTION, null, errorResponse)
                }
                else{
                    let errorResponse: {[key:string]: any} = {};
                    errorResponse[Constants.CODE] = response.getStatusCode();
                    throw new SDKException(Constants.API_EXCEPTION, null, errorResponse);
                }
            }
            else{
                let errorResponse: {[key:string]: any} = {};
                errorResponse[Constants.CODE] = response.getStatusCode();
                throw new SDKException(Constants.API_EXCEPTION, null, errorResponse);
            }
        }
        return relatedListArray;
    }

    public static async verifyPhotoSupport(moduleAPIName: string): Promise<void> {

    }

    private static async getAllModules(header: number | null): Promise<string[]> {
        let ResponseWrapper = (await import("../../core/com/zoho/crm/api/modules/response_wrapper")).ResponseWrapper;
        let APIException = (await import("../../core/com/zoho/crm/api/modules/api_exception")).APIException;
        let ModulesOperations = (await import("../../core/com/zoho/crm/api/modules/modules_operations")).ModulesOperations;
        let GetModulesHeader = (await import("../../core/com/zoho/crm/api/modules/modules_operations")).GetModulesHeader;
        let apiNames: string[] = [];
        let headerMap: HeaderMap = new HeaderMap();
        if(header !== null){
            await headerMap.add(GetModulesHeader.IF_MODIFIED_SINCE, new Date(header));
        }
        let response = await new ModulesOperations().getModules(headerMap);
        if(response !== null){
            if([Constants.NO_CONTENT_STATUS_CODE, Constants.NOT_MODIFIED_STATUS_CODE].includes(response.getStatusCode())) {
                return apiNames;
            }
            let responseObject = response.getObject();
            if(responseObject !== null){
                if(responseObject instanceof ResponseWrapper) {
                    let modules: Module[] = responseObject.getModules();
                    modules.forEach(module => {
                        if(module.getAPISupported() === true){
                            apiNames.push(module.getAPIName());
                        }
                    });
                }
                else if(responseObject instanceof APIException) {
                    let errorResponse: {[key:string]: any} = {};
                    errorResponse[Constants.CODE] = responseObject.getCode().getValue();
                    errorResponse[Constants.STATUS] = responseObject.getStatus().getValue();
                    errorResponse[Constants.MESSAGE] = responseObject.getMessage().getValue();
                    throw new SDKException(Constants.API_EXCEPTION, null, errorResponse);
                }
            }
            else{
                let errorResponse: {[key:string]: any} = {};
                errorResponse[Constants.CODE] = response.getStatusCode();
                throw new SDKException(Constants.API_EXCEPTION, null, errorResponse);
            }
        }
        return apiNames;
    }

    /**
     * This method is to get module field data from Zoho CRM.
     * @param {string} moduleAPIName - A String containing the CRM module API name.
     * @returns {object} An Object representing the Zoho CRM module field details.
    */
    private static async getFieldsDetails(moduleAPIName: string): Promise<any> {
        let FieldOperations = (await import("../../core/com/zoho/crm/api/fields/fields_operations")).FieldsOperations;
        let FieldsResponseWrapper = (await import("../../core/com/zoho/crm/api/fields/response_wrapper")).ResponseWrapper;
        let APIException = (await import("../../core/com/zoho/crm/api/fields/api_exception")).APIException;
        let response = await new FieldOperations(moduleAPIName).getFields();
        let fieldsDetails: {[key:string]: any} = {};
        if(response !== null){
            if(response.getStatusCode() == Constants.NO_CONTENT_STATUS_CODE) {
                return fieldsDetails;
            }
            let responseObject = response.getObject();
            if(responseObject != null){
                if(responseObject instanceof FieldsResponseWrapper) {
                    let fields: Array<Field> = responseObject.getFields();
                    for(let field of fields) {
                        let keyName = field.getAPIName();
                        if(Constants.KEYS_TO_SKIP.includes(keyName)) {
                            continue;
                        }
                        var fieldDetail: {[key:string]: any} ={};
                        await Utility.setDataType(fieldDetail, field, moduleAPIName);
                        fieldsDetails[field.getAPIName()] = fieldDetail;
                    }

                    if(Constants.INVENTORY_MODULES.includes(moduleAPIName.toLowerCase())) {
                        let fieldDetail: {[key:string]: any} = {};
                        fieldDetail[Constants.NAME] = Constants.LINE_TAX;
                        fieldDetail[Constants.TYPE] = Constants.LIST_NAMESPACE;
                        fieldDetail[Constants.STRUCTURE_NAME] = Constants.LINE_TAX_NAMESPACE;
                        fieldsDetails[Constants.LINE_TAX] = fieldDetail;
                    }

                    if(moduleAPIName.toLowerCase() == Constants.NOTES) {
                        let fieldDetail: {[key:string]: any} = {};
                        fieldDetail[Constants.NAME] = Constants.ATTACHMENTS;
                        fieldDetail[Constants.TYPE] = Constants.LIST_NAMESPACE;
                        fieldDetail[Constants.STRUCTURE_NAME] = Constants.ATTACHMENTS_NAMESPACE;
                        fieldsDetails[Constants.ATTACHMENTS] = fieldDetail;
                    }
                }
                else if(responseObject instanceof APIException) {
                    let errorResponse: {[key:string]: any} = {};
                    errorResponse[Constants.CODE] = responseObject.getCode().getValue();
                    errorResponse[Constants.STATUS] = responseObject.getStatus().getValue();
                    errorResponse[Constants.MESSAGE] = responseObject.getMessage().getValue();
                    let exception: SDKException = new SDKException(Constants.API_EXCEPTION, null, errorResponse);
                    if(this.moduleAPIName != null && this.moduleAPIName.toLowerCase() == moduleAPIName.toLowerCase()) {
                        throw exception;
                    }
                    Logger.error(Constants.API_EXCEPTION, exception);
                }
            }
            else{
                let errorResponse: {[key:string]: any} = {};
                errorResponse[Constants.CODE] = response.getStatusCode();
                throw new SDKException(Constants.API_EXCEPTION, null, errorResponse);
            }
        }
        return fieldsDetails;

    }

    public static async searchJSONDetails(key: string): Promise<any> {
        key = Constants.PACKAGE_NAMESPACE + "/record/" + key;
        var jsonDetails = Initializer.jsonDetails;
        for(let keyInJSON in jsonDetails) {
            if(keyInJSON.toLowerCase() == key.toLowerCase()) {
                let returnJSON: {[key:string]: any} = {};
                returnJSON[Constants.MODULEPACKAGENAME] = keyInJSON;
                returnJSON[Constants.MODULEDETAILS] = jsonDetails[keyInJSON];
                return returnJSON;
            }
        }
        return null;
    }

    public static async refreshModules() {
        this.forceRefresh = true;
        await Utility.getFieldsInfo(null);
        this.forceRefresh = false;
    }

    public static async getJSONObject(json: {[key:string]: any}, key: string): Promise<any> {
        let keyArray = Array.from(Object.keys(json));
        for (let keyInJSON of keyArray) {
            if(key.toLowerCase() == keyInJSON.toLowerCase()) {
                return json[keyInJSON];
            }
        }
        return null;
    }

    private static async setDataType(fieldDetail: {[key:string]: any},field: Field, moduleAPIName: string) {
        var apiType = field.getDataType();
        var module = "";
        var keyName = field.getAPIName();
        if(field.getSystemMandatory() != null && field.getSystemMandatory() == true && !(moduleAPIName.toLowerCase() == Constants.CALLS && keyName.toLowerCase() == Constants.CALL_DURATION)) {
            fieldDetail.required = true;
        }
        if(keyName.toLowerCase() == Constants.PRODUCT_DETAILS.toLowerCase() && Constants.INVENTORY_MODULES.includes(moduleAPIName.toLowerCase())) {
            fieldDetail.name = keyName;
            fieldDetail.type = Constants.LIST_NAMESPACE;
            fieldDetail.structure_name = Constants.INVENTORY_LINE_ITEMS;
            fieldDetail.skip_mandatory = true;
            return;
        }
        else if(keyName.toLowerCase() == Constants.PRICING_DETAILS.toLowerCase() && moduleAPIName.toLowerCase() == Constants.PRICE_BOOKS) {
            fieldDetail.name = keyName;
            fieldDetail.type = Constants.LIST_NAMESPACE;
            fieldDetail.structure_name = Constants.PRICINGDETAILS;
            fieldDetail.skip_mandatory = true;
            return;
        }
        else if(keyName.toLowerCase() == Constants.PARTICIPANT_API_NAME.toLowerCase() && (moduleAPIName.toLowerCase() == Constants.EVENTS || moduleAPIName.toLowerCase() == Constants.ACTIVITIES)) {
            fieldDetail.name = keyName;
            fieldDetail.type = Constants.LIST_NAMESPACE;
            fieldDetail.structure_name = Constants.PARTICIPANTS;
            fieldDetail.skip_mandatory = true;
            return;
        }
        else if(keyName.toLowerCase() == Constants.COMMENTS.toLowerCase() && (moduleAPIName.toLowerCase() == Constants.SOLUTIONS || moduleAPIName.toLowerCase() == Constants.CASES)) {
            fieldDetail.name = keyName;
            fieldDetail.type = Constants.LIST_NAMESPACE;
            fieldDetail.structure_name = Constants.COMMENT_NAMESPACE;
            fieldDetail.lookup = true;
            return;
        }
        else if(keyName.toLowerCase() == Constants.LAYOUT.toLowerCase()) {
            fieldDetail.name = keyName;
            fieldDetail.type = Constants.LAYOUT_NAMESPACE;
            fieldDetail.structure_name = Constants.LAYOUT_NAMESPACE;
            fieldDetail.lookup = true;
            return;
        }
        else if(Utility.apiTypeVsdataType.has(apiType)) {
            fieldDetail.type = Utility.apiTypeVsdataType.get(apiType);
        }
        else if(apiType.toLowerCase() == Constants.FORMULA.toLowerCase()) {
            if(field.getFormula() != null) {
                let returnType = field.getFormula().getReturnType();
                if(Utility.apiTypeVsdataType.has(returnType)) {
                    fieldDetail.type = Utility.apiTypeVsdataType.get(returnType);
                }
            }
            fieldDetail[Constants.READ_ONLY] = true;
        }
        else {
            return;
        }
        if(apiType.toLowerCase().includes(Constants.LOOKUP.toLowerCase())) {
            fieldDetail.lookup = true;
        }
        if(apiType.toLowerCase() == Constants.CONSENT_LOOKUP) {
            fieldDetail.skip_mandatory = true;
        }
        if(Utility.apiTypeVsStructureName.has(apiType)) {
            fieldDetail.structure_name = Utility.apiTypeVsStructureName.get(apiType);
        }

        if(apiType.toLowerCase() == Constants.PICKLIST && field.getPickListValues() != null && field.getPickListValues().length > 0){
            let values: any[] = [];
            fieldDetail.picklist = true;
            field.getPickListValues().every(x => values.push(x.getDisplayValue()));
            fieldDetail.values = values;
        }

        if(apiType == Constants.SUBFORM) {
            module = field.getSubform().getModule();
            fieldDetail.module = module;
            fieldDetail.skip_mandatory = true;
            fieldDetail.subform = true;
        }

        if(apiType == Constants.LOOKUP) {
            module = field.getLookup().getModule();
            if(module != null && module != Constants.SE_MODULE) {
                fieldDetail.module = module;
                if(module.toLowerCase() == Constants.ACCOUNTS && !field.getCustomField()) {
                    fieldDetail.skip_mandatory = true;
                }
            }
            else{
                module = "";
            }
            fieldDetail.lookup = true;
        }

        if(module.length > 0) {
            await Utility.getFieldsInfo(module);
        }

        fieldDetail.name = keyName;
    }

    private static async fillDataType(){
        if(this.apiTypeVsdataType.size > 0) {
            return;
        }

        let fieldAPINamesString = ["textarea", "text", "website", "email", "phone", "mediumtext", "multiselectlookup","profileimage", "autonumber"];
		let fieldAPINamesInteger = [ "integer"];
		let fieldAPINamesBoolean = ["boolean"];
		let fieldAPINamesLong = ["long", "bigint"];
		let fieldAPINamesDouble = ["double", "percent", "lookup", "currency"];
		let fieldAPINamesFile = ["imageupload"];
		let fieldAPINamesFieldFile = ["fileupload"];
		let fieldAPINamesDateTime = ["datetime", "event_reminder"];
		let fieldAPINamesDate = ["date"];
		let fieldAPINamesLookup = ["lookup"];
		let fieldAPINamesPickList = ["picklist"];
		let fieldAPINamesMultiSelectPickList = ["multiselectpicklist"];
		let fieldAPINamesSubForm = ["subform"];
		let fieldAPINamesOwnerLookUp = ["ownerlookup", "userlookup"];
		let fieldAPINamesMultiUserLookUp = ["multiuserlookup"];
		let fieldAPINamesMultiModuleLookUp = ["multimodulelookup"];
        let fieldAPINameTaskRemindAt = ["ALARM"];
        let fieldAPINameRecurringActivity = ["RRULE"];
        let fieldAPINameReminder = ["multireminder"];
        let fieldAPINameConsentLookUp = ["consent_lookup"]
        for(let fieldAPIName of fieldAPINamesString){
            Utility.apiTypeVsdataType.set(fieldAPIName, Constants.STRING_NAMESPACE);
        }
        for(let fieldAPIName of fieldAPINamesInteger){
            Utility.apiTypeVsdataType.set(fieldAPIName, Constants.INTEGER_NAMESPACE);
        }
        for(let fieldAPIName of fieldAPINamesBoolean){
            Utility.apiTypeVsdataType.set(fieldAPIName, Constants.BOOLEAN_NAMESPACE);
        }
        for(let fieldAPIName of fieldAPINamesLong){
            Utility.apiTypeVsdataType.set(fieldAPIName, Constants.LONG_NAMESPACE);
        }
        for(let fieldAPIName of fieldAPINamesDouble){
            Utility.apiTypeVsdataType.set(fieldAPIName, Constants.DOUBLE_NAMESPACE);
        }
        for(let fieldAPIName of fieldAPINamesFile){
            Utility.apiTypeVsdataType.set(fieldAPIName, Constants.FILE_NAMESPACE);
        }
        for(let fieldAPIName of fieldAPINamesDateTime){
            Utility.apiTypeVsdataType.set(fieldAPIName, Constants.DATETIME_NAMESPACE);
        }
        for(let fieldAPIName of fieldAPINamesDate){
            Utility.apiTypeVsdataType.set(fieldAPIName, Constants.DATE_NAMESPACE);
        }
        for(let fieldAPIName of fieldAPINamesLookup){
            Utility.apiTypeVsdataType.set(fieldAPIName, Constants.RECORD_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.RECORD_NAMESPACE);
        }
        for(let fieldAPIName of fieldAPINamesPickList){
            Utility.apiTypeVsdataType.set(fieldAPIName, Constants.CHOICE_NAMESPACE);
        }
        for(let fieldAPIName of fieldAPINamesMultiSelectPickList){
            Utility.apiTypeVsdataType.set(fieldAPIName, Constants.LIST_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.CHOICE_NAMESPACE);
        }
        for(let fieldAPIName of fieldAPINamesSubForm){
            Utility.apiTypeVsdataType.set(fieldAPIName, Constants.LIST_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.RECORD_NAMESPACE);
        }
        for(let fieldAPIName of fieldAPINamesOwnerLookUp){
            Utility.apiTypeVsdataType.set(fieldAPIName, Constants.USER_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.USER_NAMESPACE);
        }
        for(let fieldAPIName of fieldAPINamesMultiUserLookUp){
            Utility.apiTypeVsdataType.set(fieldAPIName, Constants.LIST_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.USER_NAMESPACE);
        }
        for(let fieldAPIName of fieldAPINamesMultiModuleLookUp){
            Utility.apiTypeVsdataType.set(fieldAPIName, Constants.LIST_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.MODULE_NAMESPACE);
        }
        for(let fieldAPIName of fieldAPINamesFieldFile){
            Utility.apiTypeVsdataType.set(fieldAPIName, Constants.LIST_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.FIELD_FILE_NAMESPACE);
        }
        for(let fieldAPIName of fieldAPINameTaskRemindAt){
            Utility.apiTypeVsdataType.set(fieldAPIName, Constants.REMINDAT_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.REMINDAT_NAMESPACE);
        }
        for(let fieldAPIName of fieldAPINameRecurringActivity){
            Utility.apiTypeVsdataType.set(fieldAPIName, Constants.RECURRING_ACTIVITY_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.RECURRING_ACTIVITY_NAMESPACE);
        }
        for(let fieldAPIName of fieldAPINameReminder){
            Utility.apiTypeVsdataType.set(fieldAPIName, Constants.LIST_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.REMINDER_NAMESPACE);
        }
        for(let fieldAPIName of fieldAPINameConsentLookUp) {
            Utility.apiTypeVsdataType.set(fieldAPIName, Constants.CONSENT_NAMESPACE);
            Utility.apiTypeVsStructureName.set(fieldAPIName, Constants.CONSENT_NAMESPACE);
        }
    }
}

export{
    Utility as MasterModel,
    Utility as Utility
}