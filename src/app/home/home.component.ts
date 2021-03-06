import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Questions } from './home.questions';
import { Person, Characteristic } from './home.person';
import { Characteristics } from './home.enums';
import { SharedService } from "../shared.service";
import { JsonService } from "../json.service";
import { Question } from 'app/home/home.question';
import { Job, Jobs } from 'app/home/home.jobs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [JsonService]
})
export class HomeComponent implements OnInit, AfterViewInit {
  isLoaded = false;
  showQuestions = false;
  questionsArray: Questions = new Questions();
  addedAllAnswers: Boolean = false;
  info: String = "";
  id: number;
  question: Question;
  counter: number = 0;
  person: Person;
  conclusion1: string;
  conclusion2: string;
  conclusion3: string;
  jobs: Jobs;
  intelligences: Characteristics[];
  temperaments: Characteristics[];

  constructor(private as:JsonService ,private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.as.getJSON("./../assets/jsons/jsonJobs.txt").subscribe(data => {
      this.jobs = new Jobs(data);
    });

    this.isLoaded = true;
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }

  ngAfterContentChecked() {
    this.cd.detectChanges();
  }

  nextQuestion() {
    if (this.id < this.questionsArray.Questions.length - 1) {
      this.id++
      this.question = this.questionsArray.Questions[this.id];
    }
  }

  actualQuestion() {
    return this.question;
  }

  backQuestion() {
    if (this.id > 0) {
      this.id--
      this.question = this.questionsArray.Questions[this.id];
    }
  }

  start() {
    this.conclusion1 = "";
    this.conclusion2 = "";
    this.conclusion3 = "";
    this.info = "";
    this.addedAllAnswers = false;
    this.id = 0;
    this.person = new Person();
    this.as.getJSON("./../assets/jsons/jsonQuestions.txt").subscribe(data => {
      this.questionsArray.ReadJson(data);
      this.question = this.questionsArray.Questions[0];
      this.intelligences=[];
      this.temperaments=[];
      this.showQuestions = true;
    });
  }

  check() {
    let tmp = true;
    this.counter = this.questionsArray.Questions.length;
    this.questionsArray.Questions.forEach(element => {
      if (element.checked == false) {
        tmp = false;
        this.counter--;
      }
    })
    this.info = "Oddano odpowiedź na " + this.counter + " z " + this.questionsArray.Questions.length;
    if (tmp == true) {
      return true;
    } else {
      this.addedAllAnswers = false;
      return false;
    }
  }

  displayResult() {
    this.addedAllAnswers = true;
    this.showQuestions = false;
    this.info = "";
    this.conclusion1 = this.getConclusion1();
    this.conclusion2 = this.getConclusion2();
    this.conclusion3 = this.getConclusion3();
  }

  setCharacteristics() {
    let temperament: number[] = [0, 0, 0, 0];
    let intelligence: number[] = [0, 0, 0, 0, 0, 0, 0];
    for (let item of this.questionsArray.Questions) {
      switch (item.answer.type) {
        case Characteristics.Sanguine:
          ++temperament[0];
          break;
        case Characteristics.Choleric:
          ++temperament[1];
          break;
        case Characteristics.Melancholic:
          ++temperament[2];
          break;
        case Characteristics.Phlegmatic:
          ++temperament[3];
          break;
        case Characteristics.Matematical:
          intelligence[0] += item.answer.value;
          break;
        case Characteristics.Linguistic:
          intelligence[1] += item.answer.value;
          break;
        case Characteristics.Visual:
          intelligence[2] += item.answer.value;
          break;
        case Characteristics.Kinesthetic:
          intelligence[3] += item.answer.value;
          break;
        case Characteristics.Musical:
          intelligence[4] += item.answer.value;
          break;
        case Characteristics.Interpersonal:
          intelligence[5] += item.answer.value;
          break;
        case Characteristics.Intrapersonal:
          intelligence[6] += item.answer.value;
          break;
      }
    }

    this.person.setTemperaments(temperament, this.questionsArray.temperamentQuestions);
    this.person.setIntelligences(intelligence, this.questionsArray.intelligenceQuestions / 7 * 5);
  }

  getConclusion1() {
    this.setCharacteristics();
    let tmp = this.person.sortTemperaments();
    console.log(this.person);

    let text ="\t"+ tmp[0].value + "% " + tmp[0].name + "iem\r\n\t" +
      tmp[1].value + "% " + tmp[1].name + "iem\r\n\t" +
      tmp[2].value + "% " + tmp[2].name + "iem\r\n\t" +
      tmp[3].value + "% " + tmp[3].name + "iem\r\n";

    if ((tmp[0].value - tmp[1].value) > 20) {
      text += "Twoim dominującym temperamentem jest " + tmp[0].name + ".\r\n";
      this.temperaments.push(tmp[0].characteristic);
    } else {
      if ((tmp[1].value - tmp[2].value) <= 10) {
        if ((tmp[2].value - tmp[3].value) <= 5) {
          text += "Nie masz dominującego temperamentu, łączysz cechy wszystkich temperamentów.\r\n";
          this.temperaments.push(tmp[0].characteristic);
          this.temperaments.push(tmp[1].characteristic);
          this.temperaments.push(tmp[2].characteristic);
          this.temperaments.push(tmp[3].characteristic);
        } else {
          text += "Nie masz dominującego temperamentu, łączysz cechy " + tmp[0].name + "a, " + tmp[1].name + "a i " + tmp[2].name + "a.\r\n";
          this.temperaments.push(tmp[0].characteristic);
          this.temperaments.push(tmp[1].characteristic);
          this.temperaments.push(tmp[2].characteristic);
        }
      } else {
        text += "Nie masz dominującego temperamentu, łączysz cechy " + tmp[0].name + "a i " + tmp[1].name + "a.\r\n";
        this.temperaments.push(tmp[0].characteristic);
        this.temperaments.push(tmp[1].characteristic);
      }
    }

    
    
    text = this.stringToHtmlString(text);
    return text;
  }

  getConclusion2(){
    let text="";
    let tmp2 = this.person.sortIntelligences();

    for (let item of tmp2) {
      if (item.value > 60) {
        text += "\t- inteligencja " + item.name + "\r\n";
        this.intelligences.push(item.characteristic);
      }
    }
    if (this.intelligences.length == 0) {
      text += "\t- inteligencja " + tmp2[0].name + "\r\n";
      this.intelligences.push(tmp2[0].characteristic)
    }

    text = this.stringToHtmlString(text);
    return text;
  }

  getConclusion3(){
    let text="";
    let jobs: Job[] = [];
    let flag: boolean = true;
    for (let item of this.jobs.jobs) {
      flag=true;
      for (let elem of item.intelligences) {
        if (this.intelligences.indexOf(elem) == -1) {
          flag = false;
          break;
        }
      }
      if (flag == true){
        for (let elem of item.temperaments) {
          if (this.temperaments.indexOf(elem) != -1) {
            jobs.push(item);
            break;
          }
        }
      }
    }

    for (let item of jobs) {
      text += "\t- " + item.name + "\r\n";
    }

    text = this.stringToHtmlString(text);
    return text;
  }

  stringToHtmlString(text: string) {
    let result = "<br>" + text + "</br>";
    result = result.replace(/\r\n/g, "</br><br>");
    result = result.replace(/\t/g, "&emsp;");

    return result;
  }

}
