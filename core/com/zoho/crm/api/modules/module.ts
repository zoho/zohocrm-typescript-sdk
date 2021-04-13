import {CustomView} from "../custom_views/custom_view";
import {Argument} from "./argument";
import {RelatedListProperties} from "./related_list_properties";
import {Territory} from "./territory";
import {Profile} from "../profiles/profile";
import {User} from "../users/user";
import {Choice} from "../../../../../../utils/util/choice";
import {Model} from "../../../../../../utils/util/model";

class Module implements Model{

	private name: string;
	private globalSearchSupported: boolean;
	private kanbanView: boolean;
	private deletable: boolean;
	private description: string;
	private creatable: boolean;
	private filterStatus: boolean;
	private inventoryTemplateSupported: boolean;
	private modifiedTime: Date;
	private pluralLabel: string;
	private presenceSubMenu: boolean;
	private triggersSupported: boolean;
	private id: bigint;
	private relatedListProperties: RelatedListProperties;
	private properties: Array<string>;
	private perPage: number;
	private visibility: number;
	private convertable: boolean;
	private editable: boolean;
	private emailtemplateSupport: boolean;
	private profiles: Array<Profile>;
	private filterSupported: boolean;
	private displayField: string;
	private searchLayoutFields: Array<string>;
	private kanbanViewSupported: boolean;
	private showAsTab: boolean;
	private webLink: string;
	private sequenceNumber: number;
	private singularLabel: string;
	private viewable: boolean;
	private apiSupported: boolean;
	private apiName: string;
	private quickCreate: boolean;
	private modifiedBy: User;
	private generatedType: Choice<string>;
	private feedsRequired: boolean;
	private scoringSupported: boolean;
	private webformSupported: boolean;
	private arguments1: Array<Argument>;
	private moduleName: string;
	private businessCardFieldLimit: number;
	private customView: CustomView;
	private parentModule: Module;
	private territory: Territory;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the name
	 * @returns A string representing the name
	 */
	public getName(): string	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param name A string representing the name
	 */
	public setName(name: string): void	{
		this.name = name;
		this.keyModified.set("name", 1);

	}

	/**
	 * The method to get the globalSearchSupported
	 * @returns A boolean representing the globalSearchSupported
	 */
	public getGlobalSearchSupported(): boolean	{
		return this.globalSearchSupported;

	}

	/**
	 * The method to set the value to globalSearchSupported
	 * @param globalSearchSupported A boolean representing the globalSearchSupported
	 */
	public setGlobalSearchSupported(globalSearchSupported: boolean): void	{
		this.globalSearchSupported = globalSearchSupported;
		this.keyModified.set("global_search_supported", 1);

	}

	/**
	 * The method to get the kanbanView
	 * @returns A boolean representing the kanbanView
	 */
	public getKanbanView(): boolean	{
		return this.kanbanView;

	}

	/**
	 * The method to set the value to kanbanView
	 * @param kanbanView A boolean representing the kanbanView
	 */
	public setKanbanView(kanbanView: boolean): void	{
		this.kanbanView = kanbanView;
		this.keyModified.set("kanban_view", 1);

	}

	/**
	 * The method to get the deletable
	 * @returns A boolean representing the deletable
	 */
	public getDeletable(): boolean	{
		return this.deletable;

	}

	/**
	 * The method to set the value to deletable
	 * @param deletable A boolean representing the deletable
	 */
	public setDeletable(deletable: boolean): void	{
		this.deletable = deletable;
		this.keyModified.set("deletable", 1);

	}

	/**
	 * The method to get the description
	 * @returns A string representing the description
	 */
	public getDescription(): string	{
		return this.description;

	}

	/**
	 * The method to set the value to description
	 * @param description A string representing the description
	 */
	public setDescription(description: string): void	{
		this.description = description;
		this.keyModified.set("description", 1);

	}

	/**
	 * The method to get the creatable
	 * @returns A boolean representing the creatable
	 */
	public getCreatable(): boolean	{
		return this.creatable;

	}

