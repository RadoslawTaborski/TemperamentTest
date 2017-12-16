import { SharedService } from "../shared.service";
import { Question } from "./home.question";
import { Answer } from "./home.question";
import { forEach } from "@angular/router/src/utils/collection";

export class Questions {
    Questions: Question[] = [];

    ReadJson(json:string) {
        let obj=JSON.parse(json);
        
        /*for (let entry of obj.questions){
            
            let answers:Answer[]=[];
            for(let item of entry.question.answers){
                answers.push(new Answer(item.answer,item.value))
            }
            
            this.Questions.push(new Question(entry.question.question, answers));
        }*/

        for (let i=0;i<5;++i){
            
            let answers:Answer[]=[];
            for(let item of obj.questions[i].question.answers){
                answers.push(new Answer(item.answer,item.value))
            }
            
            this.Questions.push(new Question(obj.questions[i].question.question, answers));
        }
    }
}