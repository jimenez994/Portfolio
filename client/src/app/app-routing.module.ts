import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginBodyComponent } from './login-body/login-body.component';
import { PorfolioBodyComponent } from './porfolio-body/porfolio-body.component';
import { NavbarComponent } from './porfolio-body/navbar/navbar.component';
import { RegistrationComponent } from './login-body/registration/registration.component';
import { AdminComponent } from './admin/admin.component';
import { ImgUploadComponent } from './admin/img-upload/img-upload.component';
import { MessagesComponent } from './admin/messages/messages.component';

const routes: Routes = [
  {
    path:'admin', component: LoginBodyComponent, children: [
      { path:'', component: RegistrationComponent }
    ]
  },
  {
    path:'', component: PorfolioBodyComponent, children: [
      { path:'', component: NavbarComponent }
    ]
  },
  {
    path:'superAdmin', component: AdminComponent, children: [ ]
  },
  { 
    path: 'admin/messages', component: MessagesComponent
  }
    
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