	/**
	 * The method to set the value to creatable
	 * @param creatable A boolean representing the creatable
	 */
	public setCreatable(creatable: boolean): void	{
		this.creatable = creatable;
		this.keyModified.set("creatable", 1);

	}

	/**
	 * The method to get the filterStatus
	 * @returns A boolean representing the filterStatus
	 */
	public getFilterStatus(): boolean	{
		return this.filterStatus;

	}

	/**
	 * The method to set the value to filterStatus
	 * @param filterStatus A boolean representing the filterStatus
	 */
	public setFilterStatus(filterStatus: boolean): void	{
		this.filterStatus = filterStatus;
		this.keyModified.set("filter_status", 1);

	}

	/**
	 * The method to get the inventoryTemplateSupported
	 * @returns A boolean representing the inventoryTemplateSupported
	 */
	public getInventoryTemplateSupported(): boolean	{
		return this.inventoryTemplateSupported;

	}

	/**
	 * The method to set the value to inventoryTemplateSupported
	 * @param inventoryTemplateSupported A boolean representing the inventoryTemplateSupported
	 */
	public setInventoryTemplateSupported(inventoryTemplateSupported: boolean): void	{
		this.inventoryTemplateSupported = inventoryTemplateSupported;
		this.keyModified.set("inventory_template_supported", 1);

	}

	/**
	 * The method to get the modifiedTime
	 * @returns An instance of Date
	 */
	public getModifiedTime(): Date	{
		return this.modifiedTime;

	}

	/**
	 * The method to set the value to modifiedTime
	 * @param modifiedTime An instance of Date
	 */
	public setModifiedTime(modifiedTime: Date): void	{
		this.modifiedTime = modifiedTime;
		this.keyModified.set("modified_time", 1);

	}

	/**
	 * The method to get the pluralLabel
	 * @returns A string representing the pluralLabel
	 */
	public getPluralLabel(): string	{
		return this.pluralLabel;

	}

	/**
	 * The method to set the value to pluralLabel
	 * @param pluralLabel A string representing the pluralLabel
	 */
	public setPluralLabel(pluralLabel: string): void	{
		this.pluralLabel = pluralLabel;
		this.keyModified.set("plural_label", 1);

	}

	/**
	 * The method to get the presenceSubMenu
	 * @returns A boolean representing the presenceSubMenu
	 */
	public getPresenceSubMenu(): boolean	{
		return this.presenceSubMenu;

	}

	/**
	 * The method to set the value to presenceSubMenu
	 * @param presenceSubMenu A boolean representing the presenceSubMenu
	 */
	public setPresenceSubMenu(presenceSubMenu: boolean): void	{
		this.presenceSubMenu = presenceSubMenu;
		this.keyModified.set("presence_sub_menu", 1);

	}

	/**
	 * The method to get the triggersSupported
	 * @returns A boolean representing the triggersSupported
	 */
	public getTriggersSupported(): boolean	{
		return this.triggersSupported;

	}

