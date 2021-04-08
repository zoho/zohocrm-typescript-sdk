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
exports.UploadFileHeader = exports.BulkWriteOperations = exports.MasterModel = void 0;
const header_1 = require("../../../../../../routes/header");
const common_api_handler_1 = require("../../../../../../routes/middlewares/common_api_handler");
const constants_1 = require("../../../../../../utils/util/constants");
class BulkWriteOperations {
    /**
     * The method to upload file
     * @param request An instance of FileBodyWrapper
     * @param headerInstance An instance of HeaderMap
     * @returns An instance of APIResponse<ActionResponse>
     * @throws SDKException
     */
    uploadFile(request, headerInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("https://content.zohoapis.com/crm/v2/upload");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_CREATE);
            handlerInstance.setContentType("multipart/form-data");
            handlerInstance.setRequest(request);
            handlerInstance.setMandatoryChecker(true);
            handlerInstance.setHeader(headerInstance);
            let ActionResponse = require.resolve("./action_response");
            return handlerInstance.apiCall(ActionResponse, "application/json");
        });
    }
    /**
     * The method to create bulk write job
     * @param request An instance of RequestWrapper
     * @returns An instance of APIResponse<ActionResponse>
     * @throws SDKException
     */
    createBulkWriteJob(request) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/bulk/v2/write");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_CREATE);
            handlerInstance.setContentType("application/json");
            handlerInstance.setRequest(request);
            handlerInstance.setMandatoryChecker(true);
            let ActionResponse = require.resolve("./action_response");
            return handlerInstance.apiCall(ActionResponse, "application/json");
        });
    }
    /**
     * The method to get bulk write job details
     * @param jobId A bigint representing the jobId
     * @returns An instance of APIResponse<ResponseWrapper>
     * @throws SDKException
     */
    getBulkWriteJobDetails(jobId) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/bulk/v2/write/");
            apiPath = apiPath.concat(jobId.toString());
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
            let ResponseWrapper = require.resolve("./response_wrapper");
            return handlerInstance.apiCall(ResponseWrapper, "application/json");
        });
    }
    /**
     * The method to download bulk write result
     * @param downloadUrl A string representing the downloadUrl
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    downloadBulkWriteResult(downloadUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/");
            apiPath = apiPath.concat(downloadUrl.toString());
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
            let ResponseHandler = require.resolve("./response_handler");
            return handlerInstance.apiCall(ResponseHandler, "application/octet-stream");
        });
    }
}
exports.MasterModel = BulkWriteOperations;
exports.BulkWriteOperations = BulkWriteOperations;
class UploadFileHeader {
}
exports.UploadFileHeader = UploadFileHeader;
UploadFileHeader.FEATURE = new header_1.Header("feature", "com.zoho.crm.api.BulkWrite.UploadFileHeader");
UploadFileHeader.X_CRM_ORG = new header_1.Header("X-CRM-ORG", "com.zoho.crm.api.BulkWrite.UploadFileHeader");
//# sourceMappingURL=bulk_write_operations.js.map