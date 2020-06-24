import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Page } from './page.model';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  formData: Page;
  constructor(public firestore: AngularFirestore ) { }
  getItems(){
    return  this.firestore.collection('itemss').snapshotChanges();
    }
}
