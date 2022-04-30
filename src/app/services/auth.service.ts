import { IUser } from './../moderl/iuser';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAdmin: boolean = false;
  isLogin: boolean = false;
  constructor(router: Router) { }
  // user!: [userName: String, passWord: String]implements IUser;
  users = {
    user: {
      name: 'user',
      value: 'user'
    },
    admin: {
      name: 'admin',
      value: 'admin'
    }
  }
}
