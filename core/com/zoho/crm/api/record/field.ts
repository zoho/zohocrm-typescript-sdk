import {Layout} from "../layouts/layout";
import {InventoryLineItems} from "./inventory_line_items";
import {Participants} from "./participants";
import {PricingDetails} from "./pricing_details";
import {Record} from "./record";
import {RecurringActivity} from "./recurring_activity";
import {RemindAt} from "./remind_at";
import {Tag} from "../tags/tag";
import {User} from "../users/user";
import {Choice} from "../../../../../../utils/util/choice";

class Field<T>{

	private apiName: string;
	/**
	 * Creates an instance of Field with the given parameters
	 * @param apiName A string representing the apiName
	 */
	constructor(apiName: string){
		this.apiName = apiName;

	}

	/**
	 * The method to get the apiName
	 * @returns A string representing the apiName
	 */
	public getAPIName(): string	{
		return this.apiName;

	}

	public static Products = class {
		
		public static PRODUCT_CATEGORY: Field<Choice<string>> = new Field<Choice<string>>("Product_Category");
		
		public static QTY_IN_DEMAND: Field<number> = new Field<number>("Qty_in_Demand");
		
		public static OWNER: Field<User> = new Field<User>("Owner");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static VENDOR_NAME: Field<Record> = new Field<Record>("Vendor_Name");
		
		public static TAX: Field<Array<Choice<string>>> = new Field<Array<Choice<string>>>("Tax");
		
		public static SALES_START_DATE: Field<Date> = new Field<Date>("Sales_Start_Date");
		
		public static PRODUCT_ACTIVE: Field<boolean> = new Field<boolean>("Product_Active");
		
		public static RECORD_IMAGE: Field<string> = new Field<string>("Record_Image");
		
		public static MODIFIED_BY: Field<User> = new Field<User>("Modified_By");
		
		public static PRODUCT_CODE: Field<string> = new Field<string>("Product_Code");
		
		public static MANUFACTURER: Field<Choice<string>> = new Field<Choice<string>>("Manufacturer");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static SUPPORT_EXPIRY_DATE: Field<Date> = new Field<Date>("Support_Expiry_Date");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static COMMISSION_RATE: Field<number> = new Field<number>("Commission_Rate");
		
		public static PRODUCT_NAME: Field<string> = new Field<string>("Product_Name");
		
		public static HANDLER: Field<User> = new Field<User>("Handler");
		
		public static SUPPORT_START_DATE: Field<Date> = new Field<Date>("Support_Start_Date");
		
		public static USAGE_UNIT: Field<Choice<string>> = new Field<Choice<string>>("Usage_Unit");
		
		public static QTY_ORDERED: Field<number> = new Field<number>("Qty_Ordered");
		
		public static QTY_IN_STOCK: Field<number> = new Field<number>("Qty_in_Stock");
		
		public static CREATED_BY: Field<User> = new Field<User>("Created_By");
		
		public static TAG: Field<Array<Tag>> = new Field<Array<Tag>>("Tag");
		
		public static SALES_END_DATE: Field<Date> = new Field<Date>("Sales_End_Date");
		
		public static UNIT_PRICE: Field<number> = new Field<number>("Unit_Price");
		
		public static TAXABLE: Field<boolean> = new Field<boolean>("Taxable");
		
		public static REORDER_LEVEL: Field<number> = new Field<number>("Reorder_Level");
	}

	public static Tasks = class {
		
		public static STATUS: Field<Choice<string>> = new Field<Choice<string>>("Status");
		
		public static OWNER: Field<User> = new Field<User>("Owner");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static DUE_DATE: Field<Date> = new Field<Date>("Due_Date");
		
		public static PRIORITY: Field<Choice<string>> = new Field<Choice<string>>("Priority");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static CLOSED_TIME: Field<Date> = new Field<Date>("Closed_Time");
		
		public static SUBJECT: Field<string> = new Field<string>("Subject");
		
		public static SEND_NOTIFICATION_EMAIL: Field<boolean> = new Field<boolean>("Send_Notification_Email");
		
		public static MODIFIED_BY: Field<User> = new Field<User>("Modified_By");
		
		public static RECURRING_ACTIVITY: Field<RecurringActivity> = new Field<RecurringActivity>("Recurring_Activity");
		
		public static WHAT_ID: Field<Record> = new Field<Record>("What_Id");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static CREATED_BY: Field<User> = new Field<User>("Created_By");
		
		public static TAG: Field<Array<Tag>> = new Field<Array<Tag>>("Tag");
		
		public static REMIND_AT: Field<RemindAt> = new Field<RemindAt>("Remind_At");
		
		public static WHO_ID: Field<Record> = new Field<Record>("Who_Id");
	}

