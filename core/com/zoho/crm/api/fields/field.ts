import {Criteria} from "../custom_views/criteria";
import {AssociationDetails} from "./association_details";
import {AutoNumber} from "./auto_number";
import {Crypt} from "./crypt";
import {Currency} from "./currency";
import {Formula} from "./formula";
import {Module} from "./module";
import {MultiSelectLookup} from "./multi_select_lookup";
import {PickListValue} from "./pick_list_value";
import {Private} from "./private";
import {RelatedDetails} from "./related_details";
import {ToolTip} from "./tool_tip";
import {Unique} from "./unique";
import {ViewType} from "./view_type";
import {Layout} from "../layouts/layout";
import {Model} from "../../../../../../utils/util/model";

class Field implements Model{

	private systemMandatory: boolean;
	private webhook: boolean;
	private private1: Private;
	private layouts: Layout;
	private content: string;
	private columnName: string;
	private type: string;
	private transitionSequence: number;
	private personalityName: string;
	private message: string;
	private mandatory: boolean;
	private criteria: Criteria;
	private relatedDetails: RelatedDetails;
	private jsonType: string;
	private crypt: Crypt;
	private fieldLabel: string;
	private tooltip: ToolTip;
	private createdSource: string;
	private fieldReadOnly: boolean;
	private displayLabel: string;
	private readOnly: boolean;
	private associationDetails: AssociationDetails;
	private quickSequenceNumber: number;
	private businesscardSupported: boolean;
	private multiModuleLookup: Map<string, any>;
	private currency: Currency;
	private id: bigint;
	private customField: boolean;
	private lookup: Module;
	private visible: boolean;
	private length: number;
	private viewType: ViewType;
	private subform: Module;
	private apiName: string;
	private unique: Unique;
	private historyTracking: boolean;
	private dataType: string;
	private formula: Formula;
	private decimalPlace: number;
	private massUpdate: boolean;
	private blueprintSupported: boolean;
	private multiselectlookup: MultiSelectLookup;
	private pickListValues: Array<PickListValue>;
	private autoNumber: AutoNumber;
	private defaultValue: string;
	private sectionId: number;
	private validationRule: Map<string, any>;
	private convertMapping: Map<string, any>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the systemMandatory
	 * @returns A boolean representing the systemMandatory
	 */
	public getSystemMandatory(): boolean	{
		return this.systemMandatory;

	}

	/**
	 * The method to set the value to systemMandatory
	 * @param systemMandatory A boolean representing the systemMandatory
	 */
	public setSystemMandatory(systemMandatory: boolean): void	{
		this.systemMandatory = systemMandatory;
		this.keyModified.set("system_mandatory", 1);

	}

	/**
	 * The method to get the webhook
	 * @returns A boolean representing the webhook
	 */
	public getWebhook(): boolean	{
		return this.webhook;

	}

	/**
	 * The method to set the value to webhook
	 * @param webhook A boolean representing the webhook
	 */
	public setWebhook(webhook: boolean): void	{
		this.webhook = webhook;
		this.keyModified.set("webhook", 1);

	}

	/**
	 * The method to get the private
	 * @returns An instance of Private
	 */
	public getPrivate(): Private	{
		return this.private1;

	}

	/**
	 * The method to set the value to private
	 * @param private1 An instance of Private
	 */
	public setPrivate(private1: Private): void	{
		this.private1 = private1;
		this.keyModified.set("private", 1);

	}

	/**
	 * The method to get the layouts
	 * @returns An instance of Layout
	 */
	public getLayouts(): Layout	{
		return this.layouts;

	}

	/**
	 * The method to set the value to layouts
	 * @param layouts An instance of Layout
	 */
	public setLayouts(layouts: Layout): void	{
		this.layouts = layouts;
		this.keyModified.set("layouts", 1);

	}

	/**
	 * The method to get the content
	 * @returns A string representing the content
	 */
	public getContent(): string	{
		return this.content;

	}

	/**
	 * The method to set the value to content
	 * @param content A string representing the content
	 */
	public setContent(content: string): void	{
		this.content = content;
		this.keyModified.set("content", 1);

	}

	/**
	 * The method to get the columnName
	 * @returns A string representing the columnName
	 */
	public getColumnName(): string	{
		return this.columnName;

	}

	/**
	 * The method to set the value to columnName
	 * @param columnName A string representing the columnName
	 */
	public setColumnName(columnName: string): void	{
		this.columnName = columnName;
		this.keyModified.set("column_name", 1);

	}

