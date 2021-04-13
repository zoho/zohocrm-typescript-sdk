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
exports.GetAttachmentsParam = exports.UploadLinkAttachmentParam = exports.DeleteAttachmentsParam = exports.AttachmentsOperations = exports.MasterModel = void 0;
const param_1 = require("../../../../../../routes/param");
const common_api_handler_1 = require("../../../../../../routes/middlewares/common_api_handler");
const constants_1 = require("../../../../../../utils/util/constants");
class AttachmentsOperations {
    /**
     * Creates an instance of AttachmentsOperations with the given parameters
     * @param moduleAPIName A string representing the moduleAPIName
     * @param recordId A bigint representing the recordId
     */
    constructor(moduleAPIName, recordId) {
        this.moduleAPIName = moduleAPIName;
        this.recordId = recordId;
    }
    /**
     * The method to download attachment
     * @param id A bigint representing the id
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    downloadAttachment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(this.moduleAPIName.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(this.recordId.toString());
            apiPath = apiPath.concat("/Attachments/");
            apiPath = apiPath.concat(id.toString());
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
            let ResponseHandler = require.resolve("./response_handler");
            return handlerInstance.apiCall(ResponseHandler, "application/x-download");
        });
    }
    /**
     * The method to delete attachment
     * @param id A bigint representing the id
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    deleteAttachment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(this.moduleAPIName.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(this.recordId.toString());
            apiPath = apiPath.concat("/Attachments/");
            apiPath = apiPath.concat(id.toString());
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
            let ActionHandler = require.resolve("./action_handler");
            return handlerInstance.apiCall(ActionHandler, "application/json");
        });
    }
    /**
     * The method to get attachments
     * @param paramInstance An instance of ParameterMap
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    getAttachments(paramInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(this.moduleAPIName.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(this.recordId.toString());
            apiPath = apiPath.concat("/Attachments");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
            handlerInstance.setParam(paramInstance);
            let ResponseHandler = require.resolve("./response_handler");
            return handlerInstance.apiCall(ResponseHandler, "application/json");
        });
    }
    /**
     * The method to upload attachment
     * @param request An instance of FileBodyWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    uploadAttachment(request) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(this.moduleAPIName.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(this.recordId.toString());
            apiPath = apiPath.concat("/Attachments");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_CREATE);
            handlerInstance.setContentType("multipart/form-data");
            handlerInstance.setRequest(request);
            handlerInstance.setMandatoryChecker(true);
            let ActionHandler = require.resolve("./action_handler");
            return handlerInstance.apiCall(ActionHandler, "application/json");
        });
    }
    /**
     * The method to upload link attachment
     * @param paramInstance An instance of ParameterMap
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    uploadLinkAttachment(paramInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(this.moduleAPIName.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(this.recordId.toString());
            apiPath = apiPath.concat("/Attachments");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_CREATE);
            handlerInstance.setMandatoryChecker(true);
            handlerInstance.setParam(paramInstance);
            let ActionHandler = require.resolve("./action_handler");
            return handlerInstance.apiCall(ActionHandler, "application/json");
        });
    }
    /**
     * The method to delete attachments
     * @param paramInstance An instance of ParameterMap
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    deleteAttachments(paramInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/");
            apiPath = apiPath.concat(this.moduleAPIName.toString());
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(this.recordId.toString());
            apiPath = apiPath.concat("/Attachments");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
            handlerInstance.setParam(paramInstance);
            let ActionHandler = require.resolve("./action_handler");
            return handlerInstance.apiCall(ActionHandler, "application/json");
        });
    }
}
exports.MasterModel = AttachmentsOperations;
exports.AttachmentsOperations = AttachmentsOperations;
class GetAttachmentsParam {
}
exports.GetAttachmentsParam = GetAttachmentsParam;
GetAttachmentsParam.FIELDS = new param_1.Param("fields", "com.zoho.crm.api.Attachments.GetAttachmentsParam");
GetAttachmentsParam.PAGE = new param_1.Param("page", "com.zoho.crm.api.Attachments.GetAttachmentsParam");
GetAttachmentsParam.PER_PAGE = new param_1.Param("per_page", "com.zoho.crm.api.Attachments.GetAttachmentsParam");
class UploadLinkAttachmentParam {
}
exports.UploadLinkAttachmentParam = UploadLinkAttachmentParam;
UploadLinkAttachmentParam.ATTACHMENTURL = new param_1.Param("attachmentUrl", "com.zoho.crm.api.Attachments.UploadLinkAttachmentParam");
class DeleteAttachmentsParam {
}
exports.DeleteAttachmentsParam = DeleteAttachmentsParam;
DeleteAttachmentsParam.IDS = new param_1.Param("ids", "com.zoho.crm.api.Attachments.DeleteAttachmentsParam");
//# sourceMappingURL=attachments_operations.js.map