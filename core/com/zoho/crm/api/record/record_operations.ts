import {Header} from "../../../../../../routes/header";
import {HeaderMap} from "../../../../../../routes/header_map";
import {Param} from "../../../../../../routes/param";
import {ParameterMap} from "../../../../../../routes/parameter_map";
import {ActionHandler} from "./action_handler";
import {BodyWrapper} from "./body_wrapper";
import {ConvertActionHandler} from "./convert_action_handler";
import {ConvertBodyWrapper} from "./convert_body_wrapper";
import {DeletedRecordsHandler} from "./deleted_records_handler";
import {DownloadHandler} from "./download_handler";
import {FileBodyWrapper} from "./file_body_wrapper";
import {FileHandler} from "./file_handler";
import {MassUpdateActionHandler} from "./mass_update_action_handler";
import {MassUpdateBodyWrapper} from "./mass_update_body_wrapper";
import {MassUpdateResponseHandler} from "./mass_update_response_handler";
import {ResponseHandler} from "./response_handler";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import {Utility} from "../../../../../../utils/util/utility";
import { Constants } from "../../../../../../utils/util/constants";

class RecordOperations{
	/**
	 * The method to get record
	 * @param id A bigint representing the id
	 * @param moduleAPIName A string representing the moduleAPIName
	 * @param paramInstance An instance of ParameterMap
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getRecord(id: bigint, moduleAPIName: string, paramInstance?: ParameterMap, headerInstance?: HeaderMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		await Utility.getFields(moduleAPIName);
		handlerInstance.setModuleAPIName(moduleAPIName);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to update record
	 * @param id A bigint representing the id
	 * @param moduleAPIName A string representing the moduleAPIName
	 * @param request An instance of BodyWrapper
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateRecord(id: bigint, moduleAPIName: string, request: BodyWrapper, headerInstance?: HeaderMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setHeader(headerInstance);
		await Utility.getFields(moduleAPIName);
		handlerInstance.setModuleAPIName(moduleAPIName);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to delete record
	 * @param id A bigint representing the id
	 * @param moduleAPIName A string representing the moduleAPIName
	 * @param paramInstance An instance of ParameterMap
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deleteRecord(id: bigint, moduleAPIName: string, paramInstance?: ParameterMap, headerInstance?: HeaderMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to get records
	 * @param moduleAPIName A string representing the moduleAPIName
	 * @param paramInstance An instance of ParameterMap
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getRecords(moduleAPIName: string, paramInstance?: ParameterMap, headerInstance?: HeaderMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		await Utility.getFields(moduleAPIName);
		handlerInstance.setModuleAPIName(moduleAPIName);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to create records
	 * @param moduleAPIName A string representing the moduleAPIName
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async createRecords(moduleAPIName: string, request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await Utility.getFields(moduleAPIName);
		handlerInstance.setModuleAPIName(moduleAPIName);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to update records
	 * @param moduleAPIName A string representing the moduleAPIName
	 * @param request An instance of BodyWrapper
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updateRecords(moduleAPIName: string, request: BodyWrapper, headerInstance?: HeaderMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		handlerInstance.setHeader(headerInstance);
		await Utility.getFields(moduleAPIName);
		handlerInstance.setModuleAPIName(moduleAPIName);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to delete records
	 * @param moduleAPIName A string representing the moduleAPIName
	 * @param paramInstance An instance of ParameterMap
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async deleteRecords(moduleAPIName: string, paramInstance?: ParameterMap, headerInstance?: HeaderMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to upsert records
	 * @param moduleAPIName A string representing the moduleAPIName
	 * @param request An instance of BodyWrapper
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async upsertRecords(moduleAPIName: string, request: BodyWrapper, headerInstance?: HeaderMap): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/upsert");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_ACTION);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setHeader(headerInstance);
		await Utility.getFields(moduleAPIName);
		handlerInstance.setModuleAPIName(moduleAPIName);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to get deleted records
	 * @param moduleAPIName A string representing the moduleAPIName
	 * @param paramInstance An instance of ParameterMap
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<DeletedRecordsHandler>
	 * @throws SDKException
	 */
	public async getDeletedRecords(moduleAPIName: string, paramInstance?: ParameterMap, headerInstance?: HeaderMap): Promise<APIResponse<DeletedRecordsHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/deleted");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		let DeletedRecordsHandler = require.resolve("./deleted_records_handler");
		return handlerInstance.apiCall<DeletedRecordsHandler>(DeletedRecordsHandler, "application/json");

	}

	/**
	 * The method to search records
	 * @param moduleAPIName A string representing the moduleAPIName
	 * @param paramInstance An instance of ParameterMap
	 * @param headerInstance An instance of HeaderMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async searchRecords(moduleAPIName: string, paramInstance?: ParameterMap, headerInstance?: HeaderMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/search");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		handlerInstance.setHeader(headerInstance);
		await Utility.getFields(moduleAPIName);
		handlerInstance.setModuleAPIName(moduleAPIName);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to convert lead
	 * @param id A bigint representing the id
	 * @param request An instance of ConvertBodyWrapper
	 * @returns An instance of APIResponse<ConvertActionHandler>
	 * @throws SDKException
	 */
	public async convertLead(id: bigint, request: ConvertBodyWrapper): Promise<APIResponse<ConvertActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/Leads/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/actions/convert");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await Utility.getFields("Deals");
		let ConvertActionHandler = require.resolve("./convert_action_handler");
		return handlerInstance.apiCall<ConvertActionHandler>(ConvertActionHandler, "application/json");

	}

	/**
	 * The method to get photo
	 * @param id A bigint representing the id
	 * @param moduleAPIName A string representing the moduleAPIName
	 * @returns An instance of APIResponse<DownloadHandler>
	 * @throws SDKException
	 */
	public async getPhoto(id: bigint, moduleAPIName: string): Promise<APIResponse<DownloadHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/photo");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		let DownloadHandler = require.resolve("./download_handler");
		return handlerInstance.apiCall<DownloadHandler>(DownloadHandler, "application/x-download");

	}

	/**
	 * The method to upload photo
	 * @param id A bigint representing the id
	 * @param moduleAPIName A string representing the moduleAPIName
	 * @param request An instance of FileBodyWrapper
	 * @returns An instance of APIResponse<FileHandler>
	 * @throws SDKException
	 */
	public async uploadPhoto(id: bigint, moduleAPIName: string, request: FileBodyWrapper): Promise<APIResponse<FileHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/photo");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("multipart/form-data");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await Utility.verifyPhotoSupport(moduleAPIName);
		let FileHandler = require.resolve("./file_handler");
		return handlerInstance.apiCall<FileHandler>(FileHandler, "application/json");

	}

	/**
	 * The method to delete photo
	 * @param id A bigint representing the id
	 * @param moduleAPIName A string representing the moduleAPIName
	 * @returns An instance of APIResponse<FileHandler>
	 * @throws SDKException
	 */
	public async deletePhoto(id: bigint, moduleAPIName: string): Promise<APIResponse<FileHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(id.toString());
		apiPath = apiPath.concat("/photo");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_DELETE);
		handlerInstance.setCategoryMethod(Constants.REQUEST_METHOD_DELETE);
		let FileHandler = require.resolve("./file_handler");
		return handlerInstance.apiCall<FileHandler>(FileHandler, "application/json");

	}

	/**
	 * The method to mass update records
	 * @param moduleAPIName A string representing the moduleAPIName
	 * @param request An instance of MassUpdateBodyWrapper
	 * @returns An instance of APIResponse<MassUpdateActionHandler>
	 * @throws SDKException
	 */
	public async massUpdateRecords(moduleAPIName: string, request: MassUpdateBodyWrapper): Promise<APIResponse<MassUpdateActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/actions/mass_update");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await Utility.getFields(moduleAPIName);
		handlerInstance.setModuleAPIName(moduleAPIName);
		let MassUpdateActionHandler = require.resolve("./mass_update_action_handler");
		return handlerInstance.apiCall<MassUpdateActionHandler>(MassUpdateActionHandler, "application/json");

	}

	/**
	 * The method to get mass update status
	 * @param moduleAPIName A string representing the moduleAPIName
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<MassUpdateResponseHandler>
	 * @throws SDKException
	 */
	public async getMassUpdateStatus(moduleAPIName: string, paramInstance?: ParameterMap): Promise<APIResponse<MassUpdateResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(moduleAPIName.toString());
		apiPath = apiPath.concat("/actions/mass_update");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		handlerInstance.setParam(paramInstance);
		let MassUpdateResponseHandler = require.resolve("./mass_update_response_handler");
		return handlerInstance.apiCall<MassUpdateResponseHandler>(MassUpdateResponseHandler, "application/json");

	}

}
class GetRecordParam{

