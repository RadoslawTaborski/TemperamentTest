import { SharedService } from "../shared.service";

export class Question {
    question: string = "";
    answers: Answer[] = [];
    checked: Boolean = false;
    answer: Answer=null;

    constructor(data: string, answers: Answer[]) {
        this.question = data;
        this.answers = answers;
    }

    check(ans: Answer) {
        if (ans.checked == false) {
            this.answers.forEach(element => {
                element.checked = false;
            });
            ans.checked = true;
            this.checked = true;
            this.answer=ans;
        }else{
            ans.checked = false;
            this.checked = false;
            this.answer=null;
        }
    }
}

export class Answer {
    answer: string = "";
    value: Temperament;
    state: number = 0;
    checked: boolean = false;

    constructor(answer: string, value: string) {
        this.answer = answer;
        this.value = Temperament[value];
    }
}

export enum Temperament{
    sangwinik = 0,
    choleryk = 1,
    melancholik= 2,
    flegmatyk = 3
}