import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  constructor() { }

  public login(userInfo: User){
    //localStorage.setItem('ACCESS_TOKEN', "access_token");
    this.loggedIn = true;
  }

  public isLoggedIn(){
    //return localStorage.getItem('ACCESS_TOKEN') !== null;
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        },800);
      }
    );
    return promise;
  }

  public logout(){
    //localStorage.removeItem('ACCESS_TOKEN');
    this.loggedIn = false;
  }
}
