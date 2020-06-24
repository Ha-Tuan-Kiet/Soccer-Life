import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddshoesComponent } from '../addshoes/addshoes.component';
import { NgForm } from '@angular/forms';
import { Page } from '../shared/page.model';
import { PageService } from '../shared/page.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  panelOpenState = false;
  firstname: string;
  kindstyle: string;
  list: Page[];


  constructor(public dialog: MatDialog,
    public service: PageService,
    public firestore: AngularFirestore,
    // public toarstr: ToastrService,
    ) { }

    openDialog() {
      this.dialog.open(AddshoesComponent, {
        width:'600px',
        height:'630px'
      });
    }

  ngOnInit(): void {
    this.service.getItems().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() as Page
        }
      })
    });
    this.resetForm()
  }

  // update
  onEdit(emp: Page) {
    this.service.formData = Object.assign({}, emp);
  }
  // Delete
  onDelete(id: string) {
    if (confirm("Are you really want to delete the item ?")) {
      this.firestore.doc('itemss/' + id).delete();
      // this.toarstr.warning('Deleted Succesfully', 'Annoucement');
    }
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

  // Statuscolor
  statuscolor(color){
    switch(color){
      case 'Het hang':
      return 'red';
      case 'Con hang':
      return 'blue';
      case 'Sap co':
      return 'yellow';
    }
  }
  
  //Search
  Search(){
    if(this.firstname !="" || this.kindstyle !="") // fixing
    {
      if(this.firstname != "" )
      {
        this.list = this.list.filter(res=>{
          return res.Name.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase());
         });
      }
      else 
      {
        this.list = this.list.filter(res=>{
          return res.Type.toLocaleLowerCase().match(this.kindstyle.toLocaleLowerCase());
        });
      }
    }
    else if (this.firstname =="" || this.kindstyle == "")
    {
      this.ngOnInit();
    }  
  }

}
