"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSignature = void 0;
const constants_1 = require("../utils/util/constants");
const sdk_exception_1 = require("../core/com/zoho/crm/api/exception/sdk_exception");
/**
 * This class represents the Zoho CRM User.
 */
class UserSignature {
    /**
     * Creates an UserSignature class instance with the specified user email.
     * @param {string} email - A String containing the CRM user email.
     */
    constructor(email) {
        if (!constants_1.Constants.REGULAR_EXPRESSION.test(email)) {
            let error = {};
            error[constants_1.Constants.ERROR_HASH_FIELD] = constants_1.Constants.EMAIL;
            error[constants_1.Constants.ACCEPTED_TYPE] = constants_1.Constants.EMAIL;
            let ex = new sdk_exception_1.SDKException(constants_1.Constants.USER_SIGNATURE_ERROR, null, error);
            throw ex;
        }
        this.email = email;
    }
    /**
     * This is a getter method to get user email.
     * @returns {string} A String representing the CRM user email.
     */
    getEmail() {
        return this.email;
    }
}
exports.UserSignature = UserSignature;
//# sourceMappingURL=user_signature.js.map