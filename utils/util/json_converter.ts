import { SDKException } from "../../core/com/zoho/crm/api/exception/sdk_exception";
import { FileDetails } from "../../core/com/zoho/crm/api/record/file_details";
import { Record } from "../../core/com/zoho/crm/api/record/record";
import { APIHTTPConnector } from "../../routes/controllers/api_http_connector";
import { Initializer } from "../../routes/initializer";
import { CommonAPIHandler } from "../../routes/middlewares/common_api_handler";
import { Constants } from "./constants";
import { Converter } from "./converter";
import {DataTypeConverter} from "./datatype_converter";
import * as path from "path";
import { Choice } from "./choice";
import { Utility } from "./utility";

/**
 * This class processes the API response to the object and an object to a JSON object, containing the request body.
 */
export class JSONConverter extends Converter {
    private uniqueValuesMap: Map<string,any[]> = new Map<string,any[]>();

    constructor(commonAPIHandler: CommonAPIHandler){
        super(commonAPIHandler)
    }

    public async appendToRequest(requestBase: object): Promise<any> {
		let request = requestBase as APIHTTPConnector;
		return JSON.stringify(request.getRequestBody(), (key, value) => typeof value === Constants.BIGINT_TYPE? value.toString() : value);
	}

    public async formRequest(requestInstance: object, pack: string, instanceNumber: number | null, classMemberDetail: object | null): Promise<object> {
        var classDetail = Initializer.jsonDetails[pack];
        if(classDetail.hasOwnProperty(Constants.INTERFACE) && classDetail[Constants.INTERFACE] === true) {
			var classes = classDetail[Constants.CLASSES];
			var baseName = pack.split('/').slice(0, -1);
			let className = await this.getFileName(requestInstance.constructor.name);
			baseName.push(className);
			let requestObjectClassName = baseName.join('/');
			for (let className in classes){
				if(classes[className].toLowerCase() == requestObjectClassName){
					classDetail = Initializer.jsonDetails[requestObjectClassName];
					break;
				}
			}
        }

        if(requestInstance instanceof Record){
            let moduleAPIName = this.commonAPIHandler.getModuleAPIName();
            let returnJSON = await this.isRecordRequest(requestInstance, classDetail, instanceNumber, classMemberDetail);
            this.commonAPIHandler.setModuleAPIName(moduleAPIName);
            return returnJSON;
        }
        else{
            return await this.isNotRecordRequest(requestInstance, classDetail, instanceNumber, classMemberDetail);
        }
    }

    private async isNotRecordRequest(requestInstance: any, classDetail: {[key: string]: any}, instanceNumber: number | null, classMemberDetail: {[key: string]: any} | null): Promise<object>{
        let requestJSON: {[key: string]: any} = {};
		let requiredKeys: Map<string,boolean> = new Map<string,boolean>();
		let primaryKeys: Map<string,boolean> = new Map<string,boolean>();
		let requiredInUpdateKeys = new Map();
		let lookUp: boolean = false;
		let skipMandatory: boolean = false;
        let classMemberName: string | null = null;
        if(classMemberDetail !== null){
            lookUp = (classMemberDetail.hasOwnProperty(Constants.LOOKUP) ? classMemberDetail[Constants.LOOKUP] : false);
			skipMandatory = (classMemberDetail.hasOwnProperty(Constants.SKIP_MANDATORY) ? classMemberDetail[Constants.SKIP_MANDATORY] : false);
			classMemberName = this.buildName(classMemberDetail[Constants.NAME]);
        }
        for(let memberName in classDetail){
            let modification: any = null;
			let memberDetail: {[key: string]: any}  = classDetail[memberName];
			if ((memberDetail.hasOwnProperty(Constants.READ_ONLY) && memberDetail[Constants.READ_ONLY] == 'true') || !memberDetail.hasOwnProperty(Constants.NAME)){
				continue;
            }
            let keyName: string = memberDetail[Constants.NAME];
            try{
				modification = requestInstance.isKeyModified(memberDetail[Constants.NAME]);
			}
			catch(e){
				throw new SDKException(Constants.EXCEPTION_IS_KEY_MODIFIED, null, null, e);
            }
            if(memberDetail.hasOwnProperty(Constants.REQUIRED) && memberDetail[Constants.REQUIRED] == true) {
				requiredKeys.set(keyName, true);
			}
			if(memberDetail.hasOwnProperty(Constants.REQUIRED_IN_UPDATE) && memberDetail[Constants.REQUIRED_IN_UPDATE] == true) {
				requiredInUpdateKeys.set(keyName, true);
			}
			if(memberDetail.hasOwnProperty(Constants.PRIMARY) && memberDetail[Constants.PRIMARY] == true && (!memberDetail.hasOwnProperty(Constants.REQUIRED_IN_UPDATE) || memberDetail[Constants.REQUIRED_IN_UPDATE] == true)) {
				primaryKeys.set(keyName, true);
            }
            let fieldValue = null
            if(modification != null && modification !== undefined && modification != 0){
                fieldValue = Reflect.get(requestInstance, memberName);
                if(await this.valueChecker(requestInstance.constructor.name, memberName, memberDetail, fieldValue, this.uniqueValuesMap, instanceNumber)) {
                    if(fieldValue != null) {
						requiredKeys.delete(keyName);
						primaryKeys.delete(keyName);
						requiredInUpdateKeys.delete(keyName);
                    }
                    if(requestInstance instanceof FileDetails) {
						requestJSON[keyName.toLowerCase()] = fieldValue != null ? fieldValue : null;
					}
					else {
						requestJSON[keyName] = await this.setData(memberDetail, fieldValue)
					}
                }
            }
        }

        if(skipMandatory || this.checkException(classMemberName, requestInstance, instanceNumber, lookUp, requiredKeys, primaryKeys, requiredInUpdateKeys))
		{
			return requestJSON;
		}
		return requestJSON;
    }

