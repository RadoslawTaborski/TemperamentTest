import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Questions } from './home.questions';
import { Person } from './home.person';
import { SharedService } from "../shared.service";
import { Temperament, Question } from 'app/home/home.question';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  isLoaded = false;
  showQuestions = false;
  questionsArray: Questions=new Questions();
  addedAllAnswers: Boolean=false;
  info: String="";
  id:number;
  question: Question;
  counter: number=0;
  person: Person;
  conclusion:string;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
      this.isLoaded = true;
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  ngAfterContentChecked() {
    this.cd.detectChanges();
  }

  nextQuestion() {
    if(this.id<this.questionsArray.Questions.length-1){
      this.id++
      this.question=this.questionsArray.Questions[this.id];
    }
  }

  actualQuestion() {
    return this.question;
  }

  backQuestion() {
    if(this.id>0){
      this.id--
      this.question=this.questionsArray.Questions[this.id];
    }
  }

  start(){
    this.conclusion="";
    this.info="";
    this.addedAllAnswers=false;
    this.id=0;
    this.person=new Person();
    this.questionsArray.ReadJson(SharedService.json);
    this.question=this.questionsArray.Questions[0];
    this.showQuestions=true;
  }

  check(){
    let tmp =true;
    this.counter=this.questionsArray.Questions.length;
    this.questionsArray.Questions.forEach(element => {
      if(element.checked==false){
        tmp=false;
        this.counter--;
      }
    })
    this.info="Oddano odpowiedź na "+ this.counter + " z "+this.questionsArray.Questions.length;
    if(tmp==true)
    {
      return true;
    }else{
      this.addedAllAnswers=false;
      return false;
    }
  }

  displayResult(){
    this.addedAllAnswers=true;
    this.showQuestions=false;
    this.info="";
    this.conclusion=this.getConclusion();
  }

  setTemperaments(){
    let temperament:number[]=[0,0,0,0];
    for (let item of this.questionsArray.Questions){
      switch(item.answer.value){
        case Temperament.Sanguine:
          ++temperament[0];
        break;
        case Temperament.Choleric:
          ++temperament[1];
        break;
        case Temperament.Melancholic:
          ++temperament[2];
        break;
        case Temperament.Phlegmatic:
          ++temperament[3];
        break;
      }
    }

    this.person.setTemperaments(temperament[0],temperament[1],temperament[2],temperament[3],this.questionsArray.Questions.length);
  }

  getConclusion(){
    this.setTemperaments();
    let tmp=this.person.sortTemperaments();
    
    let text="Jesteś:\r\n\t"+
              tmp[0].value+"% "+tmp[0].name + "iem\r\n\t"+
              tmp[1].value+"% "+tmp[1].name + "iem\r\n\t"+
              tmp[2].value+"% "+tmp[2].name + "iem\r\n\t"+
              tmp[3].value+"% "+tmp[3].name + "iem\r\n";
   
    if((tmp[0].value-tmp[1].value)>30){
      text+="Twoim dominującym temperamentem jest "+tmp[0].name+".";
    }else{
      if((tmp[1].value-tmp[2].value)<=20){
        if((tmp[2].value-tmp[3].value)<=10){
          text+="Nie masz dominującego temperamentu, łączysz cechy wszystkich temperamentów.";
        }else{
          text+="Nie masz dominującego temperamentu, łączysz cechy "+tmp[0].name + "a, " +tmp[1].name+"a i " +tmp[2].name+"a.";
        }
      }else{
        text+="Nie masz dominującego temperamentu, łączysz cechy "+tmp[0].name + "a i " +tmp[1].name+"a.";
      }
    }

    text=this.stringToHtmlString(text);
    return text;
  }

  stringToHtmlString(text:string){
    let result="<br>"+text+"</br>";
    result=result.replace(/\r\n/g,"</br><br>");
    result=result.replace(/\t/g,"&emsp;");

    return result;
  }

}
