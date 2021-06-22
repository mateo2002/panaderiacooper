import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'app';

  constructor(private route: Router,private _userService: UserService, public _loginService:LoginService){

  }

  ngOnInit(): void {
    this._userService.getUsers().subscribe((response:any)=>{
      console.log(response);
    })
  }

  logout(){
    this._loginService.logout();
    this.route.navigate(['/'])
  }
}
