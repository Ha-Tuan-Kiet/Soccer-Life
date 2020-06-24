import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { PageService } from '../shared/page.service';
import { NgForm } from '@angular/forms';
// import { ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-infor',
  templateUrl: './infor.component.html',
  styleUrls: ['./infor.component.scss']
})
export class InforComponent implements OnInit {

  constructor(public service: PageService, 
    public firestore:AngularFirestore, 
    // public toarstr: ToastrService 
    ) { }

  ngOnInit(): void {
    this.resetForm();
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
