import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-optional-question',
  templateUrl: './optional-question.component.html',
  styleUrls: ['./optional-question.component.css']
})
export class OptionalQuestionComponent implements OnInit,OnChanges {
@Input() data:any;
@Input() isAnswerHidden:boolean=true;
isAnswerCorrect:boolean = true
  constructor() {
  }
  ngOnInit(): void {

  }
  
  IsMultiCorrect(){
    return this.data.AnswerType== 'MultiCorrect' ? true:false;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.isAnswerHidden=true;
  }
  
  onAnswer(){
    this.isAnswerHidden=true;
  }

  toggleDisplay(){
    this.isAnswerHidden= !this.isAnswerHidden;
    this.isAnswerCorrect=true;
    var abc = [].map.call(document.querySelectorAll('input[name="chkage"]:checked'), function(cb) {
      return Number.parseInt(cb['id']); 
    });
    abc.forEach((val:any) => {
      if(!this.data.CorrectAnswer.includes(val.toString()) || !this.isAnswerCorrect){
        this.isAnswerCorrect=false;
        return;
      }
    });
    this.isAnswerCorrect = (this.data.CorrectAnswer.length == abc.length && this.isAnswerCorrect)? true:false;
  }

  
}
