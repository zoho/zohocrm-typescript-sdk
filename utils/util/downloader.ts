import { Initializer } from "../../routes/initializer";
import { CommonAPIHandler } from "../../routes/middlewares/common_api_handler";
import { Constants } from "./constants";
import { Converter } from "./converter";
import { StreamWrapper } from "./stream_wrapper";

/**
 * This class is to process the download file and stream response.
 * @extends Converter
 */
class Downloader extends Converter{
    constructor(commonAPIHandler: CommonAPIHandler){
        super(commonAPIHandler);
    }

    public async appendToRequest(requestBase: object): Promise<any> {
        return null;
    }

    public async formRequest(requestInstance: object, pack: string, instanceNumber: number | null, classMemberDetail: object | null): Promise<object | null> {
        return null;
    }

    public async getWrappedResponse(response: object, pack: string): Promise<object | null> {
        return this.getResponse(response, pack);
    }

    public async getResponse(response: any, pack: string): Promise<object | null> {
        var instance: any = null;
        var instanceValue: any = null;
        var classDetail = Initializer.jsonDetails[pack];
        if (classDetail.hasOwnProperty(Constants.INTERFACE) && classDetail[Constants.INTERFACE]){
            let classes: string[] = classDetail[Constants.CLASSES];
            for (let index = 0; index < classes.length; index++) {
                let eachClass = classes[index];
                if(eachClass.toString().includes(Constants.FILE_BODY_WRAPPER)){
                    return this.getResponse(response, eachClass);
                }
            }
        }
        else{
            let ClassName = (await import("../../" + pack)).MasterModel;
            instance = new ClassName();
            for (let memberName in classDetail) {
                var memberDetail = classDetail[memberName];
                var type = memberDetail[Constants.TYPE];
                if(type === Constants.STREAM_WRAPPER_CLASS_PATH){
                    var fileName: string = "";
                    let contentDisposition: string = (response.headers[Constants.CONTENT_DISPOSITION]).toString();
                    if(contentDisposition.includes("'")){
                        let start_index = contentDisposition.lastIndexOf("'");
                        fileName = contentDisposition.substring(start_index + 1);
                    }
                    else if(contentDisposition.includes("\"")){
                        let start_index = contentDisposition.lastIndexOf("=");
                        fileName = contentDisposition.substring(start_index + 1).replace(/"/g, "");
                    }
                    instanceValue = new StreamWrapper(fileName, response.rawBody, null);
                }
               Reflect.set(instance, memberName, instanceValue);
            }
        }
        return instance;
    }

}

export {
    Downloader as MasterModel,
    Downloader as Downloader
}