	public static Vendors = class {
		
		public static OWNER: Field<User> = new Field<User>("Owner");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static EMAIL: Field<string> = new Field<string>("Email");
		
		public static CATEGORY: Field<string> = new Field<string>("Category");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static VENDOR_NAME: Field<string> = new Field<string>("Vendor_Name");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static WEBSITE: Field<string> = new Field<string>("Website");
		
		public static CITY: Field<string> = new Field<string>("City");
		
		public static RECORD_IMAGE: Field<string> = new Field<string>("Record_Image");
		
		public static MODIFIED_BY: Field<User> = new Field<User>("Modified_By");
		
		public static PHONE: Field<string> = new Field<string>("Phone");
		
		public static STATE: Field<string> = new Field<string>("State");
		
		public static GL_ACCOUNT: Field<Choice<string>> = new Field<Choice<string>>("GL_Account");
		
		public static STREET: Field<string> = new Field<string>("Street");
		
		public static COUNTRY: Field<string> = new Field<string>("Country");
		
		public static ZIP_CODE: Field<string> = new Field<string>("Zip_Code");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static CREATED_BY: Field<User> = new Field<User>("Created_By");
		
		public static TAG: Field<Array<Tag>> = new Field<Array<Tag>>("Tag");
	}

	public static Calls = class {
		
		public static CALL_DURATION: Field<string> = new Field<string>("Call_Duration");
		
		public static OWNER: Field<User> = new Field<User>("Owner");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static REMINDER: Field<Choice<string>> = new Field<Choice<string>>("Reminder");
		
		public static CALLER_ID: Field<string> = new Field<string>("Caller_ID");
		
		public static CTI_ENTRY: Field<boolean> = new Field<boolean>("CTI_Entry");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static CALL_START_TIME: Field<Date> = new Field<Date>("Call_Start_Time");
		
		public static SUBJECT: Field<string> = new Field<string>("Subject");
		
		public static CALL_AGENDA: Field<string> = new Field<string>("Call_Agenda");
		
		public static CALL_RESULT: Field<string> = new Field<string>("Call_Result");
		
		public static CALL_TYPE: Field<Choice<string>> = new Field<Choice<string>>("Call_Type");
		
		public static MODIFIED_BY: Field<User> = new Field<User>("Modified_By");
		
		public static WHAT_ID: Field<Record> = new Field<Record>("What_Id");
		
		public static CALL_DURATION_IN_SECONDS: Field<number> = new Field<number>("Call_Duration_in_seconds");
		
		public static CALL_PURPOSE: Field<Choice<string>> = new Field<Choice<string>>("Call_Purpose");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static CREATED_BY: Field<User> = new Field<User>("Created_By");
		
		public static TAG: Field<Array<Tag>> = new Field<Array<Tag>>("Tag");
		
		public static DIALLED_NUMBER: Field<string> = new Field<string>("Dialled_Number");
		
		public static CALL_STATUS: Field<Choice<string>> = new Field<Choice<string>>("Call_Status");
		
		public static WHO_ID: Field<Record> = new Field<Record>("Who_Id");
	}

	public static Leads = class {
		
		public static OWNER: Field<User> = new Field<User>("Owner");
		
		public static COMPANY: Field<string> = new Field<string>("Company");
		
		public static EMAIL: Field<string> = new Field<string>("Email");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static RATING: Field<Choice<string>> = new Field<Choice<string>>("Rating");
		
		public static WEBSITE: Field<string> = new Field<string>("Website");
		
		public static TWITTER: Field<string> = new Field<string>("Twitter");
		
		public static SALUTATION: Field<Choice<string>> = new Field<Choice<string>>("Salutation");
		
		public static LAST_ACTIVITY_TIME: Field<Date> = new Field<Date>("Last_Activity_Time");
		
		public static FIRST_NAME: Field<string> = new Field<string>("First_Name");
		
		public static FULL_NAME: Field<string> = new Field<string>("Full_Name");
		
		public static LEAD_STATUS: Field<Choice<string>> = new Field<Choice<string>>("Lead_Status");
		
		public static INDUSTRY: Field<Choice<string>> = new Field<Choice<string>>("Industry");
		
		public static RECORD_IMAGE: Field<string> = new Field<string>("Record_Image");
		
		public static MODIFIED_BY: Field<User> = new Field<User>("Modified_By");
		
		public static SKYPE_ID: Field<string> = new Field<string>("Skype_ID");
		
		public static PHONE: Field<string> = new Field<string>("Phone");
		
		public static STREET: Field<string> = new Field<string>("Street");
		
		public static ZIP_CODE: Field<string> = new Field<string>("Zip_Code");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static EMAIL_OPT_OUT: Field<boolean> = new Field<boolean>("Email_Opt_Out");
		
		public static DESIGNATION: Field<string> = new Field<string>("Designation");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static CITY: Field<string> = new Field<string>("City");
		
		public static NO_OF_EMPLOYEES: Field<number> = new Field<number>("No_of_Employees");
		
		public static MOBILE: Field<string> = new Field<string>("Mobile");
		
		public static CONVERTED_DATE_TIME: Field<Date> = new Field<Date>("Converted_Date_Time");
		
		public static LAST_NAME: Field<string> = new Field<string>("Last_Name");
		
		public static LAYOUT: Field<Layout> = new Field<Layout>("Layout");
		
		public static STATE: Field<string> = new Field<string>("State");
		
		public static LEAD_SOURCE: Field<Choice<string>> = new Field<Choice<string>>("Lead_Source");
		
		public static IS_RECORD_DUPLICATE: Field<boolean> = new Field<boolean>("Is_Record_Duplicate");
		
		public static TAG: Field<Array<Tag>> = new Field<Array<Tag>>("Tag");
		
		public static CREATED_BY: Field<User> = new Field<User>("Created_By");
		
		public static FAX: Field<string> = new Field<string>("Fax");
		
		public static ANNUAL_REVENUE: Field<number> = new Field<number>("Annual_Revenue");
		
		public static SECONDARY_EMAIL: Field<string> = new Field<string>("Secondary_Email");
	}