    checkException(memberName: string | null, requestInstance: any, instanceNumber: number | null, lookUp: boolean, requiredKeys: Map<string,boolean>, primaryKeys:Map<string,boolean>, requiredInUpdateKeys:Map<string,boolean>) {
		if(requiredInUpdateKeys.size > 0 && this.commonAPIHandler.getCategoryMethod().toUpperCase() == Constants.REQUEST_CATEGORY_UPDATE) {
			let error: {[key: string]: any}= {};
			error.field = memberName;
			error.type = requestInstance.constructor.name;
			error.keys = Array.from(requiredInUpdateKeys.keys()).toString();
			if(instanceNumber != null) {
				error.instance_number = instanceNumber;
			}
			throw new SDKException(Constants.MANDATORY_VALUE_ERROR, Constants.MANDATORY_KEY_ERROR, error);
		}

		if(this.commonAPIHandler.getMandatoryChecker() != null && this.commonAPIHandler.getMandatoryChecker()) {
			if(this.commonAPIHandler.getCategoryMethod().toUpperCase() == Constants.REQUEST_CATEGORY_CREATE) {
				if(lookUp) {
					if(primaryKeys.size > 0) {
						let error: {[key: string]: any} = {};
						error.field = memberName;
						error.type = requestInstance.constructor.name;
						error.keys = Array.from(primaryKeys.keys()).toString();
						if(instanceNumber != null) {
							error.instance_number = instanceNumber;
						}
						throw new SDKException(Constants.MANDATORY_VALUE_ERROR, Constants.PRIMARY_KEY_ERROR, error);
					}
				}
				else if(requiredKeys.size > 0) {
					let error: {[key: string]: any} = {};
					error.field = memberName;
					error.type = requestInstance.constructor.name;
					error.keys = Array.from(requiredKeys.keys()).toString();
					if(instanceNumber != null) {
						error.instance_number = instanceNumber;
					}
					throw new SDKException(Constants.MANDATORY_VALUE_ERROR, Constants.MANDATORY_KEY_ERROR, error);
				}
			}

			if(this.commonAPIHandler.getCategoryMethod().toUpperCase() == Constants.REQUEST_CATEGORY_UPDATE && primaryKeys.size > 0) {
				let error: {[key: string]: any} = {};
				error.field = memberName;
				error.type = requestInstance.constructor.name;
				error.keys = Array.from(primaryKeys.keys()).toString();
				if(instanceNumber != null) {
					error.instance_number = instanceNumber;
				}
				throw new SDKException(Constants.MANDATORY_VALUE_ERROR, Constants.PRIMARY_KEY_ERROR, error);
			}
		}
		else if(lookUp && this.commonAPIHandler.getCategoryMethod().toUpperCase() == Constants.REQUEST_CATEGORY_UPDATE) {
			if(primaryKeys.size > 0) {
				let error: {[key: string]: any} = {};
				error.field = memberName;
				error.type = requestInstance.constructor.name;
				error.keys = Array.from(primaryKeys.keys()).toString();
				if(instanceNumber != null) {
					error.instance_number = instanceNumber;
				}
				throw new SDKException(Constants.MANDATORY_VALUE_ERROR, Constants.PRIMARY_KEY_ERROR, error);
			}
		}

		return true;
    }

