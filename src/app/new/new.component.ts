import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { NgForm } from '@angular/forms';
import { validateCallback } from '@firebase/util';
import { NotificationsService } from 'angular2-notifications';
import { finalize, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { threadId } from 'worker_threads';
import { generateUUID } from '../BL/modifier';
import { IlearningService } from '../ilearning.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  certs: any[] = [];
  ids: string[] = [];
  msg: string = '';
  cert: any;
  id: string = '';
  mainCollectionName: string = '';
  constructor(private learning: IlearningService, private storage: AngularFireStorage,
    private notificationService: NotificationsService,private loginService:LoginService) { }

  ngOnInit(): void {
  }

  certSelected(event: any) {
    
    this.id = this.ids[event.target.value];
    this.cert = this.certs[event.target.value];
  }

  onQnASubmit(f: NgForm) {

    if (f.valid) {
      this.learning.SubmitQnA(this.id, f.value, this.cert)
        .then(val => {
          this.notificationService.success('Successful', 'Question set uploaded successfully',{
            timeOut: 5000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: false,
            maxLength: 10
          });
          f.reset()
          },
          error=>{
            this.notificationService.error('Login failed', 'Either username or password is incorrect!',{
              timeOut: 5000,
              showProgressBar: true,
              pauseOnHover: false,
              clickToClose: false,
              maxLength: 10
            });
          })
    }
    else alert('form not valid')
  }

  onSubmit(f: NgForm) {
    if (f.valid) {
      f.value.Details = f.value.Details.split('\n');
      f.value.AnswerOption = f.value.AnswerOption.split('\n');
      f.value.QuestionText = f.value.QuestionText.split('\n');
      f.value.CorrectAnswer = f.value.CorrectAnswer.split('\n');
      this.learning.SubmitCertNewQuestion(this.mainCollectionName, this.id, f.value, this.cert)
        .then(val => {
          this.notificationService.success('Saved', val,{
            timeOut: 5000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: false,
            maxLength: 10
          });
          f.reset()
        })
        .catch(err => 
          this.notificationService.error('Failed', err,{
            timeOut: 5000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: false,
            maxLength: 10
          }));
    }
    else alert('form not valid')
  }

  selectOption(event: any) {
    this.ids = [];
    this.certs = [];
    this.id = '';
    this.cert = '';
    this.mainCollectionName = event.target.value;
    this.learning.getMainCollection(this.mainCollectionName).subscribe(val =>
      val.forEach(item => {
        this.ids.push(item.id)
        this.certs.push(item.data())
      })
    )
  }
  get isAdmin():boolean{
    return environment.AdminEmails.includes(this.loginService.user.email);
  }
}
