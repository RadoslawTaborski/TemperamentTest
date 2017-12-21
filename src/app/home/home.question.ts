import { SharedService } from "../shared.service";
import { Characteristics, QuestionType } from "./home.enums";

export class Question {
    question: string = "";
    answers: Answer[] = [];
    checked: Boolean = false;
    answer: Answer = null;
    type: QuestionType;

    constructor(data: string, answers: Answer[], type: QuestionType) {
        this.question = data;
        this.answers = answers;
        this.type = type;
    }

    check(ans: Answer) {
        if (ans.checked == false) {
            this.answers.forEach(element => {
                element.checked = false;
            });
            ans.checked = true;
            this.checked = true;
            this.answer = ans;
        } else {
            ans.checked = false;
            this.checked = false;
            this.answer = null;
        }
    }
}

export class Answer {
    answer: string = "";
    type: Characteristics;
    value: number = 0;
    state: number = 0;
    checked: boolean = false;

    constructor(answer: string, type: string, value: number = 0) {
        this.answer = answer;
        this.value = value;
        this.type = SharedService.stringToEnum(type);
    }
}