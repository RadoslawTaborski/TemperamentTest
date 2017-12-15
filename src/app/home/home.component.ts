import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Questions } from './home.questions';
import { SharedService } from "../shared.service";

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

  constructor() { }

  ngOnInit() {
      this.isLoaded = true;
      this.questionsArray.ReadJson(SharedService.json);
  }

  questions() {
    return this.questionsArray.Questions;
  }

  start(){
    this.showQuestions=true;
  }

  ngAfterViewInit() {

  }

  check(){
    console.log(this.questionsArray);
    let tmp =true;
    this.questionsArray.Questions.forEach(element => {
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
    if(this.questionsArray.Questions[0].answer.value==true)
      return "Jesteś najlepszy i znajdziesz pracę wszędzie";
    else
      return "Jesteś do niczego i rzuć się z mostu";
  }

}
