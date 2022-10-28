import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor (
    private router: Router
  ) { }
  
  canLoad(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
      return true;
    } else{
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