	/**
	 * The method to set the value to triggersSupported
	 * @param triggersSupported A boolean representing the triggersSupported
	 */
	public setTriggersSupported(triggersSupported: boolean): void	{
		this.triggersSupported = triggersSupported;
		this.keyModified.set("triggers_supported", 1);

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
	 * The method to get the relatedListProperties
	 * @returns An instance of RelatedListProperties
	 */
	public getRelatedListProperties(): RelatedListProperties	{
		return this.relatedListProperties;

	}

	/**
	 * The method to set the value to relatedListProperties
	 * @param relatedListProperties An instance of RelatedListProperties
	 */
	public setRelatedListProperties(relatedListProperties: RelatedListProperties): void	{
		this.relatedListProperties = relatedListProperties;
		this.keyModified.set("related_list_properties", 1);

	}

	/**
	 * The method to get the properties
	 * @returns An Array representing the properties
	 */
	public getProperties(): Array<string>	{
		return this.properties;

	}

	/**
	 * The method to set the value to properties
	 * @param properties An Array representing the properties
	 */
	public setProperties(properties: Array<string>): void	{
		this.properties = properties;
		this.keyModified.set("$properties", 1);

	}

	/**
	 * The method to get the perPage
	 * @returns A number representing the perPage
	 */
	public getPerPage(): number	{
		return this.perPage;

	}

	/**
	 * The method to set the value to perPage
	 * @param perPage A number representing the perPage
	 */
	public setPerPage(perPage: number): void	{
		this.perPage = perPage;
		this.keyModified.set("per_page", 1);

	}

	/**
	 * The method to get the visibility
	 * @returns A number representing the visibility
	 */
	public getVisibility(): number	{
		return this.visibility;

	}

	/**
	 * The method to set the value to visibility
	 * @param visibility A number representing the visibility
	 */
	public setVisibility(visibility: number): void	{
		this.visibility = visibility;
		this.keyModified.set("visibility", 1);

	}

	/**
	 * The method to get the convertable
	 * @returns A boolean representing the convertable
	 */
	public getConvertable(): boolean	{
		return this.convertable;

	}

	/**
	 * The method to set the value to convertable
	 * @param convertable A boolean representing the convertable
	 */
	public setConvertable(convertable: boolean): void	{
		this.convertable = convertable;
		this.keyModified.set("convertable", 1);

	}

	/**
	 * The method to get the editable
	 * @returns A boolean representing the editable
	 */
	public getEditable(): boolean	{
		return this.editable;

	}

	/**
	 * The method to set the value to editable
	 * @param editable A boolean representing the editable
	 */
	public setEditable(editable: boolean): void	{
		this.editable = editable;
		this.keyModified.set("editable", 1);

	}

	/**
	 * The method to get the emailtemplateSupport
	 * @returns A boolean representing the emailtemplateSupport
	 */
	public getEmailtemplateSupport(): boolean	{
		return this.emailtemplateSupport;

	}

	/**
	 * The method to set the value to emailtemplateSupport
	 * @param emailtemplateSupport A boolean representing the emailtemplateSupport
	 */
	public setEmailtemplateSupport(emailtemplateSupport: boolean): void	{
		this.emailtemplateSupport = emailtemplateSupport;
		this.keyModified.set("emailTemplate_support", 1);

	}

	/**
	 * The method to get the profiles
	 * @returns An Array representing the profiles
	 */
	public getProfiles(): Array<Profile>	{
		return this.profiles;

	}

	/**
	 * The method to set the value to profiles
	 * @param profiles An Array representing the profiles
	 */
	public setProfiles(profiles: Array<Profile>): void	{
		this.profiles = profiles;
		this.keyModified.set("profiles", 1);

	}

	/**
	 * The method to get the filterSupported
	 * @returns A boolean representing the filterSupported
	 */
	public getFilterSupported(): boolean	{
		return this.filterSupported;

	}

	/**
	 * The method to set the value to filterSupported
	 * @param filterSupported A boolean representing the filterSupported
	 */
	public setFilterSupported(filterSupported: boolean): void	{
		this.filterSupported = filterSupported;
		this.keyModified.set("filter_supported", 1);

	}

	/**
	 * The method to get the displayField
	 * @returns A string representing the displayField
	 */
	public getDisplayField(): string	{
		return this.displayField;

	}

	/**
	 * The method to set the value to displayField
	 * @param displayField A string representing the displayField
	 */
	public setDisplayField(displayField: string): void	{
		this.displayField = displayField;
		this.keyModified.set("display_field", 1);

	}

	/**
	 * The method to get the searchLayoutFields
	 * @returns An Array representing the searchLayoutFields
	 */
	public getSearchLayoutFields(): Array<string>	{
		return this.searchLayoutFields;

	}

	/**
	 * The method to set the value to searchLayoutFields
	 * @param searchLayoutFields An Array representing the searchLayoutFields
	 */
	public setSearchLayoutFields(searchLayoutFields: Array<string>): void	{
		this.searchLayoutFields = searchLayoutFields;
		this.keyModified.set("search_layout_fields", 1);

	}

	/**
	 * The method to get the kanbanViewSupported
	 * @returns A boolean representing the kanbanViewSupported
	 */
	public getKanbanViewSupported(): boolean	{
		return this.kanbanViewSupported;

	}

	/**
	 * The method to set the value to kanbanViewSupported
	 * @param kanbanViewSupported A boolean representing the kanbanViewSupported
	 */
	public setKanbanViewSupported(kanbanViewSupported: boolean): void	{
		this.kanbanViewSupported = kanbanViewSupported;
		this.keyModified.set("kanban_view_supported", 1);

	}

	/**
	 * The method to get the showAsTab
	 * @returns A boolean representing the showAsTab
	 */
	public getShowAsTab(): boolean	{
		return this.showAsTab;

	}

	/**
	 * The method to set the value to showAsTab
	 * @param showAsTab A boolean representing the showAsTab
	 */
	public setShowAsTab(showAsTab: boolean): void	{
		this.showAsTab = showAsTab;
		this.keyModified.set("show_as_tab", 1);

	}

	/**
	 * The method to get the webLink
	 * @returns A string representing the webLink
	 */
	public getWebLink(): string	{
		return this.webLink;

	}

	/**
	 * The method to set the value to webLink
	 * @param webLink A string representing the webLink
	 */
	public setWebLink(webLink: string): void	{
		this.webLink = webLink;
		this.keyModified.set("web_link", 1);

	}

	/**
	 * The method to get the sequenceNumber
	 * @returns A number representing the sequenceNumber
	 */
	public getSequenceNumber(): number	{
		return this.sequenceNumber;

	}

	/**
	 * The method to set the value to sequenceNumber
	 * @param sequenceNumber A number representing the sequenceNumber
	 */
	public setSequenceNumber(sequenceNumber: number): void	{
		this.sequenceNumber = sequenceNumber;
		this.keyModified.set("sequence_number", 1);

	}

	/**
	 * The method to get the singularLabel
	 * @returns A string representing the singularLabel
	 */
	public getSingularLabel(): string	{
		return this.singularLabel;

	}

	/**
	 * The method to set the value to singularLabel
	 * @param singularLabel A string representing the singularLabel
	 */
	public setSingularLabel(singularLabel: string): void	{
		this.singularLabel = singularLabel;
		this.keyModified.set("singular_label", 1);

	}

	/**
	 * The method to get the viewable
	 * @returns A boolean representing the viewable
	 */
	public getViewable(): boolean	{
		return this.viewable;

	}

	/**
	 * The method to set the value to viewable
	 * @param viewable A boolean representing the viewable
	 */
	public setViewable(viewable: boolean): void	{
		this.viewable = viewable;
		this.keyModified.set("viewable", 1);

	}

	/**
	 * The method to get the apiSupported
	 * @returns A boolean representing the apiSupported
	 */
	public getAPISupported(): boolean	{
		return this.apiSupported;

	}

	/**
	 * The method to set the value to apiSupported
	 * @param apiSupported A boolean representing the apiSupported
	 */
	public setAPISupported(apiSupported: boolean): void	{
		this.apiSupported = apiSupported;
		this.keyModified.set("api_supported", 1);

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
	 * The method to get the quickCreate
	 * @returns A boolean representing the quickCreate
	 */
	public getQuickCreate(): boolean	{
		return this.quickCreate;

	}

	/**
	 * The method to set the value to quickCreate
	 * @param quickCreate A boolean representing the quickCreate
	 */
	public setQuickCreate(quickCreate: boolean): void	{
		this.quickCreate = quickCreate;
		this.keyModified.set("quick_create", 1);

	}

	/**
	 * The method to get the modifiedBy
	 * @returns An instance of User
	 */
	public getModifiedBy(): User	{
		return this.modifiedBy;

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param modifiedBy An instance of User
	 */
	public setModifiedBy(modifiedBy: User): void	{
		this.modifiedBy = modifiedBy;
		this.keyModified.set("modified_by", 1);

	}

	/**
	 * The method to get the generatedType
	 * @returns An instance of Choice<string>
	 */
	public getGeneratedType(): Choice<string>	{
		return this.generatedType;

	}

	/**
	 * The method to set the value to generatedType
	 * @param generatedType An instance of Choice<string>
	 */
	public setGeneratedType(generatedType: Choice<string>): void	{
		this.generatedType = generatedType;
		this.keyModified.set("generated_type", 1);

	}

	/**
	 * The method to get the feedsRequired
	 * @returns A boolean representing the feedsRequired
	 */
	public getFeedsRequired(): boolean	{
		return this.feedsRequired;

	}

	/**
	 * The method to set the value to feedsRequired
	 * @param feedsRequired A boolean representing the feedsRequired
	 */
	public setFeedsRequired(feedsRequired: boolean): void	{
		this.feedsRequired = feedsRequired;
		this.keyModified.set("feeds_required", 1);

	}

	/**
	 * The method to get the scoringSupported
	 * @returns A boolean representing the scoringSupported
	 */
	public getScoringSupported(): boolean	{
		return this.scoringSupported;

	}

	/**
	 * The method to set the value to scoringSupported
	 * @param scoringSupported A boolean representing the scoringSupported
	 */
	public setScoringSupported(scoringSupported: boolean): void	{
		this.scoringSupported = scoringSupported;
		this.keyModified.set("scoring_supported", 1);

	}

	/**
	 * The method to get the webformSupported
	 * @returns A boolean representing the webformSupported
	 */
	public getWebformSupported(): boolean	{
		return this.webformSupported;

	}

	/**
	 * The method to set the value to webformSupported
	 * @param webformSupported A boolean representing the webformSupported
	 */
	public setWebformSupported(webformSupported: boolean): void	{
		this.webformSupported = webformSupported;
		this.keyModified.set("webform_supported", 1);

	}

	/**
	 * The method to get the arguments
	 * @returns An Array representing the arguments1
	 */
	public getArguments(): Array<Argument>	{
		return this.arguments1;

	}

	/**
	 * The method to set the value to arguments
	 * @param arguments1 An Array representing the arguments1
	 */
	public setArguments(arguments1: Array<Argument>): void	{
		this.arguments1 = arguments1;
		this.keyModified.set("arguments", 1);

	}

	/**
	 * The method to get the moduleName
	 * @returns A string representing the moduleName
	 */
	public getModuleName(): string	{
		return this.moduleName;

	}

	/**
	 * The method to set the value to moduleName
	 * @param moduleName A string representing the moduleName
	 */
	public setModuleName(moduleName: string): void	{
		this.moduleName = moduleName;
		this.keyModified.set("module_name", 1);

	}

	/**
	 * The method to get the businessCardFieldLimit
	 * @returns A number representing the businessCardFieldLimit
	 */
	public getBusinessCardFieldLimit(): number	{
		return this.businessCardFieldLimit;

	}

	/**
	 * The method to set the value to businessCardFieldLimit
	 * @param businessCardFieldLimit A number representing the businessCardFieldLimit
	 */
	public setBusinessCardFieldLimit(businessCardFieldLimit: number): void	{
		this.businessCardFieldLimit = businessCardFieldLimit;
		this.keyModified.set("business_card_field_limit", 1);

	}

	/**
	 * The method to get the customView
	 * @returns An instance of CustomView
	 */
	public getCustomView(): CustomView	{
		return this.customView;

	}

	/**
	 * The method to set the value to customView
	 * @param customView An instance of CustomView
	 */
	public setCustomView(customView: CustomView): void	{
		this.customView = customView;
		this.keyModified.set("custom_view", 1);

	}

	/**
	 * The method to get the parentModule
	 * @returns An instance of Module
	 */
	public getParentModule(): Module	{
		return this.parentModule;

	}

	/**
	 * The method to set the value to parentModule
	 * @param parentModule An instance of Module
	 */
	public setParentModule(parentModule: Module): void	{
		this.parentModule = parentModule;
		this.keyModified.set("parent_module", 1);

	}

	/**
	 * The method to get the territory
	 * @returns An instance of Territory
	 */
	public getTerritory(): Territory	{
		return this.territory;

	}

	/**
	 * The method to set the value to territory
	 * @param territory An instance of Territory
	 */
	public setTerritory(territory: Territory): void	{
		this.territory = territory;
		this.keyModified.set("territory", 1);

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
	Module as MasterModel,
	Module as Module
}
