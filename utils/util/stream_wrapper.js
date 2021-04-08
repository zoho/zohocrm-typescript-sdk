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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamWrapper = exports.MasterModel = void 0;
const fs = __importStar(require("fs"));
const sdk_exception_1 = require("../../core/com/zoho/crm/api/exception/sdk_exception");
const path = __importStar(require("path"));
const constants_1 = require("./constants");
/**
 * This class handles the file stream and name.
 */
class StreamWrapper {
    /**
     * Creates a StreamWrapper class instance with the specified parameters.
     * @param {string} name - A String containing the file name.
     * @param {object} stream - A InputStream containing the file stream.
     * @param {string} filePath - A String containing the absolute file path.
    */
    constructor(name, stream, filePath) {
        if (filePath === undefined || filePath === null) {
            this.name = name;
            this.stream = stream;
        }
        else {
            if (!fs.existsSync(filePath)) {
                throw new sdk_exception_1.SDKException(constants_1.Constants.FILE_ERROR, constants_1.Constants.FILE_DOES_NOT_EXISTS);
            }
            this.file = filePath;
            this.name = path.basename(filePath);
            this.stream = fs.createReadStream(filePath);
        }
    }
    /**
     * This is a getter method to get the file name.
     * @returns A String representing the file name.
    */
    getName() {
        return this.name;
    }
    /**
     * This is a getter method to get the file input stream.
     * @returns A ReadStream representing the file input stream.
    */
    getStream() {
        return this.stream;
    }
}
exports.MasterModel = StreamWrapper;
exports.StreamWrapper = StreamWrapper;
//# sourceMappingURL=stream_wrapper.js.map