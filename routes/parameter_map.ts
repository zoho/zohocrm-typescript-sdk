import { HeaderParamValidator } from '../utils/util/header_param_validator';
import { Param} from './param';
import { SDKException } from "../core/com/zoho/crm/api/exception/sdk_exception";
import { Constants} from '../utils/util/constants';

/**
 * This class represents the HTTP parameter name and value.
 */
class ParameterMap {
    private parameterMap: Map<string,string> = new Map<string,string>();

    /**
	 * This is a getter method to get parameter map.
	 * @returns {Map} A Map representing the API request parameters.
	 */
    public getParameterMap() : Map<string,string> {
        return this.parameterMap;
    }

    /**
	 * The method to add parameter name and value.
	 * @param {Param} param - A Param class instance.
	 * @param {object} value - An object containing the parameter value.
	 * @throws {SDKException}
	 */
    public async add<T>(param: Param<T>, value: T){
        if(param == null || param == undefined) {
			throw new SDKException(Constants.PARAMETER_NULL_ERROR, Constants.PARAM_INSTANCE_NULL_ERROR);
		}

        let paramName = param.getName();

        if(paramName == null || paramName == undefined) {
			throw new SDKException(Constants.PARAM_NAME_NULL_ERROR, Constants.PARAM_NAME_NULL_ERROR_MESSAGE);
        }

        if(value == null) {
			throw new SDKException(Constants.PARAMETER_NULL_ERROR, paramName + Constants.NULL_VALUE_ERROR_MESSAGE);
		}

        let paramClassName = param.getClassName();
        let paramValue: any;

        if(paramClassName !==  undefined) {
            paramValue = await new HeaderParamValidator().validate(param, value);
        }

        if(this.parameterMap.has(paramName) && this.parameterMap.get(paramName)!= null) {
            let existingParamValue = this.parameterMap.get(paramName);
            if(existingParamValue !== undefined){
                paramValue = existingParamValue.concat(",", paramValue.toString());
                this.parameterMap.set(paramName, paramValue);
            }
		}
		else {
			this.parameterMap.set(paramName, paramValue.toString());
		}
    }
}

export {
    ParameterMap as MasterModel,
    ParameterMap as ParameterMap
}