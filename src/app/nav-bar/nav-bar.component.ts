import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers:[UserService]

})
export class NavBarComponent implements OnInit {
displayName: String;
  constructor(public dialog: MatDialog, public authSvc: UserService) { }

  ngOnInit(): void {
    this.authSvc.GetCurrentUser().then( 
      user => this.displayName = user.displayName!=null?user.displayName: user.email);
  }


  openDialog() {
    this.dialog.open(SignupComponent, {
      width:'500px',
      height:'400px'
    });
  }

}
