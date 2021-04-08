"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRoleWrapper = exports.MasterModel = void 0;
class ContactRoleWrapper {
    constructor() {
        this.keyModified = new Map();
    }
    getContactRole() {
        return this.contactRole;
    }
    setContactRole(contactRole) {
        this.contactRole = contactRole;
        this.keyModified.set("Contact_Role", 1);
    }
    isKeyModified(key) {
        if (this.keyModified.has(key)) {
            return this.keyModified.get(key);
        }
        return null;
    }
    setKeyModified(key, modification) {
        this.keyModified.set(key, modification);
    }
}
exports.MasterModel = ContactRoleWrapper;
exports.ContactRoleWrapper = ContactRoleWrapper;
//# sourceMappingURL=contact_role_wrapper.js.map