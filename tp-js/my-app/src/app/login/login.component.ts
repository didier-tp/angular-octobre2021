import { Component, OnInit } from '@angular/core';
import { Login } from '../common/data/login';
import { LoginResponse } from '../common/data/loginResponse';
import { LoginService } from '../common/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  today = new Date();

  public login : Login = new Login("admin1","pwdadmin1","admin");
  public message :string ="";
  public authenticated : boolean = false;

  public onLogin(){
     //this.message = "donnees saisies = " + JSON.stringify(this.login);
     this._loginService.postLogin$(this.login)
          .subscribe({
           next : (response :LoginResponse) => { 
                  this.traiterReponseLogin(response); } ,
           error : (err) => { console.log("error:"+err);
                     this.message="une erreur technique a eu lieu."}
           });
  }

  private traiterReponseLogin(loginResponse :LoginResponse){
    this.message = loginResponse.message;//améliorable !!!
    this.authenticated = loginResponse.status;
    console.log("loginResponse="+JSON.stringify(loginResponse));
  }

  constructor(private _loginService :LoginService) { }

  ngOnInit(): void {
  }

}