	public static APPROVED: Param<string> = new Param<string>("approved", "com.zoho.crm.api.Record.GetRecordParam");
	public static CONVERTED: Param<string> = new Param<string>("converted", "com.zoho.crm.api.Record.GetRecordParam");
	public static CVID: Param<string> = new Param<string>("cvid", "com.zoho.crm.api.Record.GetRecordParam");
	public static UID: Param<string> = new Param<string>("uid", "com.zoho.crm.api.Record.GetRecordParam");
	public static FIELDS: Param<string> = new Param<string>("fields", "com.zoho.crm.api.Record.GetRecordParam");
	public static STARTDATETIME: Param<Date> = new Param<Date>("startDateTime", "com.zoho.crm.api.Record.GetRecordParam");
	public static ENDDATETIME: Param<Date> = new Param<Date>("endDateTime", "com.zoho.crm.api.Record.GetRecordParam");
	public static TERRITORY_ID: Param<string> = new Param<string>("territory_id", "com.zoho.crm.api.Record.GetRecordParam");
	public static INCLUDE_CHILD: Param<string> = new Param<string>("include_child", "com.zoho.crm.api.Record.GetRecordParam");
}

class GetRecordHeader{

	public static IF_MODIFIED_SINCE: Header<Date> = new Header<Date>("If-Modified-Since", "com.zoho.crm.api.Record.GetRecordHeader");
	public static X_EXTERNAL: Header<string> = new Header<string>("X-EXTERNAL", "com.zoho.crm.api.Record.GetRecordHeader");
}