    // isRecordRequest
    private async isRecordRequest(recordInstance: any, classDetail: {[key: string]: any}, instanceNumber: number | null, classMemberDetail: {[key: string]: any} | null): Promise<any> {
        var requestJSON: {[key: string]: any} = {};
		var moduleDetail: {[key: string]: any} = {};
		var lookUp: boolean = false;
		var skipMandatory: boolean = false;
        var classMemberName: string | null = null;
        if(classMemberDetail != null) {
			lookUp = (classMemberDetail.hasOwnProperty(Constants.LOOKUP) ? classMemberDetail[Constants.LOOKUP] : false);
			skipMandatory = (classMemberDetail.hasOwnProperty(Constants.SKIP_MANDATORY) ? classMemberDetail[Constants.SKIP_MANDATORY] : false);
			classMemberName = classMemberDetail[Constants.NAME];
        }
        let moduleAPIName = this.commonAPIHandler.getModuleAPIName();
        if(moduleAPIName !== null){
            this.commonAPIHandler.setModuleAPIName(null);
            var fullDetail = await Utility.searchJSONDetails(moduleAPIName);
			if(fullDetail != null) {
				moduleDetail = fullDetail[Constants.MODULEDETAILS];
			}
			else {
				moduleDetail = await this.getModuleDetailFromUserSpecJSON(moduleAPIName);
			}
        }
        else{
            moduleDetail = classDetail;
			classDetail = Initializer.jsonDetails[Constants.RECORD_NAMESPACE];
        }
        let keyValues: Map<string,any> = new Map<string,any>();
		let uniqueValues: Map<string,any[]> = new Map<string,any[]>();
		keyValues = Reflect.get(recordInstance, Constants.KEY_VALUES);
		let keyModified: Map<string,number> = new Map<string,number>();
		keyModified = Reflect.get(recordInstance, Constants.KEY_MODIFIED);
		let requiredKeys: Map<string,boolean> = new Map<string,boolean>();
        let primaryKeys: Map<string,boolean> = new Map<string,boolean>();
        if(!skipMandatory){
            for (let keyName of Object.keys(moduleDetail)) {
				const keyDetail = moduleDetail[keyName];
				let name = keyDetail[Constants.NAME];
				if(keyDetail.hasOwnProperty(Constants.REQUIRED) && keyDetail[Constants.REQUIRED] == true) {
					requiredKeys.set(name, true);
				}

				if(keyDetail.hasOwnProperty(Constants.PRIMARY) && keyDetail[Constants.PRIMARY] == true) {
					primaryKeys.set(name, true);
				}
            }
            for (let keyName of Object.keys(classDetail)) {
				const keyDetail = classDetail[keyName];
				let name = keyDetail[Constants.NAME];
				if(keyDetail.hasOwnProperty(Constants.REQUIRED) && keyDetail[Constants.REQUIRED] == true) {
					requiredKeys.set(name, true);
				}
				if(keyDetail.hasOwnProperty(Constants.PRIMARY) && keyDetail[Constants.PRIMARY] == true) {
					primaryKeys.set(name, true);
				}
			}
        }

        for(let keyName of Array.from(keyModified.keys())) {
            if(keyModified.get(keyName) != 1) {
				continue;
			}
			let keyDetail: {[key:string]: any} = {};
			let keyValue: any = keyValues.has(keyName) ? keyValues.get(keyName) : null;
			let jsonValue = null;
            let memberName: string = this.buildName(keyName);
            if(Object.keys(moduleDetail).length > 0 && (moduleDetail.hasOwnProperty(keyName) || moduleDetail.hasOwnProperty(memberName))) {
				if(moduleDetail.hasOwnProperty(keyName)) {
					keyDetail = moduleDetail[keyName];
				}
				else {
					keyDetail = moduleDetail[memberName];
				}
			}
			else if(classDetail.hasOwnProperty(memberName)) {
				keyDetail = classDetail[memberName];
			}

			if(Object.keys(keyDetail).length > 0) {
				if ((keyDetail.hasOwnProperty(Constants.READ_ONLY) && keyDetail[Constants.READ_ONLY] == 'true') || !keyDetail.hasOwnProperty(Constants.NAME)){
					continue;
				}
				if(await this.valueChecker(recordInstance.constructor.name, keyName, keyDetail, keyValue, uniqueValues, instanceNumber)){
					jsonValue = await this.setData(keyDetail, keyValue);
				}
			}
			else {
				jsonValue = await this.redirectorForObjectToJSON(keyValue);
            }
            if(keyValue != null) {
				requiredKeys.delete(keyName);
				primaryKeys.delete(keyName);
			}
			requestJSON[keyName] = jsonValue;
        }
        if(skipMandatory || this.checkException(classMemberName, recordInstance, instanceNumber, lookUp, requiredKeys, primaryKeys, new Map())){
			return requestJSON;
		}
    }

