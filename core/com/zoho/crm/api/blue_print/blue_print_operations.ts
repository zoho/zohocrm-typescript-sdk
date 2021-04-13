import {ActionResponse} from "./action_response";
import {BodyWrapper} from "./body_wrapper";
import {ResponseHandler} from "./response_handler";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class BluePrintOperations{

	private moduleAPIName: string;
	private recordId: bigint;
	/**
	 * Creates an instance of BluePrintOperations with the given parameters
	 * @param recordId A bigint representing the recordId
	 * @param moduleAPIName A string representing the moduleAPIName
	 */
	constructor(recordId: bigint, moduleAPIName: string){
		this.recordId = recordId;
		this.moduleAPIName = moduleAPIName;

	}

	/**
	 * The method to get blueprint
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getBlueprint(): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.recordId.toString());
		apiPath = apiPath.concat("/actions/blueprint");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to update blueprint
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionResponse>
	 * @throws SDKException
	 */
	public async updateBlueprint(request: BodyWrapper): Promise<APIResponse<ActionResponse>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2/");
		apiPath = apiPath.concat(this.moduleAPIName.toString());
		apiPath = apiPath.concat("/");
		apiPath = apiPath.concat(this.recordId.toString());
		apiPath = apiPath.concat("/actions/blueprint");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		let ActionResponse = require.resolve("./action_response");
		return handlerInstance.apiCall<ActionResponse>(ActionResponse, "application/json");

	}

}
export {
	BluePrintOperations as MasterModel,
	BluePrintOperations as BluePrintOperations
}
