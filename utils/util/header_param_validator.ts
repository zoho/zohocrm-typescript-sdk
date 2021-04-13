import { Header } from "../../routes/header";
import { Param } from "../../routes/param";
import * as path from "path";
import { Constants } from "./constants";
import { DataTypeConverter } from "./datatype_converter";

/**
 * This class validates the Header and Parameter values with the type accepted by the CRM APIs.
 */
class HeaderParamValidator{
    /**
     * name
     */
    public async validate(headerParam: Param<any> | Header<any>, value: any) {
        let name: string = headerParam.getName();
        let className: string | undefined = headerParam.getClassName();
        if(className !== undefined){
            let jsonDetails: {[key:string]: any} = await this.getJSONDetails();
            let jsonClassName: string = await this.getFileName(className);
            let typeDetail: {[key:string]: any} | null = null;
            if(jsonDetails.hasOwnProperty(jsonClassName)){
                typeDetail = await this.getKeyJSONDetails(name, jsonDetails[jsonClassName]);
            }
            if(typeDetail !== null){
                value = await DataTypeConverter.postConvert(value, typeDetail[Constants.TYPE]);
            }
        }
        return value;
    }

    private async getKeyJSONDetails(name: string, jsonDetails: {[key:string]: any}) {
        let keyArray = Array.from(Object.keys(jsonDetails));
        for (let index = 0; index < keyArray.length; index++) {
            const key = keyArray[index];
            let detail = jsonDetails[key];
            if(detail.hasOwnProperty(Constants.NAME)){
                if(detail[Constants.NAME].toLowerCase() == name.toLowerCase()){
                    return detail;
                }
            }
        }
    }

    private getFileName(name: string): string {
        let fileName = [];
        let spl: string[] = name.toString().split(".");
        let className: string | undefined = spl.pop();
        if(className !== undefined){
            let nameParts = className.split(/([A-Z][a-z]+)/).filter(function(e){return e});
            fileName.push(nameParts[0].toLowerCase());
            for(let i=1;i<nameParts.length;i++){
                fileName.push(nameParts[i].toLowerCase());
            }
        }
        return "core/" + spl.join("/").toLowerCase() + "/" + fileName.join("_");
	}

    private async getJSONDetails(){
        let Initializer = (await import("../../routes/initializer")).Initializer;
        if(Initializer.jsonDetails == null){
            Initializer.jsonDetails = await Initializer.getJSON(path.join(__dirname, "..", "..", Constants.CONFIG_DIRECTORY, Constants.JSON_DETAILS_FILE_PATH));
        }
        return Initializer.jsonDetails;
    }
}

export{
    HeaderParamValidator as MasterModel,
    HeaderParamValidator as HeaderParamValidator
}