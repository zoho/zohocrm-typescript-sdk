"use strict";
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
exports.GetDeletedRecordsHeader = exports.RecordOperations = exports.MasterModel = exports.DeleteRecordsHeader = exports.DeleteRecordsParam = exports.DeleteRecordHeader = exports.SearchRecordsHeader = exports.UpdateRecordsHeader = exports.DeleteRecordParam = exports.SearchRecordsParam = exports.GetRecordsParam = exports.UpdateRecordHeader = exports.GetMassUpdateStatusParam = exports.GetDeletedRecordsParam = exports.GetRecordHeader = exports.GetRecordsHeader = exports.UpsertRecordsHeader = exports.GetRecordParam = void 0;
const header_1 = require("../../../../../../routes/header");
const param_1 = require("../../../../../../routes/param");
const common_api_handler_1 = require("../../../../../../routes/middlewares/common_api_handler");
const utility_1 = require("../../../../../../utils/util/utility");
const constants_1 = require("../../../../../../utils/util/constants");
class RecordOperations {
    /**
     * The method to get record
     * @param id A bigint representing the id
     * @param moduleAPIName A string representing the moduleAPIName
     * @param paramInstance An instance of ParameterMap
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    getRecord(id, moduleAPIName, paramInstance, headerInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(moduleAPIName.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(id.toString());
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
            handlerInstance.setParam(paramInstance);
            handlerInstance.setHeader(headerInstance);
            yield utility_1.Utility.getFields(moduleAPIName);
            handlerInstance.setModuleAPIName(moduleAPIName);
            let ResponseHandler = require.resolve("./response_handler");
            return handlerInstance.apiCall(ResponseHandler, "application/json");
        });
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
    updateRecord(id, moduleAPIName, request, headerInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(moduleAPIName.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(id.toString());
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_PUT);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_UPDATE);
            handlerInstance.setContentType("application/json");
            handlerInstance.setRequest(request);
            handlerInstance.setHeader(headerInstance);
            yield utility_1.Utility.getFields(moduleAPIName);
            handlerInstance.setModuleAPIName(moduleAPIName);
            let ActionHandler = require.resolve("./action_handler");
            return handlerInstance.apiCall(ActionHandler, "application/json");
        });
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
    deleteRecord(id, moduleAPIName, paramInstance, headerInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(moduleAPIName.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(id.toString());
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
            handlerInstance.setParam(paramInstance);
            handlerInstance.setHeader(headerInstance);
            let ActionHandler = require.resolve("./action_handler");
            return handlerInstance.apiCall(ActionHandler, "application/json");
        });
    }
    /**
     * The method to get records
     * @param moduleAPIName A string representing the moduleAPIName
     * @param paramInstance An instance of ParameterMap
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    getRecords(moduleAPIName, paramInstance, headerInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(moduleAPIName.toString());
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
            handlerInstance.setParam(paramInstance);
            handlerInstance.setHeader(headerInstance);
            yield utility_1.Utility.getFields(moduleAPIName);
            handlerInstance.setModuleAPIName(moduleAPIName);
            let ResponseHandler = require.resolve("./response_handler");
            return handlerInstance.apiCall(ResponseHandler, "application/json");
        });
    }
    /**
     * The method to create records
     * @param moduleAPIName A string representing the moduleAPIName
     * @param request An instance of BodyWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    createRecords(moduleAPIName, request) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(moduleAPIName.toString());
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_CREATE);
            handlerInstance.setContentType("application/json");
            handlerInstance.setRequest(request);
            handlerInstance.setMandatoryChecker(true);
            yield utility_1.Utility.getFields(moduleAPIName);
            handlerInstance.setModuleAPIName(moduleAPIName);
            let ActionHandler = require.resolve("./action_handler");
            return handlerInstance.apiCall(ActionHandler, "application/json");
        });
    }
    /**
     * The method to update records
     * @param moduleAPIName A string representing the moduleAPIName
     * @param request An instance of BodyWrapper
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    updateRecords(moduleAPIName, request, headerInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(moduleAPIName.toString());
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_PUT);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_UPDATE);
            handlerInstance.setContentType("application/json");
            handlerInstance.setRequest(request);
            handlerInstance.setMandatoryChecker(true);
            handlerInstance.setHeader(headerInstance);
            yield utility_1.Utility.getFields(moduleAPIName);
            handlerInstance.setModuleAPIName(moduleAPIName);
            let ActionHandler = require.resolve("./action_handler");
            return handlerInstance.apiCall(ActionHandler, "application/json");
        });
    }
    /**
     * The method to delete records
     * @param moduleAPIName A string representing the moduleAPIName
     * @param paramInstance An instance of ParameterMap
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    deleteRecords(moduleAPIName, paramInstance, headerInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(moduleAPIName.toString());
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
            handlerInstance.setParam(paramInstance);
            handlerInstance.setHeader(headerInstance);
            let ActionHandler = require.resolve("./action_handler");
            return handlerInstance.apiCall(ActionHandler, "application/json");
        });
    }
    /**
     * The method to upsert records
     * @param moduleAPIName A string representing the moduleAPIName
     * @param request An instance of BodyWrapper
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    upsertRecords(moduleAPIName, request, headerInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(moduleAPIName.toString());
            apiPath = apiPath.concat("/upsert");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_ACTION);
            handlerInstance.setContentType("application/json");
            handlerInstance.setRequest(request);
            handlerInstance.setHeader(headerInstance);
            yield utility_1.Utility.getFields(moduleAPIName);
            handlerInstance.setModuleAPIName(moduleAPIName);
            let ActionHandler = require.resolve("./action_handler");
            return handlerInstance.apiCall(ActionHandler, "application/json");
        });
    }
    /**
     * The method to get deleted records
     * @param moduleAPIName A string representing the moduleAPIName
     * @param paramInstance An instance of ParameterMap
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<DeletedRecordsHandler>
     * @throws SDKException
     */
    getDeletedRecords(moduleAPIName, paramInstance, headerInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(moduleAPIName.toString());
            apiPath = apiPath.concat("/deleted");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
            handlerInstance.setParam(paramInstance);
            handlerInstance.setHeader(headerInstance);
            let DeletedRecordsHandler = require.resolve("./deleted_records_handler");
            return handlerInstance.apiCall(DeletedRecordsHandler, "application/json");
        });
    }
    /**
     * The method to search records
     * @param moduleAPIName A string representing the moduleAPIName
     * @param paramInstance An instance of ParameterMap
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    searchRecords(moduleAPIName, paramInstance, headerInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(moduleAPIName.toString());
            apiPath = apiPath.concat("/search");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
            handlerInstance.setParam(paramInstance);
            handlerInstance.setHeader(headerInstance);
            yield utility_1.Utility.getFields(moduleAPIName);
            handlerInstance.setModuleAPIName(moduleAPIName);
            let ResponseHandler = require.resolve("./response_handler");
            return handlerInstance.apiCall(ResponseHandler, "application/json");
        });
    }
    /**
     * The method to convert lead
     * @param id A bigint representing the id
     * @param request An instance of ConvertBodyWrapper
     * @returns An instance of APIResponse<ConvertActionHandler>
     * @throws SDKException
     */
    convertLead(id, request) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/Leads/");
            apiPath = apiPath.concat(id.toString());
            apiPath = apiPath.concat("/actions/convert");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_CREATE);
            handlerInstance.setContentType("application/json");
            handlerInstance.setRequest(request);
            handlerInstance.setMandatoryChecker(true);
            yield utility_1.Utility.getFields("Deals");
            let ConvertActionHandler = require.resolve("./convert_action_handler");
            return handlerInstance.apiCall(ConvertActionHandler, "application/json");
        });
    }
    /**
     * The method to get photo
     * @param id A bigint representing the id
     * @param moduleAPIName A string representing the moduleAPIName
     * @returns An instance of APIResponse<DownloadHandler>
     * @throws SDKException
     */
    getPhoto(id, moduleAPIName) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(moduleAPIName.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(id.toString());
            apiPath = apiPath.concat("/photo");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
            let DownloadHandler = require.resolve("./download_handler");
            return handlerInstance.apiCall(DownloadHandler, "application/x-download");
        });
    }
    /**
     * The method to upload photo
     * @param id A bigint representing the id
     * @param moduleAPIName A string representing the moduleAPIName
     * @param request An instance of FileBodyWrapper
     * @returns An instance of APIResponse<FileHandler>
     * @throws SDKException
     */
    uploadPhoto(id, moduleAPIName, request) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(moduleAPIName.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(id.toString());
            apiPath = apiPath.concat("/photo");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_CREATE);
            handlerInstance.setContentType("multipart/form-data");
            handlerInstance.setRequest(request);
            handlerInstance.setMandatoryChecker(true);
            yield utility_1.Utility.verifyPhotoSupport(moduleAPIName);
            let FileHandler = require.resolve("./file_handler");
            return handlerInstance.apiCall(FileHandler, "application/json");
        });
    }
    /**
     * The method to delete photo
     * @param id A bigint representing the id
     * @param moduleAPIName A string representing the moduleAPIName
     * @returns An instance of APIResponse<FileHandler>
     * @throws SDKException
     */
    deletePhoto(id, moduleAPIName) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(moduleAPIName.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(id.toString());
            apiPath = apiPath.concat("/photo");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
            let FileHandler = require.resolve("./file_handler");
            return handlerInstance.apiCall(FileHandler, "application/json");
        });
    }
    /**
     * The method to mass update records
     * @param moduleAPIName A string representing the moduleAPIName
     * @param request An instance of MassUpdateBodyWrapper
     * @returns An instance of APIResponse<MassUpdateActionHandler>
     * @throws SDKException
     */
    massUpdateRecords(moduleAPIName, request) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(moduleAPIName.toString());
            apiPath = apiPath.concat("/actions/mass_update");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_UPDATE);
            handlerInstance.setContentType("application/json");
            handlerInstance.setRequest(request);
            handlerInstance.setMandatoryChecker(true);
            yield utility_1.Utility.getFields(moduleAPIName);
            handlerInstance.setModuleAPIName(moduleAPIName);
            let MassUpdateActionHandler = require.resolve("./mass_update_action_handler");
            return handlerInstance.apiCall(MassUpdateActionHandler, "application/json");
        });
    }
    /**
     * The method to get mass update status
     * @param moduleAPIName A string representing the moduleAPIName
     * @param paramInstance An instance of ParameterMap
     * @returns An instance of APIResponse<MassUpdateResponseHandler>
     * @throws SDKException
     */
    getMassUpdateStatus(moduleAPIName, paramInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(moduleAPIName.toString());
            apiPath = apiPath.concat("/actions/mass_update");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
            handlerInstance.setParam(paramInstance);
            let MassUpdateResponseHandler = require.resolve("./mass_update_response_handler");
            return handlerInstance.apiCall(MassUpdateResponseHandler, "application/json");
        });
    }
}
exports.MasterModel = RecordOperations;
exports.RecordOperations = RecordOperations;
class GetRecordParam {
}
exports.GetRecordParam = GetRecordParam;
GetRecordParam.APPROVED = new param_1.Param("approved", "com.zoho.crm.api.Record.GetRecordParam");
GetRecordParam.CONVERTED = new param_1.Param("converted", "com.zoho.crm.api.Record.GetRecordParam");
GetRecordParam.CVID = new param_1.Param("cvid", "com.zoho.crm.api.Record.GetRecordParam");
GetRecordParam.UID = new param_1.Param("uid", "com.zoho.crm.api.Record.GetRecordParam");
GetRecordParam.FIELDS = new param_1.Param("fields", "com.zoho.crm.api.Record.GetRecordParam");
GetRecordParam.STARTDATETIME = new param_1.Param("startDateTime", "com.zoho.crm.api.Record.GetRecordParam");
GetRecordParam.ENDDATETIME = new param_1.Param("endDateTime", "com.zoho.crm.api.Record.GetRecordParam");
GetRecordParam.TERRITORY_ID = new param_1.Param("territory_id", "com.zoho.crm.api.Record.GetRecordParam");
GetRecordParam.INCLUDE_CHILD = new param_1.Param("include_child", "com.zoho.crm.api.Record.GetRecordParam");
class GetRecordHeader {
}
exports.GetRecordHeader = GetRecordHeader;
GetRecordHeader.IF_MODIFIED_SINCE = new header_1.Header("If-Modified-Since", "com.zoho.crm.api.Record.GetRecordHeader");
GetRecordHeader.X_EXTERNAL = new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.Record.GetRecordHeader");
class UpdateRecordHeader {
}
exports.UpdateRecordHeader = UpdateRecordHeader;
UpdateRecordHeader.X_EXTERNAL = new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.Record.UpdateRecordHeader");
class DeleteRecordParam {
}
exports.DeleteRecordParam = DeleteRecordParam;
DeleteRecordParam.WF_TRIGGER = new param_1.Param("wf_trigger", "com.zoho.crm.api.Record.DeleteRecordParam");
class DeleteRecordHeader {
}
exports.DeleteRecordHeader = DeleteRecordHeader;
DeleteRecordHeader.X_EXTERNAL = new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.Record.DeleteRecordHeader");
class GetRecordsParam {
}
exports.GetRecordsParam = GetRecordsParam;
GetRecordsParam.APPROVED = new param_1.Param("approved", "com.zoho.crm.api.Record.GetRecordsParam");
GetRecordsParam.CONVERTED = new param_1.Param("converted", "com.zoho.crm.api.Record.GetRecordsParam");
GetRecordsParam.CVID = new param_1.Param("cvid", "com.zoho.crm.api.Record.GetRecordsParam");
GetRecordsParam.IDS = new param_1.Param("ids", "com.zoho.crm.api.Record.GetRecordsParam");
GetRecordsParam.UID = new param_1.Param("uid", "com.zoho.crm.api.Record.GetRecordsParam");
GetRecordsParam.FIELDS = new param_1.Param("fields", "com.zoho.crm.api.Record.GetRecordsParam");
GetRecordsParam.SORT_BY = new param_1.Param("sort_by", "com.zoho.crm.api.Record.GetRecordsParam");
GetRecordsParam.SORT_ORDER = new param_1.Param("sort_order", "com.zoho.crm.api.Record.GetRecordsParam");
GetRecordsParam.PAGE = new param_1.Param("page", "com.zoho.crm.api.Record.GetRecordsParam");
GetRecordsParam.PER_PAGE = new param_1.Param("per_page", "com.zoho.crm.api.Record.GetRecordsParam");
GetRecordsParam.STARTDATETIME = new param_1.Param("startDateTime", "com.zoho.crm.api.Record.GetRecordsParam");
GetRecordsParam.ENDDATETIME = new param_1.Param("endDateTime", "com.zoho.crm.api.Record.GetRecordsParam");
GetRecordsParam.TERRITORY_ID = new param_1.Param("territory_id", "com.zoho.crm.api.Record.GetRecordsParam");
GetRecordsParam.INCLUDE_CHILD = new param_1.Param("include_child", "com.zoho.crm.api.Record.GetRecordsParam");
class GetRecordsHeader {
}
exports.GetRecordsHeader = GetRecordsHeader;
GetRecordsHeader.IF_MODIFIED_SINCE = new header_1.Header("If-Modified-Since", "com.zoho.crm.api.Record.GetRecordsHeader");
GetRecordsHeader.X_EXTERNAL = new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.Record.GetRecordsHeader");
class UpdateRecordsHeader {
}
exports.UpdateRecordsHeader = UpdateRecordsHeader;
UpdateRecordsHeader.X_EXTERNAL = new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.Record.UpdateRecordsHeader");
class DeleteRecordsParam {
}
exports.DeleteRecordsParam = DeleteRecordsParam;
DeleteRecordsParam.IDS = new param_1.Param("ids", "com.zoho.crm.api.Record.DeleteRecordsParam");
DeleteRecordsParam.WF_TRIGGER = new param_1.Param("wf_trigger", "com.zoho.crm.api.Record.DeleteRecordsParam");
class DeleteRecordsHeader {
}
exports.DeleteRecordsHeader = DeleteRecordsHeader;
DeleteRecordsHeader.X_EXTERNAL = new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.Record.DeleteRecordsHeader");
class UpsertRecordsHeader {
}
exports.UpsertRecordsHeader = UpsertRecordsHeader;
UpsertRecordsHeader.X_EXTERNAL = new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.Record.UpsertRecordsHeader");
class GetDeletedRecordsParam {
}
exports.GetDeletedRecordsParam = GetDeletedRecordsParam;
GetDeletedRecordsParam.TYPE = new param_1.Param("type", "com.zoho.crm.api.Record.GetDeletedRecordsParam");
GetDeletedRecordsParam.PAGE = new param_1.Param("page", "com.zoho.crm.api.Record.GetDeletedRecordsParam");
GetDeletedRecordsParam.PER_PAGE = new param_1.Param("per_page", "com.zoho.crm.api.Record.GetDeletedRecordsParam");
class GetDeletedRecordsHeader {
}
exports.GetDeletedRecordsHeader = GetDeletedRecordsHeader;
GetDeletedRecordsHeader.IF_MODIFIED_SINCE = new header_1.Header("If-Modified-Since", "com.zoho.crm.api.Record.GetDeletedRecordsHeader");
class SearchRecordsParam {
}
exports.SearchRecordsParam = SearchRecordsParam;
SearchRecordsParam.CRITERIA = new param_1.Param("criteria", "com.zoho.crm.api.Record.SearchRecordsParam");
SearchRecordsParam.EMAIL = new param_1.Param("email", "com.zoho.crm.api.Record.SearchRecordsParam");
SearchRecordsParam.PHONE = new param_1.Param("phone", "com.zoho.crm.api.Record.SearchRecordsParam");
SearchRecordsParam.WORD = new param_1.Param("word", "com.zoho.crm.api.Record.SearchRecordsParam");
SearchRecordsParam.CONVERTED = new param_1.Param("converted", "com.zoho.crm.api.Record.SearchRecordsParam");
SearchRecordsParam.APPROVED = new param_1.Param("approved", "com.zoho.crm.api.Record.SearchRecordsParam");
SearchRecordsParam.PAGE = new param_1.Param("page", "com.zoho.crm.api.Record.SearchRecordsParam");
SearchRecordsParam.PER_PAGE = new param_1.Param("per_page", "com.zoho.crm.api.Record.SearchRecordsParam");
class SearchRecordsHeader {
}
exports.SearchRecordsHeader = SearchRecordsHeader;
SearchRecordsHeader.X_EXTERNAL = new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.Record.SearchRecordsHeader");
class GetMassUpdateStatusParam {
}
exports.GetMassUpdateStatusParam = GetMassUpdateStatusParam;
GetMassUpdateStatusParam.JOB_ID = new param_1.Param("job_id", "com.zoho.crm.api.Record.GetMassUpdateStatusParam");
//# sourceMappingURL=record_operations.js.map