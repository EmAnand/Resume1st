import { Component, ComponentFactoryResolver, OnDestroy, OnInit } from '@angular/core';
import { IlearningService } from '../../../ilearning.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { map, take } from 'rxjs';
import { fucDecr } from '../../../BL/modifier';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-parent-cert',
  templateUrl: './parent-cert.component.html',
  styleUrls: ['./parent-cert.component.css']
})
export class ParentCertComponent implements OnInit, OnDestroy {
  PaperNo: number = 0;
  certId: string = "MS_ryEhVSBxVwbfdTXh5eQY";
  certDetail: any;
  questionIds: string[] = [];
  PaperQuesionNo: number = -1;
  data: any;
  dataNew: any;
  isOptional: boolean = false;

  constructor(private learn: IlearningService, private router: Router,
    private activeRouter: ActivatedRoute,
    private cfr: ComponentFactoryResolver
  ) {


  }

  // startExam() {
  //   this.PaperQuesionNo = 0;
  //   let questionId = fucDecr(this.questionIds[this.PaperQuesionNo], environment.EnKey);
  //   this.learn.getQuesiton(this.certId, questionId).subscribe((val: any) => {
  //     this.isOptional = (val.AnswerType == "MultiCorrect" || val.AnswerType == "SingleCorrect") ? true : false;
  //     this.data = val;
  //   })
  // }
  QuestionNumberButton(event: any) {
    this.PaperQuesionNo = +event.target.value - 1;
    let questionId = fucDecr(this.questionIds[this.PaperQuesionNo], environment.EnKey);
    this.learn.getQuesiton(this.certId, questionId).subscribe((val: any) => {
      this.isOptional = (val.AnswerType == "MultiCorrect" || val.AnswerType == "SingleCorrect") ? true : false;
      this.data = val;
    })
  }

  ngOnDestroy() {
    //this.data.unsubscribe();
  }
  displayGuide = false;
  guideData:any;
  isAnswerHidden:boolean=true;
  getDisplayGuide() {
    this.learn.getGuideData(this.certId).subscribe((val: any) => {
      this.guideData = val;
    })
    this.displayGuide = true;
  }
  ngOnInit(): void {
    //this.isOptional=true;
    this.activeRouter.params.subscribe((val: Params) => {
      this.certId = val['id'];

    });
    this.learn.getCert(this.certId).subscribe((val: any) => {
      this.certDetail = val;
      //this.questionIds = val.Keys[0].split('#');
      //this.paperNoQuestionCountArr=val.Keys;
    })
  };

  selectPaper(i:number){
    this.questionIds = this.certDetail.Keys[i].split('#')
    this.PaperQuesionNo = 0;
    let questionId = fucDecr(this.questionIds[this.PaperQuesionNo], environment.EnKey);
    this.learn.getQuesiton(this.certId, questionId).subscribe((val: any) => {
      this.isOptional = (val.AnswerType == "MultiCorrect" || val.AnswerType == "SingleCorrect") ? true : false;
      this.data = val;
    })
  }

  //paperNoQuestionCountArr:[]=[];
  Privious() {
    this.isAnswerHidden=true;
    this.PaperQuesionNo = this.PaperQuesionNo - 1;
    let questionId = fucDecr(this.questionIds[this.PaperQuesionNo], environment.EnKey);
    this.learn.getQuesiton(this.certId, questionId).subscribe((val: any) => {
      this.data = val;
    })
  }
  Next() {
    this.isAnswerHidden=true;
    this.PaperQuesionNo = this.PaperQuesionNo + 1;
    let questionId = fucDecr(this.questionIds[this.PaperQuesionNo], environment.EnKey);
    this.learn.getQuesiton(this.certId, questionId).subscribe((val: any) => {
      this.data = val;
    })
  }
}
