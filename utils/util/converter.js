"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.Converter = void 0;
const sdk_exception_1 = require("../../core/com/zoho/crm/api/exception/sdk_exception");
const initializer_1 = require("../../routes/initializer");
const choice_1 = require("./choice");
const constants_1 = require("./constants");
/**
 * This class is to construct API request and response.
 */
class Converter {
    /**
     * Creates a Converter class instance with the CommonAPIHandler class instance.
     * @param {CommonAPIHandler} commonAPIHandler - A CommonAPIHandler class instance.
     */
    constructor(commonAPIHandler) {
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
    valueChecker(className, memberName, keyDetails, value, uniqueValuesMap, instanceNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            let detailsJO = {};
            var name = keyDetails[constants_1.Constants.NAME];
            var type = keyDetails[constants_1.Constants.TYPE];
            var valueType = Object.prototype.toString.call(value);
            let check = true;
            let givenType = null;
            if (constants_1.Constants.TYPE_VS_DATATYPE.has(type.toLowerCase())) {
                if (Array.isArray(value) && keyDetails.hasOwnProperty(constants_1.Constants.STRUCTURE_NAME)) {
                    let structureName = keyDetails[constants_1.Constants.STRUCTURE_NAME];
                    let index = 0;
                    let className = (yield Promise.resolve().then(() => __importStar(require("../../" + structureName)))).MasterModel;
                    for (let data of value) {
                        if (!(data instanceof className)) {
                            check = false;
                            instanceNumber = index;
                            let baseName = structureName.split("/").pop();
                            let classNameSplit = baseName.split("_");
                            let expectedClassName = "";
                            for (var nameIndex = 0; nameIndex < classNameSplit.length; nameIndex++) {
                                var fieldName = classNameSplit[nameIndex];
                                var firstLetterUppercase = fieldName[0].toUpperCase() + fieldName.slice(1);
                                expectedClassName = expectedClassName.concat(firstLetterUppercase);
                            }
                            type = constants_1.Constants.ARRAY_KEY + "(" + expectedClassName + ")";
                            givenType = constants_1.Constants.ARRAY_KEY + "(" + data.constructor.name + ")";
                            break;
                        }
                        index = index + 1;
                    }
                }
                else if (value != null) { //TypeScript don't have int type
                    check = (valueType != constants_1.Constants.TYPE_VS_DATATYPE.get(type.toLowerCase()) ? false : true);
                    givenType = Object.getPrototypeOf(value).constructor.name;
                }
            }
            else if (value != null && type.toLowerCase() !== constants_1.Constants.OBJECT_KEY) {
                let expectedStructure = keyDetails[constants_1.Constants.TYPE];
                let className = (yield Promise.resolve().then(() => __importStar(require("../../" + expectedStructure)))).MasterModel;
                if (!(value instanceof className)) {
                    check = false;
                    type = expectedStructure;
                    givenType = value.constructor.name;
                }
            }
            if (!check) {
                detailsJO[constants_1.Constants.ERROR_HASH_FIELD] = name;
                detailsJO[constants_1.Constants.ERROR_HASH_CLASS] = className;
                detailsJO[constants_1.Constants.ACCEPTED_TYPE] = constants_1.Constants.SPECIAL_TYPES.has(type) ? constants_1.Constants.SPECIAL_TYPES.get(type) : type;
                detailsJO[constants_1.Constants.GIVEN_TYPE] = givenType;
                if (instanceNumber != null) {
                    detailsJO[constants_1.Constants.INDEX] = instanceNumber;
                }
                throw new sdk_exception_1.SDKException(constants_1.Constants.TYPE_ERROR, null, detailsJO);
            }
            let initializer = yield initializer_1.Initializer.getInitializer();
            if (keyDetails.hasOwnProperty(constants_1.Constants.VALUES) && (!keyDetails.hasOwnProperty(constants_1.Constants.PICKLIST)) || (keyDetails[constants_1.Constants.PICKLIST] && initializer.getSDKConfig().getPickListValidation() == true)) {
                let valuesJA = keyDetails[constants_1.Constants.VALUES];
                if (value instanceof choice_1.Choice) {
                    value = value.getValue();
                }
                if (!valuesJA.toString().includes(value)) {
                    detailsJO[constants_1.Constants.ERROR_HASH_FIELD] = memberName;
                    detailsJO[constants_1.Constants.ERROR_HASH_CLASS] = className;
                    if (instanceNumber != null) {
                        detailsJO[constants_1.Constants.INDEX] = instanceNumber;
                    }
                    detailsJO[constants_1.Constants.ACCEPTED_VALUES] = valuesJA;
                    throw new sdk_exception_1.SDKException(constants_1.Constants.UNACCEPTED_VALUES_ERROR, null, detailsJO);
                }
            }
            if (keyDetails.hasOwnProperty(constants_1.Constants.UNIQUE)) {
                let valuesArray = uniqueValuesMap.get(name);
                if (valuesArray !== undefined && valuesArray.includes(value)) {
                    detailsJO[constants_1.Constants.ERROR_HASH_FIELD] = memberName;
                    detailsJO[constants_1.Constants.ERROR_HASH_CLASS] = className;
                    detailsJO[constants_1.Constants.FIRST_INDEX] = valuesArray.indexOf(value);
                    detailsJO[constants_1.Constants.NEXT_INDEX] = instanceNumber;
                    throw new sdk_exception_1.SDKException(constants_1.Constants.UNIQUE_KEY_ERROR, null, detailsJO);
                }
                else {
                    if (valuesArray === undefined) {
                        valuesArray = [];
                    }
                    valuesArray.push(value);
                    uniqueValuesMap.set(name, valuesArray);
                }
            }
            if (keyDetails.hasOwnProperty(constants_1.Constants.MIN_LENGTH) || keyDetails.hasOwnProperty(constants_1.Constants.MAX_LENGTH)) {
                let count = value.toString().length;
                if (Array.isArray(value)) {
                    count = value.length;
                }
                if (keyDetails.hasOwnProperty(constants_1.Constants.MAX_LENGTH) && (count > keyDetails[constants_1.Constants.MAX_LENGTH])) {
                    detailsJO[constants_1.Constants.ERROR_HASH_FIELD] = memberName;
                    detailsJO[constants_1.Constants.ERROR_HASH_CLASS] = className;
                    detailsJO[constants_1.Constants.GIVEN_LENGTH] = count;
                    detailsJO[constants_1.Constants.ERROR_HASH_MAXIMUM_LENGTH] = keyDetails[constants_1.Constants.MAX_LENGTH];
                    throw new sdk_exception_1.SDKException(constants_1.Constants.MAXIMUM_LENGTH_ERROR, null, detailsJO);
                }
                if (keyDetails.hasOwnProperty(constants_1.Constants.MIN_LENGTH) && count < keyDetails[constants_1.Constants.MIN_LENGTH]) {
                    detailsJO[constants_1.Constants.ERROR_HASH_FIELD] = memberName;
                    detailsJO[constants_1.Constants.ERROR_HASH_CLASS] = className;
                    detailsJO[constants_1.Constants.GIVEN_LENGTH] = count;
                    detailsJO[constants_1.Constants.ERROR_HASH_MINIMUM_LENGTH] = keyDetails[constants_1.Constants.MIN_LENGTH];
                    throw new sdk_exception_1.SDKException(constants_1.Constants.MINIMUM_LENGTH_ERROR, null, detailsJO);
                }
            }
            if (keyDetails.hasOwnProperty(constants_1.Constants.REGEX)) {
                if (!keyDetails[constants_1.Constants.REGEX].match(value)) {
                    detailsJO[constants_1.Constants.ERROR_HASH_FIELD] = memberName;
                    detailsJO[constants_1.Constants.ERROR_HASH_CLASS] = className;
                    if (instanceNumber != null) {
                        detailsJO[constants_1.Constants.INDEX] = instanceNumber;
                    }
                    throw new sdk_exception_1.SDKException(constants_1.Constants.REGEX_MISMATCH_ERROR, null, detailsJO);
                }
            }
            return true;
        });
    }
    /**
     * getEncodedFileName
     */
    static getEncodedFileName() {
        return __awaiter(this, void 0, void 0, function* () {
            let initializer = yield initializer_1.Initializer.getInitializer();
            var fileName = initializer.getUser().getEmail();
            fileName = (fileName).substring(0, (fileName.indexOf('@'))) + initializer.getEnvironment().getUrl();
            var input = this.toUTF8Array(fileName);
            var str = Buffer.from(input).toString('base64');
            return str.concat(".json");
        });
    }
    static toUTF8Array(str) {
        var utf8 = [];
        for (var i = 0; i < str.length; i++) {
            var charcode = str.charCodeAt(i);
            if (charcode < 0x80)
                utf8.push(charcode);
            else if (charcode < 0x800) {
                utf8.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f));
            }
            else if (charcode < 0xd800 || charcode >= 0xe000) {
                utf8.push(0xe0 | (charcode >> 12), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
            }
            else {
                i++;
                // UTF-16 encodes 0x10000-0x10FFFF by
                // subtracting 0x10000 and splitting the
                // 20 bits of 0x0-0xFFFFF into two halves
                charcode = 0x10000 + (((charcode & 0x3ff) << 10)
                    | (str.charCodeAt(i) & 0x3ff));
                utf8.push(0xf0 | (charcode >> 18), 0x80 | ((charcode >> 12) & 0x3f), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
            }
        }
        return utf8;
    }
    getFileName(name) {
        let fileName = [];
        let nameParts = name.split(/([A-Z][a-z]+)/).filter(function (e) { return e; });
        fileName.push(nameParts[0].toLowerCase());
        for (let i = 1; i < nameParts.length; i++) {
            fileName.push(nameParts[i].toLowerCase());
        }
        return fileName.join("_");
    }
}
exports.Converter = Converter;
//# sourceMappingURL=converter.js.map