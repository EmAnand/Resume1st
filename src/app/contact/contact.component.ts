import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  CapchaVal: any[]=[];
  constructor(private notificationService:NotificationsService,private http:HttpClient) { }

  ngOnInit(): void {
  }

  resolved(captchaResponse:any){
    this.CapchaVal=captchaResponse;
    (<HTMLInputElement>document.getElementById('captchaError')).style.display="none"
  }
  formsubmit(f:NgForm){
    if(this.CapchaVal.toString().length<100)(<HTMLInputElement>document.getElementById('captchaError')).style.display="inline"
    if(f.valid && this.CapchaVal.toString().length > 100){
      const data1 = JSON.stringify({
        "Name":f.value.name,
        "EmailTo":f.value.email,
        "CaptchaKey":this.CapchaVal,
        "Country":f.value.country,
        "Domain":"1stResume",
        "TemplateName":"captchaContact",
        "SubjectText":f.value.subject,
        "MsgText":f.value.comment
        });
      this.http.post("https://v4njnm74g0.execute-api.ap-south-1.amazonaws.com/live/CaptchaMail",data1).subscribe((val:any)=>{
        this.notificationService.success('Submitted Successfully', 'Thanks! we will get back to you soon..',{
          timeOut: 5000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: false,
          maxLength: 10
        });
        f.reset();
        },
        error=>{
          this.notificationService.error('Failed to submit', 'Kindly fill the required field.'+error,{
            timeOut: 5000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: false,
            maxLength: 10
          });
        }
        
    //  })
    //console.log(f.form.)
      )}
      }
}
