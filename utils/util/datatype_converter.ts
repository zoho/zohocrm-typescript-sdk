import { Constants } from "./constants";

/**
 * This class converts JSON value to the expected object type and vice versa.
 */
class DataTypeConverter {
    private static preConverterMap: Map<string, any> = new Map<string, any>();
    private static postConverterMap: Map<string, any> = new Map<string, any>();

    /**
     * This method is to initialize the PreConverter and PostConverter lambda functions.
     */
    private static init() {
        if(this.preConverterMap.size != 0 && this.postConverterMap.size != 0){
            return;
        }
        var string = (obj: any)=>{
            return obj.toString();
        }
        var integer = (obj: any)=>{
            return parseInt(obj);
        }
        var long = (obj: any)=>{
            return obj.toString() != Constants.NULL_VALUE ? BigInt(obj) : null;
        }
        var longToString = (obj: any) =>{
            return obj.toString()
        }
        var bool = (obj: any)=>{
            return Boolean(obj);
        }
        var stringToDateTime = (obj: string)=>{
            return new Date(obj);
        }
        var dateTimeToString = (obj: Date)=>{
            return obj.toISOString().split('.')[0]+"Z";
        }
        var dateToString = (obj: Date)=>{
            return obj.toISOString().split('T')[0];
        }
        var stringToDate = (obj: string)=>{
            return new Date(obj);
        }
        var double = (obj: any)=>{
            return parseFloat(obj.toString());
        }
        var preObject = (obj: any)=>{
            return this.preConvertObjectData(obj);
        }

        var postObject = (obj: any)=>{
            return this.postConvertObjectData(obj);
        }

        this.addToMap("String", string, string);
        this.addToMap("Integer", integer, integer);
        this.addToMap("Long", long, longToString);
        this.addToMap("Boolean", bool, bool);
        this.addToMap("Date", stringToDate, dateToString);
        this.addToMap("DateTime", stringToDateTime, dateTimeToString);
        this.addToMap("Double", double, double);
        this.addToMap("Float", double, double);
        this.addToMap("Object", preObject, postObject);
    }

    private static preConvertObjectData(obj: any) {
        return obj;
    }

    private static postConvertObjectData(obj: any) {
        if(Array.isArray(obj)) {
            let list = [];
            for (let data of obj) {
                if(data instanceof Date) {
                    if(data.getHours() == 0 && data.getMinutes() == 0 && data.getSeconds() == 0) {
                        list.push(this.postConvert(data, "Date"));
                    }
                    else {
                        list.push(this.postConvert(data, "DateTime"));
                    }
                }
                else if(data instanceof Map) {
                    this.postConvertObjectData(data);
                }
                else {
                    list.push(data);
                }
            }
            return list;
        }
        else if(obj instanceof Map) {
            let requestObject: {[key: string] : any} = {};
            for (let key of Array.from(obj.keys())){
                let value = obj.get(key);
                if(Array.isArray(value)) {
                    requestObject[key] = this.postConvertObjectData(value);
                }
                else if(value instanceof Date) {
                    if(value.getHours() == 0 && value.getMinutes() == 0 && value.getSeconds() == 0) {
                        requestObject[key] = this.postConvert(value, "Date");
                    }
                    else {
                        requestObject[key] = this.postConvert(value, "DateTime");
                    }
                }
                else if(value instanceof Map) {
                    requestObject[key] = this.postConvertObjectData(value);
                }
                else {
                    requestObject[key] = value;
                }
            }
            return requestObject;
        }
        else if(obj instanceof Date) {
            if(obj.getHours() == 0 && obj.getMinutes() == 0 && obj.getSeconds() == 0) {
                return this.postConvert(obj, "Date");
            }
            else {
                return this.postConvert(obj, "DateTime");
            }
        }
        else {
            return obj;
        }
    }

    /**
     * This method is to add PreConverter and PostConverter instance.
     * @param {string} name - A String containing the data type class name.
     * @param {object} preConverter - A PreConverter instance.
     * @param {object} postConverter - A PostConverter instance.
     */
    private static addToMap(name:string, preConverter: any, postConverter: any) {
        this.preConverterMap.set(name, preConverter);
        this.postConverterMap.set(name, postConverter);
    }

    /**
     * This method is to convert JSON value to expected data value.
     * @param {object} obj - An Object containing the JSON value.
     * @param {string} type - A String containing the expected method return type.
     * @throws {Error}
     */
    public static preConvert(obj: any, type: string): any {
        this.init();
        return this.preConverterMap.get(type)(obj);
    }

    /**
     * This method to convert JavaScript data to JSON data value.
     * @param {object} obj - An object containing the JavaScript data value.
     * @param {string} type - A String containing the expected method return type.
     * @throws {Error}
     */
    public static postConvert(obj: any, type: string): any {
        this.init();
        return this.postConverterMap.get(type)(obj);
    }
}

export {
    DataTypeConverter as MasterModel,
    DataTypeConverter as DataTypeConverter
}