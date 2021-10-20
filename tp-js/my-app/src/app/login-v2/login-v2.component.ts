import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-v2',
  templateUrl: './login-v2.component.html',
  styleUrls: ['./login-v2.component.scss']
})
export class LoginV2Component implements OnInit {

  myForm :FormGroup = new FormGroup({});

  public message :string ="";
  public onLogin(){
     this.message = "donnees saisies = " + JSON.stringify(this.myForm?.value);
  }

  constructor(private _formBuilder: FormBuilder) { }



  ngOnInit(): void {
    this.myForm = this._formBuilder.group({
      username: ['admin1', [Validators.required , Validators.pattern('^[a-zA-Z].+')]],
      password: ['adminpwd1', [Validators.required, Validators.minLength(3)]],
      roles: ['admin', Validators.required]
      });
  }

}
