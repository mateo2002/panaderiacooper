import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username = ""
    password = ""


  constructor(private _loginService: LoginService) { }

  ngOnInit(): void {

  }

  login(event){
    event.preventDefault();
    let user = {
      "username":this.username,
      "password":this.password
    }
    this._loginService.login(user);
    console.log(this._loginService.isLogin());
  }

}
