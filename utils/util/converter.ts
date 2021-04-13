import { SDKException } from "../../core/com/zoho/crm/api/exception/sdk_exception";
import { Initializer } from "../../routes/initializer";
import { CommonAPIHandler } from "../../routes/middlewares/common_api_handler";
import { Choice } from "./choice";
import { Constants } from "./constants";

/**
 * This class is to construct API request and response.
 */
export abstract class Converter {
    protected commonAPIHandler: CommonAPIHandler;

	/**
	 * This abstract method is to process the API response.
	 * @param {object} response - An Object containing the API response contents or response.
	 * @param {string} pack - A String containing the expected method return type.
	 * @returns An Object representing the class instance.
	 * @throws {Error}
	 */
    public abstract getResponse(response: any, pack: string) :Promise<object | null>;

	/**
	 * This method is to construct the API request.
	 * @param {object} requestInstance - An Object containing the class instance.
	 * @param {string} pack - A String containing the expected method return type.
	 * @param {int} instanceNumber - An Integer containing the class instance list number.
	 * @param {object} classMemberDetail - An object containing the member properties
	 * @returns An Object representing the API request body object.
	 * @throws {Error}
	 */
    public abstract formRequest(requestInstance: object, pack: string, instanceNumber: number | null, classMemberDetail: object | null) :Promise<object | null>;

	/**
	 * This abstract method is to process the API response.
	 * @param {object} response - An Object containing the HttpResponse class instance.
	 * @param {string} pack - A String containing the expected method return type.
	 * @returns An Object representing the class instance.
	 * @throws {Error}
	 */
    public abstract getWrappedResponse(response: any,pack: string) :Promise<object | null>;

	/**
	 * This abstract method is to construct the API request body.
	 * @param {object} requestBase
	 * @param {object} requestObject - A Object containing the API request body object.
	 * @throws {Error}
	 */
    public abstract appendToRequest(requestBase: object) :Promise<any>;

	/**
	 * Creates a Converter class instance with the CommonAPIHandler class instance.
	 * @param {CommonAPIHandler} commonAPIHandler - A CommonAPIHandler class instance.
	 */
	constructor(commonAPIHandler: CommonAPIHandler) {
        this.commonAPIHandler = commonAPIHandler;
	}

