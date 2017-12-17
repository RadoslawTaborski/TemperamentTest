import { SharedService } from "../shared.service";
import { forEach } from "@angular/router/src/utils/collection";
import { Characteristics } from "app/home/home.enums";

export class Person {
    temperaments: Characteristic[] = [];
    intelligences: Characteristic[] = [];

    constructor() {
        this.temperaments.push(new Characteristic("sangwinik",Characteristics.Sanguine));
        this.temperaments.push(new Characteristic("choleryk",Characteristics.Choleric));
        this.temperaments.push(new Characteristic("melancholik",Characteristics.Melancholic));
        this.temperaments.push(new Characteristic("flegmatyk",Characteristics.Phlegmatic));
        this.intelligences.push(new Characteristic("matematyczno-logiczna",Characteristics.Matematical));
        this.intelligences.push(new Characteristic("językowa",Characteristics.Linguistic));
        this.intelligences.push(new Characteristic("wizualno-przestrzenna",Characteristics.Visual));
        this.intelligences.push(new Characteristic("kinestetyczna",Characteristics.Kinesthetic));
        this.intelligences.push(new Characteristic("muzyczna",Characteristics.Musical));
        this.intelligences.push(new Characteristic("interpersonalna",Characteristics.Interpersonal));
        this.intelligences.push(new Characteristic("intrapersonalna",Characteristics.Intrapersonal));
    }

    setTemperaments(array: number[], all: number) {
        for (let i = 0; i < this.temperaments.length; ++i)
            this.temperaments[i].setValue(Math.round(array[i] * 100 / all * 100) / 100);
    }

    setIntelligences(array: number[], all: number) {
        for (let i = 0; i < this.intelligences.length; ++i)
            this.intelligences[i].setValue(Math.round(array[i] * 100 / all * 100) / 100);
    }

    sortTemperaments(): Characteristic[] {
        let tmp = this.temperaments;
        tmp.sort((a, b) => (b.value > a.value) ? 1 : ((a.value > b.value) ? -1 : 0))
        return tmp;
    }

    sortIntelligences(): Characteristic[] {
        let tmp = this.intelligences;
        tmp.sort((a, b) => (b.value > a.value) ? 1 : ((a.value > b.value) ? -1 : 0))
        return tmp;
    }
}

export class Characteristic {
    name: string;
    value: number;
    characteristic: Characteristics;

    constructor(name: string, characterisctic:Characteristics) {
        this.name = name;
        this.value = 0;
        this.characteristic=characterisctic;
    }

    setValue(value: number) {
        this.value = value;
    }
}