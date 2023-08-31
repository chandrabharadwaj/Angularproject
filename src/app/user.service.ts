import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  constructor(private http:HttpClient){}
getuser():Observable<any>{
  
   return this.http.get('http://localhost:3000/users');
}}
