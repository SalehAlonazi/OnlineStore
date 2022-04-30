import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  signin() {
    if (this.loginform.get('username')?.value == this.auth.users.admin.name) {

      this.router.navigate(['/main']);
      !this.auth.isAdmin

    } else if (this.loginform.get('username')?.value == this.auth.users.user.name) {

      this.router.navigate(['/main']);
      this.auth.isLogin = !this.auth.isLogin

    } else {
      alert("username and password are incorrect")
    }
  }
}


