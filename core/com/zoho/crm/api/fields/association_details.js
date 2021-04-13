"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociationDetails = exports.MasterModel = void 0;
class AssociationDetails {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the lookupField
     * @returns An instance of LookupField
     */
    getLookupField() {
        return this.lookupField;
    }
    /**
     * The method to set the value to lookupField
     * @param lookupField An instance of LookupField
     */
    setLookupField(lookupField) {
        this.lookupField = lookupField;
        this.keyModified.set("lookup_field", 1);
    }
    /**
     * The method to get the relatedField
     * @returns An instance of LookupField
     */
    getRelatedField() {
        return this.relatedField;
    }
    /**
     * The method to set the value to relatedField
     * @param relatedField An instance of LookupField
     */
    setRelatedField(relatedField) {
        this.relatedField = relatedField;
        this.keyModified.set("related_field", 1);
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
exports.MasterModel = AssociationDetails;
exports.AssociationDetails = AssociationDetails;
//# sourceMappingURL=association_details.js.map