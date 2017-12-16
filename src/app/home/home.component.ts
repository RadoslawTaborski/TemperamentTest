import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Questions } from './home.questions';
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
  id:number=0;
  question: Question=null;
  counter: number=0;

  constructor() { }

  ngOnInit() {
      this.questionsArray.ReadJson(SharedService.json);
      this.question=this.questionsArray.Questions[0];
      this.isLoaded = true;
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
    this.showQuestions=true;
  }

  ngAfterViewInit() {

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
  }

  setTemperament():number[]{
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
    return temperament;
  }

  getConclusion(){
    let temp=this.setTemperament();
    for(let i=0; i<temp.length;++i){
      temp[i]*=100/this.questionsArray.Questions.length;
    }
    let text="Jesteś:\r\n\t"+temp[0]+"% sangwinikiem\r\n\t"+temp[1]+"% cholerykiem\r\n\t"+temp[2]+"% melancholikiem\r\n\t"+temp[3]+"% flegmatykiem";
    text=this.stringToHtmlString(text);
    console.log(text);
    return text;
  }

  stringToHtmlString(text:string){
    let result="<br>"+text+"</br>";
    result=result.replace(/\r\n/g,"</br><br>");
    result=result.replace(/\t/g,"&emsp;");

    return result;
  }

}