	/**
	 * The method to get the type
	 * @returns A string representing the type
	 */
	public getType(): string	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param type A string representing the type
	 */
	public setType(type: string): void	{
		this.type = type;
		this.keyModified.set("_type", 1);

	}

	/**
	 * The method to get the transitionSequence
	 * @returns A number representing the transitionSequence
	 */
	public getTransitionSequence(): number	{
		return this.transitionSequence;

	}

	/**
	 * The method to set the value to transitionSequence
	 * @param transitionSequence A number representing the transitionSequence
	 */
	public setTransitionSequence(transitionSequence: number): void	{
		this.transitionSequence = transitionSequence;
		this.keyModified.set("transition_sequence", 1);

	}

	/**
	 * The method to get the personalityName
	 * @returns A string representing the personalityName
	 */
	public getPersonalityName(): string	{
		return this.personalityName;

	}

	/**
	 * The method to set the value to personalityName
	 * @param personalityName A string representing the personalityName
	 */
	public setPersonalityName(personalityName: string): void	{
		this.personalityName = personalityName;
		this.keyModified.set("personality_name", 1);

	}

	/**
	 * The method to get the message
	 * @returns A string representing the message
	 */
	public getMessage(): string	{
		return this.message;

	}

	/**
	 * The method to set the value to message
	 * @param message A string representing the message
	 */
	public setMessage(message: string): void	{
		this.message = message;
		this.keyModified.set("message", 1);

	}

	/**
	 * The method to get the mandatory
	 * @returns A boolean representing the mandatory
	 */
	public getMandatory(): boolean	{
		return this.mandatory;

	}

	/**
	 * The method to set the value to mandatory
	 * @param mandatory A boolean representing the mandatory
	 */
	public setMandatory(mandatory: boolean): void	{
		this.mandatory = mandatory;
		this.keyModified.set("mandatory", 1);

	}

	/**
	 * The method to get the criteria
	 * @returns An instance of Criteria
	 */
	public getCriteria(): Criteria	{
		return this.criteria;

	}

	/**
	 * The method to set the value to criteria
	 * @param criteria An instance of Criteria
	 */
	public setCriteria(criteria: Criteria): void	{
		this.criteria = criteria;
		this.keyModified.set("criteria", 1);

	}

	/**
	 * The method to get the relatedDetails
	 * @returns An instance of RelatedDetails
	 */
	public getRelatedDetails(): RelatedDetails	{
		return this.relatedDetails;

	}

	/**
	 * The method to set the value to relatedDetails
	 * @param relatedDetails An instance of RelatedDetails
	 */
	public setRelatedDetails(relatedDetails: RelatedDetails): void	{
		this.relatedDetails = relatedDetails;
		this.keyModified.set("related_details", 1);

	}

	/**
	 * The method to get the jsonType
	 * @returns A string representing the jsonType
	 */
	public getJsonType(): string	{
		return this.jsonType;

	}

	/**
	 * The method to set the value to jsonType
	 * @param jsonType A string representing the jsonType
	 */
	public setJsonType(jsonType: string): void	{
		this.jsonType = jsonType;
		this.keyModified.set("json_type", 1);

	}

	/**
	 * The method to get the crypt
	 * @returns An instance of Crypt
	 */
	public getCrypt(): Crypt	{
		return this.crypt;

	}

	/**
	 * The method to set the value to crypt
	 * @param crypt An instance of Crypt
	 */
	public setCrypt(crypt: Crypt): void	{
		this.crypt = crypt;
		this.keyModified.set("crypt", 1);

	}

	/**
	 * The method to get the fieldLabel
	 * @returns A string representing the fieldLabel
	 */
	public getFieldLabel(): string	{
		return this.fieldLabel;

	}

	/**
	 * The method to set the value to fieldLabel
	 * @param fieldLabel A string representing the fieldLabel
	 */
	public setFieldLabel(fieldLabel: string): void	{
		this.fieldLabel = fieldLabel;
		this.keyModified.set("field_label", 1);

	}

	/**
	 * The method to get the tooltip
	 * @returns An instance of ToolTip
	 */
	public getTooltip(): ToolTip	{
		return this.tooltip;

	}

	/**
	 * The method to set the value to tooltip
	 * @param tooltip An instance of ToolTip
	 */
	public setTooltip(tooltip: ToolTip): void	{
		this.tooltip = tooltip;
		this.keyModified.set("tooltip", 1);

	}

	/**
	 * The method to get the createdSource
	 * @returns A string representing the createdSource
	 */
	public getCreatedSource(): string	{
		return this.createdSource;

	}

