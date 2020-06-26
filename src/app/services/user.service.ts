import { Injectable } from '@angular/core';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import{auth} from 'firebase/app'
// import * as firebase from 'firebase/app';
// import { Router } from '@angular/router';
// import { from } from 'rxjs';
import{first} from 'rxjs/operators'
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user:User; 
  constructor(public AfAuth:AngularFireAuth) { }

  async login(email:string,password:string){
    try{
      const result = await this.AfAuth.signInWithEmailAndPassword(
        email,password
      );
      return result;
    }
    
    catch(error)
    {
      console.log(error);
    }	
  }

  async signup(email:string,password:string){
    try{
      const result = await this.AfAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      return result;
    }
    
    catch(error)
    {
      console.log(error);
    }	
  }

  async logout(){
	
    try{
      await this.AfAuth.signOut();
    }
    catch(error)
    {
      console.log(error);
      
    }
  }

  GetCurrentUser(){
    return this.AfAuth.authState.pipe(first()).toPromise();
  }

async LoginwithGG(){
  try{
    let provider = new firebase.auth.GoogleAuthProvider();
    let user = this.AfAuth.signInWithPopup(provider);
    console.log(user);
    (await user).user.displayName;
  }
  catch(error){
    console.log(error);
  }
}
}
