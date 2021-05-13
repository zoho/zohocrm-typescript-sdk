import {Header} from "../../../../../../routes/header";
import {HeaderMap} from "../../../../../../routes/header_map";
import {Param} from "../../../../../../routes/param";
import {ParameterMap} from "../../../../../../routes/parameter_map";
import {ActionHandler} from "./action_handler";
import {BodyWrapper} from "./body_wrapper";
import {ResponseHandler} from "./response_handler";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import {Utility} from "../../../../../../utils/util/utility";
import { Constants } from "../../../../../../utils/util/constants";

class RelatedRecordsOperations{

	private moduleAPIName: string;
	private recordId: bigint;
	private relatedListAPIName: string;
	/**
	 * Creates an instance of RelatedRecordsOperations with the given parameters
	 * @param relatedListAPIName A string representing the relatedListAPIName
	 * @param recordId A bigint representing the recordId
	 * @param moduleAPIName A string representing the moduleAPIName
	 */
	constructor(relatedListAPIName: string, recordId: bigint, moduleAPIName: string){
		this.relatedListAPIName = relatedListAPIName;
		this.recordId = recordId;
		this.moduleAPIName = moduleAPIName;

	}

	/**
	 * The method to get related records
	 * @param paramInstance An instance of ParameterMap
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getRelatedRecords(paramInstance?: ParameterMap, headerInstance?: HeaderMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.recordId.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to update related records
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateRelatedRecords(request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.recordId.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to delink records
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async delinkRecords(paramInstance?: ParameterMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.recordId.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setParam(paramInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to get related record
	 * @param relatedRecordId A bigint representing the relatedRecordId
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getRelatedRecord(relatedRecordId: bigint, headerInstance?: HeaderMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.recordId.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(relatedRecordId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setHeader(headerInstance);
		await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to update related record
	 * @param relatedRecordId A bigint representing the relatedRecordId
	 * @param request An instance of BodyWrapper
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateRelatedRecord(relatedRecordId: bigint, request: BodyWrapper, headerInstance?: HeaderMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.recordId.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(relatedRecordId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setHeader(headerInstance);
		await Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to delink record
	 * @param relatedRecordId A bigint representing the relatedRecordId
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async delinkRecord(relatedRecordId: bigint, headerInstance?: HeaderMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.recordId.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.relatedListAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(relatedRecordId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setHeader(headerInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

}
class GetRelatedRecordsParam{

	public static PAGE: Param<number> = new Param<number>("page", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsParam");
	public static PER_PAGE: Param<number> = new Param<number>("per_page", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsParam");
}

class GetRelatedRecordsHeader{

	public static IF_MODIFIED_SINCE: Header<Date> = new Header<Date>("If-Modified-Since", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsHeader");
	public static X_EXTERNAL: Header<string> = new Header<string>("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsHeader");
}

class DelinkRecordsParam{

	public static IDS: Param<bigint> = new Param<bigint>("ids", "com.zoho.crm.api.RelatedRecords.DelinkRecordsParam");
}

class GetRelatedRecordHeader{

	public static IF_MODIFIED_SINCE: Header<Date> = new Header<Date>("If-Modified-Since", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordHeader");
}

class UpdateRelatedRecordHeader{

	public static X_EXTERNAL: Header<string> = new Header<string>("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.UpdateRelatedRecordHeader");
}

class DelinkRecordHeader{

	public static X_EXTERNAL: Header<string> = new Header<string>("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.DelinkRecordHeader");
}

export {
	GetRelatedRecordHeader as GetRelatedRecordHeader,
	RelatedRecordsOperations as MasterModel,
	RelatedRecordsOperations as RelatedRecordsOperations,
	DelinkRecordHeader as DelinkRecordHeader,
	UpdateRelatedRecordHeader as UpdateRelatedRecordHeader,
	GetRelatedRecordsParam as GetRelatedRecordsParam,
	GetRelatedRecordsHeader as GetRelatedRecordsHeader,
	DelinkRecordsParam as DelinkRecordsParam
}
