import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveGuard implements CanActivate {
  canActivate(): boolean {
    //alert('Your data will be lost, if not saved. Do you want to proceed.');
    return true;
  }
  
}
