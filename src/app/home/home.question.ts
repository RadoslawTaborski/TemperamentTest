import { SharedService } from "../shared.service";

export class Question {
    question: string = "";
    answers: Answer[] = [];

    constructor(data: string, answers:Answer[]) {
        this.question=data;
        this.answers=answers;
    }
}

export class Answer {
    answer: string = "";
    value: boolean = false;
    state: number = 0;
    checked: boolean = false;

    constructor(answer: string, value: boolean) {
        this.answer = answer;
        this.value = value;
    }
}