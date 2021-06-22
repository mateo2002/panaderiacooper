import { Injectable } from '@angular/core';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _isLogin:boolean = false;

  constructor(private _userService: UserService) { }

  login(user:any){
    console.log(user)
    this._userService.getUsers().subscribe((response:any)=>{
      const data = response;
      let filter = response.filter(item =>{
        return (item.username == user.username && item.password == user.password)
      });

      if (filter.length > 0) {
        let usr = {"user":filter[0]}
        sessionStorage.setItem("user",JSON.stringify(usr));
      }
    });
  }

  logout(){
    sessionStorage.removeItem("user");
  }

  isLogin(){
    let user = JSON.parse(sessionStorage.getItem("user"));
    if(user != null){
      return user;
    }
    return 0;
  }

  getUserRole(){
    return this.isLogin() != 0 ? this.isLogin().user.role: "default"
  }
}
