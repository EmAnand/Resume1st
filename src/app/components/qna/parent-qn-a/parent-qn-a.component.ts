import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { fucDecr } from 'src/app/BL/modifier';
import { IlearningService } from 'src/app/ilearning.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-parent-qn-a',
  templateUrl: './parent-qn-a.component.html',
  styleUrls: ['./parent-qn-a.component.css']
})
export class ParentQnAComponent implements OnInit {
  qnAId: string | null = null
  qnADetail: any;
  qnAData: any;
  constructor(private activeRouter: ActivatedRoute, private learn: IlearningService) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe((val: Params) => {
      this.qnAId = val['id'];

    });
    if (this.qnAId != null) {
      this.learn.getQnA(this.qnAId).subscribe((val: any) => {
        var key = val.Key[0].split('#')[1];
        if (key.length>10) {
          const keyId = fucDecr(key, environment.EnKey);
          this.learn.getQnAData(keyId).subscribe((data: any) => {
            //console.log(val)
            this.qnAData = data;
          })
        }
      })
    }

  }
}