    // setData
    private async setData(memberDetail: {[key: string]: any}, fieldValue: any): Promise<any> {
		if(fieldValue != null) {
			let type = memberDetail[Constants.TYPE].toString();

			if(type.toLowerCase() == Constants.LIST_NAMESPACE.toLowerCase()) {
				return await this.setJSONArray(fieldValue, memberDetail);
			}
			else if(type.toLowerCase() == Constants.MAP_NAMESPACE.toLowerCase()) {
				return await this.setJSONObject(fieldValue, memberDetail);
			}
			else if(type == Constants.CHOICE_NAMESPACE || (memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME) && memberDetail[Constants.STRUCTURE_NAME] == Constants.CHOICE_NAMESPACE)) {
				return ((fieldValue as Choice<any>).getValue());
			}
			else if(memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME) && memberDetail.hasOwnProperty(Constants.MODULE)) {
				return await this.isRecordRequest(fieldValue, await this.getModuleDetailFromUserSpecJSON(memberDetail[Constants.MODULE]), null, memberDetail);
			}
			else if(memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME)) {
				return await this.formRequest(fieldValue, memberDetail[Constants.STRUCTURE_NAME], null, memberDetail);
			}
			else {
				return DataTypeConverter.postConvert(fieldValue, type);
			}
		}
		return null;
	}

    private async setJSONObject(fieldValue: any, memberDetail: {[key: string]: any} | null): Promise<object>{
        let jsonObject: {[key: string]: any} = {};
        let requestObject: Map<string, any> = fieldValue;

        if(Array.from(requestObject.keys()).length > 0){
            if (memberDetail == null || (memberDetail != null && !memberDetail.hasOwnProperty(Constants.KEYS))){
				for (let key of Array.from(requestObject.keys())){
					jsonObject[key] = await this.redirectorForObjectToJSON(requestObject.get(key));
				}
            }
            else{
                if(memberDetail !== null && memberDetail.hasOwnProperty(Constants.KEYS)) {
                    var keysDetail = memberDetail[Constants.KEYS];
                    for (let keyIndex = 0; keyIndex < keysDetail.length; keyIndex++) {
                        let keyDetail = keysDetail[keyIndex];
                        let keyName = keyDetail[Constants.NAME];
                        let keyValue = null;
                        if (requestObject.has(keyName) && requestObject.get(keyName) != null){
                            keyValue = await this.setData(keyDetail, requestObject.get(keyName));
                            jsonObject[keyName] = keyValue;
                        }
                    }
                }
            }
        }
        return jsonObject;
    }

    private async setJSONArray(fieldValue: any, memberDetail: {[key: string]: any} | null): Promise<any[]> {
        let jsonArray: any[] = [];
        let requestObjects: Array<any> = fieldValue;

        if(requestObjects.length > 0){
            if (memberDetail == null || (memberDetail != null && !memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME))) {
				for (let request of requestObjects) {
					jsonArray.push(await this.redirectorForObjectToJSON(request));
				}
            }
            else{
				let pack = memberDetail[Constants.STRUCTURE_NAME].toString();
				if(pack == Constants.CHOICE_NAMESPACE) {
					for(let request of requestObjects) {
						jsonArray.push(request.value);
					}
				}
				else if(memberDetail.hasOwnProperty(Constants.MODULE) && memberDetail[Constants.MODULE] != null) {
					let instanceCount = 0;
					for(let request of requestObjects) {
						jsonArray.push(await this.isRecordRequest(request, await this.getModuleDetailFromUserSpecJSON(memberDetail[Constants.MODULE]), instanceCount++, memberDetail));
					}
				}
				else {
					let instanceCount = 0;
					for (let request of requestObjects) {
						jsonArray.push(await this.formRequest(request, pack, instanceCount++, memberDetail));
					}
				}
			}
        }
        return jsonArray;
    }

    private async redirectorForObjectToJSON(request: any): Promise<any>{
		if (Array.isArray(request)) {
			return await this.setJSONArray(request, null);
		}
		else if (request instanceof Map) {
			return await this.setJSONObject(request, null);
		}
		else {
			return request;
		}
    }

    public async getWrappedResponse(response: any, pack: string): Promise<object | null>{
        if(response.body.length != 0){
			var responseJson = JSON.parse(response.body);
			return await this.getResponse(responseJson, pack);
		}
		return null;
    }

    public async getResponse(response: any, pack: string): Promise<object | null> {
        if (response === null || response === "" || response.length == 0){
			return null;
        }
        var responseJson: any = response;
		var classDetail: {[key:string]: any} = Initializer.jsonDetails[pack];
        var instance: any = null;
        if (classDetail.hasOwnProperty(Constants.INTERFACE) && classDetail[Constants.INTERFACE]){
			let classes = classDetail[Constants.CLASSES];
			instance = await this.findMatch(classes, responseJson);
        }
        else{
			let ClassName = (await import("../../".concat(pack))).MasterModel;
			instance = new ClassName();
			if(instance instanceof Record) {
				let moduleAPIName: string | null = this.commonAPIHandler.getModuleAPIName();
				instance = await this.isRecordResponse(responseJson, classDetail, pack);
				this.commonAPIHandler.setModuleAPIName(moduleAPIName);
			}
			else {
				instance = await this.notRecordResponse(instance, responseJson, classDetail);
			}
        }
        return instance;
    }

    private async notRecordResponse(instance: any, responseJson: any, classDetail: {[key:string]: any}): Promise<any>{
        for(let memberName in classDetail){
			let keyDetail: {[key:string]: any} = classDetail[memberName];
			let keyName: string = keyDetail.hasOwnProperty(Constants.NAME) ? keyDetail[Constants.NAME] : null;
			if(keyName != null && responseJson.hasOwnProperty(keyName)) {
				let keyData = responseJson[keyName];
				let memberValue = await this.getData(keyData, keyDetail);
				Reflect.set(instance, memberName, memberValue);
			}
		}
		return instance;
    }

    private async isRecordResponse(responseJson: any, classDetail: {[key:string]: any}, pack: string): Promise<any> {
        let className = (await import("../../" + pack)).MasterModel;
		let recordInstance = new className();
		let moduleAPIName: string | null = this.commonAPIHandler.getModuleAPIName();
        let moduleDetail: {[key:string]: any} = {};
        if(moduleAPIName != null){
			this.commonAPIHandler.setModuleAPIName(null);
			let fullDetail = await Utility.searchJSONDetails(moduleAPIName);
			if(fullDetail != null){
				moduleDetail = fullDetail[Constants.MODULEDETAILS];
				let moduleClassName = (await import("../../" + fullDetail[Constants.MODULEPACKAGENAME])).MasterModel;
				recordInstance = new moduleClassName();
			}
			else{
				moduleDetail = await this.getModuleDetailFromUserSpecJSON(moduleAPIName);
			}
        }
        for(let key in classDetail) {
			moduleDetail[key] = classDetail[key];
        }
        var recordDetail: {[key:string]: any} = Initializer.jsonDetails[Constants.RECORD_NAMESPACE];
        var keyValues: Map<string,any> = new Map<string,any>();
        for(let keyName in responseJson) {
            let memberName: string = this.buildName(keyName);
			let keyDetail: {[key:string]: any} = {};
			if(Object.keys(moduleDetail).length > 0 && (moduleDetail.hasOwnProperty(keyName) || moduleDetail.hasOwnProperty(memberName))) {
				if(moduleDetail.hasOwnProperty(keyName)) {
					keyDetail = moduleDetail[keyName];
				}
				else {
					keyDetail = moduleDetail[memberName];
				}
			}
			else if(recordDetail.hasOwnProperty(memberName)) {
				keyDetail = recordDetail[memberName];
            }
            let keyValue = null;
			let keyData = responseJson[keyName];
			if(Object.keys(keyDetail).length > 0) {
				keyName = keyDetail[Constants.NAME];
				keyValue = await this.getData(keyData, keyDetail);
			}
			else {
				keyValue = await this.redirectorForJSONToObject(keyData);
            }
            keyValues.set(keyName, keyValue);
        }
        Reflect.set(recordInstance, Constants.KEY_VALUES, keyValues);
		return recordInstance;
    }

    private async getData(keyData: any, memberDetail: {[key:string]: any}): Promise<any> {
		let memberValue: any = null;
		if(keyData !== null) {
			let type = memberDetail[Constants.TYPE].toString();
			if(type.toLowerCase() == Constants.LIST_NAMESPACE.toLowerCase()) {
				memberValue = await this.getCollectionsData(keyData, memberDetail);
			}
			else if(type.toLowerCase() == Constants.MAP_NAMESPACE.toLowerCase()) {
				memberValue = await this.getMapData(keyData, memberDetail);
			}
			else if(type == Constants.CHOICE_NAMESPACE || (memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME) && memberDetail[Constants.STRUCTURE_NAME] == Constants.CHOICE_NAMESPACE)) {
				let Choice = (await import(Constants.CHOICE_PATH)).MasterModel;
				memberValue = new Choice(keyData);
			}
			else if(memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME) && memberDetail.hasOwnProperty(Constants.MODULE)) {
				memberValue = await this.isRecordResponse(keyData, await this.getModuleDetailFromUserSpecJSON(memberDetail[Constants.MODULE]), memberDetail[Constants.STRUCTURE_NAME]);
			}
			else if(memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME)) {
				memberValue = await this.getResponse(keyData, memberDetail[Constants.STRUCTURE_NAME]);
			}
			else {
				memberValue = await DataTypeConverter.preConvert(keyData, type);
			}
		}
		return memberValue;
    }

    private async getMapData(response: any, memberDetail: {[key:string]: any} | null): Promise<Map<string, any>> {
        var mapInstance: Map<string,any> = new Map<string,any>();
        if(Object.keys(response).length > 0) {
            if (memberDetail == null || (memberDetail != null && !memberDetail.hasOwnProperty(Constants.KEYS))) {
				for (let key in response) {
					mapInstance.set(key, await this.redirectorForJSONToObject(response[key]));
				}
            }
            else {
				if(memberDetail.hasOwnProperty(Constants.KEYS)) {
					var keysDetail: {[key:string]: any} = memberDetail[Constants.KEYS];
					for (let keyIndex = 0; keyIndex < keysDetail.length; keyIndex++) {
						var keyDetail: {[key:string]: any} = keysDetail[keyIndex];
						var keyName: string = keyDetail[Constants.NAME];
						var keyValue: any = null;
						if (response.hasOwnProperty(keyName) && response[keyName] != null) {
							keyValue = await this.getData(response[keyName], keyDetail);
							mapInstance.set(keyName, keyValue);
						}
					}
				}
			}
        }

        return mapInstance;
    }

    private async getCollectionsData(responses: any[], memberDetail: {[key:string]: any} | null): Promise<any[]> {
        var values: Array<any> = new Array<any>();
        if(responses.length > 0) {
			if (memberDetail == null || (memberDetail != null && !memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME))) {
				for (let response of responses) {
					values.push(await this.redirectorForJSONToObject(response));
				}
            }
            else {
				var pack = memberDetail[Constants.STRUCTURE_NAME];
				if(pack == Constants.CHOICE_NAMESPACE){
					for (let response of responses) {
						let choiceClass = (await import(Constants.CHOICE_PATH)).MasterModel;
						let choiceInstance = new choiceClass(response);
						values.push(choiceInstance);
					}
				}
				else if(memberDetail.hasOwnProperty(Constants.MODULE) && memberDetail[Constants.MODULE] != null) {
					for(let response of responses) {
						values.push(await this.isRecordResponse(response, await this.getModuleDetailFromUserSpecJSON(memberDetail[Constants.MODULE]), pack));
					}
				}
				else{
					for(let response of responses) {
						values.push(await this.getResponse(response, pack));
					}
				}
			}
        }
        return values;
    }

    private async getModuleDetailFromUserSpecJSON(module: string) {
		var moduleDetail = {};
		let initializer = await Initializer.getInitializer();
		var recordFieldDetailsPath = path.join(initializer.getResourcePath(), Constants.FIELD_DETAILS_DIRECTORY, await Converter.getEncodedFileName());
		moduleDetail = await Utility.getJSONObject(Initializer.getJSON(recordFieldDetailsPath), module);
		return moduleDetail;
    }

    private async redirectorForJSONToObject(keyData: any): Promise<any> {
		let type = Object.prototype.toString.call(keyData);
		if (type == Constants.OBJECT_TYPE) {
			return await this.getMapData(keyData, null);
		}
		else if (type == Constants.ARRAY_TYPE) {
			return await this.getCollectionsData(keyData, null);
		}
		else {
			return keyData;
		}
	}

    private findMatch(classes: string[], responseJson: any) {
		let pack = "";
		let ratio = 0;
		for(let className of classes) {
			var matchRatio: number = this.findRatio(className, responseJson);
			if(matchRatio == 1.0) {
				pack = className;
				ratio = 1;
				break;
			}
			else if(matchRatio > ratio) {
				ratio = matchRatio;
				pack = className;
			}
		}

		return this.getResponse(responseJson, pack);
    }

    private findRatio(className: string, responseJson: any): number {
		var classDetail: {[key:string]: any} = Initializer.jsonDetails[className];
		var totalPoints: number = Array.from(Object.keys(classDetail)).length;
		var matches = 0;
		if (totalPoints == 0) {
			return 0;
		}
		else {
			for (let memberName in classDetail) {
				var memberDetail = classDetail[memberName];
				var keyName = memberDetail.hasOwnProperty(Constants.NAME) ? memberDetail[Constants.NAME] : null;
				if (keyName != null && responseJson.hasOwnProperty(keyName) && responseJson[keyName] != null) {// key not empty
					var keyData = responseJson[keyName];
					let type = Object.prototype.toString.call(keyData);
					let structureName = memberDetail.hasOwnProperty(Constants.STRUCTURE_NAME) ? memberDetail[Constants.STRUCTURE_NAME] : null;
					if (type == Constants.OBJECT_TYPE) {
						type = Constants.MAP_TYPE;
					}
					if(Constants.TYPE_VS_DATATYPE.has(memberDetail[Constants.TYPE].toLowerCase()) && Constants.TYPE_VS_DATATYPE.get(memberDetail[Constants.TYPE].toLowerCase()) == type){
						matches++;
					}
					else if(memberDetail[Constants.TYPE] == Constants.CHOICE_NAMESPACE){
						let values = memberDetail[Constants.VALUES];
						for(let value in values) {
							if(keyData == values[value]) {
								matches++;
								break;
							}
						}
					}

					if(structureName != null && structureName == memberDetail[Constants.TYPE]){
						if(memberDetail.hasOwnProperty(Constants.VALUES)){
							let values = memberDetail[Constants.VALUES];
							for(let value in values){
								if(keyData == values[value]){
									matches++;
									break;
								}
							}
						}
						else{
							matches++;
						}
					}
				}
			}
		}

		return matches / totalPoints;
	}

    private buildName(memberName: string): string{
		let name = memberName.split("_");
		var index = 0;
		if (name.length == 0){
			index = 1;
		}
		var sdkName = name[0]
		sdkName = sdkName[0].toLowerCase() +  sdkName.slice(1);
		index = 1;
		for (var nameIndex = index; nameIndex < name.length; nameIndex++){
			var fieldName = name[nameIndex];
			var firstLetterUppercase = "";
			if(fieldName.length > 0){
				firstLetterUppercase = fieldName[0].toUpperCase() +  fieldName.slice(1);
			}
			sdkName = sdkName.concat(firstLetterUppercase);
		}

		return sdkName;
	}
}