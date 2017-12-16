import { SharedService } from "../shared.service";
import { forEach } from "@angular/router/src/utils/collection";

export class Person {
    temperaments: Characteristic[] = [];
    intelligences: Characteristic[] = [];

    constructor() {
        this.temperaments.push(new Characteristic("sangwinik"));
        this.temperaments.push(new Characteristic("choleryk"));
        this.temperaments.push(new Characteristic("melancholik"));
        this.temperaments.push(new Characteristic("flegmatyk"));
        this.intelligences.push(new Characteristic("matematyczno-logiczna"));
        this.intelligences.push(new Characteristic("językowa"));
        this.intelligences.push(new Characteristic("wizualno-przestrzenna"));
        this.intelligences.push(new Characteristic("kinestetyczna"));
        this.intelligences.push(new Characteristic("muzyczna"));
        this.intelligences.push(new Characteristic("interpersonalna"));
        this.intelligences.push(new Characteristic("intrapersonalna"));
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

    constructor(name: string) {
        this.name = name;
        this.value = 0;
    }

    setValue(value: number) {
        this.value = value;
    }
}