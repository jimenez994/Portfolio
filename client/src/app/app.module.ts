import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageUploadModule } from "angular2-image-upload";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginBodyComponent } from './login-body/login-body.component';
import { RegistrationComponent } from './login-body/registration/registration.component';
import { LoginComponent } from './login-body/login/login.component';
import { PorfolioBodyComponent } from './porfolio-body/porfolio-body.component';
import { AdminComponent } from './admin/admin.component';
import { UserService } from './server/controllers/user.service';
import { ImgUploadComponent } from './admin/img-upload/img-upload.component';
import { ImageService } from './server/controllers/image.service';
import { HeaderComponent } from './admin/header/header.component';
import { HeaderEditComponent } from './admin/header-edit/header-edit.component';
import { SummaryComponent } from './admin/summary/summary.component';
import { SummaryEditComponent } from './admin/summary-edit/summary-edit.component';
import { StacksComponent } from './admin/stacks/stacks.component';
import { StackEditComponent } from './admin/stack-edit/stack-edit.component';
import { SkillService } from './server/controllers/skill.service';
import { AboutMeComponent } from './admin/about-me/about-me.component';
import { AboutMeEditComponent } from './admin/about-me-edit/about-me-edit.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { ProjectEditComponent } from './admin/project-edit/project-edit.component';
import { ProjectService } from './server/controllers/project.service';
import { ImgListComponent } from './admin/img-list/img-list.component';
import { OtherComponent } from './admin/other/other.component';
import { OtherEditComponent } from './admin/other-edit/other-edit.component';
import { LinkComponent } from './admin/link/link.component';
import { LinkEditComponent } from './admin/link-edit/link-edit.component';
import { LinkService } from './server/controllers/link.service';
import { MessageService } from './server/controllers/message.service';
import { MessagesComponent } from './admin/messages/messages.component';
import { PheaderComponent } from './porfolio-body/pheader/pheader.component';
import { PstacksComponent } from './porfolio-body/pstacks/pstacks.component';
import { PaboutMeComponent } from './porfolio-body/pabout-me/pabout-me.component';
import { PprojectsComponent } from './porfolio-body/pprojects/pprojects.component';
import { PlinksComponent } from './porfolio-body/plinks/plinks.component';
import { ParticlesModule } from 'angular-particle';

@NgModule({
  declarations: [
    AppComponent,
    LoginBodyComponent,
    RegistrationComponent,
    LoginComponent,
    PorfolioBodyComponent,
    AdminComponent,
    ImgUploadComponent,
    HeaderComponent,
    HeaderEditComponent,
    SummaryComponent,
    SummaryEditComponent,
    StacksComponent,
    StackEditComponent,
    AboutMeComponent,
    AboutMeEditComponent,
    ProjectsComponent,
    ProjectEditComponent,
    ImgListComponent,
    OtherComponent,
    OtherEditComponent,
    LinkComponent,
    LinkEditComponent,
    MessagesComponent,
    PheaderComponent,
    PstacksComponent,
    PaboutMeComponent,
    PprojectsComponent,
    PlinksComponent,
    
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ParticlesModule,
    ImageUploadModule.forRoot(),

  ],
  providers: [
    UserService,
    ImageService,
    SkillService,
    ProjectService,
    LinkService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