	/**
	 * This method is to validate if the input values satisfy the constraints for the respective fields.
	 * @param {string} className - A String containing the class name.
	 * @param {string} memberName - A String containing the member name.
	 * @param {object} keyDetails - A JSONObject containing the key JSON details.
	 * @param {object} value - A Object containing the key value.
	 * @param {Map} uniqueValuesMap - A Map containing the value of constructed object's unique fields.
	 * @param {int} instanceNumber - An Integer containing the class instance list number.
	 * @returns A Boolean representing the key value is expected pattern, unique, length, and values.
	 * @throws {SDKException}
	 */
	public async valueChecker(className: string, memberName: string, keyDetails: {[key: string]: any}, value: any, uniqueValuesMap: Map<string,any[]>, instanceNumber: number | null): Promise<boolean>{
		let detailsJO: {[key: string]: any} = {};
		var name: string = keyDetails[Constants.NAME];
		var type: string = keyDetails[Constants.TYPE];
		var valueType = Object.prototype.toString.call(value);
		let check: boolean = true;
		let givenType = null;
		if(Constants.TYPE_VS_DATATYPE.has(type.toLowerCase())) {
			if(Array.isArray(value) && keyDetails.hasOwnProperty(Constants.STRUCTURE_NAME)) {
				let structureName = keyDetails[Constants.STRUCTURE_NAME];
				let index = 0;
				let className = (await import("../../" + structureName)).MasterModel;
				for(let data of value) {
					if(!(data instanceof className)) {
						check = false;
						instanceNumber = index;
						let baseName = structureName.split("/").pop();
						let classNameSplit = baseName.split("_");
						let expectedClassName = "";
						for (var nameIndex = 0; nameIndex < classNameSplit.length; nameIndex++) {
							var fieldName = classNameSplit[nameIndex];
							var firstLetterUppercase = fieldName[0].toUpperCase() +  fieldName.slice(1);
							expectedClassName = expectedClassName.concat(firstLetterUppercase);
						}
						type = Constants.ARRAY_KEY + "(" + expectedClassName + ")";
						givenType = Constants.ARRAY_KEY + "(" + data.constructor.name + ")";
						break;
					}
					index = index + 1;
				}
			}
			else if(value != null) {//TypeScript don't have int type
				check = (valueType != Constants.TYPE_VS_DATATYPE.get(type.toLowerCase()) ? false : true);
				givenType = Object.getPrototypeOf(value).constructor.name;
			}
		}
		else if(value != null && type.toLowerCase() !== Constants.OBJECT_KEY){
			let expectedStructure = keyDetails[Constants.TYPE];
			let className = (await import("../../" + expectedStructure)).MasterModel;
			if(!(value instanceof className)){
				check = false;
				type = expectedStructure;
				givenType = value.constructor.name;
			}
		}
		if(!check) {
			detailsJO[Constants.ERROR_HASH_FIELD] = name;
			detailsJO[Constants.ERROR_HASH_CLASS] = className;
			detailsJO[Constants.ACCEPTED_TYPE] = Constants.SPECIAL_TYPES.has(type)? Constants.SPECIAL_TYPES.get(type) : type;
			detailsJO[Constants.GIVEN_TYPE] = givenType;
			if(instanceNumber != null) {
				detailsJO[Constants.INDEX] = instanceNumber;
			}

			throw new SDKException(Constants.TYPE_ERROR, null, detailsJO);
		}

		let initializer = await Initializer.getInitializer();
		if (keyDetails.hasOwnProperty(Constants.VALUES) && (!keyDetails.hasOwnProperty(Constants.PICKLIST)) || (keyDetails[Constants.PICKLIST] && initializer.getSDKConfig().getPickListValidation() == true)) {
			let valuesJA = keyDetails[Constants.VALUES];
			if(value instanceof Choice) {
				value = value.getValue();
			}
			if (!valuesJA.toString().includes(value)) {
				detailsJO[Constants.ERROR_HASH_FIELD] = memberName;
				detailsJO[Constants.ERROR_HASH_CLASS] = className;
				if(instanceNumber != null) {
					detailsJO[Constants.INDEX] = instanceNumber;
				}
				detailsJO[Constants.ACCEPTED_VALUES] = valuesJA;
				throw new SDKException(Constants.UNACCEPTED_VALUES_ERROR, null, detailsJO);
			}
		}
		if (keyDetails.hasOwnProperty(Constants.UNIQUE)){
			let valuesArray: any[] | undefined = uniqueValuesMap.get(name);
			if (valuesArray !== undefined && valuesArray.includes(value)){
				detailsJO[Constants.ERROR_HASH_FIELD] = memberName;
				detailsJO[Constants.ERROR_HASH_CLASS] = className;
				detailsJO[Constants.FIRST_INDEX] = valuesArray.indexOf(value);
				detailsJO[Constants.NEXT_INDEX] = instanceNumber;
				throw new SDKException(Constants.UNIQUE_KEY_ERROR, null, detailsJO);
			}
			else {
				if(valuesArray === undefined) {
					valuesArray = [];
				}
				valuesArray.push(value);
				uniqueValuesMap.set(name, valuesArray);
			}
		}
		if (keyDetails.hasOwnProperty(Constants.MIN_LENGTH) || keyDetails.hasOwnProperty(Constants.MAX_LENGTH)) {
			let count = value.toString().length;
			if(Array.isArray(value)) {
				count = value.length;
			}
			if (keyDetails.hasOwnProperty(Constants.MAX_LENGTH) && (count > keyDetails[Constants.MAX_LENGTH])) {
				detailsJO[Constants.ERROR_HASH_FIELD] = memberName;
				detailsJO[Constants.ERROR_HASH_CLASS] = className;
				detailsJO[Constants.GIVEN_LENGTH] = count;
				detailsJO[Constants.ERROR_HASH_MAXIMUM_LENGTH] = keyDetails[Constants.MAX_LENGTH];
				throw new SDKException(Constants.MAXIMUM_LENGTH_ERROR, null, detailsJO);
			}

			if (keyDetails.hasOwnProperty(Constants.MIN_LENGTH) && count < keyDetails[Constants.MIN_LENGTH]) {
				detailsJO[Constants.ERROR_HASH_FIELD] = memberName;
				detailsJO[Constants.ERROR_HASH_CLASS] = className;
				detailsJO[Constants.GIVEN_LENGTH] = count;
				detailsJO[Constants.ERROR_HASH_MINIMUM_LENGTH] = keyDetails[Constants.MIN_LENGTH];
				throw new SDKException(Constants.MINIMUM_LENGTH_ERROR, null,  detailsJO);
			}
		}
		if (keyDetails.hasOwnProperty(Constants.REGEX)) {
			if (!keyDetails[Constants.REGEX].match(value)) {
				detailsJO[Constants.ERROR_HASH_FIELD] = memberName;
				detailsJO[Constants.ERROR_HASH_CLASS] = className;
				if(instanceNumber != null) {
					detailsJO[Constants.INDEX] = instanceNumber;
				}
				throw new SDKException(Constants.REGEX_MISMATCH_ERROR, null,  detailsJO);
			}
		}

		return true;
	}
    /**
     * getEncodedFileName
     */
    public static async getEncodedFileName() {
        let initializer = await Initializer.getInitializer();
		var fileName = initializer.getUser().getEmail();
		fileName =(fileName).substring(0,(fileName.indexOf( '@' ))) + initializer.getEnvironment().getUrl();
		var input = this.toUTF8Array(fileName);
		var str = Buffer.from(input).toString('base64')
		return str.concat(".json");
    }

    public static toUTF8Array(str: string) {
		var utf8 = [];

		for (var i=0; i < str.length; i++) {
			var charcode = str.charCodeAt(i);

			if (charcode < 0x80) utf8.push(charcode);
			else if (charcode < 0x800) {
				utf8.push(0xc0 | (charcode >> 6),
						  0x80 | (charcode & 0x3f));
			}
			else if (charcode < 0xd800 || charcode >= 0xe000) {
				utf8.push(0xe0 | (charcode >> 12),
						  0x80 | ((charcode>>6) & 0x3f),
						  0x80 | (charcode & 0x3f));
			}
			else {
				i++;
				// UTF-16 encodes 0x10000-0x10FFFF by
				// subtracting 0x10000 and splitting the
				// 20 bits of 0x0-0xFFFFF into two halves
				charcode = 0x10000 + (((charcode & 0x3ff)<<10)
						  | (str.charCodeAt(i) & 0x3ff));

				utf8.push(0xf0 | (charcode >>18),
						  0x80 | ((charcode>>12) & 0x3f),
						  0x80 | ((charcode>>6) & 0x3f),
						  0x80 | (charcode & 0x3f));
			}
		}
		return utf8;
	}

	public getFileName(name: string): string{
		let fileName = [];
		let nameParts = name.split(/([A-Z][a-z]+)/).filter(function(e){return e});
		fileName.push(nameParts[0].toLowerCase());
		for(let i=1;i<nameParts.length;i++){
			fileName.push(nameParts[i].toLowerCase());
		}
		return fileName.join("_");
	}
}