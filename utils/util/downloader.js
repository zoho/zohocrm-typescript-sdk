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
exports.Downloader = exports.MasterModel = void 0;
const initializer_1 = require("../../routes/initializer");
const constants_1 = require("./constants");
const converter_1 = require("./converter");
const stream_wrapper_1 = require("./stream_wrapper");
/**
 * This class is to process the download file and stream response.
 * @extends Converter
 */
class Downloader extends converter_1.Converter {
    constructor(commonAPIHandler) {
        super(commonAPIHandler);
    }
    appendToRequest(requestBase) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    formRequest(requestInstance, pack, instanceNumber, classMemberDetail) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    getWrappedResponse(response, pack) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getResponse(response, pack);
        });
    }
    getResponse(response, pack) {
        return __awaiter(this, void 0, void 0, function* () {
            var instance = null;
            var instanceValue = null;
            var classDetail = initializer_1.Initializer.jsonDetails[pack];
            if (classDetail.hasOwnProperty(constants_1.Constants.INTERFACE) && classDetail[constants_1.Constants.INTERFACE]) {
                let classes = classDetail[constants_1.Constants.CLASSES];
                for (let index = 0; index < classes.length; index++) {
                    let eachClass = classes[index];
                    if (eachClass.toString().includes(constants_1.Constants.FILE_BODY_WRAPPER)) {
                        return this.getResponse(response, eachClass);
                    }
                }
            }
            else {
                let ClassName = (yield Promise.resolve().then(() => __importStar(require("../../" + pack)))).MasterModel;
                instance = new ClassName();
                for (let memberName in classDetail) {
                    var memberDetail = classDetail[memberName];
                    var type = memberDetail[constants_1.Constants.TYPE];
                    if (type === constants_1.Constants.STREAM_WRAPPER_CLASS_PATH) {
                        var fileName = "";
                        let contentDisposition = (response.headers[constants_1.Constants.CONTENT_DISPOSITION]).toString();
                        if (contentDisposition.includes("'")) {
                            let start_index = contentDisposition.lastIndexOf("'");
                            fileName = contentDisposition.substring(start_index + 1);
                        }
                        else if (contentDisposition.includes("\"")) {
                            let start_index = contentDisposition.lastIndexOf("=");
                            fileName = contentDisposition.substring(start_index + 1).replace(/"/g, "");
                        }
                        instanceValue = new stream_wrapper_1.StreamWrapper(fileName, response.rawBody, null);
                    }
                    Reflect.set(instance, memberName, instanceValue);
                }
            }
            return instance;
        });
    }
}
exports.MasterModel = Downloader;
exports.Downloader = Downloader;
//# sourceMappingURL=downloader.js.map