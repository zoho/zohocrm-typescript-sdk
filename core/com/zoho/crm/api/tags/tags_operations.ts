import {Param} from "../../../../../../routes/param";
import {ParameterMap} from "../../../../../../routes/parameter_map";
import {ActionHandler} from "./action_handler";
import {BodyWrapper} from "./body_wrapper";
import {CountHandler} from "./count_handler";
import {MergeWrapper} from "./merge_wrapper";
import {RecordActionHandler} from "./record_action_handler";
import {ResponseHandler} from "./response_handler";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class TagsOperations{
	/**
	 * The method to get tags
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getTags(paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/settings/tags");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to create tags
	 * @param request An instance of BodyWrapper
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async createTags(request: BodyWrapper, paramInstance?: ParameterMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/settings/tags");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setParam(paramInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to update tags
	 * @param request An instance of BodyWrapper
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateTags(request: BodyWrapper, paramInstance?: ParameterMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/settings/tags");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setParam(paramInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to update tag
	 * @param id A bigint representing the id
	 * @param request An instance of BodyWrapper
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateTag(id: bigint, request: BodyWrapper, paramInstance?: ParameterMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/settings/tags/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setParam(paramInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to delete tag
	 * @param id A bigint representing the id
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deleteTag(id: bigint): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/settings/tags/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to merge tags
	 * @param id A bigint representing the id
	 * @param request An instance of MergeWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async mergeTags(id: bigint, request: MergeWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/settings/tags/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/merge");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to add tags to record
	 * @param recordId A bigint representing the recordId
	 * @param moduleAPIName A string representing the moduleAPIName
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<RecordActionHandler>
	 * @throws SDKException
	 */
	public async addTagsToRecord(recordId: bigint, moduleAPIName: string, paramInstance?: ParameterMap): Promise<APIResponse<RecordActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(recordId.toString());
		apiPath = apiPath.concat("/actions/add_tags");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setParam(paramInstance);
		let RecordActionHandler = require.resolve("./record_action_handler");
		return handlerInstance.apiCall<RecordActionHandler>(RecordActionHandler, "application/json");

	}

	/**
	 * The method to remove tags from record
	 * @param recordId A bigint representing the recordId
	 * @param moduleAPIName A string representing the moduleAPIName
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<RecordActionHandler>
	 * @throws SDKException
	 */
	public async removeTagsFromRecord(recordId: bigint, moduleAPIName: string, paramInstance?: ParameterMap): Promise<APIResponse<RecordActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(recordId.toString());
		apiPath = apiPath.concat("/actions/remove_tags");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setParam(paramInstance);
		let RecordActionHandler = require.resolve("./record_action_handler");
		return handlerInstance.apiCall<RecordActionHandler>(RecordActionHandler, "application/json");

	}

	/**
	 * The method to add tags to multiple records
	 * @param moduleAPIName A string representing the moduleAPIName
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<RecordActionHandler>
	 * @throws SDKException
	 */
	public async addTagsToMultipleRecords(moduleAPIName: string, paramInstance?: ParameterMap): Promise<APIResponse<RecordActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/actions/add_tags");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setParam(paramInstance);
		let RecordActionHandler = require.resolve("./record_action_handler");
		return handlerInstance.apiCall<RecordActionHandler>(RecordActionHandler, "application/json");

	}

	/**
	 * The method to remove tags from multiple records
	 * @param moduleAPIName A string representing the moduleAPIName
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<RecordActionHandler>
	 * @throws SDKException
	 */
	public async removeTagsFromMultipleRecords(moduleAPIName: string, paramInstance?: ParameterMap): Promise<APIResponse<RecordActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/actions/remove_tags");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setParam(paramInstance);
		let RecordActionHandler = require.resolve("./record_action_handler");
		return handlerInstance.apiCall<RecordActionHandler>(RecordActionHandler, "application/json");

	}

	/**
	 * The method to get record count for tag
	 * @param id A bigint representing the id
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<CountHandler>
	 * @throws SDKException
	 */
	public async getRecordCountForTag(id: bigint, paramInstance?: ParameterMap): Promise<APIResponse<CountHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/settings/tags/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/records_count");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		let CountHandler = require.resolve("./count_handler");
		return handlerInstance.apiCall<CountHandler>(CountHandler, "application/json");

	}

}
class GetTagsParam{

	public static MODULE: Param<string> = new Param<string>("module", "com.zoho.crm.api.Tags.GetTagsParam");
	public static MY_TAGS: Param<string> = new Param<string>("my_tags", "com.zoho.crm.api.Tags.GetTagsParam");
}

class CreateTagsParam{

	public static MODULE: Param<string> = new Param<string>("module", "com.zoho.crm.api.Tags.CreateTagsParam");
}

class UpdateTagsParam{

	public static MODULE: Param<string> = new Param<string>("module", "com.zoho.crm.api.Tags.UpdateTagsParam");
}

class UpdateTagParam{

	public static MODULE: Param<string> = new Param<string>("module", "com.zoho.crm.api.Tags.UpdateTagParam");
}

class AddTagsToRecordParam{

	public static TAG_NAMES: Param<string> = new Param<string>("tag_names", "com.zoho.crm.api.Tags.AddTagsToRecordParam");
	public static OVER_WRITE: Param<string> = new Param<string>("over_write", "com.zoho.crm.api.Tags.AddTagsToRecordParam");
}

class RemoveTagsFromRecordParam{

	public static TAG_NAMES: Param<string> = new Param<string>("tag_names", "com.zoho.crm.api.Tags.RemoveTagsFromRecordParam");
}

class AddTagsToMultipleRecordsParam{

	public static TAG_NAMES: Param<string> = new Param<string>("tag_names", "com.zoho.crm.api.Tags.AddTagsToMultipleRecordsParam");
	public static IDS: Param<bigint> = new Param<bigint>("ids", "com.zoho.crm.api.Tags.AddTagsToMultipleRecordsParam");
	public static OVER_WRITE: Param<string> = new Param<string>("over_write", "com.zoho.crm.api.Tags.AddTagsToMultipleRecordsParam");
}

class RemoveTagsFromMultipleRecordsParam{

	public static TAG_NAMES: Param<string> = new Param<string>("tag_names", "com.zoho.crm.api.Tags.RemoveTagsFromMultipleRecordsParam");
	public static IDS: Param<bigint> = new Param<bigint>("ids", "com.zoho.crm.api.Tags.RemoveTagsFromMultipleRecordsParam");
}

class GetRecordCountForTagParam{

	public static MODULE: Param<string> = new Param<string>("module", "com.zoho.crm.api.Tags.GetRecordCountForTagParam");
}

export {
	RemoveTagsFromMultipleRecordsParam as RemoveTagsFromMultipleRecordsParam,
	AddTagsToRecordParam as AddTagsToRecordParam,
	AddTagsToMultipleRecordsParam as AddTagsToMultipleRecordsParam,
	TagsOperations as MasterModel,
	TagsOperations as TagsOperations,
	RemoveTagsFromRecordParam as RemoveTagsFromRecordParam,
	GetRecordCountForTagParam as GetRecordCountForTagParam,
	UpdateTagsParam as UpdateTagsParam,
	UpdateTagParam as UpdateTagParam,
	GetTagsParam as GetTagsParam,
	CreateTagsParam as CreateTagsParam
}
