import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutologinGuard implements CanLoad {
  constructor(private router: Router){

  }

  canLoad(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    if(!user){
      return true;
    } else{
      this.router.navigateByUrl('/tabs');
      return false;
    }
  }
  
}
