import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//HomePage Import

//Login Import
import { LogInComponent } from './log-in/log-in.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';

//HomePage Import
// import { HomePageComponent } from './home-page/home-page.component';

//NavBar Import
import { NavBarComponent } from './nav-bar/nav-bar.component'

//MainPage Import
// import {MatExpansionModule, MatExpansionPanel, MatAccordion} from '@angular/material/expansion';
import {MatExpansionModule} from '@angular/material/expansion';

//Addshoes Import
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { AddshoesComponent } from './addshoes/addshoes.component';
import {MatListModule} from '@angular/material/list'
import {MatSelectModule} from '@angular/material/select';
// Firebase lib
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule} from '@angular/fire/auth'
import { AngularFireStorageModule} from '@angular/fire/storage'
import { environment } from 'src/environments/environment';
import { InforComponent } from './infor/infor.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainpageComponent } from './mainpage/mainpage.component';
//Filter
import {MatTableModule} from '@angular/material/table';
import { ShoesdeskComponent } from './shoesdesk/shoesdesk.component';
//Notification
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    NavBarComponent,
    AddshoesComponent,
    InforComponent,
    HomepageComponent,
    MainpageComponent,
    ShoesdeskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatButtonModule,
    // MatExpansionModule,
    // MatFormField,
    // MatExpansionPanel,
    // MatAccordion,
    MatBottomSheetModule,
    MatListModule,
    MatExpansionModule,
    // ToastrModule.forRoot(),
// Firebaselib
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,  //firestore
    AngularFireAuthModule,   //auth
    AngularFireStorageModule,//Storage
    MatTableModule,
    //Addshoes
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [InforComponent]
})
export class AppModule { }
