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
exports.CurrenciesOperations = exports.MasterModel = void 0;
const common_api_handler_1 = require("../../../../../../routes/middlewares/common_api_handler");
const constants_1 = require("../../../../../../utils/util/constants");
class CurrenciesOperations {
    /**
     * The method to get currencies
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    getCurrencies() {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/org/currencies");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
            let ResponseHandler = require.resolve("./response_handler");
            return handlerInstance.apiCall(ResponseHandler, "application/json");
        });
    }
    /**
     * The method to add currencies
     * @param request An instance of BodyWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    addCurrencies(request) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/org/currencies");
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
     * The method to update currencies
     * @param request An instance of BodyWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    updateCurrencies(request) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/org/currencies");
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
     * The method to enable multiple currencies
     * @param request An instance of BaseCurrencyWrapper
     * @returns An instance of APIResponse<BaseCurrencyActionHandler>
     * @throws SDKException
     */
    enableMultipleCurrencies(request) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/org/currencies/actions/enable");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_POST);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_CREATE);
            handlerInstance.setContentType("application/json");
            handlerInstance.setRequest(request);
            handlerInstance.setMandatoryChecker(true);
            let BaseCurrencyActionHandler = require.resolve("./base_currency_action_handler");
            return handlerInstance.apiCall(BaseCurrencyActionHandler, "application/json");
        });
    }
    /**
     * The method to update base currency
     * @param request An instance of BaseCurrencyWrapper
     * @returns An instance of APIResponse<BaseCurrencyActionHandler>
     * @throws SDKException
     */
    updateBaseCurrency(request) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/org/currencies/actions/enable");
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_PUT);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_UPDATE);
            handlerInstance.setContentType("application/json");
            handlerInstance.setRequest(request);
            handlerInstance.setMandatoryChecker(true);
            let BaseCurrencyActionHandler = require.resolve("./base_currency_action_handler");
            return handlerInstance.apiCall(BaseCurrencyActionHandler, "application/json");
        });
    }
    /**
     * The method to get currency
     * @param id A bigint representing the id
     * @returns An instance of APIResponse<ResponseHandler>
     * @throws SDKException
     */
    getCurrency(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/org/currencies/");
            apiPath = apiPath.concat(id.toString());
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_GET);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_READ);
            let ResponseHandler = require.resolve("./response_handler");
            return handlerInstance.apiCall(ResponseHandler, "application/json");
        });
    }
    /**
     * The method to update currency
     * @param id A bigint representing the id
     * @param request An instance of BodyWrapper
     * @returns An instance of APIResponse<ActionHandler>
     * @throws SDKException
     */
    updateCurrency(id, request) {
        return __awaiter(this, void 0, void 0, function* () {
            let handlerInstance = new common_api_handler_1.CommonAPIHandler();
            let apiPath = '';
            apiPath = apiPath.concat("/crm/v2/org/currencies/");
            apiPath = apiPath.concat(id.toString());
            handlerInstance.setAPIPath(apiPath);
            handlerInstance.setHttpMethod(constants_1.Constants.REQUEST_METHOD_PUT);
            handlerInstance.setCategoryMethod(constants_1.Constants.REQUEST_CATEGORY_UPDATE);
            handlerInstance.setContentType("application/json");
            handlerInstance.setRequest(request);
            let ActionHandler = require.resolve("./action_handler");
            return handlerInstance.apiCall(ActionHandler, "application/json");
        });
    }
}
exports.MasterModel = CurrenciesOperations;
exports.CurrenciesOperations = CurrenciesOperations;
//# sourceMappingURL=currencies_operations.js.map