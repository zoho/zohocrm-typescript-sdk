"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency = exports.MasterModel = void 0;
class Currency {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the symbol
     * @returns A string representing the symbol
     */
    getSymbol() {
        return this.symbol;
    }
    /**
     * The method to set the value to symbol
     * @param symbol A string representing the symbol
     */
    setSymbol(symbol) {
        this.symbol = symbol;
        this.keyModified.set("symbol", 1);
    }
    /**
     * The method to get the createdTime
     * @returns An instance of Date
     */
    getCreatedTime() {
        return this.createdTime;
    }
    /**
     * The method to set the value to createdTime
     * @param createdTime An instance of Date
     */
    setCreatedTime(createdTime) {
        this.createdTime = createdTime;
        this.keyModified.set("created_time", 1);
    }
    /**
     * The method to get the isActive
     * @returns A boolean representing the isActive
     */
    getIsActive() {
        return this.isActive;
    }
    /**
     * The method to set the value to isActive
     * @param isActive A boolean representing the isActive
     */
    setIsActive(isActive) {
        this.isActive = isActive;
        this.keyModified.set("is_active", 1);
    }
    /**
     * The method to get the exchangeRate
     * @returns A string representing the exchangeRate
     */
    getExchangeRate() {
        return this.exchangeRate;
    }
    /**
     * The method to set the value to exchangeRate
     * @param exchangeRate A string representing the exchangeRate
     */
    setExchangeRate(exchangeRate) {
        this.exchangeRate = exchangeRate;
        this.keyModified.set("exchange_rate", 1);
    }
    /**
     * The method to get the format
     * @returns An instance of Format
     */
    getFormat() {
        return this.format;
    }
    /**
     * The method to set the value to format
     * @param format An instance of Format
     */
    setFormat(format) {
        this.format = format;
        this.keyModified.set("format", 1);
    }
    /**
     * The method to get the createdBy
     * @returns An instance of User
     */
    getCreatedBy() {
        return this.createdBy;
    }
    /**
     * The method to set the value to createdBy
     * @param createdBy An instance of User
     */
    setCreatedBy(createdBy) {
        this.createdBy = createdBy;
        this.keyModified.set("created_by", 1);
    }
    /**
     * The method to get the prefixSymbol
     * @returns A boolean representing the prefixSymbol
     */
    getPrefixSymbol() {
        return this.prefixSymbol;
    }
    /**
     * The method to set the value to prefixSymbol
     * @param prefixSymbol A boolean representing the prefixSymbol
     */
    setPrefixSymbol(prefixSymbol) {
        this.prefixSymbol = prefixSymbol;
        this.keyModified.set("prefix_symbol", 1);
    }
    /**
     * The method to get the isBase
     * @returns A boolean representing the isBase
     */
    getIsBase() {
        return this.isBase;
    }
    /**
     * The method to set the value to isBase
     * @param isBase A boolean representing the isBase
     */
    setIsBase(isBase) {
        this.isBase = isBase;
        this.keyModified.set("is_base", 1);
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
     * The method to get the isoCode
     * @returns A string representing the isoCode
     */
    getIsoCode() {
        return this.isoCode;
    }
    /**
     * The method to set the value to isoCode
     * @param isoCode A string representing the isoCode
     */
    setIsoCode(isoCode) {
        this.isoCode = isoCode;
        this.keyModified.set("iso_code", 1);
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
exports.MasterModel = Currency;
exports.Currency = Currency;
//# sourceMappingURL=currency.js.map