"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = exports.MasterModel = void 0;
class Module {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the name
     * @returns A string representing the name
     */
    getName() {
        return this.name;
    }
    /**
     * The method to set the value to name
     * @param name A string representing the name
     */
    setName(name) {
        this.name = name;
        this.keyModified.set("name", 1);
    }
    /**
     * The method to get the globalSearchSupported
     * @returns A boolean representing the globalSearchSupported
     */
    getGlobalSearchSupported() {
        return this.globalSearchSupported;
    }
    /**
     * The method to set the value to globalSearchSupported
     * @param globalSearchSupported A boolean representing the globalSearchSupported
     */
    setGlobalSearchSupported(globalSearchSupported) {
        this.globalSearchSupported = globalSearchSupported;
        this.keyModified.set("global_search_supported", 1);
    }
    /**
     * The method to get the kanbanView
     * @returns A boolean representing the kanbanView
     */
    getKanbanView() {
        return this.kanbanView;
    }
    /**
     * The method to set the value to kanbanView
     * @param kanbanView A boolean representing the kanbanView
     */
    setKanbanView(kanbanView) {
        this.kanbanView = kanbanView;
        this.keyModified.set("kanban_view", 1);
    }
    /**
     * The method to get the deletable
     * @returns A boolean representing the deletable
     */
    getDeletable() {
        return this.deletable;
    }
    /**
     * The method to set the value to deletable
     * @param deletable A boolean representing the deletable
     */
    setDeletable(deletable) {
        this.deletable = deletable;
        this.keyModified.set("deletable", 1);
    }
    /**
     * The method to get the description
     * @returns A string representing the description
     */
    getDescription() {
        return this.description;
    }
    /**
     * The method to set the value to description
     * @param description A string representing the description
     */
    setDescription(description) {
        this.description = description;
        this.keyModified.set("description", 1);
    }
    /**
     * The method to get the creatable
     * @returns A boolean representing the creatable
     */
    getCreatable() {
        return this.creatable;
    }
    /**
     * The method to set the value to creatable
     * @param creatable A boolean representing the creatable
     */
    setCreatable(creatable) {
        this.creatable = creatable;
        this.keyModified.set("creatable", 1);
    }
    /**
     * The method to get the filterStatus
     * @returns A boolean representing the filterStatus
     */
    getFilterStatus() {
        return this.filterStatus;
    }
    /**
     * The method to set the value to filterStatus
     * @param filterStatus A boolean representing the filterStatus
     */
    setFilterStatus(filterStatus) {
        this.filterStatus = filterStatus;
        this.keyModified.set("filter_status", 1);
    }
    /**
     * The method to get the inventoryTemplateSupported
     * @returns A boolean representing the inventoryTemplateSupported
     */
    getInventoryTemplateSupported() {
        return this.inventoryTemplateSupported;
    }
    /**
     * The method to set the value to inventoryTemplateSupported
     * @param inventoryTemplateSupported A boolean representing the inventoryTemplateSupported
     */
    setInventoryTemplateSupported(inventoryTemplateSupported) {
        this.inventoryTemplateSupported = inventoryTemplateSupported;
        this.keyModified.set("inventory_template_supported", 1);
    }
    /**
     * The method to get the modifiedTime
     * @returns An instance of Date
     */
    getModifiedTime() {
        return this.modifiedTime;
    }
    /**
     * The method to set the value to modifiedTime
     * @param modifiedTime An instance of Date
     */
    setModifiedTime(modifiedTime) {
        this.modifiedTime = modifiedTime;
        this.keyModified.set("modified_time", 1);
    }
    /**
     * The method to get the pluralLabel
     * @returns A string representing the pluralLabel
     */
    getPluralLabel() {
        return this.pluralLabel;
    }
    /**
     * The method to set the value to pluralLabel
     * @param pluralLabel A string representing the pluralLabel
     */
    setPluralLabel(pluralLabel) {
        this.pluralLabel = pluralLabel;
        this.keyModified.set("plural_label", 1);
    }
    /**
     * The method to get the presenceSubMenu
     * @returns A boolean representing the presenceSubMenu
     */
    getPresenceSubMenu() {
        return this.presenceSubMenu;
    }
    /**
     * The method to set the value to presenceSubMenu
     * @param presenceSubMenu A boolean representing the presenceSubMenu
     */
    setPresenceSubMenu(presenceSubMenu) {
        this.presenceSubMenu = presenceSubMenu;
        this.keyModified.set("presence_sub_menu", 1);
    }
    /**
     * The method to get the triggersSupported
     * @returns A boolean representing the triggersSupported
     */
    getTriggersSupported() {
        return this.triggersSupported;
    }
    /**
     * The method to set the value to triggersSupported
     * @param triggersSupported A boolean representing the triggersSupported
     */
    setTriggersSupported(triggersSupported) {
        this.triggersSupported = triggersSupported;
        this.keyModified.set("triggers_supported", 1);
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
     * The method to get the relatedListProperties
     * @returns An instance of RelatedListProperties
     */
    getRelatedListProperties() {
        return this.relatedListProperties;
    }
    /**
     * The method to set the value to relatedListProperties
     * @param relatedListProperties An instance of RelatedListProperties
     */
    setRelatedListProperties(relatedListProperties) {
        this.relatedListProperties = relatedListProperties;
        this.keyModified.set("related_list_properties", 1);
    }
    /**
     * The method to get the properties
     * @returns An Array representing the properties
     */
    getProperties() {
        return this.properties;
    }
    /**
     * The method to set the value to properties
     * @param properties An Array representing the properties
     */
    setProperties(properties) {
        this.properties = properties;
        this.keyModified.set("$properties", 1);
    }
    /**
     * The method to get the perPage
     * @returns A number representing the perPage
     */
    getPerPage() {
        return this.perPage;
    }
    /**
     * The method to set the value to perPage
     * @param perPage A number representing the perPage
     */
    setPerPage(perPage) {
        this.perPage = perPage;
        this.keyModified.set("per_page", 1);
    }
    /**
     * The method to get the visibility
     * @returns A number representing the visibility
     */
    getVisibility() {
        return this.visibility;
    }
    /**
     * The method to set the value to visibility
     * @param visibility A number representing the visibility
     */
    setVisibility(visibility) {
        this.visibility = visibility;
        this.keyModified.set("visibility", 1);
    }
    /**
     * The method to get the convertable
     * @returns A boolean representing the convertable
     */
    getConvertable() {
        return this.convertable;
    }
    /**
     * The method to set the value to convertable
     * @param convertable A boolean representing the convertable
     */
    setConvertable(convertable) {
        this.convertable = convertable;
        this.keyModified.set("convertable", 1);
    }
    /**
     * The method to get the editable
     * @returns A boolean representing the editable
     */
    getEditable() {
        return this.editable;
    }
    /**
     * The method to set the value to editable
     * @param editable A boolean representing the editable
     */
    setEditable(editable) {
        this.editable = editable;
        this.keyModified.set("editable", 1);
    }
    /**
     * The method to get the emailtemplateSupport
     * @returns A boolean representing the emailtemplateSupport
     */
    getEmailtemplateSupport() {
        return this.emailtemplateSupport;
    }
    /**
     * The method to set the value to emailtemplateSupport
     * @param emailtemplateSupport A boolean representing the emailtemplateSupport
     */
    setEmailtemplateSupport(emailtemplateSupport) {
        this.emailtemplateSupport = emailtemplateSupport;
        this.keyModified.set("emailTemplate_support", 1);
    }
    /**
     * The method to get the profiles
     * @returns An Array representing the profiles
     */
    getProfiles() {
        return this.profiles;
    }
    /**
     * The method to set the value to profiles
     * @param profiles An Array representing the profiles
     */
    setProfiles(profiles) {
        this.profiles = profiles;
        this.keyModified.set("profiles", 1);
    }
    /**
     * The method to get the filterSupported
     * @returns A boolean representing the filterSupported
     */
    getFilterSupported() {
        return this.filterSupported;
    }
    /**
     * The method to set the value to filterSupported
     * @param filterSupported A boolean representing the filterSupported
     */
    setFilterSupported(filterSupported) {
        this.filterSupported = filterSupported;
        this.keyModified.set("filter_supported", 1);
    }
    /**
     * The method to get the displayField
     * @returns A string representing the displayField
     */
    getDisplayField() {
        return this.displayField;
    }
    /**
     * The method to set the value to displayField
     * @param displayField A string representing the displayField
     */
    setDisplayField(displayField) {
        this.displayField = displayField;
        this.keyModified.set("display_field", 1);
    }
    /**
     * The method to get the searchLayoutFields
     * @returns An Array representing the searchLayoutFields
     */
    getSearchLayoutFields() {
        return this.searchLayoutFields;
    }
    /**
     * The method to set the value to searchLayoutFields
     * @param searchLayoutFields An Array representing the searchLayoutFields
     */
    setSearchLayoutFields(searchLayoutFields) {
        this.searchLayoutFields = searchLayoutFields;
        this.keyModified.set("search_layout_fields", 1);
    }
    /**
     * The method to get the kanbanViewSupported
     * @returns A boolean representing the kanbanViewSupported
     */
    getKanbanViewSupported() {
        return this.kanbanViewSupported;
    }
    /**
     * The method to set the value to kanbanViewSupported
     * @param kanbanViewSupported A boolean representing the kanbanViewSupported
     */
    setKanbanViewSupported(kanbanViewSupported) {
        this.kanbanViewSupported = kanbanViewSupported;
        this.keyModified.set("kanban_view_supported", 1);
    }
    /**
     * The method to get the showAsTab
     * @returns A boolean representing the showAsTab
     */
    getShowAsTab() {
        return this.showAsTab;
    }
    /**
     * The method to set the value to showAsTab
     * @param showAsTab A boolean representing the showAsTab
     */
    setShowAsTab(showAsTab) {
        this.showAsTab = showAsTab;
        this.keyModified.set("show_as_tab", 1);
    }
    /**
     * The method to get the webLink
     * @returns A string representing the webLink
     */
    getWebLink() {
        return this.webLink;
    }
    /**
     * The method to set the value to webLink
     * @param webLink A string representing the webLink
     */
    setWebLink(webLink) {
        this.webLink = webLink;
        this.keyModified.set("web_link", 1);
    }
    /**
     * The method to get the sequenceNumber
     * @returns A number representing the sequenceNumber
     */
    getSequenceNumber() {
        return this.sequenceNumber;
    }
    /**
     * The method to set the value to sequenceNumber
     * @param sequenceNumber A number representing the sequenceNumber
     */
    setSequenceNumber(sequenceNumber) {
        this.sequenceNumber = sequenceNumber;
        this.keyModified.set("sequence_number", 1);
    }
    /**
     * The method to get the singularLabel
     * @returns A string representing the singularLabel
     */
    getSingularLabel() {
        return this.singularLabel;
    }
    /**
     * The method to set the value to singularLabel
     * @param singularLabel A string representing the singularLabel
     */
    setSingularLabel(singularLabel) {
        this.singularLabel = singularLabel;
        this.keyModified.set("singular_label", 1);
    }
    /**
     * The method to get the viewable
     * @returns A boolean representing the viewable
     */
    getViewable() {
        return this.viewable;
    }
    /**
     * The method to set the value to viewable
     * @param viewable A boolean representing the viewable
     */
    setViewable(viewable) {
        this.viewable = viewable;
        this.keyModified.set("viewable", 1);
    }
    /**
     * The method to get the apiSupported
     * @returns A boolean representing the apiSupported
     */
    getAPISupported() {
        return this.apiSupported;
    }
    /**
     * The method to set the value to apiSupported
     * @param apiSupported A boolean representing the apiSupported
     */
    setAPISupported(apiSupported) {
        this.apiSupported = apiSupported;
        this.keyModified.set("api_supported", 1);
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
     * The method to get the quickCreate
     * @returns A boolean representing the quickCreate
     */
    getQuickCreate() {
        return this.quickCreate;
    }
    /**
     * The method to set the value to quickCreate
     * @param quickCreate A boolean representing the quickCreate
     */
    setQuickCreate(quickCreate) {
        this.quickCreate = quickCreate;
        this.keyModified.set("quick_create", 1);
    }
    /**
     * The method to get the modifiedBy
     * @returns An instance of User
     */
    getModifiedBy() {
        return this.modifiedBy;
    }
    /**
     * The method to set the value to modifiedBy
     * @param modifiedBy An instance of User
     */
    setModifiedBy(modifiedBy) {
        this.modifiedBy = modifiedBy;
        this.keyModified.set("modified_by", 1);
    }
    /**
     * The method to get the generatedType
     * @returns An instance of Choice<string>
     */
    getGeneratedType() {
        return this.generatedType;
    }
    /**
     * The method to set the value to generatedType
     * @param generatedType An instance of Choice<string>
     */
    setGeneratedType(generatedType) {
        this.generatedType = generatedType;
        this.keyModified.set("generated_type", 1);
    }
    /**
     * The method to get the feedsRequired
     * @returns A boolean representing the feedsRequired
     */
    getFeedsRequired() {
        return this.feedsRequired;
    }
    /**
     * The method to set the value to feedsRequired
     * @param feedsRequired A boolean representing the feedsRequired
     */
    setFeedsRequired(feedsRequired) {
        this.feedsRequired = feedsRequired;
        this.keyModified.set("feeds_required", 1);
    }
    /**
     * The method to get the scoringSupported
     * @returns A boolean representing the scoringSupported
     */
    getScoringSupported() {
        return this.scoringSupported;
    }
    /**
     * The method to set the value to scoringSupported
     * @param scoringSupported A boolean representing the scoringSupported
     */
    setScoringSupported(scoringSupported) {
        this.scoringSupported = scoringSupported;
        this.keyModified.set("scoring_supported", 1);
    }
    /**
     * The method to get the webformSupported
     * @returns A boolean representing the webformSupported
     */
    getWebformSupported() {
        return this.webformSupported;
    }
    /**
     * The method to set the value to webformSupported
     * @param webformSupported A boolean representing the webformSupported
     */
    setWebformSupported(webformSupported) {
        this.webformSupported = webformSupported;
        this.keyModified.set("webform_supported", 1);
    }
    /**
     * The method to get the arguments
     * @returns An Array representing the arguments1
     */
    getArguments() {
        return this.arguments1;
    }
    /**
     * The method to set the value to arguments
     * @param arguments1 An Array representing the arguments1
     */
    setArguments(arguments1) {
        this.arguments1 = arguments1;
        this.keyModified.set("arguments", 1);
    }
    /**
     * The method to get the moduleName
     * @returns A string representing the moduleName
     */
    getModuleName() {
        return this.moduleName;
    }
    /**
     * The method to set the value to moduleName
     * @param moduleName A string representing the moduleName
     */
    setModuleName(moduleName) {
        this.moduleName = moduleName;
        this.keyModified.set("module_name", 1);
    }
    /**
     * The method to get the businessCardFieldLimit
     * @returns A number representing the businessCardFieldLimit
     */
    getBusinessCardFieldLimit() {
        return this.businessCardFieldLimit;
    }
    /**
     * The method to set the value to businessCardFieldLimit
     * @param businessCardFieldLimit A number representing the businessCardFieldLimit
     */
    setBusinessCardFieldLimit(businessCardFieldLimit) {
        this.businessCardFieldLimit = businessCardFieldLimit;
        this.keyModified.set("business_card_field_limit", 1);
    }
    /**
     * The method to get the customView
     * @returns An instance of CustomView
     */
    getCustomView() {
        return this.customView;
    }
    /**
     * The method to set the value to customView
     * @param customView An instance of CustomView
     */
    setCustomView(customView) {
        this.customView = customView;
        this.keyModified.set("custom_view", 1);
    }
    /**
     * The method to get the parentModule
     * @returns An instance of Module
     */
    getParentModule() {
        return this.parentModule;
    }
    /**
     * The method to set the value to parentModule
     * @param parentModule An instance of Module
     */
    setParentModule(parentModule) {
        this.parentModule = parentModule;
        this.keyModified.set("parent_module", 1);
    }
    /**
     * The method to get the territory
     * @returns An instance of Territory
     */
    getTerritory() {
        return this.territory;
    }
    /**
     * The method to set the value to territory
     * @param territory An instance of Territory
     */
    setTerritory(territory) {
        this.territory = territory;
        this.keyModified.set("territory", 1);
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
exports.MasterModel = Module;
exports.Module = Module;
//# sourceMappingURL=module.js.map