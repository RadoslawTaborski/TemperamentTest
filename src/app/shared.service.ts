import { Injectable } from '@angular/core';
import { Question } from './home/home.question';
import { Characteristics } from './home/home.enums';

@Injectable()
export class SharedService {
    static shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    static stringToEnum(text: string): Characteristics {
        switch (text) {
            case "sangwinik":
                return Characteristics.Sanguine;
            case "choleryk":
                return Characteristics.Choleric;
            case "melancholik":
                return Characteristics.Melancholic;
            case "flegmatyk":
                return Characteristics.Phlegmatic;
            case "matematyczna":
                return Characteristics.Matematical;
            case "lingwistyczna":
                return Characteristics.Linguistic;
            case "ruchowa":
                return Characteristics.Kinesthetic;
            case "wizualna":
                return Characteristics.Visual;
            case "muzyczna":
                return Characteristics.Musical;
            case "interpersonalna":
                return Characteristics.Interpersonal;
            case "intrapersonalna":
                return Characteristics.Intrapersonal;
        }
    }
}