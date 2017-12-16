import { SharedService } from "../shared.service";
import { forEach } from "@angular/router/src/utils/collection";

export class Person {
    temperaments: Temperament[]=[];

    constructor(){
        this.temperaments.push(new Temperament("sangwinik"));
        this.temperaments.push(new Temperament("choleryk"));
        this.temperaments.push(new Temperament("melancholik"));
        this.temperaments.push(new Temperament("flegmatyk"));
    }

    setTemperaments(sanguine:number,choleric:number,melancholic:number,phlegmatic:number,all:number){
        this.temperaments[0].setValue(sanguine*100/all);
        this.temperaments[1].setValue(choleric*100/all);
        this.temperaments[2].setValue(melancholic*100/all);
        this.temperaments[3].setValue(phlegmatic*100/all);
    }

    sortTemperaments():Temperament[]{
        let tmp=this.temperaments;
        tmp.sort((a, b) =>  (b.value > a.value) ? 1 : ((a.value > b.value) ? -1 : 0) )
        return tmp;
    }
}

export class Temperament {
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