	public static Deals = class {
		
		public static OWNER: Field<User> = new Field<User>("Owner");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static CAMPAIGN_SOURCE: Field<Record> = new Field<Record>("Campaign_Source");
		
		public static CLOSING_DATE: Field<Date> = new Field<Date>("Closing_Date");
		
		public static LAST_ACTIVITY_TIME: Field<Date> = new Field<Date>("Last_Activity_Time");
		
		public static MODIFIED_BY: Field<User> = new Field<User>("Modified_By");
		
		public static LEAD_CONVERSION_TIME: Field<number> = new Field<number>("Lead_Conversion_Time");
		
		public static DEAL_NAME: Field<string> = new Field<string>("Deal_Name");
		
		public static EXPECTED_REVENUE: Field<number> = new Field<number>("Expected_Revenue");
		
		public static OVERALL_SALES_DURATION: Field<number> = new Field<number>("Overall_Sales_Duration");
		
		public static STAGE: Field<Choice<string>> = new Field<Choice<string>>("Stage");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static TERRITORY: Field<string> = new Field<string>("Territory");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static AMOUNT: Field<number> = new Field<number>("Amount");
		
		public static PROBABILITY: Field<number> = new Field<number>("Probability");
		
		public static NEXT_STEP: Field<string> = new Field<string>("Next_Step");
		
		public static CONTACT_NAME: Field<Record> = new Field<Record>("Contact_Name");
		
		public static SALES_CYCLE_DURATION: Field<number> = new Field<number>("Sales_Cycle_Duration");
		
		public static TYPE: Field<Choice<string>> = new Field<Choice<string>>("Type");
		
		public static DEAL_CATEGORY_STATUS: Field<Choice<string>> = new Field<Choice<string>>("Deal_Category_Status");
		
		public static LEAD_SOURCE: Field<Choice<string>> = new Field<Choice<string>>("Lead_Source");
		
		public static CREATED_BY: Field<User> = new Field<User>("Created_By");
		
		public static TAG: Field<Array<Tag>> = new Field<Array<Tag>>("Tag");
	}

	public static Campaigns = class {
		
		public static STATUS: Field<Choice<string>> = new Field<Choice<string>>("Status");
		
		public static OWNER: Field<User> = new Field<User>("Owner");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static CAMPAIGN_NAME: Field<string> = new Field<string>("Campaign_Name");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static END_DATE: Field<Date> = new Field<Date>("End_Date");
		
		public static TYPE: Field<Choice<string>> = new Field<Choice<string>>("Type");
		
		public static MODIFIED_BY: Field<User> = new Field<User>("Modified_By");
		
		public static NUM_SENT: Field<bigint> = new Field<bigint>("Num_sent");
		
		public static EXPECTED_REVENUE: Field<number> = new Field<number>("Expected_Revenue");
		
		public static ACTUAL_COST: Field<number> = new Field<number>("Actual_Cost");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static EXPECTED_RESPONSE: Field<bigint> = new Field<bigint>("Expected_Response");
		
		public static CREATED_BY: Field<User> = new Field<User>("Created_By");
		
		public static TAG: Field<Array<Tag>> = new Field<Array<Tag>>("Tag");
		
		public static PARENT_CAMPAIGN: Field<Record> = new Field<Record>("Parent_Campaign");
		
		public static START_DATE: Field<Date> = new Field<Date>("Start_Date");
		
		public static BUDGETED_COST: Field<number> = new Field<number>("Budgeted_Cost");
	}

