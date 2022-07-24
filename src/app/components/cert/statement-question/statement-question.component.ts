import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-statement-question',
  templateUrl: './statement-question.component.html',
  styleUrls: ['./statement-question.component.css']
})
export class StatementQuestionComponent implements OnInit,OnChanges {

  @Input() data:any;
  isDisplay:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  onAnswer(){
    this.isDisplay=true;
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.isDisplay=true;
  }
  
  isAnswerCorrect:boolean = true
  toggleDisplay(){
  this.isDisplay= !this.isDisplay;
  this.isAnswerCorrect=true;

  temp:[];
  for(let i=0;i<this.data.AnswerOption.length;i++){
    var abc = [].map.call(document.querySelectorAll('input[name="'+i+'"]:checked'), function(cb) {
      return cb['id']; 
    });
    if(this.data.CorrectAnswer[i].toString().replace(true,'yes').replace(false,'no')!=abc){
      this.isAnswerCorrect=false;
      break;
    }
  }
  

  }
}
