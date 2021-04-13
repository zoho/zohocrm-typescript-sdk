import { Constants } from '../utils/util/constants';
import { SDKException } from '../core/com/zoho/crm/api/exception/sdk_exception';
/**
 * This class represents the Zoho CRM User.
 */
export class UserSignature {
    private email :string;

    /**
	 * Creates an UserSignature class instance with the specified user email.
	 * @param {string} email - A String containing the CRM user email.
	 */
    constructor(email :string) {
        if(!Constants.REGULAR_EXPRESSION.test(email)){
            let error: {[key: string]: any} = {};
            error[Constants.ERROR_HASH_FIELD] = Constants.EMAIL;
            error[Constants.ACCEPTED_TYPE] = Constants.EMAIL;
			let ex = new SDKException(Constants.USER_SIGNATURE_ERROR, null, error);
			throw ex;
        }

        this.email = email;
    }

    /**
	 * This is a getter method to get user email.
	 * @returns {string} A String representing the CRM user email.
	 */
    public getEmail(): string {
        return this.email;
    }
}