import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Question } from './home.question';
import { Answer } from './home.question';
import { SharedService } from "../shared.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  isLoaded = false;
  showQuestions = false;
  questionsArray: Question[]=[];
  addedAllAnswers: Boolean=false;
  info: String="";

  constructor() { }

  ngOnInit() {
      this.isLoaded = true;
      this.questionsArray.push(new Question("Jesteś najlepszy?", [
        new Answer("Tak", true),
        new Answer("Nie", false)
      ]));
  }

  questions() {
    return this.questionsArray;
  }

  start(){
    this.showQuestions=true;
  }

  ngAfterViewInit() {

  }

  check(){
    console.log(this.questionsArray);
    let tmp =true;
    this.questionsArray.forEach(element => {
      if(element.checked==false){
        tmp=false;
      }
    })
    if(tmp==true)
    {
      this.addedAllAnswers=true;
      this.showQuestions=false;
      this.info="";
    }else{
      this.addedAllAnswers=false;
      this.info="Oddaj odpowiedzi na wszystkie pytania";
    }
  }

  getConclusion(){
    if(this.questionsArray[0].answer.value==true)
      return "Jesteś najlepszy i znajdziesz pracę wszędzie";
    else
      return "Jesteś do niczego i rzuć się z mostu";
  }

}
