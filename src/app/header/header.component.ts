import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { environment } from 'src/environments/environment';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loginService:LoginService,private router:Router,private notificationService:NotificationsService) {
    //console.log('userInHeader - ',this.loginService.userDisplayName)
   }

  ngOnInit(): void {
    
  }

  get isAdmin():boolean{
    return environment.AdminEmails.includes(this.loginService.user.email);
  }
  logout(){
    this.loginService.logout().then((val:any)=>{
      this.notificationService.success('Logout', 'You have logged-out successfully',{
        timeOut: 5000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: false,
        maxLength: 10
      });
      this.router.navigate(['/']);
      },
      error=>{
        this.notificationService.error('Failed', 'We got some internal error!',{
          timeOut: 5000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: false,
          maxLength: 10
        });
      }
    )
    this.router.navigate(['/']);
  }
}
