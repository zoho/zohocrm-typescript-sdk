"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formula = exports.MasterModel = void 0;
class Formula {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the returnType
     * @returns A string representing the returnType
     */
    getReturnType() {
        return this.returnType;
    }
    /**
     * The method to set the value to returnType
     * @param returnType A string representing the returnType
     */
    setReturnType(returnType) {
        this.returnType = returnType;
        this.keyModified.set("return_type", 1);
    }
    /**
     * The method to get the expression
     * @returns A string representing the expression
     */
    getExpression() {
        return this.expression;
    }
    /**
     * The method to set the value to expression
     * @param expression A string representing the expression
     */
    setExpression(expression) {
        this.expression = expression;
        this.keyModified.set("expression", 1);
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
exports.MasterModel = Formula;
exports.Formula = Formula;
//# sourceMappingURL=formula.js.map