	public static Quotes = class {
		
		public static OWNER: Field<User> = new Field<User>("Owner");
		
		public static DISCOUNT: Field<number> = new Field<number>("Discount");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static SHIPPING_STATE: Field<string> = new Field<string>("Shipping_State");
		
		public static TAX: Field<number> = new Field<number>("Tax");
		
		public static MODIFIED_BY: Field<User> = new Field<User>("Modified_By");
		
		public static DEAL_NAME: Field<Record> = new Field<Record>("Deal_Name");
		
		public static VALID_TILL: Field<Date> = new Field<Date>("Valid_Till");
		
		public static BILLING_COUNTRY: Field<string> = new Field<string>("Billing_Country");
		
		public static ACCOUNT_NAME: Field<Record> = new Field<Record>("Account_Name");
		
		public static TEAM: Field<string> = new Field<string>("Team");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static CARRIER: Field<Choice<string>> = new Field<Choice<string>>("Carrier");
		
		public static QUOTE_STAGE: Field<Choice<string>> = new Field<Choice<string>>("Quote_Stage");
		
		public static GRAND_TOTAL: Field<number> = new Field<number>("Grand_Total");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static BILLING_STREET: Field<string> = new Field<string>("Billing_Street");
		
		public static ADJUSTMENT: Field<number> = new Field<number>("Adjustment");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static TERMS_AND_CONDITIONS: Field<string> = new Field<string>("Terms_and_Conditions");
		
		public static SUB_TOTAL: Field<number> = new Field<number>("Sub_Total");
		
		public static BILLING_CODE: Field<string> = new Field<string>("Billing_Code");
		
		public static PRODUCT_DETAILS: Field<Array<InventoryLineItems>> = new Field<Array<InventoryLineItems>>("Product_Details");
		
		public static SUBJECT: Field<string> = new Field<string>("Subject");
		
		public static CONTACT_NAME: Field<Record> = new Field<Record>("Contact_Name");
		
		public static SHIPPING_CITY: Field<string> = new Field<string>("Shipping_City");
		
		public static SHIPPING_COUNTRY: Field<string> = new Field<string>("Shipping_Country");
		
		public static SHIPPING_CODE: Field<string> = new Field<string>("Shipping_Code");
		
		public static BILLING_CITY: Field<string> = new Field<string>("Billing_City");
		
		public static QUOTE_NUMBER: Field<bigint> = new Field<bigint>("Quote_Number");
		
		public static BILLING_STATE: Field<string> = new Field<string>("Billing_State");
		
		public static CREATED_BY: Field<User> = new Field<User>("Created_By");
		
		public static TAG: Field<Array<Tag>> = new Field<Array<Tag>>("Tag");
		
		public static SHIPPING_STREET: Field<string> = new Field<string>("Shipping_Street");
	}

	public static Invoices = class {
		
		public static OWNER: Field<User> = new Field<User>("Owner");
		
		public static DISCOUNT: Field<number> = new Field<number>("Discount");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static SHIPPING_STATE: Field<string> = new Field<string>("Shipping_State");
		
		public static TAX: Field<number> = new Field<number>("Tax");
		
		public static INVOICE_DATE: Field<Date> = new Field<Date>("Invoice_Date");
		
		public static MODIFIED_BY: Field<User> = new Field<User>("Modified_By");
		
		public static BILLING_COUNTRY: Field<string> = new Field<string>("Billing_Country");
		
		public static ACCOUNT_NAME: Field<Record> = new Field<Record>("Account_Name");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static SALES_ORDER: Field<Record> = new Field<Record>("Sales_Order");
		
		public static STATUS: Field<Choice<string>> = new Field<Choice<string>>("Status");
		
		public static GRAND_TOTAL: Field<number> = new Field<number>("Grand_Total");
		
		public static SALES_COMMISSION: Field<number> = new Field<number>("Sales_Commission");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static DUE_DATE: Field<Date> = new Field<Date>("Due_Date");
		
		public static BILLING_STREET: Field<string> = new Field<string>("Billing_Street");
		
		public static ADJUSTMENT: Field<number> = new Field<number>("Adjustment");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static TERMS_AND_CONDITIONS: Field<string> = new Field<string>("Terms_and_Conditions");
		
		public static SUB_TOTAL: Field<number> = new Field<number>("Sub_Total");
		
		public static INVOICE_NUMBER: Field<bigint> = new Field<bigint>("Invoice_Number");
		
		public static BILLING_CODE: Field<string> = new Field<string>("Billing_Code");
		
		public static PRODUCT_DETAILS: Field<Array<InventoryLineItems>> = new Field<Array<InventoryLineItems>>("Product_Details");
		
		public static SUBJECT: Field<string> = new Field<string>("Subject");
		
		public static CONTACT_NAME: Field<Record> = new Field<Record>("Contact_Name");
		
		public static EXCISE_DUTY: Field<number> = new Field<number>("Excise_Duty");
		
		public static SHIPPING_CITY: Field<string> = new Field<string>("Shipping_City");
		
		public static SHIPPING_COUNTRY: Field<string> = new Field<string>("Shipping_Country");
		
		public static SHIPPING_CODE: Field<string> = new Field<string>("Shipping_Code");
		
		public static BILLING_CITY: Field<string> = new Field<string>("Billing_City");
		
		public static PURCHASE_ORDER: Field<string> = new Field<string>("Purchase_Order");
		
		public static BILLING_STATE: Field<string> = new Field<string>("Billing_State");
		
		public static CREATED_BY: Field<User> = new Field<User>("Created_By");
		
		public static TAG: Field<Array<Tag>> = new Field<Array<Tag>>("Tag");
		
		public static SHIPPING_STREET: Field<string> = new Field<string>("Shipping_Street");
	}

	public static Attachments = class {
		
		public static OWNER: Field<User> = new Field<User>("Owner");
		
		public static MODIFIED_BY: Field<User> = new Field<User>("Modified_By");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static FILE_NAME: Field<string> = new Field<string>("File_Name");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static SIZE: Field<string> = new Field<string>("Size");
		
		public static PARENT_ID: Field<Record> = new Field<Record>("Parent_Id");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static CREATED_BY: Field<User> = new Field<User>("Created_By");
	}

