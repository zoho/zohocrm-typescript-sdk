"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = exports.MasterModel = void 0;
class Notification {
    constructor() {
        this.keyModified = new Map();
    }
    /**
     * The method to get the channelExpiry
     * @returns An instance of Date
     */
    getChannelExpiry() {
        return this.channelExpiry;
    }
    /**
     * The method to set the value to channelExpiry
     * @param channelExpiry An instance of Date
     */
    setChannelExpiry(channelExpiry) {
        this.channelExpiry = channelExpiry;
        this.keyModified.set("channel_expiry", 1);
    }
    /**
     * The method to get the resourceUri
     * @returns A string representing the resourceUri
     */
    getResourceUri() {
        return this.resourceUri;
    }
    /**
     * The method to set the value to resourceUri
     * @param resourceUri A string representing the resourceUri
     */
    setResourceUri(resourceUri) {
        this.resourceUri = resourceUri;
        this.keyModified.set("resource_uri", 1);
    }
    /**
     * The method to get the resourceId
     * @returns A string representing the resourceId
     */
    getResourceId() {
        return this.resourceId;
    }
    /**
     * The method to set the value to resourceId
     * @param resourceId A string representing the resourceId
     */
    setResourceId(resourceId) {
        this.resourceId = resourceId;
        this.keyModified.set("resource_id", 1);
    }
    /**
     * The method to get the notifyUrl
     * @returns A string representing the notifyUrl
     */
    getNotifyUrl() {
        return this.notifyUrl;
    }
    /**
     * The method to set the value to notifyUrl
     * @param notifyUrl A string representing the notifyUrl
     */
    setNotifyUrl(notifyUrl) {
        this.notifyUrl = notifyUrl;
        this.keyModified.set("notify_url", 1);
    }
    /**
     * The method to get the resourceName
     * @returns A string representing the resourceName
     */
    getResourceName() {
        return this.resourceName;
    }
    /**
     * The method to set the value to resourceName
     * @param resourceName A string representing the resourceName
     */
    setResourceName(resourceName) {
        this.resourceName = resourceName;
        this.keyModified.set("resource_name", 1);
    }
    /**
     * The method to get the channelId
     * @returns A bigint representing the channelId
     */
    getChannelId() {
        return this.channelId;
    }
    /**
     * The method to set the value to channelId
     * @param channelId A bigint representing the channelId
     */
    setChannelId(channelId) {
        this.channelId = channelId;
        this.keyModified.set("channel_id", 1);
    }
    /**
     * The method to get the events
     * @returns An Array representing the events
     */
    getEvents() {
        return this.events;
    }
    /**
     * The method to set the value to events
     * @param events An Array representing the events
     */
    setEvents(events) {
        this.events = events;
        this.keyModified.set("events", 1);
    }
    /**
     * The method to get the token
     * @returns A string representing the token
     */
    getToken() {
        return this.token;
    }
    /**
     * The method to set the value to token
     * @param token A string representing the token
     */
    setToken(token) {
        this.token = token;
        this.keyModified.set("token", 1);
    }
    /**
     * The method to get the notifyOnRelatedAction
     * @returns A boolean representing the notifyOnRelatedAction
     */
    getNotifyOnRelatedAction() {
        return this.notifyOnRelatedAction;
    }
    /**
     * The method to set the value to notifyOnRelatedAction
     * @param notifyOnRelatedAction A boolean representing the notifyOnRelatedAction
     */
    setNotifyOnRelatedAction(notifyOnRelatedAction) {
        this.notifyOnRelatedAction = notifyOnRelatedAction;
        this.keyModified.set("notify_on_related_action", 1);
    }
    /**
     * The method to get the fields
     * @returns A Map representing the fields
     */
    getFields() {
        return this.fields;
    }
    /**
     * The method to set the value to fields
     * @param fields A Map representing the fields
     */
    setFields(fields) {
        this.fields = fields;
        this.keyModified.set("fields", 1);
    }
    /**
     * The method to get the deleteevents
     * @returns A boolean representing the deleteevents
     */
    getDeleteevents() {
        return this.deleteevents;
    }
    /**
     * The method to set the value to deleteevents
     * @param deleteevents A boolean representing the deleteevents
     */
    setDeleteevents(deleteevents) {
        this.deleteevents = deleteevents;
        this.keyModified.set("_delete_events", 1);
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
exports.MasterModel = Notification;
exports.Notification = Notification;
//# sourceMappingURL=notification.js.map