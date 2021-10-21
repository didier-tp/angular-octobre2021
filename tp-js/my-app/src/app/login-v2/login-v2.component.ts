import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../common/data/login';

function getOtherControlValue(thisControl: FormControl,otherCtrlName:string){
  let val : any = null;
  if(thisControl && thisControl.parent){
    let otherControl = thisControl.parent.get(otherCtrlName) as FormControl;
    if(otherControl) {
      val = otherControl.value;
    }
  }
  //console.log("val="+val + " for " + otherCtrlName );
  return val;
}

function greaterThanOtherValidator (otherControlName: string) {
  return function greaterThanOtherValidate (control: FormControl) {
    let valOfOther = getOtherControlValue(control,otherControlName);
    
    if (valOfOther!=null && (Number(valOfOther) > Number(control.value))) {
      //console.log("greaterThanOther not ok with valOfOther="+valOfOther + " and value="+control.value);
      return {
        notGreaterThanOther: true
      };
    }
    else  {
      //console.log("greaterThanOther ok");
      return null;
    } 
  }
}

function lessThanOtherValidator (otherControlName: string) {
  return function lessThanOtherValidate (control: FormControl) {
    let valOfOther = getOtherControlValue(control,otherControlName);
    if (valOfOther!=null && (Number(valOfOther) < Number(control.value))) {
      //console.log("lessThanOther not ok with valOfOther="+valOfOther + " and value="+control.value);
      return {
        notLessThanOther: true
      };
    }
    else   {
      //console.log("lessThanOther ok");
      return null;
    }
  }
}

/*
pour peaufiner;
ajouter otherControl.valueChanges.subscribe(() => {
        thisControl.updateValueAndValidity();
      }); au bon/meilleur endroit (à déterminer)
voir https://qastack.fr/programming/31788681/angular2-validator-which-relies-on-multiple-form-fields
*/


@Component({
  selector: 'app-login-v2',
  templateUrl: './login-v2.component.html',
  styleUrls: ['./login-v2.component.scss']
})
export class LoginV2Component implements OnInit {

  myForm :FormGroup = new FormGroup({});

  public message :string ="";
  public onLogin(){
    let objValeursSaisies : object = this.myForm.value;
    let login = new Login();
    Object.assign(login,objValeursSaisies)
     this.message = "donnees saisies = " + JSON.stringify(login);
  }

  constructor(private _formBuilder: FormBuilder) { }



  ngOnInit(): void {
    this.myForm = this._formBuilder.group({
      username: ['admin1', [Validators.required , Validators.pattern('^[a-zA-Z].+')]],
      password: ['adminpwd1', [Validators.required, Validators.minLength(3)]],
      roles: ['admin', Validators.required] ,
      mini : [20, [Validators.required, lessThanOtherValidator('maxi')] ],
      maxi : [100, [Validators.required, greaterThanOtherValidator('mini')]] 
      }
      )
  }

}



/*
https://medium.com/@tomsu/how-to-build-a-library-for-angular-apps-4f9b38b0ed11
https://indepth.dev/posts/1193/create-your-standalone-angular-library-in-10-minutes
https://www.samarpaninfotech.com/blog/how-to-create-library-in-angular-tutorial/
*/