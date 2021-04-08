"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XMLConverter = exports.MasterModel = void 0;
const converter_1 = require("./converter");
class XMLConverter extends converter_1.Converter {
    getResponse(response, pack) {
        throw new Error("Method not implemented.");
    }
    formRequest(requestInstance, pack, instanceNumber, classMemberDetail) {
        throw new Error("Method not implemented.");
    }
    getWrappedResponse(response, pack) {
        throw new Error("Method not implemented.");
    }
    appendToRequest(requestBase) {
        throw new Error("Method not implemented.");
    }
}
exports.MasterModel = XMLConverter;
exports.XMLConverter = XMLConverter;
//# sourceMappingURL=xml_converter.js.map