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
exports.JSONConverter = void 0;
const sdk_exception_1 = require("../../core/com/zoho/crm/api/exception/sdk_exception");
const file_details_1 = require("../../core/com/zoho/crm/api/record/file_details");
const record_1 = require("../../core/com/zoho/crm/api/record/record");
const initializer_1 = require("../../routes/initializer");
const constants_1 = require("./constants");
const converter_1 = require("./converter");
const datatype_converter_1 = require("./datatype_converter");
const path = __importStar(require("path"));
const utility_1 = require("./utility");
/**
 * This class processes the API response to the object and an object to a JSON object, containing the request body.
 */
class JSONConverter extends converter_1.Converter {
    constructor(commonAPIHandler) {
        super(commonAPIHandler);
        this.uniqueValuesMap = new Map();
    }
    appendToRequest(requestBase) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = requestBase;
            return JSON.stringify(request.getRequestBody(), (key, value) => typeof value === constants_1.Constants.BIGINT_TYPE ? value.toString() : value);
        });
    }
    formRequest(requestInstance, pack, instanceNumber, classMemberDetail) {
        return __awaiter(this, void 0, void 0, function* () {
            var classDetail = initializer_1.Initializer.jsonDetails[pack];
            if (classDetail.hasOwnProperty(constants_1.Constants.INTERFACE) && classDetail[constants_1.Constants.INTERFACE] === true) {
                var classes = classDetail[constants_1.Constants.CLASSES];
                var baseName = pack.split('/').slice(0, -1);
                let className = yield this.getFileName(requestInstance.constructor.name);
                baseName.push(className);
                let requestObjectClassName = baseName.join('/');
                for (let className in classes) {
                    if (classes[className].toLowerCase() == requestObjectClassName) {
                        classDetail = initializer_1.Initializer.jsonDetails[requestObjectClassName];
                        break;
                    }
                }
            }
            if (requestInstance instanceof record_1.Record) {
                let moduleAPIName = this.commonAPIHandler.getModuleAPIName();
                let returnJSON = yield this.isRecordRequest(requestInstance, classDetail, instanceNumber, classMemberDetail);
                this.commonAPIHandler.setModuleAPIName(moduleAPIName);
                return returnJSON;
            }
            else {
                return yield this.isNotRecordRequest(requestInstance, classDetail, instanceNumber, classMemberDetail);
            }
        });
    }
    isNotRecordRequest(requestInstance, classDetail, instanceNumber, classMemberDetail) {
        return __awaiter(this, void 0, void 0, function* () {
            let requestJSON = {};
            let requiredKeys = new Map();
            let primaryKeys = new Map();
            let requiredInUpdateKeys = new Map();
            let lookUp = false;
            let skipMandatory = false;
            let classMemberName = null;
            if (classMemberDetail !== null) {
                lookUp = (classMemberDetail.hasOwnProperty(constants_1.Constants.LOOKUP) ? classMemberDetail[constants_1.Constants.LOOKUP] : false);
                skipMandatory = (classMemberDetail.hasOwnProperty(constants_1.Constants.SKIP_MANDATORY) ? classMemberDetail[constants_1.Constants.SKIP_MANDATORY] : false);
                classMemberName = this.buildName(classMemberDetail[constants_1.Constants.NAME]);
            }
            for (let memberName in classDetail) {
                let modification = null;
                let memberDetail = classDetail[memberName];
                if ((memberDetail.hasOwnProperty(constants_1.Constants.READ_ONLY) && memberDetail[constants_1.Constants.READ_ONLY] == 'true') || !memberDetail.hasOwnProperty(constants_1.Constants.NAME)) {
                    continue;
                }
                let keyName = memberDetail[constants_1.Constants.NAME];
                try {
                    modification = requestInstance.isKeyModified(memberDetail[constants_1.Constants.NAME]);
                }
                catch (e) {
                    throw new sdk_exception_1.SDKException(constants_1.Constants.EXCEPTION_IS_KEY_MODIFIED, null, null, e);
                }
                if (memberDetail.hasOwnProperty(constants_1.Constants.REQUIRED) && memberDetail[constants_1.Constants.REQUIRED] == true) {
                    requiredKeys.set(keyName, true);
                }
                if (memberDetail.hasOwnProperty(constants_1.Constants.REQUIRED_IN_UPDATE) && memberDetail[constants_1.Constants.REQUIRED_IN_UPDATE] == true) {
                    requiredInUpdateKeys.set(keyName, true);
                }
                if (memberDetail.hasOwnProperty(constants_1.Constants.PRIMARY) && memberDetail[constants_1.Constants.PRIMARY] == true && (!memberDetail.hasOwnProperty(constants_1.Constants.REQUIRED_IN_UPDATE) || memberDetail[constants_1.Constants.REQUIRED_IN_UPDATE] == true)) {
                    primaryKeys.set(keyName, true);
                }
                let fieldValue = null;
                if (modification != null && modification !== undefined && modification != 0) {
                    fieldValue = Reflect.get(requestInstance, memberName);
                    if (yield this.valueChecker(requestInstance.constructor.name, memberName, memberDetail, fieldValue, this.uniqueValuesMap, instanceNumber)) {
                        if (fieldValue != null) {
                            requiredKeys.delete(keyName);
                            primaryKeys.delete(keyName);
                            requiredInUpdateKeys.delete(keyName);
                        }
                        if (requestInstance instanceof file_details_1.FileDetails) {
                            requestJSON[keyName.toLowerCase()] = fieldValue != null ? fieldValue : null;
                        }
                        else {
                            requestJSON[keyName] = yield this.setData(memberDetail, fieldValue);
                        }
                    }
                }
            }
            if (skipMandatory || this.checkException(classMemberName, requestInstance, instanceNumber, lookUp, requiredKeys, primaryKeys, requiredInUpdateKeys)) {
                return requestJSON;
            }
            return requestJSON;
        });
    }
    checkException(memberName, requestInstance, instanceNumber, lookUp, requiredKeys, primaryKeys, requiredInUpdateKeys) {
        if (requiredInUpdateKeys.size > 0 && this.commonAPIHandler.getCategoryMethod().toUpperCase() == constants_1.Constants.REQUEST_CATEGORY_UPDATE) {
            let error = {};
            error.field = memberName;
            error.type = requestInstance.constructor.name;
            error.keys = Array.from(requiredInUpdateKeys.keys()).toString();
            if (instanceNumber != null) {
                error.instance_number = instanceNumber;
            }
            throw new sdk_exception_1.SDKException(constants_1.Constants.MANDATORY_VALUE_ERROR, constants_1.Constants.MANDATORY_KEY_ERROR, error);
        }
        if (this.commonAPIHandler.getMandatoryChecker() != null && this.commonAPIHandler.getMandatoryChecker()) {
            if (this.commonAPIHandler.getCategoryMethod().toUpperCase() == constants_1.Constants.REQUEST_CATEGORY_CREATE) {
                if (lookUp) {
                    if (primaryKeys.size > 0) {
                        let error = {};
                        error.field = memberName;
                        error.type = requestInstance.constructor.name;
                        error.keys = Array.from(primaryKeys.keys()).toString();
                        if (instanceNumber != null) {
                            error.instance_number = instanceNumber;
                        }
                        throw new sdk_exception_1.SDKException(constants_1.Constants.MANDATORY_VALUE_ERROR, constants_1.Constants.PRIMARY_KEY_ERROR, error);
                    }
                }
                else if (requiredKeys.size > 0) {
                    let error = {};
                    error.field = memberName;
                    error.type = requestInstance.constructor.name;
                    error.keys = Array.from(requiredKeys.keys()).toString();
                    if (instanceNumber != null) {
                        error.instance_number = instanceNumber;
                    }
                    throw new sdk_exception_1.SDKException(constants_1.Constants.MANDATORY_VALUE_ERROR, constants_1.Constants.MANDATORY_KEY_ERROR, error);
                }
            }
            if (this.commonAPIHandler.getCategoryMethod().toUpperCase() == constants_1.Constants.REQUEST_CATEGORY_UPDATE && primaryKeys.size > 0) {
                let error = {};
                error.field = memberName;
                error.type = requestInstance.constructor.name;
                error.keys = Array.from(primaryKeys.keys()).toString();
                if (instanceNumber != null) {
                    error.instance_number = instanceNumber;
                }
                throw new sdk_exception_1.SDKException(constants_1.Constants.MANDATORY_VALUE_ERROR, constants_1.Constants.PRIMARY_KEY_ERROR, error);
            }
        }
        else if (lookUp && this.commonAPIHandler.getCategoryMethod().toUpperCase() == constants_1.Constants.REQUEST_CATEGORY_UPDATE) {
            if (primaryKeys.size > 0) {
                let error = {};
                error.field = memberName;
                error.type = requestInstance.constructor.name;
                error.keys = Array.from(primaryKeys.keys()).toString();
                if (instanceNumber != null) {
                    error.instance_number = instanceNumber;
                }
                throw new sdk_exception_1.SDKException(constants_1.Constants.MANDATORY_VALUE_ERROR, constants_1.Constants.PRIMARY_KEY_ERROR, error);
            }
        }
        return true;
    }
    // isRecordRequest
    isRecordRequest(recordInstance, classDetail, instanceNumber, classMemberDetail) {
        return __awaiter(this, void 0, void 0, function* () {
            var requestJSON = {};
            var moduleDetail = {};
            var lookUp = false;
            var skipMandatory = false;
            var classMemberName = null;
            if (classMemberDetail != null) {
                lookUp = (classMemberDetail.hasOwnProperty(constants_1.Constants.LOOKUP) ? classMemberDetail[constants_1.Constants.LOOKUP] : false);
                skipMandatory = (classMemberDetail.hasOwnProperty(constants_1.Constants.SKIP_MANDATORY) ? classMemberDetail[constants_1.Constants.SKIP_MANDATORY] : false);
                classMemberName = classMemberDetail[constants_1.Constants.NAME];
            }
            let moduleAPIName = this.commonAPIHandler.getModuleAPIName();
            if (moduleAPIName !== null) {
                this.commonAPIHandler.setModuleAPIName(null);
                var fullDetail = yield utility_1.Utility.searchJSONDetails(moduleAPIName);
                if (fullDetail != null) {
                    moduleDetail = fullDetail[constants_1.Constants.MODULEDETAILS];
                }
                else {
                    moduleDetail = yield this.getModuleDetailFromUserSpecJSON(moduleAPIName);
                }
            }
            else {
                moduleDetail = classDetail;
                classDetail = initializer_1.Initializer.jsonDetails[constants_1.Constants.RECORD_NAMESPACE];
            }
            let keyValues = new Map();
            let uniqueValues = new Map();
            keyValues = Reflect.get(recordInstance, constants_1.Constants.KEY_VALUES);
            let keyModified = new Map();
            keyModified = Reflect.get(recordInstance, constants_1.Constants.KEY_MODIFIED);
            let requiredKeys = new Map();
            let primaryKeys = new Map();
            if (!skipMandatory) {
                for (let keyName of Object.keys(moduleDetail)) {
                    const keyDetail = moduleDetail[keyName];
                    let name = keyDetail[constants_1.Constants.NAME];
                    if (keyDetail.hasOwnProperty(constants_1.Constants.REQUIRED) && keyDetail[constants_1.Constants.REQUIRED] == true) {
                        requiredKeys.set(name, true);
                    }
                    if (keyDetail.hasOwnProperty(constants_1.Constants.PRIMARY) && keyDetail[constants_1.Constants.PRIMARY] == true) {
                        primaryKeys.set(name, true);
                    }
                }
                for (let keyName of Object.keys(classDetail)) {
                    const keyDetail = classDetail[keyName];
                    let name = keyDetail[constants_1.Constants.NAME];
                    if (keyDetail.hasOwnProperty(constants_1.Constants.REQUIRED) && keyDetail[constants_1.Constants.REQUIRED] == true) {
                        requiredKeys.set(name, true);
                    }
                    if (keyDetail.hasOwnProperty(constants_1.Constants.PRIMARY) && keyDetail[constants_1.Constants.PRIMARY] == true) {
                        primaryKeys.set(name, true);
                    }
                }
            }
            for (let keyName of Array.from(keyModified.keys())) {
                if (keyModified.get(keyName) != 1) {
                    continue;
                }
                let keyDetail = {};
                let keyValue = keyValues.has(keyName) ? keyValues.get(keyName) : null;
                let jsonValue = null;
                let memberName = this.buildName(keyName);
                if (Object.keys(moduleDetail).length > 0 && (moduleDetail.hasOwnProperty(keyName) || moduleDetail.hasOwnProperty(memberName))) {
                    if (moduleDetail.hasOwnProperty(keyName)) {
                        keyDetail = moduleDetail[keyName];
                    }
                    else {
                        keyDetail = moduleDetail[memberName];
                    }
                }
                else if (classDetail.hasOwnProperty(memberName)) {
                    keyDetail = classDetail[memberName];
                }
                if (Object.keys(keyDetail).length > 0) {
                    if ((keyDetail.hasOwnProperty(constants_1.Constants.READ_ONLY) && keyDetail[constants_1.Constants.READ_ONLY] == 'true') || !keyDetail.hasOwnProperty(constants_1.Constants.NAME)) {
                        continue;
                    }
                    if (yield this.valueChecker(recordInstance.constructor.name, keyName, keyDetail, keyValue, uniqueValues, instanceNumber)) {
                        jsonValue = yield this.setData(keyDetail, keyValue);
                    }
                }
                else {
                    jsonValue = yield this.redirectorForObjectToJSON(keyValue);
                }
                if (keyValue != null) {
                    requiredKeys.delete(keyName);
                    primaryKeys.delete(keyName);
                }
                requestJSON[keyName] = jsonValue;
            }
            if (skipMandatory || this.checkException(classMemberName, recordInstance, instanceNumber, lookUp, requiredKeys, primaryKeys, new Map())) {
                return requestJSON;
            }
        });
    }
    // setData
    setData(memberDetail, fieldValue) {
        return __awaiter(this, void 0, void 0, function* () {
            if (fieldValue != null) {
                let type = memberDetail[constants_1.Constants.TYPE].toString();
                if (type.toLowerCase() == constants_1.Constants.LIST_NAMESPACE.toLowerCase()) {
                    return yield this.setJSONArray(fieldValue, memberDetail);
                }
                else if (type.toLowerCase() == constants_1.Constants.MAP_NAMESPACE.toLowerCase()) {
                    return yield this.setJSONObject(fieldValue, memberDetail);
                }
                else if (type == constants_1.Constants.CHOICE_NAMESPACE || (memberDetail.hasOwnProperty(constants_1.Constants.STRUCTURE_NAME) && memberDetail[constants_1.Constants.STRUCTURE_NAME] == constants_1.Constants.CHOICE_NAMESPACE)) {
                    return (fieldValue.getValue());
                }
                else if (memberDetail.hasOwnProperty(constants_1.Constants.STRUCTURE_NAME) && memberDetail.hasOwnProperty(constants_1.Constants.MODULE)) {
                    return yield this.isRecordRequest(fieldValue, yield this.getModuleDetailFromUserSpecJSON(memberDetail[constants_1.Constants.MODULE]), null, memberDetail);
                }
                else if (memberDetail.hasOwnProperty(constants_1.Constants.STRUCTURE_NAME)) {
                    return yield this.formRequest(fieldValue, memberDetail[constants_1.Constants.STRUCTURE_NAME], null, memberDetail);
                }
                else {
                    return datatype_converter_1.DataTypeConverter.postConvert(fieldValue, type);
                }
            }
            return null;
        });
    }
    setJSONObject(fieldValue, memberDetail) {
        return __awaiter(this, void 0, void 0, function* () {
            let jsonObject = {};
            let requestObject = fieldValue;
            if (Array.from(requestObject.keys()).length > 0) {
                if (memberDetail == null || (memberDetail != null && !memberDetail.hasOwnProperty(constants_1.Constants.KEYS))) {
                    for (let key of Array.from(requestObject.keys())) {
                        jsonObject[key] = yield this.redirectorForObjectToJSON(requestObject.get(key));
                    }
                }
                else {
                    if (memberDetail !== null && memberDetail.hasOwnProperty(constants_1.Constants.KEYS)) {
                        var keysDetail = memberDetail[constants_1.Constants.KEYS];
                        for (let keyIndex = 0; keyIndex < keysDetail.length; keyIndex++) {
                            let keyDetail = keysDetail[keyIndex];
                            let keyName = keyDetail[constants_1.Constants.NAME];
                            let keyValue = null;
                            if (requestObject.has(keyName) && requestObject.get(keyName) != null) {
                                keyValue = yield this.setData(keyDetail, requestObject.get(keyName));
                                jsonObject[keyName] = keyValue;
                            }
                        }
                    }
                }
            }
            return jsonObject;
        });
    }
    setJSONArray(fieldValue, memberDetail) {
        return __awaiter(this, void 0, void 0, function* () {
            let jsonArray = [];
            let requestObjects = fieldValue;
            if (requestObjects.length > 0) {
                if (memberDetail == null || (memberDetail != null && !memberDetail.hasOwnProperty(constants_1.Constants.STRUCTURE_NAME))) {
                    for (let request of requestObjects) {
                        jsonArray.push(yield this.redirectorForObjectToJSON(request));
                    }
                }
                else {
                    let pack = memberDetail[constants_1.Constants.STRUCTURE_NAME].toString();
                    if (pack == constants_1.Constants.CHOICE_NAMESPACE) {
                        for (let request of requestObjects) {
                            jsonArray.push(request.value);
                        }
                    }
                    else if (memberDetail.hasOwnProperty(constants_1.Constants.MODULE) && memberDetail[constants_1.Constants.MODULE] != null) {
                        let instanceCount = 0;
                        for (let request of requestObjects) {
                            jsonArray.push(yield this.isRecordRequest(request, yield this.getModuleDetailFromUserSpecJSON(memberDetail[constants_1.Constants.MODULE]), instanceCount++, memberDetail));
                        }
                    }
                    else {
                        let instanceCount = 0;
                        for (let request of requestObjects) {
                            jsonArray.push(yield this.formRequest(request, pack, instanceCount++, memberDetail));
                        }
                    }
                }
            }
            return jsonArray;
        });
    }
    redirectorForObjectToJSON(request) {
        return __awaiter(this, void 0, void 0, function* () {
            if (Array.isArray(request)) {
                return yield this.setJSONArray(request, null);
            }
            else if (request instanceof Map) {
                return yield this.setJSONObject(request, null);
            }
            else {
                return request;
            }
        });
    }
    getWrappedResponse(response, pack) {
        return __awaiter(this, void 0, void 0, function* () {
            if (response.body.length != 0) {
                var responseJson = JSON.parse(response.body);
                return yield this.getResponse(responseJson, pack);
            }
            return null;
        });
    }
    getResponse(response, pack) {
        return __awaiter(this, void 0, void 0, function* () {
            if (response === null || response === "" || response.length == 0) {
                return null;
            }
            var responseJson = response;
            var classDetail = initializer_1.Initializer.jsonDetails[pack];
            var instance = null;
            if (classDetail.hasOwnProperty(constants_1.Constants.INTERFACE) && classDetail[constants_1.Constants.INTERFACE]) {
                let classes = classDetail[constants_1.Constants.CLASSES];
                instance = yield this.findMatch(classes, responseJson);
            }
            else {
                let ClassName = (yield Promise.resolve().then(() => __importStar(require("../../".concat(pack))))).MasterModel;
                instance = new ClassName();
                if (instance instanceof record_1.Record) {
                    let moduleAPIName = this.commonAPIHandler.getModuleAPIName();
                    instance = yield this.isRecordResponse(responseJson, classDetail, pack);
                    this.commonAPIHandler.setModuleAPIName(moduleAPIName);
                }
                else {
                    instance = yield this.notRecordResponse(instance, responseJson, classDetail);
                }
            }
            return instance;
        });
    }
    notRecordResponse(instance, responseJson, classDetail) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let memberName in classDetail) {
                let keyDetail = classDetail[memberName];
                let keyName = keyDetail.hasOwnProperty(constants_1.Constants.NAME) ? keyDetail[constants_1.Constants.NAME] : null;
                if (keyName != null && responseJson.hasOwnProperty(keyName)) {
                    let keyData = responseJson[keyName];
                    let memberValue = yield this.getData(keyData, keyDetail);
                    Reflect.set(instance, memberName, memberValue);
                }
            }
            return instance;
        });
    }
    isRecordResponse(responseJson, classDetail, pack) {
        return __awaiter(this, void 0, void 0, function* () {
            let className = (yield Promise.resolve().then(() => __importStar(require("../../" + pack)))).MasterModel;
            let recordInstance = new className();
            let moduleAPIName = this.commonAPIHandler.getModuleAPIName();
            let moduleDetail = {};
            if (moduleAPIName != null) {
                this.commonAPIHandler.setModuleAPIName(null);
                let fullDetail = yield utility_1.Utility.searchJSONDetails(moduleAPIName);
                if (fullDetail != null) {
                    moduleDetail = fullDetail[constants_1.Constants.MODULEDETAILS];
                    let moduleClassName = (yield Promise.resolve().then(() => __importStar(require("../../" + fullDetail[constants_1.Constants.MODULEPACKAGENAME])))).MasterModel;
                    recordInstance = new moduleClassName();
                }
                else {
                    moduleDetail = yield this.getModuleDetailFromUserSpecJSON(moduleAPIName);
                }
            }
            for (let key in classDetail) {
                moduleDetail[key] = classDetail[key];
            }
            var recordDetail = initializer_1.Initializer.jsonDetails[constants_1.Constants.RECORD_NAMESPACE];
            var keyValues = new Map();
            for (let keyName in responseJson) {
                let memberName = this.buildName(keyName);
                let keyDetail = {};
                if (Object.keys(moduleDetail).length > 0 && (moduleDetail.hasOwnProperty(keyName) || moduleDetail.hasOwnProperty(memberName))) {
                    if (moduleDetail.hasOwnProperty(keyName)) {
                        keyDetail = moduleDetail[keyName];
                    }
                    else {
                        keyDetail = moduleDetail[memberName];
                    }
                }
                else if (recordDetail.hasOwnProperty(memberName)) {
                    keyDetail = recordDetail[memberName];
                }
                let keyValue = null;
                let keyData = responseJson[keyName];
                if (Object.keys(keyDetail).length > 0) {
                    keyName = keyDetail[constants_1.Constants.NAME];
                    keyValue = yield this.getData(keyData, keyDetail);
                }
                else {
                    keyValue = yield this.redirectorForJSONToObject(keyData);
                }
                keyValues.set(keyName, keyValue);
            }
            Reflect.set(recordInstance, constants_1.Constants.KEY_VALUES, keyValues);
            return recordInstance;
        });
    }
    getData(keyData, memberDetail) {
        return __awaiter(this, void 0, void 0, function* () {
            let memberValue = null;
            if (keyData !== null) {
                let type = memberDetail[constants_1.Constants.TYPE].toString();
                if (type.toLowerCase() == constants_1.Constants.LIST_NAMESPACE.toLowerCase()) {
                    memberValue = yield this.getCollectionsData(keyData, memberDetail);
                }
                else if (type.toLowerCase() == constants_1.Constants.MAP_NAMESPACE.toLowerCase()) {
                    memberValue = yield this.getMapData(keyData, memberDetail);
                }
                else if (type == constants_1.Constants.CHOICE_NAMESPACE || (memberDetail.hasOwnProperty(constants_1.Constants.STRUCTURE_NAME) && memberDetail[constants_1.Constants.STRUCTURE_NAME] == constants_1.Constants.CHOICE_NAMESPACE)) {
                    let Choice = (yield Promise.resolve().then(() => __importStar(require(constants_1.Constants.CHOICE_PATH)))).MasterModel;
                    memberValue = new Choice(keyData);
                }
                else if (memberDetail.hasOwnProperty(constants_1.Constants.STRUCTURE_NAME) && memberDetail.hasOwnProperty(constants_1.Constants.MODULE)) {
                    memberValue = yield this.isRecordResponse(keyData, yield this.getModuleDetailFromUserSpecJSON(memberDetail[constants_1.Constants.MODULE]), memberDetail[constants_1.Constants.STRUCTURE_NAME]);
                }
                else if (memberDetail.hasOwnProperty(constants_1.Constants.STRUCTURE_NAME)) {
                    memberValue = yield this.getResponse(keyData, memberDetail[constants_1.Constants.STRUCTURE_NAME]);
                }
                else {
                    memberValue = yield datatype_converter_1.DataTypeConverter.preConvert(keyData, type);
                }
            }
            return memberValue;
        });
    }
    getMapData(response, memberDetail) {
        return __awaiter(this, void 0, void 0, function* () {
            var mapInstance = new Map();
            if (Object.keys(response).length > 0) {
                if (memberDetail == null || (memberDetail != null && !memberDetail.hasOwnProperty(constants_1.Constants.KEYS))) {
                    for (let key in response) {
                        mapInstance.set(key, yield this.redirectorForJSONToObject(response[key]));
                    }
                }
                else {
                    if (memberDetail.hasOwnProperty(constants_1.Constants.KEYS)) {
                        var keysDetail = memberDetail[constants_1.Constants.KEYS];
                        for (let keyIndex = 0; keyIndex < keysDetail.length; keyIndex++) {
                            var keyDetail = keysDetail[keyIndex];
                            var keyName = keyDetail[constants_1.Constants.NAME];
                            var keyValue = null;
                            if (response.hasOwnProperty(keyName) && response[keyName] != null) {
                                keyValue = yield this.getData(response[keyName], keyDetail);
                                mapInstance.set(keyName, keyValue);
                            }
                        }
                    }
                }
            }
            return mapInstance;
        });
    }
    getCollectionsData(responses, memberDetail) {
        return __awaiter(this, void 0, void 0, function* () {
            var values = new Array();
            if (responses.length > 0) {
                if (memberDetail == null || (memberDetail != null && !memberDetail.hasOwnProperty(constants_1.Constants.STRUCTURE_NAME))) {
                    for (let response of responses) {
                        values.push(yield this.redirectorForJSONToObject(response));
                    }
                }
                else {
                    var pack = memberDetail[constants_1.Constants.STRUCTURE_NAME];
                    if (pack == constants_1.Constants.CHOICE_NAMESPACE) {
                        for (let response of responses) {
                            let choiceClass = (yield Promise.resolve().then(() => __importStar(require(constants_1.Constants.CHOICE_PATH)))).MasterModel;
                            let choiceInstance = new choiceClass(response);
                            values.push(choiceInstance);
                        }
                    }
                    else if (memberDetail.hasOwnProperty(constants_1.Constants.MODULE) && memberDetail[constants_1.Constants.MODULE] != null) {
                        for (let response of responses) {
                            values.push(yield this.isRecordResponse(response, yield this.getModuleDetailFromUserSpecJSON(memberDetail[constants_1.Constants.MODULE]), pack));
                        }
                    }
                    else {
                        for (let response of responses) {
                            values.push(yield this.getResponse(response, pack));
                        }
                    }
                }
            }
            return values;
        });
    }
    getModuleDetailFromUserSpecJSON(module) {
        return __awaiter(this, void 0, void 0, function* () {
            var moduleDetail = {};
            let initializer = yield initializer_1.Initializer.getInitializer();
            var recordFieldDetailsPath = path.join(initializer.getResourcePath(), constants_1.Constants.FIELD_DETAILS_DIRECTORY, yield converter_1.Converter.getEncodedFileName());
            moduleDetail = yield utility_1.Utility.getJSONObject(initializer_1.Initializer.getJSON(recordFieldDetailsPath), module);
            return moduleDetail;
        });
    }
    redirectorForJSONToObject(keyData) {
        return __awaiter(this, void 0, void 0, function* () {
            let type = Object.prototype.toString.call(keyData);
            if (type == constants_1.Constants.OBJECT_TYPE) {
                return yield this.getMapData(keyData, null);
            }
            else if (type == constants_1.Constants.ARRAY_TYPE) {
                return yield this.getCollectionsData(keyData, null);
            }
            else {
                return keyData;
            }
        });
    }
    findMatch(classes, responseJson) {
        let pack = "";
        let ratio = 0;
        for (let className of classes) {
            var matchRatio = this.findRatio(className, responseJson);
            if (matchRatio == 1.0) {
                pack = className;
                ratio = 1;
                break;
            }
            else if (matchRatio > ratio) {
                ratio = matchRatio;
                pack = className;
            }
        }
        return this.getResponse(responseJson, pack);
    }
    findRatio(className, responseJson) {
        var classDetail = initializer_1.Initializer.jsonDetails[className];
        var totalPoints = Array.from(Object.keys(classDetail)).length;
        var matches = 0;
        if (totalPoints == 0) {
            return 0;
        }
        else {
            for (let memberName in classDetail) {
                var memberDetail = classDetail[memberName];
                var keyName = memberDetail.hasOwnProperty(constants_1.Constants.NAME) ? memberDetail[constants_1.Constants.NAME] : null;
                if (keyName != null && responseJson.hasOwnProperty(keyName) && responseJson[keyName] != null) { // key not empty
                    var keyData = responseJson[keyName];
                    let type = Object.prototype.toString.call(keyData);
                    let structureName = memberDetail.hasOwnProperty(constants_1.Constants.STRUCTURE_NAME) ? memberDetail[constants_1.Constants.STRUCTURE_NAME] : null;
                    if (type == constants_1.Constants.OBJECT_TYPE) {
                        type = constants_1.Constants.MAP_TYPE;
                    }
                    if (constants_1.Constants.TYPE_VS_DATATYPE.has(memberDetail[constants_1.Constants.TYPE].toLowerCase()) && constants_1.Constants.TYPE_VS_DATATYPE.get(memberDetail[constants_1.Constants.TYPE].toLowerCase()) == type) {
                        matches++;
                    }
                    else if (memberDetail[constants_1.Constants.TYPE] == constants_1.Constants.CHOICE_NAMESPACE) {
                        let values = memberDetail[constants_1.Constants.VALUES];
                        for (let value in values) {
                            if (keyData == values[value]) {
                                matches++;
                                break;
                            }
                        }
                    }
                    if (structureName != null && structureName == memberDetail[constants_1.Constants.TYPE]) {
                        if (memberDetail.hasOwnProperty(constants_1.Constants.VALUES)) {
                            let values = memberDetail[constants_1.Constants.VALUES];
                            for (let value in values) {
                                if (keyData == values[value]) {
                                    matches++;
                                    break;
                                }
                            }
                        }
                        else {
                            matches++;
                        }
                    }
                }
            }
        }
        return matches / totalPoints;
    }
    buildName(memberName) {
        let name = memberName.split("_");
        var index = 0;
        if (name.length == 0) {
            index = 1;
        }
        var sdkName = name[0];
        sdkName = sdkName[0].toLowerCase() + sdkName.slice(1);
        index = 1;
        for (var nameIndex = index; nameIndex < name.length; nameIndex++) {
            var fieldName = name[nameIndex];
            var firstLetterUppercase = "";
            if (fieldName.length > 0) {
                firstLetterUppercase = fieldName[0].toUpperCase() + fieldName.slice(1);
            }
            sdkName = sdkName.concat(firstLetterUppercase);
        }
        return sdkName;
    }
}
exports.JSONConverter = JSONConverter;
//# sourceMappingURL=json_converter.js.map