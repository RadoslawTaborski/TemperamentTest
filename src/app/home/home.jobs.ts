import { SharedService } from "../shared.service";
import { forEach } from "@angular/router/src/utils/collection";
import { Characteristics } from "./home.enums";

export class Jobs {
    temperaments: Job[]=[];

    constructor(json:string){
        let obj=JSON.parse(SharedService.json2);
        console.log(obj);
    }
}

export class Job {
    name: string;
    characteristics: Characteristics[]=[];
}

