"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestProxy = exports.MasterModel = void 0;
class RequestProxy {
    /**
     * Creates a RequestProxy class instance with the specified parameters.
     * @param {String} host A String containing the hostname or address of the proxy server
     * @param {Number} port An Integer containing The port number of the proxy server
     * @param {String} user A String containing the user name of the proxy server
     * @param {String} password A String containing the password of the proxy server
     */
    constructor(host, port, user, password) {
        this.host = host;
        this.port = port;
        this.user = user;
        this.password = password;
    }
    /**
     * This is a getter method to get Proxy host.
     * @returns {String}
     */
    getHost() {
        return this.host;
    }
    /**
     * This is a getter method to get the Proxy port.
     * @returns {Number}
     */
    getPort() {
        return this.port;
    }
    /**
     * This is a getter method to get the Proxy user name.
     * @returns {String}
     */
    getUser() {
        return this.user;
    }
    /**
     * This is a getter method to get the Proxy password.
     * @returns {String}
     */
    getPassword() {
        return this.password;
    }
}
exports.MasterModel = RequestProxy;
exports.RequestProxy = RequestProxy;
//# sourceMappingURL=request_proxy.js.map