	public static Price_Books = class {
		
		public static OWNER: Field<User> = new Field<User>("Owner");
		
		public static ACTIVE: Field<boolean> = new Field<boolean>("Active");
		
		public static MODIFIED_BY: Field<User> = new Field<User>("Modified_By");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static PRICING_DETAILS: Field<Array<PricingDetails>> = new Field<Array<PricingDetails>>("Pricing_Details");
		
		public static PRICING_MODEL: Field<Choice<string>> = new Field<Choice<string>>("Pricing_Model");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static PRICE_BOOK_NAME: Field<string> = new Field<string>("Price_Book_Name");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static CREATED_BY: Field<User> = new Field<User>("Created_By");
		
		public static TAG: Field<Array<Tag>> = new Field<Array<Tag>>("Tag");
	}

	public static Sales_Orders = class {
		
		public static OWNER: Field<User> = new Field<User>("Owner");
		
		public static DISCOUNT: Field<number> = new Field<number>("Discount");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static CUSTOMER_NO: Field<string> = new Field<string>("Customer_No");
		
		public static SHIPPING_STATE: Field<string> = new Field<string>("Shipping_State");
		
		public static TAX: Field<number> = new Field<number>("Tax");
		
		public static MODIFIED_BY: Field<User> = new Field<User>("Modified_By");
		
		public static DEAL_NAME: Field<Record> = new Field<Record>("Deal_Name");
		
		public static BILLING_COUNTRY: Field<string> = new Field<string>("Billing_Country");
		
		public static ACCOUNT_NAME: Field<Record> = new Field<Record>("Account_Name");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static CARRIER: Field<Choice<string>> = new Field<Choice<string>>("Carrier");
		
		public static QUOTE_NAME: Field<Record> = new Field<Record>("Quote_Name");
		
		public static STATUS: Field<Choice<string>> = new Field<Choice<string>>("Status");
		
		public static SALES_COMMISSION: Field<number> = new Field<number>("Sales_Commission");
		
		public static GRAND_TOTAL: Field<number> = new Field<number>("Grand_Total");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static DUE_DATE: Field<Date> = new Field<Date>("Due_Date");
		
		public static BILLING_STREET: Field<string> = new Field<string>("Billing_Street");
		
		public static ADJUSTMENT: Field<number> = new Field<number>("Adjustment");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static TERMS_AND_CONDITIONS: Field<string> = new Field<string>("Terms_and_Conditions");
		
		public static SUB_TOTAL: Field<number> = new Field<number>("Sub_Total");
		
		public static BILLING_CODE: Field<string> = new Field<string>("Billing_Code");
		
		public static PRODUCT_DETAILS: Field<Array<InventoryLineItems>> = new Field<Array<InventoryLineItems>>("Product_Details");
		
		public static SUBJECT: Field<string> = new Field<string>("Subject");
		
		public static CONTACT_NAME: Field<Record> = new Field<Record>("Contact_Name");
		
		public static EXCISE_DUTY: Field<number> = new Field<number>("Excise_Duty");
		
		public static SHIPPING_CITY: Field<string> = new Field<string>("Shipping_City");
		
		public static SHIPPING_COUNTRY: Field<string> = new Field<string>("Shipping_Country");
		
		public static SHIPPING_CODE: Field<string> = new Field<string>("Shipping_Code");
		
		public static BILLING_CITY: Field<string> = new Field<string>("Billing_City");
		
		public static SO_NUMBER: Field<bigint> = new Field<bigint>("SO_Number");
		
		public static PURCHASE_ORDER: Field<string> = new Field<string>("Purchase_Order");
		
		public static BILLING_STATE: Field<string> = new Field<string>("Billing_State");
		
		public static CREATED_BY: Field<User> = new Field<User>("Created_By");
		
		public static TAG: Field<Array<Tag>> = new Field<Array<Tag>>("Tag");
		
		public static PENDING: Field<string> = new Field<string>("Pending");
		
		public static SHIPPING_STREET: Field<string> = new Field<string>("Shipping_Street");
	}

