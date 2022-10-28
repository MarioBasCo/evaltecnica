import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApijsonService {

  constructor(private http: HttpClient) { 
  }

  getInfo(){
    const url = "https://jsonplaceholder.typicode.com/users";
    return this.http.get<User[]>(url);
  }
}
