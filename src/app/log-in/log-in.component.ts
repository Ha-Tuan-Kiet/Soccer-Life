import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl,Validators,MinLengthValidator, FormGroup } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
// //Firebase
// import { UserService } from '../services/user.service';
// import { AngularFireAuth} from '@angular/fire/auth'
// import { AngularFirestore } from '@angular/fire/firestore';
import {auth} from 'firebase';
//Sign Up
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
  providers:[UserService]
})
export class LogInComponent implements OnInit {

  SignUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  LoginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(public dialogRef: MatDialogRef<LogInComponent>,
    private _snackBar: MatSnackBar,
    public router:Router,
    public authSvc:UserService,
) { }



email = new FormControl('', [Validators.required, Validators.email]);
password = new FormControl('', [Validators.required, Validators.minLength(8)]);
// retypePassword = new FormControl('', [Validators.required, Validators.pattern(this.password.value)]);

openSnackBar(message: string, action: string) {
this._snackBar.open(message, action, {
duration: 2000,
});
}

  ngOnInit(): void {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getPasswordError(){
  
    return this.password.hasError('required')?"You must enter your password":
      this.password.hasError('minLength')?"Your password must have at least 8 character":'';
      
  }

  // getRetypePasswordError() {
  //   return this.retypePassword.hasError('required') ? 'You must enter a password' :
  //       this.retypePassword.hasError('pattern') ? 'You must retype exactly' :
  //         '';
  // }

  async onLogin()
  {
    const{email,password}= this.LoginForm.value;
    try{
     const user= await this.authSvc.login(email,password);
     if(user != null)
     {
        this.router.navigate(['/mainpage']);
     }
    }
    catch(error)
    {
      console.log(error);
    }
  }

  onSignUp(){
    const{email,password} = this.SignUpForm.value;
    this.authSvc.signup(email,password);
  }

}
