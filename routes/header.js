"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = exports.MasterModel = void 0;
/**
 * This class represents the HTTP header.
 */
class Header {
    /**
     * Creates a Header class instance with the specified header name.
     * @param {string} name - A String containing the header name.
     * @param {string} className - A String containing the class name.
     */
    constructor(name, className) {
        this.name = name;
        this.className = className;
    }
    /**
     * This is a getter method to get the header name.
     * @returns A String representing the header name.
     */
    getName() {
        return this.name;
    }
    /**
     * This is a getter method to get the class name.
     * @returns A String representing the class name.
     */
    getClassName() {
        return this.className;
    }
}
exports.MasterModel = Header;
exports.Header = Header;
//# sourceMappingURL=header.js.map