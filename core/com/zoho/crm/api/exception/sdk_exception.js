"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDKException = void 0;
/**
 * This class is the common SDKException object.
*/
class SDKException extends Error {
    /**
     * @param {string} code - A String containing the Exception error code.
     * @param {string} message - A String containing the Exception error message.
     * @param {object} details - A key/value pair object containing the error response.
     * @param {Error} cause - A Error class instance.
    */
    constructor(code, message, details, cause) {
        super();
        this.code = code;
        this.message = (message === null) ? "" : message;
        this.cause = cause;
        this.details = details;
        if (this.details !== undefined) {
            this.message = this.message + JSON.stringify(this.details);
        }
        if (this.cause !== undefined) {
            this.message = this.message.concat(this.cause.toString());
        }
    }
    toString() {
        let returnMessage = "Caused By : ";
        if (this.details !== null) {
            this.message = (this.message != null ? this.message : "") + JSON.stringify(this.details);
        }
        if (this.code !== null) {
            returnMessage += this.code + " - " + this.message;
        }
        else {
            returnMessage += this.message;
        }
        return returnMessage;
    }
}
exports.SDKException = SDKException;
//# sourceMappingURL=sdk_exception.js.map