	/**
	 * The method to set the value to createdSource
	 * @param createdSource A string representing the createdSource
	 */
	public setCreatedSource(createdSource: string): void	{
		this.createdSource = createdSource;
		this.keyModified.set("created_source", 1);

	}

	/**
	 * The method to get the fieldReadOnly
	 * @returns A boolean representing the fieldReadOnly
	 */
	public getFieldReadOnly(): boolean	{
		return this.fieldReadOnly;

	}

	/**
	 * The method to set the value to fieldReadOnly
	 * @param fieldReadOnly A boolean representing the fieldReadOnly
	 */
	public setFieldReadOnly(fieldReadOnly: boolean): void	{
		this.fieldReadOnly = fieldReadOnly;
		this.keyModified.set("field_read_only", 1);

	}

	/**
	 * The method to get the displayLabel
	 * @returns A string representing the displayLabel
	 */
	public getDisplayLabel(): string	{
		return this.displayLabel;

	}

	/**
	 * The method to set the value to displayLabel
	 * @param displayLabel A string representing the displayLabel
	 */
	public setDisplayLabel(displayLabel: string): void	{
		this.displayLabel = displayLabel;
		this.keyModified.set("display_label", 1);

	}

	/**
	 * The method to get the readOnly
	 * @returns A boolean representing the readOnly
	 */
	public getReadOnly(): boolean	{
		return this.readOnly;

	}

	/**
	 * The method to set the value to readOnly
	 * @param readOnly A boolean representing the readOnly
	 */
	public setReadOnly(readOnly: boolean): void	{
		this.readOnly = readOnly;
		this.keyModified.set("read_only", 1);

	}

	/**
	 * The method to get the associationDetails
	 * @returns An instance of AssociationDetails
	 */
	public getAssociationDetails(): AssociationDetails	{
		return this.associationDetails;

	}

	/**
	 * The method to set the value to associationDetails
	 * @param associationDetails An instance of AssociationDetails
	 */
	public setAssociationDetails(associationDetails: AssociationDetails): void	{
		this.associationDetails = associationDetails;
		this.keyModified.set("association_details", 1);

	}

	/**
	 * The method to get the quickSequenceNumber
	 * @returns A number representing the quickSequenceNumber
	 */
	public getQuickSequenceNumber(): number	{
		return this.quickSequenceNumber;

	}

	/**
	 * The method to set the value to quickSequenceNumber
	 * @param quickSequenceNumber A number representing the quickSequenceNumber
	 */
	public setQuickSequenceNumber(quickSequenceNumber: number): void	{
		this.quickSequenceNumber = quickSequenceNumber;
		this.keyModified.set("quick_sequence_number", 1);

	}

	/**
	 * The method to get the businesscardSupported
	 * @returns A boolean representing the businesscardSupported
	 */
	public getBusinesscardSupported(): boolean	{
		return this.businesscardSupported;

	}

	/**
	 * The method to set the value to businesscardSupported
	 * @param businesscardSupported A boolean representing the businesscardSupported
	 */
	public setBusinesscardSupported(businesscardSupported: boolean): void	{
		this.businesscardSupported = businesscardSupported;
		this.keyModified.set("businesscard_supported", 1);

	}

	/**
	 * The method to get the multiModuleLookup
	 * @returns A Map representing the multiModuleLookup
	 */
	public getMultiModuleLookup(): Map<string, any>	{
		return this.multiModuleLookup;

	}

	/**
	 * The method to set the value to multiModuleLookup
	 * @param multiModuleLookup A Map representing the multiModuleLookup
	 */
	public setMultiModuleLookup(multiModuleLookup: Map<string, any>): void	{
		this.multiModuleLookup = multiModuleLookup;
		this.keyModified.set("multi_module_lookup", 1);

	}

	/**
	 * The method to get the currency
	 * @returns An instance of Currency
	 */
	public getCurrency(): Currency	{
		return this.currency;

	}

	/**
	 * The method to set the value to currency
	 * @param currency An instance of Currency
	 */
	public setCurrency(currency: Currency): void	{
		this.currency = currency;
		this.keyModified.set("currency", 1);

	}

