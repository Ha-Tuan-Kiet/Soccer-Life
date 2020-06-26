import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//Form product
import { PageService } from '../shared/page.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-addshoes',
  templateUrl: './addshoes.component.html',
  styleUrls: ['./addshoes.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddshoesComponent implements OnInit {
  panelColor = new FormControl('red');

  constructor(public dialogRef: MatDialogRef<AddshoesComponent>,
    private _snackBar: MatSnackBar,
    public service: PageService,
    public firestore:AngularFirestore,
    // public toarstr: ToastrService,

    ) { }

    openSnackBar(item: string) {
      this._snackBar.open('Add Success !!',item,{
      duration: 2000,
      });
      }


  ngOnInit(): void {
    this.resetForm()
  }

  resetForm(form ?: NgForm){
    if(form!= null)
    form.resetForm();
    this.service.formData={
      id: null,
      Name: '',
      Size: '',
      Price: '',
      Type: '',
      Weight: '',
      Status: '',
    }
  }

  // Add new and update
  onSubmit(form: NgForm){
    let data = Object.assign({},form.value) ;
    delete data.id;
    if(form.value.id == null)
    {
      this.firestore.collection('itemss').add(data);
      // this.toarstr.success('Submitted successfully ','Congratulation');
    }
    else
    {
    this.firestore.doc('itemss/'+form.value.id).update(data);
    // this.toarstr.success('Updated Successfully','Congratulation');  
    }
    this.resetForm(form);
    
  }





}
