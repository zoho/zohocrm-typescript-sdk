import { HeaderParamValidator } from '../utils/util/header_param_validator';
import { StreamWrapper } from '../utils/util/stream_wrapper';
import { Header } from './header';
import { SDKException } from "../core/com/zoho/crm/api/exception/sdk_exception";
import { Constants} from '../utils/util/constants';

/**
 * This class represents the HTTP header name and value.
 */
class HeaderMap {
    private headerMap: Map<string,string> = new Map<string,string>();

    /**
	 * This is a getter method to get the header map.
	 * @returns {Map} A Map representing the API request headers.
	 */
    public getHeaderMap() : Map<string,string> {
        return this.headerMap;
    }

    /**
	 * The method to add the header name and value.
	 * @param {Header} header - A Header class instance.
	 * @param {object} value - An object containing the header value.
	 * @throws {SDKException}
	 */
    public async add<T>(header: Header<T>, value: T) {
        if(header == null || header == undefined) {
			throw new SDKException(Constants.HEADER_NULL_ERROR, Constants.HEADER_INSTANCE_NULL_ERROR);
        }

        let headerName = header.getName();

        if(headerName == null || headerName == undefined) {
			throw new SDKException(Constants.HEADER_NAME_NULL_ERROR, Constants.HEADER_NAME_NULL_ERROR_MESSAGE);
        }

        if(value == null) {
			throw new SDKException(Constants.HEADER_NULL_ERROR, headerName + Constants.NULL_VALUE_ERROR_MESSAGE);
		}

        let headerClassName = header.getClassName();
        let headerValue: any;
        if(headerClassName !== undefined) {
            headerValue = await new HeaderParamValidator().validate(header, value);
        }
        if(this.headerMap.has(headerName) && this.headerMap.get(headerName) != null) {
            let existingHeaderValue = this.headerMap.get(headerName);
            if(existingHeaderValue !== undefined){
                headerValue = existingHeaderValue.concat(",", headerValue.toString());
                this.headerMap.set(headerName, headerValue);
            }
        }
        else {
            this.headerMap.set(headerName, headerValue.toString());
        }
    }
}

export {
    HeaderMap as MasterModel,
    HeaderMap as HeaderMap
}