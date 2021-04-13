"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Field = exports.MasterModel = void 0;
class Field {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the systemMandatory
     * @returns A boolean representing the systemMandatory
     */
    getSystemMandatory() {
        return this.systemMandatory;
    }
    /**
     * The method to set the value to systemMandatory
     * @param systemMandatory A boolean representing the systemMandatory
     */
    setSystemMandatory(systemMandatory) {
        this.systemMandatory = systemMandatory;
        this.keyModified.set("system_mandatory", 1);
    }
    /**
     * The method to get the webhook
     * @returns A boolean representing the webhook
     */
    getWebhook() {
        return this.webhook;
    }
    /**
     * The method to set the value to webhook
     * @param webhook A boolean representing the webhook
     */
    setWebhook(webhook) {
        this.webhook = webhook;
        this.keyModified.set("webhook", 1);
    }
    /**
     * The method to get the private
     * @returns An instance of Private
     */
    getPrivate() {
        return this.private1;
    }
    /**
     * The method to set the value to private
     * @param private1 An instance of Private
     */
    setPrivate(private1) {
        this.private1 = private1;
        this.keyModified.set("private", 1);
    }
    /**
     * The method to get the layouts
     * @returns An instance of Layout
     */
    getLayouts() {
        return this.layouts;
    }
    /**
     * The method to set the value to layouts
     * @param layouts An instance of Layout
     */
    setLayouts(layouts) {
        this.layouts = layouts;
        this.keyModified.set("layouts", 1);
    }
    /**
     * The method to get the content
     * @returns A string representing the content
     */
    getContent() {
        return this.content;
    }
    /**
     * The method to set the value to content
     * @param content A string representing the content
     */
    setContent(content) {
        this.content = content;
        this.keyModified.set("content", 1);
    }
    /**
     * The method to get the columnName
     * @returns A string representing the columnName
     */
    getColumnName() {
        return this.columnName;
    }
    /**
     * The method to set the value to columnName
     * @param columnName A string representing the columnName
     */
    setColumnName(columnName) {
        this.columnName = columnName;
        this.keyModified.set("column_name", 1);
    }
    /**
     * The method to get the type
     * @returns A string representing the type
     */
    getType() {
        return this.type;
    }
    /**
     * The method to set the value to type
     * @param type A string representing the type
     */
    setType(type) {
        this.type = type;
        this.keyModified.set("_type", 1);
    }
    /**
     * The method to get the transitionSequence
     * @returns A number representing the transitionSequence
     */
    getTransitionSequence() {
        return this.transitionSequence;
    }
    /**
     * The method to set the value to transitionSequence
     * @param transitionSequence A number representing the transitionSequence
     */
    setTransitionSequence(transitionSequence) {
        this.transitionSequence = transitionSequence;
        this.keyModified.set("transition_sequence", 1);
    }
    /**
     * The method to get the personalityName
     * @returns A string representing the personalityName
     */
    getPersonalityName() {
        return this.personalityName;
    }
    /**
     * The method to set the value to personalityName
     * @param personalityName A string representing the personalityName
     */
    setPersonalityName(personalityName) {
        this.personalityName = personalityName;
        this.keyModified.set("personality_name", 1);
    }
    /**
     * The method to get the message
     * @returns A string representing the message
     */
    getMessage() {
        return this.message;
    }
    /**
     * The method to set the value to message
     * @param message A string representing the message
     */
    setMessage(message) {
        this.message = message;
        this.keyModified.set("message", 1);
    }
    /**
     * The method to get the mandatory
     * @returns A boolean representing the mandatory
     */
    getMandatory() {
        return this.mandatory;
    }
    /**
     * The method to set the value to mandatory
     * @param mandatory A boolean representing the mandatory
     */
    setMandatory(mandatory) {
        this.mandatory = mandatory;
        this.keyModified.set("mandatory", 1);
    }
    /**
     * The method to get the criteria
     * @returns An instance of Criteria
     */
    getCriteria() {
        return this.criteria;
    }
    /**
     * The method to set the value to criteria
     * @param criteria An instance of Criteria
     */
    setCriteria(criteria) {
        this.criteria = criteria;
        this.keyModified.set("criteria", 1);
    }
    /**
     * The method to get the relatedDetails
     * @returns An instance of RelatedDetails
     */
    getRelatedDetails() {
        return this.relatedDetails;
    }
    /**
     * The method to set the value to relatedDetails
     * @param relatedDetails An instance of RelatedDetails
     */
    setRelatedDetails(relatedDetails) {
        this.relatedDetails = relatedDetails;
        this.keyModified.set("related_details", 1);
    }
    /**
     * The method to get the jsonType
     * @returns A string representing the jsonType
     */
    getJsonType() {
        return this.jsonType;
    }
    /**
     * The method to set the value to jsonType
     * @param jsonType A string representing the jsonType
     */
    setJsonType(jsonType) {
        this.jsonType = jsonType;
        this.keyModified.set("json_type", 1);
    }
    /**
     * The method to get the crypt
     * @returns An instance of Crypt
     */
    getCrypt() {
        return this.crypt;
    }
    /**
     * The method to set the value to crypt
     * @param crypt An instance of Crypt
     */
    setCrypt(crypt) {
        this.crypt = crypt;
        this.keyModified.set("crypt", 1);
    }
    /**
     * The method to get the fieldLabel
     * @returns A string representing the fieldLabel
     */
    getFieldLabel() {
        return this.fieldLabel;
    }
    /**
     * The method to set the value to fieldLabel
     * @param fieldLabel A string representing the fieldLabel
     */
    setFieldLabel(fieldLabel) {
        this.fieldLabel = fieldLabel;
        this.keyModified.set("field_label", 1);
    }
    /**
     * The method to get the tooltip
     * @returns An instance of ToolTip
     */
    getTooltip() {
        return this.tooltip;
    }
    /**
     * The method to set the value to tooltip
     * @param tooltip An instance of ToolTip
     */
    setTooltip(tooltip) {
        this.tooltip = tooltip;
        this.keyModified.set("tooltip", 1);
    }
    /**
     * The method to get the createdSource
     * @returns A string representing the createdSource
     */
    getCreatedSource() {
        return this.createdSource;
    }
    /**
     * The method to set the value to createdSource
     * @param createdSource A string representing the createdSource
     */
    setCreatedSource(createdSource) {
        this.createdSource = createdSource;
        this.keyModified.set("created_source", 1);
    }
    /**
     * The method to get the fieldReadOnly
     * @returns A boolean representing the fieldReadOnly
     */
    getFieldReadOnly() {
        return this.fieldReadOnly;
    }
    /**
     * The method to set the value to fieldReadOnly
     * @param fieldReadOnly A boolean representing the fieldReadOnly
     */
    setFieldReadOnly(fieldReadOnly) {
        this.fieldReadOnly = fieldReadOnly;
        this.keyModified.set("field_read_only", 1);
    }
    /**
     * The method to get the displayLabel
     * @returns A string representing the displayLabel
     */
    getDisplayLabel() {
        return this.displayLabel;
    }
    /**
     * The method to set the value to displayLabel
     * @param displayLabel A string representing the displayLabel
     */
    setDisplayLabel(displayLabel) {
        this.displayLabel = displayLabel;
        this.keyModified.set("display_label", 1);
    }
    /**
     * The method to get the readOnly
     * @returns A boolean representing the readOnly
     */
    getReadOnly() {
        return this.readOnly;
    }
    /**
     * The method to set the value to readOnly
     * @param readOnly A boolean representing the readOnly
     */
    setReadOnly(readOnly) {
        this.readOnly = readOnly;
        this.keyModified.set("read_only", 1);
    }
    /**
     * The method to get the associationDetails
     * @returns An instance of AssociationDetails
     */
    getAssociationDetails() {
        return this.associationDetails;
    }
    /**
     * The method to set the value to associationDetails
     * @param associationDetails An instance of AssociationDetails
     */
    setAssociationDetails(associationDetails) {
        this.associationDetails = associationDetails;
        this.keyModified.set("association_details", 1);
    }
    /**
     * The method to get the quickSequenceNumber
     * @returns A number representing the quickSequenceNumber
     */
    getQuickSequenceNumber() {
        return this.quickSequenceNumber;
    }
    /**
     * The method to set the value to quickSequenceNumber
     * @param quickSequenceNumber A number representing the quickSequenceNumber
     */
    setQuickSequenceNumber(quickSequenceNumber) {
        this.quickSequenceNumber = quickSequenceNumber;
        this.keyModified.set("quick_sequence_number", 1);
    }
    /**
     * The method to get the businesscardSupported
     * @returns A boolean representing the businesscardSupported
     */
    getBusinesscardSupported() {
        return this.businesscardSupported;
    }
    /**
     * The method to set the value to businesscardSupported
     * @param businesscardSupported A boolean representing the businesscardSupported
     */
    setBusinesscardSupported(businesscardSupported) {
        this.businesscardSupported = businesscardSupported;
        this.keyModified.set("businesscard_supported", 1);
    }
    /**
     * The method to get the multiModuleLookup
     * @returns A Map representing the multiModuleLookup
     */
    getMultiModuleLookup() {
        return this.multiModuleLookup;
    }
    /**
     * The method to set the value to multiModuleLookup
     * @param multiModuleLookup A Map representing the multiModuleLookup
     */
    setMultiModuleLookup(multiModuleLookup) {
        this.multiModuleLookup = multiModuleLookup;
        this.keyModified.set("multi_module_lookup", 1);
    }
    /**
     * The method to get the currency
     * @returns An instance of Currency
     */
    getCurrency() {
        return this.currency;
    }
    /**
     * The method to set the value to currency
     * @param currency An instance of Currency
     */
    setCurrency(currency) {
        this.currency = currency;
        this.keyModified.set("currency", 1);
    }
    /**
     * The method to get the id
     * @returns A bigint representing the id
     */
    getId() {
        return this.id;
    }
    /**
     * The method to set the value to id
     * @param id A bigint representing the id
     */
    setId(id) {
        this.id = id;
        this.keyModified.set("id", 1);
    }
    /**
     * The method to get the customField
     * @returns A boolean representing the customField
     */
    getCustomField() {
        return this.customField;
    }
    /**
     * The method to set the value to customField
     * @param customField A boolean representing the customField
     */
    setCustomField(customField) {
        this.customField = customField;
        this.keyModified.set("custom_field", 1);
    }
    /**
     * The method to get the lookup
     * @returns An instance of Module
     */
    getLookup() {
        return this.lookup;
    }
    /**
     * The method to set the value to lookup
     * @param lookup An instance of Module
     */
    setLookup(lookup) {
        this.lookup = lookup;
        this.keyModified.set("lookup", 1);
    }
    /**
     * The method to get the visible
     * @returns A boolean representing the visible
     */
    getVisible() {
        return this.visible;
    }
    /**
     * The method to set the value to visible
     * @param visible A boolean representing the visible
     */
    setVisible(visible) {
        this.visible = visible;
        this.keyModified.set("visible", 1);
    }
    /**
     * The method to get the length
     * @returns A number representing the length
     */
    getLength() {
        return this.length;
    }
    /**
     * The method to set the value to length
     * @param length A number representing the length
     */
    setLength(length) {
        this.length = length;
        this.keyModified.set("length", 1);
    }
    /**
     * The method to get the viewType
     * @returns An instance of ViewType
     */
    getViewType() {
        return this.viewType;
    }
    /**
     * The method to set the value to viewType
     * @param viewType An instance of ViewType
     */
    setViewType(viewType) {
        this.viewType = viewType;
        this.keyModified.set("view_type", 1);
    }
    /**
     * The method to get the subform
     * @returns An instance of Module
     */
    getSubform() {
        return this.subform;
    }
    /**
     * The method to set the value to subform
     * @param subform An instance of Module
     */
    setSubform(subform) {
        this.subform = subform;
        this.keyModified.set("subform", 1);
    }
    /**
     * The method to get the apiName
     * @returns A string representing the apiName
     */
    getAPIName() {
        return this.apiName;
    }
    /**
     * The method to set the value to apiName
     * @param apiName A string representing the apiName
     */
    setAPIName(apiName) {
        this.apiName = apiName;
        this.keyModified.set("api_name", 1);
    }
    /**
     * The method to get the unique
     * @returns An instance of Unique
     */
    getUnique() {
        return this.unique;
    }
    /**
     * The method to set the value to unique
     * @param unique An instance of Unique
     */
    setUnique(unique) {
        this.unique = unique;
        this.keyModified.set("unique", 1);
    }
    /**
     * The method to get the historyTracking
     * @returns A boolean representing the historyTracking
     */
    getHistoryTracking() {
        return this.historyTracking;
    }
    /**
     * The method to set the value to historyTracking
     * @param historyTracking A boolean representing the historyTracking
     */
    setHistoryTracking(historyTracking) {
        this.historyTracking = historyTracking;
        this.keyModified.set("history_tracking", 1);
    }
    /**
     * The method to get the dataType
     * @returns A string representing the dataType
     */
    getDataType() {
        return this.dataType;
    }
    /**
     * The method to set the value to dataType
     * @param dataType A string representing the dataType
     */
    setDataType(dataType) {
        this.dataType = dataType;
        this.keyModified.set("data_type", 1);
    }
    /**
     * The method to get the formula
     * @returns An instance of Formula
     */
    getFormula() {
        return this.formula;
    }
    /**
     * The method to set the value to formula
     * @param formula An instance of Formula
     */
    setFormula(formula) {
        this.formula = formula;
        this.keyModified.set("formula", 1);
    }
    /**
     * The method to get the decimalPlace
     * @returns A number representing the decimalPlace
     */
    getDecimalPlace() {
        return this.decimalPlace;
    }
    /**
     * The method to set the value to decimalPlace
     * @param decimalPlace A number representing the decimalPlace
     */
    setDecimalPlace(decimalPlace) {
        this.decimalPlace = decimalPlace;
        this.keyModified.set("decimal_place", 1);
    }
    /**
     * The method to get the massUpdate
     * @returns A boolean representing the massUpdate
     */
    getMassUpdate() {
        return this.massUpdate;
    }
    /**
     * The method to set the value to massUpdate
     * @param massUpdate A boolean representing the massUpdate
     */
    setMassUpdate(massUpdate) {
        this.massUpdate = massUpdate;
        this.keyModified.set("mass_update", 1);
    }
    /**
     * The method to get the blueprintSupported
     * @returns A boolean representing the blueprintSupported
     */
    getBlueprintSupported() {
        return this.blueprintSupported;
    }
    /**
     * The method to set the value to blueprintSupported
     * @param blueprintSupported A boolean representing the blueprintSupported
     */
    setBlueprintSupported(blueprintSupported) {
        this.blueprintSupported = blueprintSupported;
        this.keyModified.set("blueprint_supported", 1);
    }
    /**
     * The method to get the multiselectlookup
     * @returns An instance of MultiSelectLookup
     */
    getMultiselectlookup() {
        return this.multiselectlookup;
    }
    /**
     * The method to set the value to multiselectlookup
     * @param multiselectlookup An instance of MultiSelectLookup
     */
    setMultiselectlookup(multiselectlookup) {
        this.multiselectlookup = multiselectlookup;
        this.keyModified.set("multiselectlookup", 1);
    }
    /**
     * The method to get the pickListValues
     * @returns An Array representing the pickListValues
     */
    getPickListValues() {
        return this.pickListValues;
    }
    /**
     * The method to set the value to pickListValues
     * @param pickListValues An Array representing the pickListValues
     */
    setPickListValues(pickListValues) {
        this.pickListValues = pickListValues;
        this.keyModified.set("pick_list_values", 1);
    }
    /**
     * The method to get the autoNumber
     * @returns An instance of AutoNumber
     */
    getAutoNumber() {
        return this.autoNumber;
    }
    /**
     * The method to set the value to autoNumber
     * @param autoNumber An instance of AutoNumber
     */
    setAutoNumber(autoNumber) {
        this.autoNumber = autoNumber;
        this.keyModified.set("auto_number", 1);
    }
    /**
     * The method to get the defaultValue
     * @returns A string representing the defaultValue
     */
    getDefaultValue() {
        return this.defaultValue;
    }
    /**
     * The method to set the value to defaultValue
     * @param defaultValue A string representing the defaultValue
     */
    setDefaultValue(defaultValue) {
        this.defaultValue = defaultValue;
        this.keyModified.set("default_value", 1);
    }
    /**
     * The method to get the sectionId
     * @returns A number representing the sectionId
     */
    getSectionId() {
        return this.sectionId;
    }
    /**
     * The method to set the value to sectionId
     * @param sectionId A number representing the sectionId
     */
    setSectionId(sectionId) {
        this.sectionId = sectionId;
        this.keyModified.set("section_id", 1);
    }
    /**
     * The method to get the validationRule
     * @returns A Map representing the validationRule
     */
    getValidationRule() {
        return this.validationRule;
    }
    /**
     * The method to set the value to validationRule
     * @param validationRule A Map representing the validationRule
     */
    setValidationRule(validationRule) {
        this.validationRule = validationRule;
        this.keyModified.set("validation_rule", 1);
    }
    /**
     * The method to get the convertMapping
     * @returns A Map representing the convertMapping
     */
    getConvertMapping() {
        return this.convertMapping;
    }
    /**
     * The method to set the value to convertMapping
     * @param convertMapping A Map representing the convertMapping
     */
    setConvertMapping(convertMapping) {
        this.convertMapping = convertMapping;
        this.keyModified.set("convert_mapping", 1);
    }
    /**
     * The method to check if the user has modified the given key
     * @param key A string representing the key
     * @returns A number representing the modification
     */
    isKeyModified(key) {
        if (this.keyModified.has(key)) {
            return this.keyModified.get(key);
        }
        return null;
    }
    /**
     * The method to mark the given key as modified
     * @param key A string representing the key
     * @param modification A number representing the modification
     */
    setKeyModified(key, modification) {
        this.keyModified.set(key, modification);
    }
}
exports.MasterModel = Field;
exports.Field = Field;
//# sourceMappingURL=field.js.map