	public static Contacts = class {
		
		public static OWNER: Field<User> = new Field<User>("Owner");
		
		public static EMAIL: Field<string> = new Field<string>("Email");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static VENDOR_NAME: Field<Record> = new Field<Record>("Vendor_Name");
		
		public static MAILING_ZIP: Field<string> = new Field<string>("Mailing_Zip");
		
		public static REPORTS_TO: Field<string> = new Field<string>("Reports_To");
		
		public static OTHER_PHONE: Field<string> = new Field<string>("Other_Phone");
		
		public static MAILING_STATE: Field<string> = new Field<string>("Mailing_State");
		
		public static TWITTER: Field<string> = new Field<string>("Twitter");
		
		public static OTHER_ZIP: Field<string> = new Field<string>("Other_Zip");
		
		public static MAILING_STREET: Field<string> = new Field<string>("Mailing_Street");
		
		public static OTHER_STATE: Field<string> = new Field<string>("Other_State");
		
		public static SALUTATION: Field<Choice<string>> = new Field<Choice<string>>("Salutation");
		
		public static OTHER_COUNTRY: Field<string> = new Field<string>("Other_Country");
		
		public static LAST_ACTIVITY_TIME: Field<Date> = new Field<Date>("Last_Activity_Time");
		
		public static FIRST_NAME: Field<string> = new Field<string>("First_Name");
		
		public static FULL_NAME: Field<string> = new Field<string>("Full_Name");
		
		public static ASST_PHONE: Field<string> = new Field<string>("Asst_Phone");
		
		public static RECORD_IMAGE: Field<string> = new Field<string>("Record_Image");
		
		public static DEPARTMENT: Field<string> = new Field<string>("Department");
		
		public static MODIFIED_BY: Field<User> = new Field<User>("Modified_By");
		
		public static SKYPE_ID: Field<string> = new Field<string>("Skype_ID");
		
		public static ASSISTANT: Field<string> = new Field<string>("Assistant");
		
		public static PHONE: Field<string> = new Field<string>("Phone");
		
		public static MAILING_COUNTRY: Field<string> = new Field<string>("Mailing_Country");
		
		public static ACCOUNT_NAME: Field<Record> = new Field<Record>("Account_Name");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static EMAIL_OPT_OUT: Field<boolean> = new Field<boolean>("Email_Opt_Out");
		
		public static REPORTING_TO: Field<Record> = new Field<Record>("Reporting_To");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static DATE_OF_BIRTH: Field<Date> = new Field<Date>("Date_of_Birth");
		
		public static MAILING_CITY: Field<string> = new Field<string>("Mailing_City");
		
		public static OTHER_CITY: Field<string> = new Field<string>("Other_City");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static TITLE: Field<string> = new Field<string>("Title");
		
		public static OTHER_STREET: Field<string> = new Field<string>("Other_Street");
		
		public static MOBILE: Field<string> = new Field<string>("Mobile");
		
		public static TERRITORIES: Field<string> = new Field<string>("Territories");
		
		public static HOME_PHONE: Field<string> = new Field<string>("Home_Phone");
		
		public static LAST_NAME: Field<string> = new Field<string>("Last_Name");
		
		public static LEAD_SOURCE: Field<Choice<string>> = new Field<Choice<string>>("Lead_Source");
		
		public static IS_RECORD_DUPLICATE: Field<boolean> = new Field<boolean>("Is_Record_Duplicate");
		
		public static TAG: Field<Array<Tag>> = new Field<Array<Tag>>("Tag");
		
		public static CREATED_BY: Field<User> = new Field<User>("Created_By");
		
		public static FAX: Field<string> = new Field<string>("Fax");
		
		public static SECONDARY_EMAIL: Field<string> = new Field<string>("Secondary_Email");
	}

	public static Solutions = class {
		
		public static STATUS: Field<Choice<string>> = new Field<Choice<string>>("Status");
		
		public static OWNER: Field<User> = new Field<User>("Owner");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static COMMENTS: Field<string> = new Field<string>("Comments");
		
		public static NO_OF_COMMENTS: Field<number> = new Field<number>("No_of_comments");
		
		public static PRODUCT_NAME: Field<Record> = new Field<Record>("Product_Name");
		
		public static ADD_COMMENT: Field<string> = new Field<string>("Add_Comment");
		
		public static SOLUTION_NUMBER: Field<bigint> = new Field<bigint>("Solution_Number");
		
		public static ANSWER: Field<string> = new Field<string>("Answer");
		
		public static MODIFIED_BY: Field<User> = new Field<User>("Modified_By");
		
		public static SOLUTION_TITLE: Field<string> = new Field<string>("Solution_Title");
		
		public static PUBLISHED: Field<boolean> = new Field<boolean>("Published");
		
		public static QUESTION: Field<string> = new Field<string>("Question");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static CREATED_BY: Field<User> = new Field<User>("Created_By");
		
		public static TAG: Field<Array<Tag>> = new Field<Array<Tag>>("Tag");
	}

	public static Events = class {
		
		public static ALL_DAY: Field<boolean> = new Field<boolean>("All_day");
		
		public static OWNER: Field<User> = new Field<User>("Owner");
		
		public static CHECK_IN_STATE: Field<string> = new Field<string>("Check_In_State");
		
		public static CHECK_IN_ADDRESS: Field<string> = new Field<string>("Check_In_Address");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static START_DATETIME: Field<Date> = new Field<Date>("Start_DateTime");
		
		public static LATITUDE: Field<number> = new Field<number>("Latitude");
		
		public static PARTICIPANTS: Field<Array<Participants>> = new Field<Array<Participants>>("Participants");
		
		public static EVENT_TITLE: Field<string> = new Field<string>("Event_Title");
		
		public static END_DATETIME: Field<Date> = new Field<Date>("End_DateTime");
		
		public static CHECK_IN_BY: Field<User> = new Field<User>("Check_In_By");
		
		public static MODIFIED_BY: Field<User> = new Field<User>("Modified_By");
		
		public static CHECK_IN_CITY: Field<string> = new Field<string>("Check_In_City");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static CHECK_IN_COMMENT: Field<string> = new Field<string>("Check_In_Comment");
		
		public static REMIND_AT: Field<Date> = new Field<Date>("Remind_At");
		
		public static WHO_ID: Field<Record> = new Field<Record>("Who_Id");
		
		public static CHECK_IN_STATUS: Field<string> = new Field<string>("Check_In_Status");
		
		public static CHECK_IN_COUNTRY: Field<string> = new Field<string>("Check_In_Country");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static VENUE: Field<string> = new Field<string>("Venue");
		
		public static ZIP_CODE: Field<string> = new Field<string>("ZIP_Code");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static LONGITUDE: Field<number> = new Field<number>("Longitude");
		
		public static CHECK_IN_TIME: Field<Date> = new Field<Date>("Check_In_Time");
		
		public static RECURRING_ACTIVITY: Field<RecurringActivity> = new Field<RecurringActivity>("Recurring_Activity");
		
		public static WHAT_ID: Field<Record> = new Field<Record>("What_Id");
		
		public static CHECK_IN_SUB_LOCALITY: Field<string> = new Field<string>("Check_In_Sub_Locality");
		
		public static CREATED_BY: Field<User> = new Field<User>("Created_By");
		
		public static TAG: Field<Array<Tag>> = new Field<Array<Tag>>("Tag");
	}

