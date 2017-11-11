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
    
  }

}