class UpdateRecordHeader{

	public static X_EXTERNAL: Header<string> = new Header<string>("X-EXTERNAL", "com.zoho.crm.api.Record.UpdateRecordHeader");
}

class DeleteRecordParam{

	public static WF_TRIGGER: Param<string> = new Param<string>("wf_trigger", "com.zoho.crm.api.Record.DeleteRecordParam");
}

class DeleteRecordHeader{

	public static X_EXTERNAL: Header<string> = new Header<string>("X-EXTERNAL", "com.zoho.crm.api.Record.DeleteRecordHeader");
}

class GetRecordsParam{

	public static APPROVED: Param<string> = new Param<string>("approved", "com.zoho.crm.api.Record.GetRecordsParam");
	public static CONVERTED: Param<string> = new Param<string>("converted", "com.zoho.crm.api.Record.GetRecordsParam");
	public static CVID: Param<string> = new Param<string>("cvid", "com.zoho.crm.api.Record.GetRecordsParam");
	public static IDS: Param<bigint> = new Param<bigint>("ids", "com.zoho.crm.api.Record.GetRecordsParam");
	public static UID: Param<string> = new Param<string>("uid", "com.zoho.crm.api.Record.GetRecordsParam");
	public static FIELDS: Param<string> = new Param<string>("fields", "com.zoho.crm.api.Record.GetRecordsParam");
	public static SORT_BY: Param<string> = new Param<string>("sort_by", "com.zoho.crm.api.Record.GetRecordsParam");
	public static SORT_ORDER: Param<string> = new Param<string>("sort_order", "com.zoho.crm.api.Record.GetRecordsParam");
	public static PAGE: Param<number> = new Param<number>("page", "com.zoho.crm.api.Record.GetRecordsParam");
	public static PER_PAGE: Param<number> = new Param<number>("per_page", "com.zoho.crm.api.Record.GetRecordsParam");
	public static STARTDATETIME: Param<Date> = new Param<Date>("startDateTime", "com.zoho.crm.api.Record.GetRecordsParam");
	public static ENDDATETIME: Param<Date> = new Param<Date>("endDateTime", "com.zoho.crm.api.Record.GetRecordsParam");
	public static TERRITORY_ID: Param<string> = new Param<string>("territory_id", "com.zoho.crm.api.Record.GetRecordsParam");
	public static INCLUDE_CHILD: Param<string> = new Param<string>("include_child", "com.zoho.crm.api.Record.GetRecordsParam");
}

class GetRecordsHeader{

