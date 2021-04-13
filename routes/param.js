"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Param = exports.MasterModel = void 0;
/**
 * This class represents the HTTP parameter.
 */
class Param {
    /**
     * Creates an Param class instance with the specified parameter name.
     * @param {string} name - A String containing the parameter name.
     * @param {string} className - A String containing the class name.
     */
    constructor(name, className) {
        this.name = name;
        this.className = className;
    }
    /**
     * This is a getter method to get parameter name.
     * @returns {string} A String representing the parameter name.
     */
    getName() {
        return this.name;
    }
    /**
     * This is a getter method to get class name.
     * @returns {string} A String representing the class name.
     */
    getClassName() {
        return this.className;
    }
}
exports.MasterModel = Param;
exports.Param = Param;
//# sourceMappingURL=param.js.map