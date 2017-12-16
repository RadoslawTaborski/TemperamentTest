import { SharedService } from "../shared.service";
import { forEach } from "@angular/router/src/utils/collection";

export class Person {
    temperaments: Characteristic[]=[];
    intelligences: Characteristic[]=[];

    constructor(){
        this.temperaments.push(new Characteristic("sangwinik"));
        this.temperaments.push(new Characteristic("choleryk"));
        this.temperaments.push(new Characteristic("melancholik"));
        this.temperaments.push(new Characteristic("flegmatyk"));
        this.intelligences.push(new Characteristic("matematyk"));
        this.intelligences.push(new Characteristic("językowiec"));
        this.intelligences.push(new Characteristic("wzrokowiec"));
        this.intelligences.push(new Characteristic("ruchowiec"));
        this.intelligences.push(new Characteristic("muzyk"));
        this.intelligences.push(new Characteristic("osoba interpersonalna"));
        this.intelligences.push(new Characteristic("osoba intrapersonalna"));
    }

    setTemperaments(array:number[],all:number){
        this.temperaments[0].setValue(array[0]*100/all);
        this.temperaments[1].setValue(array[1]*100/all);
        this.temperaments[2].setValue(array[2]*100/all);
        this.temperaments[3].setValue(array[3]*100/all);
    }

    setIntelligences(array:number[],all:number){
        this.intelligences[0].setValue(array[0]*100/all);
        this.intelligences[1].setValue(array[1]*100/all);
        this.intelligences[2].setValue(array[2]*100/all);
        this.intelligences[3].setValue(array[3]*100/all);
        this.intelligences[4].setValue(array[4]*100/all);
        this.intelligences[5].setValue(array[5]*100/all);
        this.intelligences[6].setValue(array[6]*100/all);
    }

    sortTemperaments():Characteristic[]{
        let tmp=this.temperaments;
        tmp.sort((a, b) =>  (b.value > a.value) ? 1 : ((a.value > b.value) ? -1 : 0) )
        return tmp;
    }

    sortIntelligences():Characteristic[]{
        let tmp=this.intelligences;
        tmp.sort((a, b) =>  (b.value > a.value) ? 1 : ((a.value > b.value) ? -1 : 0) )
        return tmp;
    }
}

export class Characteristic {
    name:string;
    value:number;

    constructor(name:string){
        this.name=name;
        this.value=0;
    }

    setValue(value: number){
        this.value=value;
    }
}