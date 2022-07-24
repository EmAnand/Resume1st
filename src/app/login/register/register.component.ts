import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  constructor(private http: LoginService, private router: Router,
    private notificationService: NotificationsService) { }

  ngOnInit(): void {
  }

  signup(f: NgForm) {
    if(!f.valid) return;
    this.http.register(f.value.email, f.value.password).then((val) => {
      console.log(val, "data created successfull", {
        timeOut: 5000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true,
        maxLength: 10
      });
      this.router.navigate(['']);

    }, error => {
      this.notificationService.error('Register failed', 'Deatils are incorrect!', {
        setTimeout: 5000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true,
        maxLength: 10
      })
    }



    )
  }
}