	public static Purchase_Orders = class {
		
		public static OWNER: Field<User> = new Field<User>("Owner");
		
		public static DISCOUNT: Field<number> = new Field<number>("Discount");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static VENDOR_NAME: Field<Record> = new Field<Record>("Vendor_Name");
		
		public static SHIPPING_STATE: Field<string> = new Field<string>("Shipping_State");
		
		public static TAX: Field<number> = new Field<number>("Tax");
		
		public static PO_DATE: Field<Date> = new Field<Date>("PO_Date");
		
		public static MODIFIED_BY: Field<User> = new Field<User>("Modified_By");
		
		public static BILLING_COUNTRY: Field<string> = new Field<string>("Billing_Country");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static CARRIER: Field<Choice<string>> = new Field<Choice<string>>("Carrier");
		
		public static STATUS: Field<Choice<string>> = new Field<Choice<string>>("Status");
		
		public static GRAND_TOTAL: Field<number> = new Field<number>("Grand_Total");
		
		public static SALES_COMMISSION: Field<number> = new Field<number>("Sales_Commission");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static PO_NUMBER: Field<string> = new Field<string>("PO_Number");
		
		public static DUE_DATE: Field<Date> = new Field<Date>("Due_Date");
		
		public static BILLING_STREET: Field<string> = new Field<string>("Billing_Street");
		
		public static ADJUSTMENT: Field<number> = new Field<number>("Adjustment");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static TERMS_AND_CONDITIONS: Field<string> = new Field<string>("Terms_and_Conditions");
		
		public static SUB_TOTAL: Field<number> = new Field<number>("Sub_Total");
		
		public static BILLING_CODE: Field<string> = new Field<string>("Billing_Code");
		
		public static PRODUCT_DETAILS: Field<Array<InventoryLineItems>> = new Field<Array<InventoryLineItems>>("Product_Details");
		
		public static SUBJECT: Field<string> = new Field<string>("Subject");
		
		public static TRACKING_NUMBER: Field<string> = new Field<string>("Tracking_Number");
		
		public static CONTACT_NAME: Field<Record> = new Field<Record>("Contact_Name");
		
		public static EXCISE_DUTY: Field<number> = new Field<number>("Excise_Duty");
		
		public static SHIPPING_CITY: Field<string> = new Field<string>("Shipping_City");
		
		public static SHIPPING_COUNTRY: Field<string> = new Field<string>("Shipping_Country");
		
		public static SHIPPING_CODE: Field<string> = new Field<string>("Shipping_Code");
		
		public static BILLING_CITY: Field<string> = new Field<string>("Billing_City");
		
		public static REQUISITION_NO: Field<string> = new Field<string>("Requisition_No");
		
		public static BILLING_STATE: Field<string> = new Field<string>("Billing_State");
		
		public static CREATED_BY: Field<User> = new Field<User>("Created_By");
		
		public static TAG: Field<Array<Tag>> = new Field<Array<Tag>>("Tag");
		
		public static SHIPPING_STREET: Field<string> = new Field<string>("Shipping_Street");
	}

