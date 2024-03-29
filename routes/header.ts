/**
 * This class represents the HTTP header.
 */
class Header<T> {
    private name: string;

    private className?: string;

    /**
	 * Creates a Header class instance with the specified header name.
	 * @param {string} name - A String containing the header name.
	 * @param {string} className - A String containing the class name.
	 */
    constructor(name: string, className?: string) {
        this.name = name;
        this.className =className;
    }

    /**
	 * This is a getter method to get the header name.
	 * @returns A String representing the header name.
	 */
    public getName() : string {
        return this.name;
    }

    /**
	 * This is a getter method to get the class name.
	 * @returns A String representing the class name.
	 */
    public getClassName() : string|undefined {
        return this.className;
    }
}

export {
    Header as MasterModel,
    Header as Header
}