	public static IF_MODIFIED_SINCE: Header<Date> = new Header<Date>("If-Modified-Since", "com.zoho.crm.api.Record.GetRecordsHeader");
	public static X_EXTERNAL: Header<string> = new Header<string>("X-EXTERNAL", "com.zoho.crm.api.Record.GetRecordsHeader");
}

class UpdateRecordsHeader{

	public static X_EXTERNAL: Header<string> = new Header<string>("X-EXTERNAL", "com.zoho.crm.api.Record.UpdateRecordsHeader");
}

class DeleteRecordsParam{

	public static IDS: Param<bigint> = new Param<bigint>("ids", "com.zoho.crm.api.Record.DeleteRecordsParam");
	public static WF_TRIGGER: Param<string> = new Param<string>("wf_trigger", "com.zoho.crm.api.Record.DeleteRecordsParam");
}

class DeleteRecordsHeader{

	public static X_EXTERNAL: Header<string> = new Header<string>("X-EXTERNAL", "com.zoho.crm.api.Record.DeleteRecordsHeader");
}

class UpsertRecordsHeader{

	public static X_EXTERNAL: Header<string> = new Header<string>("X-EXTERNAL", "com.zoho.crm.api.Record.UpsertRecordsHeader");
}

class GetDeletedRecordsParam{

	public static TYPE: Param<string> = new Param<string>("type", "com.zoho.crm.api.Record.GetDeletedRecordsParam");
	public static PAGE: Param<number> = new Param<number>("page", "com.zoho.crm.api.Record.GetDeletedRecordsParam");
	public static PER_PAGE: Param<number> = new Param<number>("per_page", "com.zoho.crm.api.Record.GetDeletedRecordsParam");
}

class GetDeletedRecordsHeader{

	public static IF_MODIFIED_SINCE: Header<Date> = new Header<Date>("If-Modified-Since", "com.zoho.crm.api.Record.GetDeletedRecordsHeader");
}

class SearchRecordsParam{

	public static CRITERIA: Param<string> = new Param<string>("criteria", "com.zoho.crm.api.Record.SearchRecordsParam");
	public static EMAIL: Param<string> = new Param<string>("email", "com.zoho.crm.api.Record.SearchRecordsParam");
	public static PHONE: Param<string> = new Param<string>("phone", "com.zoho.crm.api.Record.SearchRecordsParam");
	public static WORD: Param<string> = new Param<string>("word", "com.zoho.crm.api.Record.SearchRecordsParam");
	public static CONVERTED: Param<string> = new Param<string>("converted", "com.zoho.crm.api.Record.SearchRecordsParam");
	public static APPROVED: Param<string> = new Param<string>("approved", "com.zoho.crm.api.Record.SearchRecordsParam");
	public static PAGE: Param<number> = new Param<number>("page", "com.zoho.crm.api.Record.SearchRecordsParam");
	public static PER_PAGE: Param<number> = new Param<number>("per_page", "com.zoho.crm.api.Record.SearchRecordsParam");
}

class SearchRecordsHeader{

	public static X_EXTERNAL: Header<string> = new Header<string>("X-EXTERNAL", "com.zoho.crm.api.Record.SearchRecordsHeader");
}

class GetMassUpdateStatusParam{

	public static JOB_ID: Param<string> = new Param<string>("job_id", "com.zoho.crm.api.Record.GetMassUpdateStatusParam");
}

export {
	GetRecordParam as GetRecordParam,
	UpsertRecordsHeader as UpsertRecordsHeader,
	GetRecordsHeader as GetRecordsHeader,
	GetRecordHeader as GetRecordHeader,
	GetDeletedRecordsParam as GetDeletedRecordsParam,
	GetMassUpdateStatusParam as GetMassUpdateStatusParam,
	UpdateRecordHeader as UpdateRecordHeader,
	GetRecordsParam as GetRecordsParam,
	SearchRecordsParam as SearchRecordsParam,
	DeleteRecordParam as DeleteRecordParam,
	UpdateRecordsHeader as UpdateRecordsHeader,
	SearchRecordsHeader as SearchRecordsHeader,
	DeleteRecordHeader as DeleteRecordHeader,
	DeleteRecordsParam as DeleteRecordsParam,
	DeleteRecordsHeader as DeleteRecordsHeader,
	RecordOperations as MasterModel,
	RecordOperations as RecordOperations,
	GetDeletedRecordsHeader as GetDeletedRecordsHeader
}
