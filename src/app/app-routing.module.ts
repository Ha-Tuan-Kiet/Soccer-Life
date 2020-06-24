import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InforComponent } from './infor/infor.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ShoesdeskComponent } from './shoesdesk/shoesdesk.component';


const routes: Routes = [

{ path: 'infor', component:InforComponent},
{ path: 'homepage', component:HomepageComponent},
{ path: 'mainpage', component:MainpageComponent},
{ path: 'shoesdesk', component:ShoesdeskComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