	/**
	 * The method to get the id
	 * @returns A bigint representing the id
	 */
	public getId(): bigint	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A bigint representing the id
	 */
	public setId(id: bigint): void	{
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the customField
	 * @returns A boolean representing the customField
	 */
	public getCustomField(): boolean	{
		return this.customField;

	}

	/**
	 * The method to set the value to customField
	 * @param customField A boolean representing the customField
	 */
	public setCustomField(customField: boolean): void	{
		this.customField = customField;
		this.keyModified.set("custom_field", 1);

	}

	/**
	 * The method to get the lookup
	 * @returns An instance of Module
	 */
	public getLookup(): Module	{
		return this.lookup;

	}

	/**
	 * The method to set the value to lookup
	 * @param lookup An instance of Module
	 */
	public setLookup(lookup: Module): void	{
		this.lookup = lookup;
		this.keyModified.set("lookup", 1);

	}

	/**
	 * The method to get the visible
	 * @returns A boolean representing the visible
	 */
	public getVisible(): boolean	{
		return this.visible;

	}

	/**
	 * The method to set the value to visible
	 * @param visible A boolean representing the visible
	 */
	public setVisible(visible: boolean): void	{
		this.visible = visible;
		this.keyModified.set("visible", 1);

	}

	/**
	 * The method to get the length
	 * @returns A number representing the length
	 */
	public getLength(): number	{
		return this.length;

	}

	/**
	 * The method to set the value to length
	 * @param length A number representing the length
	 */
	public setLength(length: number): void	{
		this.length = length;
		this.keyModified.set("length", 1);

	}

	/**
	 * The method to get the viewType
	 * @returns An instance of ViewType
	 */
	public getViewType(): ViewType	{
		return this.viewType;

	}

	/**
	 * The method to set the value to viewType
	 * @param viewType An instance of ViewType
	 */
	public setViewType(viewType: ViewType): void	{
		this.viewType = viewType;
		this.keyModified.set("view_type", 1);

	}

	/**
	 * The method to get the subform
	 * @returns An instance of Module
	 */
	public getSubform(): Module	{
		return this.subform;

	}

	/**
	 * The method to set the value to subform
	 * @param subform An instance of Module
	 */
	public setSubform(subform: Module): void	{
		this.subform = subform;
		this.keyModified.set("subform", 1);

	}

	/**
	 * The method to get the apiName
	 * @returns A string representing the apiName
	 */
	public getAPIName(): string	{
		return this.apiName;

	}

	/**
	 * The method to set the value to apiName
	 * @param apiName A string representing the apiName
	 */
	public setAPIName(apiName: string): void	{
		this.apiName = apiName;
		this.keyModified.set("api_name", 1);

	}

	/**
	 * The method to get the unique
	 * @returns An instance of Unique
	 */
	public getUnique(): Unique	{
		return this.unique;

	}

	/**
	 * The method to set the value to unique
	 * @param unique An instance of Unique
	 */
	public setUnique(unique: Unique): void	{
		this.unique = unique;
		this.keyModified.set("unique", 1);

	}

	/**
	 * The method to get the historyTracking
	 * @returns A boolean representing the historyTracking
	 */
	public getHistoryTracking(): boolean	{
		return this.historyTracking;

	}

	/**
	 * The method to set the value to historyTracking
	 * @param historyTracking A boolean representing the historyTracking
	 */
	public setHistoryTracking(historyTracking: boolean): void	{
		this.historyTracking = historyTracking;
		this.keyModified.set("history_tracking", 1);

	}

	/**
	 * The method to get the dataType
	 * @returns A string representing the dataType
	 */
	public getDataType(): string	{
		return this.dataType;

	}

	/**
	 * The method to set the value to dataType
	 * @param dataType A string representing the dataType
	 */
	public setDataType(dataType: string): void	{
		this.dataType = dataType;
		this.keyModified.set("data_type", 1);

	}

	/**
	 * The method to get the formula
	 * @returns An instance of Formula
	 */
	public getFormula(): Formula	{
		return this.formula;

	}

	/**
	 * The method to set the value to formula
	 * @param formula An instance of Formula
	 */
	public setFormula(formula: Formula): void	{
		this.formula = formula;
		this.keyModified.set("formula", 1);

	}

	/**
	 * The method to get the decimalPlace
	 * @returns A number representing the decimalPlace
	 */
	public getDecimalPlace(): number	{
		return this.decimalPlace;

	}

	/**
	 * The method to set the value to decimalPlace
	 * @param decimalPlace A number representing the decimalPlace
	 */
	public setDecimalPlace(decimalPlace: number): void	{
		this.decimalPlace = decimalPlace;
		this.keyModified.set("decimal_place", 1);

	}

	/**
	 * The method to get the massUpdate
	 * @returns A boolean representing the massUpdate
	 */
	public getMassUpdate(): boolean	{
		return this.massUpdate;

	}

	/**
	 * The method to set the value to massUpdate
	 * @param massUpdate A boolean representing the massUpdate
	 */
	public setMassUpdate(massUpdate: boolean): void	{
		this.massUpdate = massUpdate;
		this.keyModified.set("mass_update", 1);

	}

	/**
	 * The method to get the blueprintSupported
	 * @returns A boolean representing the blueprintSupported
	 */
	public getBlueprintSupported(): boolean	{
		return this.blueprintSupported;

	}

	/**
	 * The method to set the value to blueprintSupported
	 * @param blueprintSupported A boolean representing the blueprintSupported
	 */
	public setBlueprintSupported(blueprintSupported: boolean): void	{
		this.blueprintSupported = blueprintSupported;
		this.keyModified.set("blueprint_supported", 1);

	}

	/**
	 * The method to get the multiselectlookup
	 * @returns An instance of MultiSelectLookup
	 */
	public getMultiselectlookup(): MultiSelectLookup	{
		return this.multiselectlookup;

	}

	/**
	 * The method to set the value to multiselectlookup
	 * @param multiselectlookup An instance of MultiSelectLookup
	 */
	public setMultiselectlookup(multiselectlookup: MultiSelectLookup): void	{
		this.multiselectlookup = multiselectlookup;
		this.keyModified.set("multiselectlookup", 1);

	}

	/**
	 * The method to get the pickListValues
	 * @returns An Array representing the pickListValues
	 */
	public getPickListValues(): Array<PickListValue>	{
		return this.pickListValues;

	}

	/**
	 * The method to set the value to pickListValues
	 * @param pickListValues An Array representing the pickListValues
	 */
	public setPickListValues(pickListValues: Array<PickListValue>): void	{
		this.pickListValues = pickListValues;
		this.keyModified.set("pick_list_values", 1);

	}

	/**
	 * The method to get the autoNumber
	 * @returns An instance of AutoNumber
	 */
	public getAutoNumber(): AutoNumber	{
		return this.autoNumber;

	}

	/**
	 * The method to set the value to autoNumber
	 * @param autoNumber An instance of AutoNumber
	 */
	public setAutoNumber(autoNumber: AutoNumber): void	{
		this.autoNumber = autoNumber;
		this.keyModified.set("auto_number", 1);

	}

	/**
	 * The method to get the defaultValue
	 * @returns A string representing the defaultValue
	 */
	public getDefaultValue(): string	{
		return this.defaultValue;

	}

	/**
	 * The method to set the value to defaultValue
	 * @param defaultValue A string representing the defaultValue
	 */
	public setDefaultValue(defaultValue: string): void	{
		this.defaultValue = defaultValue;
		this.keyModified.set("default_value", 1);

	}

	/**
	 * The method to get the sectionId
	 * @returns A number representing the sectionId
	 */
	public getSectionId(): number	{
		return this.sectionId;

	}

	/**
	 * The method to set the value to sectionId
	 * @param sectionId A number representing the sectionId
	 */
	public setSectionId(sectionId: number): void	{
		this.sectionId = sectionId;
		this.keyModified.set("section_id", 1);

	}

	/**
	 * The method to get the validationRule
	 * @returns A Map representing the validationRule
	 */
	public getValidationRule(): Map<string, any>	{
		return this.validationRule;

	}

	/**
	 * The method to set the value to validationRule
	 * @param validationRule A Map representing the validationRule
	 */
	public setValidationRule(validationRule: Map<string, any>): void	{
		this.validationRule = validationRule;
		this.keyModified.set("validation_rule", 1);

	}

	/**
	 * The method to get the convertMapping
	 * @returns A Map representing the convertMapping
	 */
	public getConvertMapping(): Map<string, any>	{
		return this.convertMapping;

	}

	/**
	 * The method to set the value to convertMapping
	 * @param convertMapping A Map representing the convertMapping
	 */
	public setConvertMapping(convertMapping: Map<string, any>): void	{
		this.convertMapping = convertMapping;
		this.keyModified.set("convert_mapping", 1);

	}

	/**
	 * The method to check if the user has modified the given key
	 * @param key A string representing the key
	 * @returns A number representing the modification
	 */
	public isKeyModified(key: string): number | null | undefined	{
		if(this.keyModified.has(key))	{
			return this.keyModified.get(key);
		}
		return null;

	}

	/**
	 * The method to mark the given key as modified
	 * @param key A string representing the key
	 * @param modification A number representing the modification
	 */
	public setKeyModified(key: string, modification: number): void	{
		this.keyModified.set(key, modification);

	}

}
export {
	Field as MasterModel,
	Field as Field
}
