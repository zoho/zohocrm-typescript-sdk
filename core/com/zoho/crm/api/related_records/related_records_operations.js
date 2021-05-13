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
exports.DelinkRecordsParam = exports.GetRelatedRecordsHeader = exports.GetRelatedRecordsParam = exports.UpdateRelatedRecordHeader = exports.DelinkRecordHeader = exports.RelatedRecordsOperations = exports.MasterModel = exports.GetRelatedRecordHeader = void 0;
const header_1 = require("../../../../../../routes/header");
const param_1 = require("../../../../../../routes/param");
const common_api_handler_1 = require("../../../../../../routes/middlewares/common_api_handler");
const utility_1 = require("../../../../../../utils/util/utility");
const constants_1 = require("../../../../../../utils/util/constants");
class RelatedRecordsOperations {
    /**
     * Creates an instance of RelatedRecordsOperations with the given parameters
     * @param relatedListAPIName A string representing the relatedListAPIName
     * @param recordId A bigint representing the recordId
     * @param moduleAPIName A string representing the moduleAPIName
     */
    constructor(relatedListAPIName, recordId, moduleAPIName) {
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
    getRelatedRecords(paramInstance, headerInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(this.moduleAPIName.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(this.recordId.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(this.relatedListAPIName.toString());
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
            handlerInstance.setParam(paramInstance);
            handlerInstance.setHeader(headerInstance);
            yield utility_1.Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
            let ResponseHandler = require.resolve("./response_handler");
            return handlerInstance.apiCall(ResponseHandler, "application/json");
        });
    }
    /**
     * The method to update related records
     * @param request An instance of BodyWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    updateRelatedRecords(request) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(this.moduleAPIName.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(this.recordId.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(this.relatedListAPIName.toString());
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_PUT);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_UPDATE);
            handlerInstance.setContentType("application/json");
            handlerInstance.setRequest(request);
            handlerInstance.setMandatoryChecker(true);
            yield utility_1.Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
            let ActionHandler = require.resolve("./action_handler");
            return handlerInstance.apiCall(ActionHandler, "application/json");
        });
    }
    /**
     * The method to delink records
     * @param paramInstance An instance of ParameterMap
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    delinkRecords(paramInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(this.moduleAPIName.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(this.recordId.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(this.relatedListAPIName.toString());
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
            handlerInstance.setParam(paramInstance);
            let ActionHandler = require.resolve("./action_handler");
            return handlerInstance.apiCall(ActionHandler, "application/json");
        });
    }
    /**
     * The method to get related record
     * @param relatedRecordId A bigint representing the relatedRecordId
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    getRelatedRecord(relatedRecordId, headerInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(this.moduleAPIName.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(this.recordId.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(this.relatedListAPIName.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(relatedRecordId.toString());
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
            handlerInstance.setHeader(headerInstance);
            yield utility_1.Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
            let ResponseHandler = require.resolve("./response_handler");
            return handlerInstance.apiCall(ResponseHandler, "application/json");
        });
    }
    /**
     * The method to update related record
     * @param relatedRecordId A bigint representing the relatedRecordId
     * @param request An instance of BodyWrapper
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    updateRelatedRecord(relatedRecordId, request, headerInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(this.moduleAPIName.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(this.recordId.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(this.relatedListAPIName.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(relatedRecordId.toString());
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_PUT);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_UPDATE);
            handlerInstance.setContentType("application/json");
            handlerInstance.setRequest(request);
            handlerInstance.setHeader(headerInstance);
            yield utility_1.Utility.getRelatedLists(this.relatedListAPIName, this.moduleAPIName, handlerInstance);
            let ActionHandler = require.resolve("./action_handler");
            return handlerInstance.apiCall(ActionHandler, "application/json");
        });
    }
    /**
     * The method to delink record
     * @param relatedRecordId A bigint representing the relatedRecordId
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    delinkRecord(relatedRecordId, headerInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(this.moduleAPIName.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(this.recordId.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(this.relatedListAPIName.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(relatedRecordId.toString());
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
            handlerInstance.setHeader(headerInstance);
            let ActionHandler = require.resolve("./action_handler");
            return handlerInstance.apiCall(ActionHandler, "application/json");
        });
    }
}
exports.MasterModel = RelatedRecordsOperations;
exports.RelatedRecordsOperations = RelatedRecordsOperations;
class GetRelatedRecordsParam {
}
exports.GetRelatedRecordsParam = GetRelatedRecordsParam;
GetRelatedRecordsParam.PAGE = new param_1.Param("page", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsParam");
GetRelatedRecordsParam.PER_PAGE = new param_1.Param("per_page", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsParam");
class GetRelatedRecordsHeader {
}
exports.GetRelatedRecordsHeader = GetRelatedRecordsHeader;
GetRelatedRecordsHeader.IF_MODIFIED_SINCE = new header_1.Header("If-Modified-Since", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsHeader");
GetRelatedRecordsHeader.X_EXTERNAL = new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordsHeader");
class DelinkRecordsParam {
}
exports.DelinkRecordsParam = DelinkRecordsParam;
DelinkRecordsParam.IDS = new param_1.Param("ids", "com.zoho.crm.api.RelatedRecords.DelinkRecordsParam");
class GetRelatedRecordHeader {
}
exports.GetRelatedRecordHeader = GetRelatedRecordHeader;
GetRelatedRecordHeader.IF_MODIFIED_SINCE = new header_1.Header("If-Modified-Since", "com.zoho.crm.api.RelatedRecords.GetRelatedRecordHeader");
class UpdateRelatedRecordHeader {
}
exports.UpdateRelatedRecordHeader = UpdateRelatedRecordHeader;
UpdateRelatedRecordHeader.X_EXTERNAL = new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.UpdateRelatedRecordHeader");
class DelinkRecordHeader {
}
exports.DelinkRecordHeader = DelinkRecordHeader;
DelinkRecordHeader.X_EXTERNAL = new header_1.Header("X-EXTERNAL", "com.zoho.crm.api.RelatedRecords.DelinkRecordHeader");
//# sourceMappingURL=related_records_operations.js.map