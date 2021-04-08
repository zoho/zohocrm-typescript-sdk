class RequestProxy {
    private host: string;
    private port: number;
    private user?: string;
    private password?: string;

    /**
     * Creates a RequestProxy class instance with the specified parameters.
     * @param {String} host A String containing the hostname or address of the proxy server
     * @param {Number} port An Integer containing The port number of the proxy server
     * @param {String} user A String containing the user name of the proxy server
     * @param {String} password A String containing the password of the proxy server
     */
    constructor(host: string, port: number, user?: string, password?: string) {
        this.host = host;
        this.port = port;
        this.user = user;
        this.password = password;
    }

    /**
     * This is a getter method to get Proxy host.
     * @returns {String}
     */
    public getHost(): string {
        return this.host;
    }

    /**
     * This is a getter method to get the Proxy port.
     * @returns {Number}
     */
    public getPort(): number {
        return this.port;
    }

    /**
	 * This is a getter method to get the Proxy user name.
	 * @returns {String}
	 */
    public getUser() : string | undefined {
        return this.user;
    }

    /**
     * This is a getter method to get the Proxy password.
     * @returns {String}
     */
    public getPassword() : string | undefined {
        return this.password;
    }
}

export {
    RequestProxy as MasterModel,
    RequestProxy as RequestProxy
}