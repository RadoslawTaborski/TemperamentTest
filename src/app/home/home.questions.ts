import { SharedService } from "../shared.service";
import { Question } from "./home.question";
import { Answer } from "./home.question";
import { QuestionType } from "./home.enums";
import { forEach } from "@angular/router/src/utils/collection";

export class Questions {
    Questions: Question[];
    temperamentQuestions: number = 0;
    intelligenceQuestions: number = 0;

    ReadJson(json: any) {
        this.Questions = [];
        let obj = json;

        for (let entry of obj.questions){

            let answers: Answer[] = [];
            if (entry.question.type == "temperament") {
                for (let item of entry.question.answers) {
                    answers.push(new Answer(item.answer, item.value))
                }
                this.temperamentQuestions++;
                answers = SharedService.shuffle(answers);
                this.Questions.push(new Question(entry.question.question, answers, QuestionType.Temperaments));
            } else {
                for (let j = 0; j < 6; ++j) {
                    answers.push(new Answer(j + "", entry.question.value, j));
                }
                this.intelligenceQuestions++;
                this.Questions.push(new Question(entry.question.question+ " (0-wcale; 5-doskonale)", answers, QuestionType.Inteligences));
            }
        }
    }
}