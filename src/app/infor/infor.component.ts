import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { PageService } from '../shared/page.service';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-infor',
  templateUrl: './infor.component.html',
  styleUrls: ['./infor.component.scss']
})
export class InforComponent implements OnInit {

  constructor(public service: PageService, 
    public firestore:AngularFirestore, 
    private _snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    this.resetForm();
  }

  openSnackBar(item: string) {
    this._snackBar.open(item,'Has Update !!',{
    duration: 2000,
    });
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
      }
      else
      {
      this.firestore.doc('itemss/'+form.value.id).update(data);
      }
      this.resetForm(form);
      
    }

}
