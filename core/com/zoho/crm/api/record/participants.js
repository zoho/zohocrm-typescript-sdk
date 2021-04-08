"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Participants = exports.MasterModel = void 0;
const record_1 = require("./record");
class Participants extends record_1.Record {
    /**
     * The method to get the name
     * @returns A string representing the name
     */
    getName() {
        return this.getKeyValue("name");
    }
    /**
     * The method to set the value to name
     * @param name A string representing the name
     */
    setName(name) {
        this.addKeyValue("name", name);
    }
    /**
     * The method to get the email
     * @returns A string representing the email
     */
    getEmail() {
        return this.getKeyValue("Email");
    }
    /**
     * The method to set the value to email
     * @param email A string representing the email
     */
    setEmail(email) {
        this.addKeyValue("Email", email);
    }
    /**
     * The method to get the invited
     * @returns A boolean representing the invited
     */
    getInvited() {
        return this.getKeyValue("invited");
    }
    /**
     * The method to set the value to invited
     * @param invited A boolean representing the invited
     */
    setInvited(invited) {
        this.addKeyValue("invited", invited);
    }
    /**
     * The method to get the type
     * @returns A string representing the type
     */
    getType() {
        return this.getKeyValue("type");
    }
    /**
     * The method to set the value to type
     * @param type A string representing the type
     */
    setType(type) {
        this.addKeyValue("type", type);
    }
    /**
     * The method to get the participant
     * @returns A string representing the participant
     */
    getParticipant() {
        return this.getKeyValue("participant");
    }
    /**
     * The method to set the value to participant
     * @param participant A string representing the participant
     */
    setParticipant(participant) {
        this.addKeyValue("participant", participant);
    }
    /**
     * The method to get the status
     * @returns A string representing the status
     */
    getStatus() {
        return this.getKeyValue("status");
    }
    /**
     * The method to set the value to status
     * @param status A string representing the status
     */
    setStatus(status) {
        this.addKeyValue("status", status);
    }
}
exports.MasterModel = Participants;
exports.Participants = Participants;
//# sourceMappingURL=participants.js.map