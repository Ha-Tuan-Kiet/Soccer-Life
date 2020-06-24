import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { LogInComponent } from '../log-in/log-in.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(LogInComponent, {
      width:'500px',
      height:'400px'
    });
  }
}
