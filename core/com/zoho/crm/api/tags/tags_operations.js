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
exports.CreateTagsParam = exports.GetTagsParam = exports.UpdateTagParam = exports.UpdateTagsParam = exports.GetRecordCountForTagParam = exports.RemoveTagsFromRecordParam = exports.TagsOperations = exports.MasterModel = exports.AddTagsToMultipleRecordsParam = exports.AddTagsToRecordParam = exports.RemoveTagsFromMultipleRecordsParam = void 0;
const param_1 = require("../../../../../../routes/param");
const common_api_handler_1 = require("../../../../../../routes/middlewares/common_api_handler");
const constants_1 = require("../../../../../../utils/util/constants");
class TagsOperations {
    /**
     * The method to get tags
     * @param paramInstance An instance of ParameterMap
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    getTags(paramInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/settings/tags");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
            handlerInstance.setParam(paramInstance);
            let ResponseHandler = require.resolve("./response_handler");
            return handlerInstance.apiCall(ResponseHandler, "application/json");
        });
    }
    /**
     * The method to create tags
     * @param request An instance of BodyWrapper
     * @param paramInstance An instance of ParameterMap
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    createTags(request, paramInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/settings/tags");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_CREATE);
            handlerInstance.setContentType("application/json");
            handlerInstance.setRequest(request);
            handlerInstance.setMandatoryChecker(true);
            handlerInstance.setParam(paramInstance);
            let ActionHandler = require.resolve("./action_handler");
            return handlerInstance.apiCall(ActionHandler, "application/json");
        });
    }
    /**
     * The method to update tags
     * @param request An instance of BodyWrapper
     * @param paramInstance An instance of ParameterMap
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    updateTags(request, paramInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/settings/tags");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_PUT);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_UPDATE);
            handlerInstance.setContentType("application/json");
            handlerInstance.setRequest(request);
            handlerInstance.setMandatoryChecker(true);
            handlerInstance.setParam(paramInstance);
            let ActionHandler = require.resolve("./action_handler");
            return handlerInstance.apiCall(ActionHandler, "application/json");
        });
    }
    /**
     * The method to update tag
     * @param id A bigint representing the id
     * @param request An instance of BodyWrapper
     * @param paramInstance An instance of ParameterMap
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    updateTag(id, request, paramInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/settings/tags/");
            apiPath = apiPath.concat(id.toString());
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_PUT);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_UPDATE);
            handlerInstance.setContentType("application/json");
            handlerInstance.setRequest(request);
            handlerInstance.setParam(paramInstance);
            let ActionHandler = require.resolve("./action_handler");
            return handlerInstance.apiCall(ActionHandler, "application/json");
        });
    }
    /**
     * The method to delete tag
     * @param id A bigint representing the id
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    deleteTag(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/settings/tags/");
            apiPath = apiPath.concat(id.toString());
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
            let ActionHandler = require.resolve("./action_handler");
            return handlerInstance.apiCall(ActionHandler, "application/json");
        });
    }
    /**
     * The method to merge tags
     * @param id A bigint representing the id
     * @param request An instance of MergeWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    mergeTags(id, request) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/settings/tags/");
            apiPath = apiPath.concat(id.toString());
            apiPath = apiPath.concat("/actions/merge");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_CREATE);
            handlerInstance.setContentType("application/json");
            handlerInstance.setRequest(request);
            handlerInstance.setMandatoryChecker(true);
            let ActionHandler = require.resolve("./action_handler");
            return handlerInstance.apiCall(ActionHandler, "application/json");
        });
    }
    /**
     * The method to add tags to record
     * @param recordId A bigint representing the recordId
     * @param moduleAPIName A string representing the moduleAPIName
     * @param paramInstance An instance of ParameterMap
     * @returns An instance of APIResponse<RecordActionHandler>
     * @throws SDKException
     */
    addTagsToRecord(recordId, moduleAPIName, paramInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(moduleAPIName.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(recordId.toString());
            apiPath = apiPath.concat("/actions/add_tags");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_CREATE);
            handlerInstance.setMandatoryChecker(true);
            handlerInstance.setParam(paramInstance);
            let RecordActionHandler = require.resolve("./record_action_handler");
            return handlerInstance.apiCall(RecordActionHandler, "application/json");
        });
    }
    /**
     * The method to remove tags from record
     * @param recordId A bigint representing the recordId
     * @param moduleAPIName A string representing the moduleAPIName
     * @param paramInstance An instance of ParameterMap
     * @returns An instance of APIResponse<RecordActionHandler>
     * @throws SDKException
     */
    removeTagsFromRecord(recordId, moduleAPIName, paramInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(moduleAPIName.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(recordId.toString());
            apiPath = apiPath.concat("/actions/remove_tags");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_CREATE);
            handlerInstance.setMandatoryChecker(true);
            handlerInstance.setParam(paramInstance);
            let RecordActionHandler = require.resolve("./record_action_handler");
            return handlerInstance.apiCall(RecordActionHandler, "application/json");
        });
    }
    /**
     * The method to add tags to multiple records
     * @param moduleAPIName A string representing the moduleAPIName
     * @param paramInstance An instance of ParameterMap
     * @returns An instance of APIResponse<RecordActionHandler>
     * @throws SDKException
     */
    addTagsToMultipleRecords(moduleAPIName, paramInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(moduleAPIName.toString());
            apiPath = apiPath.concat("/actions/add_tags");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_CREATE);
            handlerInstance.setMandatoryChecker(true);
            handlerInstance.setParam(paramInstance);
            let RecordActionHandler = require.resolve("./record_action_handler");
            return handlerInstance.apiCall(RecordActionHandler, "application/json");
        });
    }
    /**
     * The method to remove tags from multiple records
     * @param moduleAPIName A string representing the moduleAPIName
     * @param paramInstance An instance of ParameterMap
     * @returns An instance of APIResponse<RecordActionHandler>
     * @throws SDKException
     */
    removeTagsFromMultipleRecords(moduleAPIName, paramInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(moduleAPIName.toString());
            apiPath = apiPath.concat("/actions/remove_tags");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_CREATE);
            handlerInstance.setMandatoryChecker(true);
            handlerInstance.setParam(paramInstance);
            let RecordActionHandler = require.resolve("./record_action_handler");
            return handlerInstance.apiCall(RecordActionHandler, "application/json");
        });
    }
    /**
     * The method to get record count for tag
     * @param id A bigint representing the id
     * @param paramInstance An instance of ParameterMap
     * @returns An instance of APIResponse<CountHandler>
     * @throws SDKException
     */
    getRecordCountForTag(id, paramInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/settings/tags/");
            apiPath = apiPath.concat(id.toString());
            apiPath = apiPath.concat("/actions/records_count");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
            handlerInstance.setParam(paramInstance);
            let CountHandler = require.resolve("./count_handler");
            return handlerInstance.apiCall(CountHandler, "application/json");
        });
    }
}
exports.MasterModel = TagsOperations;
exports.TagsOperations = TagsOperations;
class GetTagsParam {
}
exports.GetTagsParam = GetTagsParam;
GetTagsParam.MODULE = new param_1.Param("module", "com.zoho.crm.api.Tags.GetTagsParam");
GetTagsParam.MY_TAGS = new param_1.Param("my_tags", "com.zoho.crm.api.Tags.GetTagsParam");
class CreateTagsParam {
}
exports.CreateTagsParam = CreateTagsParam;
CreateTagsParam.MODULE = new param_1.Param("module", "com.zoho.crm.api.Tags.CreateTagsParam");
class UpdateTagsParam {
}
exports.UpdateTagsParam = UpdateTagsParam;
UpdateTagsParam.MODULE = new param_1.Param("module", "com.zoho.crm.api.Tags.UpdateTagsParam");
class UpdateTagParam {
}
exports.UpdateTagParam = UpdateTagParam;
UpdateTagParam.MODULE = new param_1.Param("module", "com.zoho.crm.api.Tags.UpdateTagParam");
class AddTagsToRecordParam {
}
exports.AddTagsToRecordParam = AddTagsToRecordParam;
AddTagsToRecordParam.TAG_NAMES = new param_1.Param("tag_names", "com.zoho.crm.api.Tags.AddTagsToRecordParam");
AddTagsToRecordParam.OVER_WRITE = new param_1.Param("over_write", "com.zoho.crm.api.Tags.AddTagsToRecordParam");
class RemoveTagsFromRecordParam {
}
exports.RemoveTagsFromRecordParam = RemoveTagsFromRecordParam;
RemoveTagsFromRecordParam.TAG_NAMES = new param_1.Param("tag_names", "com.zoho.crm.api.Tags.RemoveTagsFromRecordParam");
class AddTagsToMultipleRecordsParam {
}
exports.AddTagsToMultipleRecordsParam = AddTagsToMultipleRecordsParam;
AddTagsToMultipleRecordsParam.TAG_NAMES = new param_1.Param("tag_names", "com.zoho.crm.api.Tags.AddTagsToMultipleRecordsParam");
AddTagsToMultipleRecordsParam.IDS = new param_1.Param("ids", "com.zoho.crm.api.Tags.AddTagsToMultipleRecordsParam");
AddTagsToMultipleRecordsParam.OVER_WRITE = new param_1.Param("over_write", "com.zoho.crm.api.Tags.AddTagsToMultipleRecordsParam");
class RemoveTagsFromMultipleRecordsParam {
}
exports.RemoveTagsFromMultipleRecordsParam = RemoveTagsFromMultipleRecordsParam;
RemoveTagsFromMultipleRecordsParam.TAG_NAMES = new param_1.Param("tag_names", "com.zoho.crm.api.Tags.RemoveTagsFromMultipleRecordsParam");
RemoveTagsFromMultipleRecordsParam.IDS = new param_1.Param("ids", "com.zoho.crm.api.Tags.RemoveTagsFromMultipleRecordsParam");
class GetRecordCountForTagParam {
}
exports.GetRecordCountForTagParam = GetRecordCountForTagParam;
GetRecordCountForTagParam.MODULE = new param_1.Param("module", "com.zoho.crm.api.Tags.GetRecordCountForTagParam");
//# sourceMappingURL=tags_operations.js.map