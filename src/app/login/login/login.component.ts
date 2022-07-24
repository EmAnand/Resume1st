
import { Component, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
alert:boolean=true;

  constructor(private http:LoginService,
    private route:Router,private notificationService: NotificationsService,private router: Router ) { }

  ngOnInit(): void {
  }

  
  loginWithGoogle() {
    this.http.signInWithGoogle();
  }

  loginWithFacebook(){}

  loginWithLinkedin(){}

  formsubmit(f:NgForm){
    
    //if(f.valid){
      this.http.login(f.value.username,f.value.password).then((val:any)=>{
        this.alert = false;
        this.notificationService.success('Login', 'You have logged-in successfully',{
          timeOut: 5000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: false,
          maxLength: 10
        });
        this.router.navigate(['//dashboard']);
        },
        error=>{
          this.notificationService.error('Login failed', 'Either username or password is incorrect!',{
            timeOut: 5000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: false,
            maxLength: 10
          });
        }
      )}
 
    }
