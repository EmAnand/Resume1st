import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  constructor(private loginService:LoginService,private router:Router){}
  canActivate(): boolean {
   if(!environment.AdminEmails.includes(this.loginService.user.email)){
     this.router.navigate(['/notFound']);
     return false;
   }else return true;
  }
}
