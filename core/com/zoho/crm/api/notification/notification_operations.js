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
exports.NotificationOperations = exports.MasterModel = exports.DisableNotificationsParam = exports.GetNotificationDetailsParam = void 0;
const param_1 = require("../../../../../../routes/param");
const common_api_handler_1 = require("../../../../../../routes/middlewares/common_api_handler");
const constants_1 = require("../../../../../../utils/util/constants");
class NotificationOperations {
    /**
     * The method to enable notifications
     * @param request An instance of BodyWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    enableNotifications(request) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/actions/watch");
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
     * The method to get notification details
     * @param paramInstance An instance of ParameterMap
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    getNotificationDetails(paramInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/actions/watch");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
            handlerInstance.setParam(paramInstance);
            let ResponseHandler = require.resolve("./response_handler");
            return handlerInstance.apiCall(ResponseHandler, "application/json");
        });
    }
    /**
     * The method to update notifications
     * @param request An instance of BodyWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    updateNotifications(request) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/actions/watch");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_PUT);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_UPDATE);
            handlerInstance.setContentType("application/json");
            handlerInstance.setRequest(request);
            handlerInstance.setMandatoryChecker(true);
            let ActionHandler = require.resolve("./action_handler");
            return handlerInstance.apiCall(ActionHandler, "application/json");
        });
    }
    /**
     * The method to update notification
     * @param request An instance of BodyWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    updateNotification(request) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/actions/watch");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_PATCH);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_UPDATE);
            handlerInstance.setContentType("application/json");
            handlerInstance.setRequest(request);
            handlerInstance.setMandatoryChecker(true);
            let ActionHandler = require.resolve("./action_handler");
            return handlerInstance.apiCall(ActionHandler, "application/json");
        });
    }
    /**
     * The method to disable notifications
     * @param paramInstance An instance of ParameterMap
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    disableNotifications(paramInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/actions/watch");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_METHOD_DELETE);
            handlerInstance.setParam(paramInstance);
            let ActionHandler = require.resolve("./action_handler");
            return handlerInstance.apiCall(ActionHandler, "application/json");
        });
    }
    /**
     * The method to disable notification
     * @param request An instance of BodyWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    disableNotification(request) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/actions/watch");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_PATCH);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_UPDATE);
            handlerInstance.setContentType("application/json");
            handlerInstance.setRequest(request);
            handlerInstance.setMandatoryChecker(true);
            let ActionHandler = require.resolve("./action_handler");
            return handlerInstance.apiCall(ActionHandler, "application/json");
        });
    }
}
exports.MasterModel = NotificationOperations;
exports.NotificationOperations = NotificationOperations;
class GetNotificationDetailsParam {
}
exports.GetNotificationDetailsParam = GetNotificationDetailsParam;
GetNotificationDetailsParam.PAGE = new param_1.Param("page", "com.zoho.crm.api.Notification.GetNotificationDetailsParam");
GetNotificationDetailsParam.PER_PAGE = new param_1.Param("per_page", "com.zoho.crm.api.Notification.GetNotificationDetailsParam");
GetNotificationDetailsParam.CHANNEL_ID = new param_1.Param("channel_id", "com.zoho.crm.api.Notification.GetNotificationDetailsParam");
GetNotificationDetailsParam.MODULE = new param_1.Param("module", "com.zoho.crm.api.Notification.GetNotificationDetailsParam");
class DisableNotificationsParam {
}
exports.DisableNotificationsParam = DisableNotificationsParam;
DisableNotificationsParam.CHANNEL_IDS = new param_1.Param("channel_ids", "com.zoho.crm.api.Notification.DisableNotificationsParam");
//# sourceMappingURL=notification_operations.js.map