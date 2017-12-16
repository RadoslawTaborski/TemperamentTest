import { SharedService } from "../shared.service";
import { forEach } from "@angular/router/src/utils/collection";
import { Characteristics } from "./home.enums";

export class Jobs {
    jobs: Job[] = [];

    constructor(json: string) {
        let obj = JSON.parse(json);
        for (let item of obj.jobs) {
            let temp: Characteristics[] = [];
            for (let i of item.job.temperaments) {
                temp.push(SharedService.stringToEnum(i));
            }
            let intel: Characteristics[] = [];
            for (let i of item.job.characteristics) {
                intel.push(SharedService.stringToEnum(i));
            }
            this.jobs.push(new Job(item.job.name, temp, intel));
        }
    }
}

export class Job {
    name: string;
    temperaments: Characteristics[] = [];
    intelligences: Characteristics[] = [];

    constructor(name: string, temperaments: Characteristics[], intelligences: Characteristics[]) {
        this.name = name;
        this.temperaments = temperaments;
        this.intelligences = intelligences;
    }
}

