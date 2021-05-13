"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utility = exports.MasterModel = void 0;
const sdk_exception_1 = require("../../core/com/zoho/crm/api/exception/sdk_exception");
const header_map_1 = require("../../routes/header_map");
const initializer_1 = require("../../routes/initializer");
const constants_1 = require("./constants");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const converter_1 = require("./converter");
const Logger = __importStar(require("winston"));
/**
 * This class handles module field details.
*/
class Utility {
    static getFields(moduleAPIName) {
        return __awaiter(this, void 0, void 0, function* () {
            this.moduleAPIName = moduleAPIName;
            yield this.getFieldsInfo(moduleAPIName);
        });
    }
    /**
     * This method to fetch field details of the current module for the current user and store the result in a JSON file.
     * @param {string} moduleAPIName - A String containing the CRM module API name.
    */
    static getFieldsInfo(moduleAPIName) {
        return __awaiter(this, void 0, void 0, function* () {
            let lastModifiedTime = null;
            var recordFieldDetailsPath = null;
            try {
                if (moduleAPIName != null && (yield Utility.searchJSONDetails(moduleAPIName)) != null) {
                    return;
                }
                let initializer = yield initializer_1.Initializer.getInitializer();
                var resourcesPath = path.join(initializer.getResourcePath(), constants_1.Constants.FIELD_DETAILS_DIRECTORY);
                if (!fs.existsSync(resourcesPath)) {
                    fs.mkdirSync(resourcesPath, { recursive: true });
                }
                recordFieldDetailsPath = yield this.getFileName();
                if (fs.existsSync(recordFieldDetailsPath)) {
                    var recordFieldDetailsJson = initializer_1.Initializer.getJSON(recordFieldDetailsPath);
                    if (initializer.getSDKConfig().getAutoRefreshFields() == true && !this.newFile && !this.getModifiedModules && (!(recordFieldDetailsJson.hasOwnProperty(constants_1.Constants.FIELDS_LAST_MODIFIED_TIME)) || this.forceRefresh || (new Date().getTime() - recordFieldDetailsJson[constants_1.Constants.FIELDS_LAST_MODIFIED_TIME]) > 3600000)) {
                        this.getModifiedModules = true;
                        lastModifiedTime = recordFieldDetailsJson.hasOwnProperty(constants_1.Constants.FIELDS_LAST_MODIFIED_TIME) ? recordFieldDetailsJson[constants_1.Constants.FIELDS_LAST_MODIFIED_TIME] : null;
                        yield Utility.modifyFields(recordFieldDetailsPath, lastModifiedTime);
                        this.getModifiedModules = false;
                    }
                    else if (initializer.getSDKConfig().getAutoRefreshFields() == false && this.forceRefresh && !this.getModifiedModules) {
                        this.getModifiedModules = true;
                        yield Utility.modifyFields(recordFieldDetailsPath, lastModifiedTime);
                        this.getModifiedModules = false;
                    }
                    recordFieldDetailsJson = initializer_1.Initializer.getJSON(recordFieldDetailsPath);
                    if (moduleAPIName == null || recordFieldDetailsJson.hasOwnProperty(moduleAPIName.toLowerCase())) {
                        return;
                    }
                    else {
                        yield Utility.fillDataType();
                        recordFieldDetailsJson[moduleAPIName.toLowerCase()] = {};
                        fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
                        let fieldsDetails = yield Utility.getFieldsDetails(moduleAPIName);
                        recordFieldDetailsJson = yield initializer_1.Initializer.getJSON(recordFieldDetailsPath);
                        recordFieldDetailsJson[moduleAPIName.toLowerCase()] = fieldsDetails;
                        fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
                    }
                }
                else if (initializer.getSDKConfig().getAutoRefreshFields() == true) {
                    this.newFile = true;
                    yield Utility.fillDataType();
                    let moduleAPINames = yield Utility.getAllModules(null);
                    let recordFieldDetailsJson = {};
                    recordFieldDetailsJson[constants_1.Constants.FIELDS_LAST_MODIFIED_TIME] = new Date().getTime();
                    for (let module of moduleAPINames) {
                        if (!recordFieldDetailsJson.hasOwnProperty(module.toLowerCase())) {
                            recordFieldDetailsJson[module.toLowerCase()] = {};
                            fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
                            let fieldsDetails = yield Utility.getFieldsDetails(module);
                            recordFieldDetailsJson = yield initializer_1.Initializer.getJSON(recordFieldDetailsPath);
                            recordFieldDetailsJson[module.toLowerCase()] = fieldsDetails;
                            fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
                        }
                    }
                    this.newFile = false;
                }
                else if (this.forceRefresh && !this.getModifiedModules) {
                    this.getModifiedModules = true;
                    let recordFieldDetailsJson = {};
                    fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
                    yield Utility.modifyFields(recordFieldDetailsPath, lastModifiedTime);
                    this.getModifiedModules = false;
                }
                else {
                    yield Utility.fillDataType();
                    let recordFieldDetailsJson = {};
                    if (moduleAPIName !== null) {
                        recordFieldDetailsJson[moduleAPIName.toLowerCase()] = {};
                        fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
                        let fieldsDetails = yield Utility.getFieldsDetails(moduleAPIName);
                        recordFieldDetailsJson = yield initializer_1.Initializer.getJSON(recordFieldDetailsPath);
                        recordFieldDetailsJson[moduleAPIName.toLowerCase()] = fieldsDetails;
                        fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
                    }
                }
            }
            catch (error) {
                if (recordFieldDetailsPath != null && fs.existsSync(recordFieldDetailsPath)) {
                    try {
                        let recordFieldDetailsJson = yield initializer_1.Initializer.getJSON(recordFieldDetailsPath);
                        if (moduleAPIName !== null && recordFieldDetailsJson.hasOwnProperty(moduleAPIName.toLowerCase())) {
                            delete recordFieldDetailsJson[moduleAPIName.toLowerCase()];
                        }
                        if (this.newFile) {
                            if (recordFieldDetailsJson.hasOwnProperty(constants_1.Constants.FIELDS_LAST_MODIFIED_TIME)) {
                                delete recordFieldDetailsJson[constants_1.Constants.FIELDS_LAST_MODIFIED_TIME];
                            }
                            this.newFile = false;
                        }
                        if (this.getModifiedModules || this.forceRefresh) {
                            this.getModifiedModules = false;
                            this.forceRefresh = false;
                            if (lastModifiedTime != null) {
                                recordFieldDetailsJson[constants_1.Constants.FIELDS_LAST_MODIFIED_TIME] = lastModifiedTime;
                            }
                        }
                        fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
                    }
                    catch (error) {
                        error = new sdk_exception_1.SDKException(null, null, null, error);
                        Logger.error(constants_1.Constants.EXCEPTION, error);
                        throw error;
                    }
                }
                if (!(error instanceof sdk_exception_1.SDKException)) {
                    error = new sdk_exception_1.SDKException(null, null, null, error);
                }
                Logger.error(constants_1.Constants.EXCEPTION, error);
                throw error;
            }
        });
    }
    static modifyFields(recordFieldDetailsPath, modifiedTime) {
        return __awaiter(this, void 0, void 0, function* () {
            let modifiedModules = yield this.getAllModules(modifiedTime);
            let recordFieldDetailsJson = yield initializer_1.Initializer.getJSON(recordFieldDetailsPath);
            recordFieldDetailsJson[constants_1.Constants.FIELDS_LAST_MODIFIED_TIME] = new Date().getTime();
            fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
            if (modifiedModules.length > 0) {
                for (let module of modifiedModules) {
                    if (recordFieldDetailsJson.hasOwnProperty(module.toLowerCase())) {
                        yield this.deleteFields(recordFieldDetailsJson, module);
                    }
                }
                fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJson));
                for (let module of modifiedModules) {
                    yield Utility.getFieldsInfo(module);
                }
            }
        });
    }
    static deleteFields(recordFieldDetailsJson, module) {
        return __awaiter(this, void 0, void 0, function* () {
            let subformModules = [];
            let fieldsJSON = recordFieldDetailsJson[module.toLowerCase()];
            for (let keyName of Object.keys(fieldsJSON)) {
                if (fieldsJSON[keyName].hasOwnProperty(constants_1.Constants.SUBFORM) && fieldsJSON[keyName][constants_1.Constants.SUBFORM] == true && recordFieldDetailsJson.hasOwnProperty((fieldsJSON[keyName][constants_1.Constants.MODULE]).toLowerCase())) {
                    subformModules.push(fieldsJSON[keyName][constants_1.Constants.MODULE]);
                }
            }
            delete recordFieldDetailsJson[module.toLowerCase()];
            if (subformModules.length > 0) {
                for (let subformModule of subformModules) {
                    yield this.deleteFields(recordFieldDetailsJson, subformModule);
                }
            }
        });
    }
    static getFileName() {
        return __awaiter(this, void 0, void 0, function* () {
            let initializer = yield initializer_1.Initializer.getInitializer();
            return path.join(initializer.getResourcePath(), constants_1.Constants.FIELD_DETAILS_DIRECTORY, yield converter_1.Converter.getEncodedFileName());
        });
    }
    static getRelatedLists(relatedModuleName, moduleAPIName, commonAPIHandler) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let isnewData = false;
                let key = (moduleAPIName + constants_1.Constants.UNDERSCORE + constants_1.Constants.RELATED_LISTS).toLowerCase();
                let initializer = yield initializer_1.Initializer.getInitializer();
                let resourcesPath = path.join(initializer.getResourcePath(), constants_1.Constants.FIELD_DETAILS_DIRECTORY);
                var recordFieldDetailsPath = yield this.getFileName();
                if (!fs.existsSync(resourcesPath)) {
                    fs.mkdirSync(resourcesPath, { recursive: true });
                }
                if (!fs.existsSync(recordFieldDetailsPath) || (fs.existsSync(recordFieldDetailsPath) && !initializer_1.Initializer.getJSON(recordFieldDetailsPath).hasOwnProperty(key))) {
                    isnewData = true;
                    let relatedListValues = yield this.getRelatedListDetails(moduleAPIName);
                    let recordFieldDetailsJSON = fs.existsSync(recordFieldDetailsPath) ? yield initializer_1.Initializer.getJSON(recordFieldDetailsPath) : {};
                    recordFieldDetailsJSON[key] = relatedListValues;
                    fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJSON));
                }
                let recordFieldDetailsJSON = yield initializer_1.Initializer.getJSON(recordFieldDetailsPath);
                let moduleRelatedList = recordFieldDetailsJSON[key];
                if (!(yield this.checkRelatedListExists(relatedModuleName, moduleRelatedList, commonAPIHandler)) && !isnewData) {
                    delete recordFieldDetailsJSON[key];
                    fs.writeFileSync(recordFieldDetailsPath, JSON.stringify(recordFieldDetailsJSON));
                    yield Utility.getRelatedLists(relatedModuleName, moduleAPIName, commonAPIHandler);
                }
            }
            catch (error) {
                if (!(error instanceof sdk_exception_1.SDKException)) {
                    error = new sdk_exception_1.SDKException(null, null, null, error);
                }
                Logger.error(constants_1.Constants.EXCEPTION, error);
                throw error;
            }
        });
    }
    static checkRelatedListExists(relatedModuleName, modulerelatedListArray, commonAPIHandler) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let index = 0; index < modulerelatedListArray.length; index++) {
                const relatedListObject = modulerelatedListArray[index];
                if (relatedListObject[constants_1.Constants.API_NAME] != null && relatedListObject[constants_1.Constants.API_NAME].toLowerCase() == relatedModuleName.toLowerCase()) {
                    if (relatedListObject[constants_1.Constants.HREF].toLowerCase() == constants_1.Constants.NULL_VALUE) {
                        throw new sdk_exception_1.SDKException(constants_1.Constants.UNSUPPORTED_IN_API, commonAPIHandler.getHttpMethod() + " " + commonAPIHandler.getAPIPath() + constants_1.Constants.UNSUPPORTED_IN_API_MESSAGE);
                    }
                    if (relatedListObject[constants_1.Constants.MODULE].toLowerCase() != constants_1.Constants.NULL_VALUE) {
                        commonAPIHandler.setModuleAPIName(relatedListObject[constants_1.Constants.MODULE]);
                        yield Utility.getFieldsInfo(relatedListObject[constants_1.Constants.MODULE]);
                    }
                    return true;
                }
            }
            return false;
        });
    }
    static getRelatedListDetails(moduleAPIName) {
        return __awaiter(this, void 0, void 0, function* () {
            let RelatedListsOperations = (yield Promise.resolve().then(() => __importStar(require("../../core/com/zoho/crm/api/related_lists/related_lists_operations")))).RelatedListsOperations;
            let ResponseWrapper = (yield Promise.resolve().then(() => __importStar(require("../../core/com/zoho/crm/api/related_lists/response_wrapper")))).ResponseWrapper;
            let APIException = (yield Promise.resolve().then(() => __importStar(require("../../core/com/zoho/crm/api/related_lists/api_exception")))).APIException;
            let relatedListArray = [];
            let response = yield new RelatedListsOperations(moduleAPIName).getRelatedLists();
            if (response !== null) {
                if (response.getStatusCode() === constants_1.Constants.NO_CONTENT_STATUS_CODE) {
                    return relatedListArray;
                }
                let responseObject = response.getObject();
                if (responseObject !== null) {
                    if (responseObject instanceof ResponseWrapper) {
                        let relatedLists = responseObject.getRelatedLists();
                        relatedLists.forEach(relatedList => {
                            let relatedListDetail = {};
                            relatedListDetail[constants_1.Constants.API_NAME] = relatedList.getAPIName();
                            relatedListDetail[constants_1.Constants.MODULE] = relatedList.getModule() != null ? relatedList.getModule() : constants_1.Constants.NULL_VALUE;
                            relatedListDetail[constants_1.Constants.NAME] = relatedList.getName();
                            relatedListDetail[constants_1.Constants.HREF] = relatedList.getHref() != null ? relatedList.getHref() : constants_1.Constants.NULL_VALUE;
                            relatedListArray.push(relatedListDetail);
                        });
                    }
                    else if (responseObject instanceof APIException) {
                        let errorResponse = {};
                        errorResponse[constants_1.Constants.CODE] = responseObject.getCode().getValue();
                        errorResponse[constants_1.Constants.STATUS] = responseObject.getStatus().getValue();
                        errorResponse[constants_1.Constants.MESSAGE] = responseObject.getMessage().getValue();
                        throw new sdk_exception_1.SDKException(constants_1.Constants.API_EXCEPTION, null, errorResponse);
                    }
                    else {
                        let errorResponse = {};
                        errorResponse[constants_1.Constants.CODE] = response.getStatusCode();
                        throw new sdk_exception_1.SDKException(constants_1.Constants.API_EXCEPTION, null, errorResponse);
                    }
                }
                else {
                    let errorResponse = {};
                    errorResponse[constants_1.Constants.CODE] = response.getStatusCode();
                    throw new sdk_exception_1.SDKException(constants_1.Constants.API_EXCEPTION, null, errorResponse);
                }
            }
            return relatedListArray;
        });
    }
    static verifyPhotoSupport(moduleAPIName) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    static getAllModules(header) {
        return __awaiter(this, void 0, void 0, function* () {
            let ResponseWrapper = (yield Promise.resolve().then(() => __importStar(require("../../core/com/zoho/crm/api/modules/response_wrapper")))).ResponseWrapper;
            let APIException = (yield Promise.resolve().then(() => __importStar(require("../../core/com/zoho/crm/api/modules/api_exception")))).APIException;
            let ModulesOperations = (yield Promise.resolve().then(() => __importStar(require("../../core/com/zoho/crm/api/modules/modules_operations")))).ModulesOperations;
            let GetModulesHeader = (yield Promise.resolve().then(() => __importStar(require("../../core/com/zoho/crm/api/modules/modules_operations")))).GetModulesHeader;
            let apiNames = [];
            let headerMap = new header_map_1.HeaderMap();
            if (header !== null) {
                yield headerMap.add(GetModulesHeader.IF_MODIFIED_SINCE, new Date(header));
            }
            let response = yield new ModulesOperations().getModules(headerMap);
            if (response !== null) {
                if ([constants_1.Constants.NO_CONTENT_STATUS_CODE, constants_1.Constants.NOT_MODIFIED_STATUS_CODE].includes(response.getStatusCode())) {
                    return apiNames;
                }
                let responseObject = response.getObject();
                if (responseObject !== null) {
                    if (responseObject instanceof ResponseWrapper) {
                        let modules = responseObject.getModules();
                        modules.forEach(module => {
                            if (module.getAPISupported() === true) {
                                apiNames.push(module.getAPIName());
                            }
                        });
                    }
                    else if (responseObject instanceof APIException) {
                        let errorResponse = {};
                        errorResponse[constants_1.Constants.CODE] = responseObject.getCode().getValue();
                        errorResponse[constants_1.Constants.STATUS] = responseObject.getStatus().getValue();
                        errorResponse[constants_1.Constants.MESSAGE] = responseObject.getMessage().getValue();
                        throw new sdk_exception_1.SDKException(constants_1.Constants.API_EXCEPTION, null, errorResponse);
                    }
                }
                else {
                    let errorResponse = {};
                    errorResponse[constants_1.Constants.CODE] = response.getStatusCode();
                    throw new sdk_exception_1.SDKException(constants_1.Constants.API_EXCEPTION, null, errorResponse);
                }
            }
            return apiNames;
        });
    }
    /**
     * This method is to get module field data from Zoho CRM.
     * @param {string} moduleAPIName - A String containing the CRM module API name.
     * @returns {object} An Object representing the Zoho CRM module field details.
    */
    static getFieldsDetails(moduleAPIName) {
        return __awaiter(this, void 0, void 0, function* () {
            let FieldOperations = (yield Promise.resolve().then(() => __importStar(require("../../core/com/zoho/crm/api/fields/fields_operations")))).FieldsOperations;
            let FieldsResponseWrapper = (yield Promise.resolve().then(() => __importStar(require("../../core/com/zoho/crm/api/fields/response_wrapper")))).ResponseWrapper;
            let APIException = (yield Promise.resolve().then(() => __importStar(require("../../core/com/zoho/crm/api/fields/api_exception")))).APIException;
            let response = yield new FieldOperations(moduleAPIName).getFields();
            let fieldsDetails = {};
            if (response !== null) {
                if (response.getStatusCode() == constants_1.Constants.NO_CONTENT_STATUS_CODE) {
                    return fieldsDetails;
                }
                let responseObject = response.getObject();
                if (responseObject != null) {
                    if (responseObject instanceof FieldsResponseWrapper) {
                        let fields = responseObject.getFields();
                        for (let field of fields) {
                            let keyName = field.getAPIName();
                            if (constants_1.Constants.KEYS_TO_SKIP.includes(keyName)) {
                                continue;
                            }
                            var fieldDetail = {};
                            yield Utility.setDataType(fieldDetail, field, moduleAPIName);
                            fieldsDetails[field.getAPIName()] = fieldDetail;
                        }
                        if (constants_1.Constants.INVENTORY_MODULES.includes(moduleAPIName.toLowerCase())) {
                            let fieldDetail = {};
                            fieldDetail[constants_1.Constants.NAME] = constants_1.Constants.LINE_TAX;
                            fieldDetail[constants_1.Constants.TYPE] = constants_1.Constants.LIST_NAMESPACE;
                            fieldDetail[constants_1.Constants.STRUCTURE_NAME] = constants_1.Constants.LINE_TAX_NAMESPACE;
                            fieldsDetails[constants_1.Constants.LINE_TAX] = fieldDetail;
                        }
                        if (moduleAPIName.toLowerCase() == constants_1.Constants.NOTES) {
                            let fieldDetail = {};
                            fieldDetail[constants_1.Constants.NAME] = constants_1.Constants.ATTACHMENTS;
                            fieldDetail[constants_1.Constants.TYPE] = constants_1.Constants.LIST_NAMESPACE;
                            fieldDetail[constants_1.Constants.STRUCTURE_NAME] = constants_1.Constants.ATTACHMENTS_NAMESPACE;
                            fieldsDetails[constants_1.Constants.ATTACHMENTS] = fieldDetail;
                        }
                    }
                    else if (responseObject instanceof APIException) {
                        let errorResponse = {};
                        errorResponse[constants_1.Constants.CODE] = responseObject.getCode().getValue();
                        errorResponse[constants_1.Constants.STATUS] = responseObject.getStatus().getValue();
                        errorResponse[constants_1.Constants.MESSAGE] = responseObject.getMessage().getValue();
                        let exception = new sdk_exception_1.SDKException(constants_1.Constants.API_EXCEPTION, null, errorResponse);
                        if (this.moduleAPIName != null && this.moduleAPIName.toLowerCase() == moduleAPIName.toLowerCase()) {
                            throw exception;
                        }
                        Logger.error(constants_1.Constants.API_EXCEPTION, exception);
                    }
                }
                else {
                    let errorResponse = {};
                    errorResponse[constants_1.Constants.CODE] = response.getStatusCode();
                    throw new sdk_exception_1.SDKException(constants_1.Constants.API_EXCEPTION, null, errorResponse);
                }
            }
            return fieldsDetails;
        });
    }
    static searchJSONDetails(key) {
        return __awaiter(this, void 0, void 0, function* () {
            key = constants_1.Constants.PACKAGE_NAMESPACE + "/record/" + key;
            var jsonDetails = initializer_1.Initializer.jsonDetails;
            for (let keyInJSON in jsonDetails) {
                if (keyInJSON.toLowerCase() == key.toLowerCase()) {
                    let returnJSON = {};
                    returnJSON[constants_1.Constants.MODULEPACKAGENAME] = keyInJSON;
                    returnJSON[constants_1.Constants.MODULEDETAILS] = jsonDetails[keyInJSON];
                    return returnJSON;
                }
            }
            return null;
        });
    }
    static refreshModules() {
        return __awaiter(this, void 0, void 0, function* () {
            this.forceRefresh = true;
            yield Utility.getFieldsInfo(null);
            this.forceRefresh = false;
        });
    }
    static getJSONObject(json, key) {
        return __awaiter(this, void 0, void 0, function* () {
            let keyArray = Array.from(Object.keys(json));
            for (let keyInJSON of keyArray) {
                if (key.toLowerCase() == keyInJSON.toLowerCase()) {
                    return json[keyInJSON];
                }
            }
            return null;
        });
    }
    static setDataType(fieldDetail, field, moduleAPIName) {
        return __awaiter(this, void 0, void 0, function* () {
            var apiType = field.getDataType();
            var module = "";
            var keyName = field.getAPIName();
            if (field.getSystemMandatory() != null && field.getSystemMandatory() == true && !(moduleAPIName.toLowerCase() == constants_1.Constants.CALLS && keyName.toLowerCase() == constants_1.Constants.CALL_DURATION)) {
                fieldDetail.required = true;
            }
            if (keyName.toLowerCase() == constants_1.Constants.PRODUCT_DETAILS.toLowerCase() && constants_1.Constants.INVENTORY_MODULES.includes(moduleAPIName.toLowerCase())) {
                fieldDetail.name = keyName;
                fieldDetail.type = constants_1.Constants.LIST_NAMESPACE;
                fieldDetail.structure_name = constants_1.Constants.INVENTORY_LINE_ITEMS;
                fieldDetail.skip_mandatory = true;
                return;
            }
            else if (keyName.toLowerCase() == constants_1.Constants.PRICING_DETAILS.toLowerCase() && moduleAPIName.toLowerCase() == constants_1.Constants.PRICE_BOOKS) {
                fieldDetail.name = keyName;
                fieldDetail.type = constants_1.Constants.LIST_NAMESPACE;
                fieldDetail.structure_name = constants_1.Constants.PRICINGDETAILS;
                fieldDetail.skip_mandatory = true;
                return;
            }
            else if (keyName.toLowerCase() == constants_1.Constants.PARTICIPANT_API_NAME.toLowerCase() && (moduleAPIName.toLowerCase() == constants_1.Constants.EVENTS || moduleAPIName.toLowerCase() == constants_1.Constants.ACTIVITIES)) {
                fieldDetail.name = keyName;
                fieldDetail.type = constants_1.Constants.LIST_NAMESPACE;
                fieldDetail.structure_name = constants_1.Constants.PARTICIPANTS;
                fieldDetail.skip_mandatory = true;
                return;
            }
            else if (keyName.toLowerCase() == constants_1.Constants.COMMENTS.toLowerCase() && (moduleAPIName.toLowerCase() == constants_1.Constants.SOLUTIONS || moduleAPIName.toLowerCase() == constants_1.Constants.CASES)) {
                fieldDetail.name = keyName;
                fieldDetail.type = constants_1.Constants.LIST_NAMESPACE;
                fieldDetail.structure_name = constants_1.Constants.COMMENT_NAMESPACE;
                fieldDetail.lookup = true;
                return;
            }
            else if (keyName.toLowerCase() == constants_1.Constants.LAYOUT.toLowerCase()) {
                fieldDetail.name = keyName;
                fieldDetail.type = constants_1.Constants.LAYOUT_NAMESPACE;
                fieldDetail.structure_name = constants_1.Constants.LAYOUT_NAMESPACE;
                fieldDetail.lookup = true;
                return;
            }
            else if (Utility.apiTypeVsdataType.has(apiType)) {
                fieldDetail.type = Utility.apiTypeVsdataType.get(apiType);
            }
            else if (apiType.toLowerCase() == constants_1.Constants.FORMULA.toLowerCase()) {
                if (field.getFormula() != null) {
                    let returnType = field.getFormula().getReturnType();
                    if (Utility.apiTypeVsdataType.has(returnType)) {
                        fieldDetail.type = Utility.apiTypeVsdataType.get(returnType);
                    }
                }
                fieldDetail[constants_1.Constants.READ_ONLY] = true;
            }
            else {
                return;
            }
            if (apiType.toLowerCase().includes(constants_1.Constants.LOOKUP.toLowerCase())) {
                fieldDetail.lookup = true;
            }
            if (apiType.toLowerCase() == constants_1.Constants.CONSENT_LOOKUP) {
                fieldDetail.skip_mandatory = true;
            }
            if (Utility.apiTypeVsStructureName.has(apiType)) {
                fieldDetail.structure_name = Utility.apiTypeVsStructureName.get(apiType);
            }
            if (apiType.toLowerCase() == constants_1.Constants.PICKLIST && field.getPickListValues() != null && field.getPickListValues().length > 0) {
                let values = [];
                fieldDetail.picklist = true;
                field.getPickListValues().every(x => values.push(x.getDisplayValue()));
                fieldDetail.values = values;
            }
            if (apiType == constants_1.Constants.SUBFORM) {
                module = field.getSubform().getModule();
                fieldDetail.module = module;
                fieldDetail.skip_mandatory = true;
                fieldDetail.subform = true;
            }
            if (apiType == constants_1.Constants.LOOKUP) {
                module = field.getLookup().getModule();
                if (module != null && module != constants_1.Constants.SE_MODULE) {
                    fieldDetail.module = module;
                    if (module.toLowerCase() == constants_1.Constants.ACCOUNTS && !field.getCustomField()) {
                        fieldDetail.skip_mandatory = true;
                    }
                }
                else {
                    module = "";
                }
                fieldDetail.lookup = true;
            }
            if (module.length > 0) {
                yield Utility.getFieldsInfo(module);
            }
            fieldDetail.name = keyName;
        });
    }
    static fillDataType() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.apiTypeVsdataType.size > 0) {
                return;
            }
            let fieldAPINamesString = ["textarea", "text", "website", "email", "phone", "mediumtext", "multiselectlookup", "profileimage", "autonumber"];
            let fieldAPINamesInteger = ["integer"];
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
            let fieldAPINameConsentLookUp = ["consent_lookup"];
            for (let fieldAPIName of fieldAPINamesString) {
                Utility.apiTypeVsdataType.set(fieldAPIName, constants_1.Constants.STRING_NAMESPACE);
            }
            for (let fieldAPIName of fieldAPINamesInteger) {
                Utility.apiTypeVsdataType.set(fieldAPIName, constants_1.Constants.INTEGER_NAMESPACE);
            }
            for (let fieldAPIName of fieldAPINamesBoolean) {
                Utility.apiTypeVsdataType.set(fieldAPIName, constants_1.Constants.BOOLEAN_NAMESPACE);
            }
            for (let fieldAPIName of fieldAPINamesLong) {
                Utility.apiTypeVsdataType.set(fieldAPIName, constants_1.Constants.LONG_NAMESPACE);
            }
            for (let fieldAPIName of fieldAPINamesDouble) {
                Utility.apiTypeVsdataType.set(fieldAPIName, constants_1.Constants.DOUBLE_NAMESPACE);
            }
            for (let fieldAPIName of fieldAPINamesFile) {
                Utility.apiTypeVsdataType.set(fieldAPIName, constants_1.Constants.FILE_NAMESPACE);
            }
            for (let fieldAPIName of fieldAPINamesDateTime) {
                Utility.apiTypeVsdataType.set(fieldAPIName, constants_1.Constants.DATETIME_NAMESPACE);
            }
            for (let fieldAPIName of fieldAPINamesDate) {
                Utility.apiTypeVsdataType.set(fieldAPIName, constants_1.Constants.DATE_NAMESPACE);
            }
            for (let fieldAPIName of fieldAPINamesLookup) {
                Utility.apiTypeVsdataType.set(fieldAPIName, constants_1.Constants.RECORD_NAMESPACE);
                Utility.apiTypeVsStructureName.set(fieldAPIName, constants_1.Constants.RECORD_NAMESPACE);
            }
            for (let fieldAPIName of fieldAPINamesPickList) {
                Utility.apiTypeVsdataType.set(fieldAPIName, constants_1.Constants.CHOICE_NAMESPACE);
            }
            for (let fieldAPIName of fieldAPINamesMultiSelectPickList) {
                Utility.apiTypeVsdataType.set(fieldAPIName, constants_1.Constants.LIST_NAMESPACE);
                Utility.apiTypeVsStructureName.set(fieldAPIName, constants_1.Constants.CHOICE_NAMESPACE);
            }
            for (let fieldAPIName of fieldAPINamesSubForm) {
                Utility.apiTypeVsdataType.set(fieldAPIName, constants_1.Constants.LIST_NAMESPACE);
                Utility.apiTypeVsStructureName.set(fieldAPIName, constants_1.Constants.RECORD_NAMESPACE);
            }
            for (let fieldAPIName of fieldAPINamesOwnerLookUp) {
                Utility.apiTypeVsdataType.set(fieldAPIName, constants_1.Constants.USER_NAMESPACE);
                Utility.apiTypeVsStructureName.set(fieldAPIName, constants_1.Constants.USER_NAMESPACE);
            }
            for (let fieldAPIName of fieldAPINamesMultiUserLookUp) {
                Utility.apiTypeVsdataType.set(fieldAPIName, constants_1.Constants.LIST_NAMESPACE);
                Utility.apiTypeVsStructureName.set(fieldAPIName, constants_1.Constants.USER_NAMESPACE);
            }
            for (let fieldAPIName of fieldAPINamesMultiModuleLookUp) {
                Utility.apiTypeVsdataType.set(fieldAPIName, constants_1.Constants.LIST_NAMESPACE);
                Utility.apiTypeVsStructureName.set(fieldAPIName, constants_1.Constants.MODULE_NAMESPACE);
            }
            for (let fieldAPIName of fieldAPINamesFieldFile) {
                Utility.apiTypeVsdataType.set(fieldAPIName, constants_1.Constants.LIST_NAMESPACE);
                Utility.apiTypeVsStructureName.set(fieldAPIName, constants_1.Constants.FIELD_FILE_NAMESPACE);
            }
            for (let fieldAPIName of fieldAPINameTaskRemindAt) {
                Utility.apiTypeVsdataType.set(fieldAPIName, constants_1.Constants.REMINDAT_NAMESPACE);
                Utility.apiTypeVsStructureName.set(fieldAPIName, constants_1.Constants.REMINDAT_NAMESPACE);
            }
            for (let fieldAPIName of fieldAPINameRecurringActivity) {
                Utility.apiTypeVsdataType.set(fieldAPIName, constants_1.Constants.RECURRING_ACTIVITY_NAMESPACE);
                Utility.apiTypeVsStructureName.set(fieldAPIName, constants_1.Constants.RECURRING_ACTIVITY_NAMESPACE);
            }
            for (let fieldAPIName of fieldAPINameReminder) {
                Utility.apiTypeVsdataType.set(fieldAPIName, constants_1.Constants.LIST_NAMESPACE);
                Utility.apiTypeVsStructureName.set(fieldAPIName, constants_1.Constants.REMINDER_NAMESPACE);
            }
            for (let fieldAPIName of fieldAPINameConsentLookUp) {
                Utility.apiTypeVsdataType.set(fieldAPIName, constants_1.Constants.CONSENT_NAMESPACE);
                Utility.apiTypeVsStructureName.set(fieldAPIName, constants_1.Constants.CONSENT_NAMESPACE);
            }
        });
    }
}
exports.MasterModel = Utility;
exports.Utility = Utility;
Utility.apiTypeVsdataType = new Map();
Utility.apiTypeVsStructureName = new Map();
Utility.newFile = false;
Utility.getModifiedModules = false;
Utility.forceRefresh = false;
Utility.moduleAPIName = null;
//# sourceMappingURL=utility.js.map