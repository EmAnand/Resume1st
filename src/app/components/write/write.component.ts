import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { IlearningService } from 'src/app/ilearning.service';
import { LoginService } from 'src/app/login/login.service';
import { blog } from '../models/blog';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  ImageUploader: boolean = false;
  defaultBlog:blog={
    approvalDate:null,
    blog:null,
    creationDate:null,
    isApproved:null,
    CreatedByName:this.login.user.displayName,
    subject:null,
    CreatedByUid:this.login.user.uid,
    view:100,
    likes:10
  }
  constructor(private login: LoginService, private learning: IlearningService,private notificationService:NotificationsService) { }

  ngOnInit(): void {
  }
  Submit(f: NgForm) {
    if (f.valid) {
      this.defaultBlog.blog=f.value.blog;
      this.defaultBlog.creationDate=new Date();
      this.defaultBlog.subject=f.value.subject;
      this.learning.UploadBlog(this.defaultBlog).then((val:any)=>{
        this.notificationService.success('Submitted Successfully', 'Thanks for your contribution!',{
          timeOut: 5000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: false,
          maxLength: 10
        });
        f.reset();
        this.defaultBlog.blog=null;
        this.defaultBlog.subject=null;
        },
        error=>{
          this.notificationService.error('failed', 'We got some error, please put a feedback!',{
            timeOut: 5000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: false,
            maxLength: 10
          });
        }
      )
    }
  }
  displayImageUploader() {
    this.ImageUploader = !this.ImageUploader;
  }
}