	public static Accounts = class {
		
		public static OWNER: Field<User> = new Field<User>("Owner");
		
		public static OWNERSHIP: Field<Choice<string>> = new Field<Choice<string>>("Ownership");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static ACCOUNT_TYPE: Field<Choice<string>> = new Field<Choice<string>>("Account_Type");
		
		public static RATING: Field<Choice<string>> = new Field<Choice<string>>("Rating");
		
		public static SIC_CODE: Field<number> = new Field<number>("SIC_Code");
		
		public static SHIPPING_STATE: Field<string> = new Field<string>("Shipping_State");
		
		public static WEBSITE: Field<string> = new Field<string>("Website");
		
		public static EMPLOYEES: Field<number> = new Field<number>("Employees");
		
		public static LAST_ACTIVITY_TIME: Field<Date> = new Field<Date>("Last_Activity_Time");
		
		public static INDUSTRY: Field<Choice<string>> = new Field<Choice<string>>("Industry");
		
		public static RECORD_IMAGE: Field<string> = new Field<string>("Record_Image");
		
		public static MODIFIED_BY: Field<User> = new Field<User>("Modified_By");
		
		public static ACCOUNT_SITE: Field<string> = new Field<string>("Account_Site");
		
		public static PHONE: Field<string> = new Field<string>("Phone");
		
		public static BILLING_COUNTRY: Field<string> = new Field<string>("Billing_Country");
		
		public static ACCOUNT_NAME: Field<string> = new Field<string>("Account_Name");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static ACCOUNT_NUMBER: Field<bigint> = new Field<bigint>("Account_Number");
		
		public static TICKER_SYMBOL: Field<string> = new Field<string>("Ticker_Symbol");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static BILLING_STREET: Field<string> = new Field<string>("Billing_Street");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static BILLING_CODE: Field<string> = new Field<string>("Billing_Code");
		
		public static TERRITORIES: Field<string> = new Field<string>("Territories");
		
		public static PARENT_ACCOUNT: Field<Record> = new Field<Record>("Parent_Account");
		
		public static SHIPPING_CITY: Field<string> = new Field<string>("Shipping_City");
		
		public static SHIPPING_COUNTRY: Field<string> = new Field<string>("Shipping_Country");
		
		public static SHIPPING_CODE: Field<string> = new Field<string>("Shipping_Code");
		
		public static BILLING_CITY: Field<string> = new Field<string>("Billing_City");
		
		public static BILLING_STATE: Field<string> = new Field<string>("Billing_State");
		
		public static TAG: Field<Array<Tag>> = new Field<Array<Tag>>("Tag");
		
		public static CREATED_BY: Field<User> = new Field<User>("Created_By");
		
		public static FAX: Field<string> = new Field<string>("Fax");
		
		public static ANNUAL_REVENUE: Field<number> = new Field<number>("Annual_Revenue");
		
		public static SHIPPING_STREET: Field<string> = new Field<string>("Shipping_Street");
	}

	public static Cases = class {
		
		public static OWNER: Field<User> = new Field<User>("Owner");
		
		public static EMAIL: Field<string> = new Field<string>("Email");
		
		public static DESCRIPTION: Field<string> = new Field<string>("Description");
		
		public static INTERNAL_COMMENTS: Field<string> = new Field<string>("Internal_Comments");
		
		public static NO_OF_COMMENTS: Field<number> = new Field<number>("No_of_comments");
		
		public static REPORTED_BY: Field<string> = new Field<string>("Reported_By");
		
		public static CASE_NUMBER: Field<bigint> = new Field<bigint>("Case_Number");
		
		public static MODIFIED_BY: Field<User> = new Field<User>("Modified_By");
		
		public static DEAL_NAME: Field<Record> = new Field<Record>("Deal_Name");
		
		public static PHONE: Field<string> = new Field<string>("Phone");
		
		public static ACCOUNT_NAME: Field<Record> = new Field<Record>("Account_Name");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static SOLUTION: Field<string> = new Field<string>("Solution");
		
		public static STATUS: Field<Choice<string>> = new Field<Choice<string>>("Status");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static PRIORITY: Field<Choice<string>> = new Field<Choice<string>>("Priority");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static COMMENTS: Field<string> = new Field<string>("Comments");
		
		public static PRODUCT_NAME: Field<Record> = new Field<Record>("Product_Name");
		
		public static ADD_COMMENT: Field<string> = new Field<string>("Add_Comment");
		
		public static CASE_ORIGIN: Field<Choice<string>> = new Field<Choice<string>>("Case_Origin");
		
		public static SUBJECT: Field<string> = new Field<string>("Subject");
		
		public static CASE_REASON: Field<Choice<string>> = new Field<Choice<string>>("Case_Reason");
		
		public static TYPE: Field<Choice<string>> = new Field<Choice<string>>("Type");
		
		public static IS_RECORD_DUPLICATE: Field<boolean> = new Field<boolean>("Is_Record_Duplicate");
		
		public static TAG: Field<Array<Tag>> = new Field<Array<Tag>>("Tag");
		
		public static CREATED_BY: Field<User> = new Field<User>("Created_By");
		
		public static RELATED_TO: Field<Record> = new Field<Record>("Related_To");
	}

	public static Notes = class {
		
		public static OWNER: Field<User> = new Field<User>("Owner");
		
		public static MODIFIED_BY: Field<User> = new Field<User>("Modified_By");
		
		public static MODIFIED_TIME: Field<Date> = new Field<Date>("Modified_Time");
		
		public static CREATED_TIME: Field<Date> = new Field<Date>("Created_Time");
		
		public static PARENT_ID: Field<Record> = new Field<Record>("Parent_Id");
		
		public static ID: Field<bigint> = new Field<bigint>("id");
		
		public static CREATED_BY: Field<User> = new Field<User>("Created_By");
		
		public static NOTE_TITLE: Field<string> = new Field<string>("Note_Title");
		
		public static NOTE_CONTENT: Field<string> = new Field<string>("Note_Content");
	}	}
export {
	Field as MasterModel,
	Field as Field
}
