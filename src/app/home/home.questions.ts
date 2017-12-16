import { SharedService } from "../shared.service";
import { Question } from "./home.question";
import { Answer } from "./home.question";
import { QuestionType } from "./home.enums";
import { forEach } from "@angular/router/src/utils/collection";

export class Questions {
    Questions: Question[];

    ReadJson(json: string) {
        this.Questions = [];
        let obj = JSON.parse(json);

        /*for (let entry of obj.questions){
            
            let answers:Answer[]=[];
            for(let item of entry.question.answers){
                answers.push(new Answer(item.answer,item.value))
            }
            
            this.Questions.push(new Question(entry.question.question, answers));
        }*/

        for (let i = 37; i < 68; ++i) {

            let answers: Answer[] = [];
            if (obj.questions[i].question.type == "temperament") {
                for (let item of obj.questions[i].question.answers) {
                    answers.push(new Answer(item.answer, item.value))
                }
                // answers=SharedService.shuffle(answers);
                this.Questions.push(new Question(obj.questions[i].question.question, answers, QuestionType.Temperaments));
            }else{               
                for (let j=0; j<6;++j) {
                    answers.push(new Answer(j+"", obj.questions[i].question.value,j));
                }
                this.Questions.push(new Question(obj.questions[i].question.question, answers, QuestionType.Inteligences));
            }
        }
    }
}