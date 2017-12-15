import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Questions } from './home.questions';
import { SharedService } from "../shared.service";
import { Temperament } from 'app/home/home.question';

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

  setTemperament():Temperament{
    let temperament:number[]=[0,0,0,0];
    for (let item of this.questionsArray.Questions){
      switch(item.answer.value){
        case Temperament.sangwinik:
          ++temperament[0];
        break;
        case Temperament.choleryk:
          ++temperament[1];
        break;
        case Temperament.melancholik:
          ++temperament[1];
        break;
        case Temperament.flegmatyk:
          ++temperament[1];
        break;
      }
    }
    let i = temperament.indexOf(Math.max(...temperament));
    return Temperament[Temperament[i]];
  }

  getConclusion(){
    let temp=this.setTemperament();
    switch(temp){
      case Temperament.sangwinik:
        return "Jesteś sangwinikiem";
      case Temperament.choleryk:
        return "Jesteś cholerykiem";
      case Temperament.melancholik:
        return "Jesteś melancholikiem";
      case Temperament.flegmatyk:
        return "Jesteś flegmatyk";
    }
  }

}
