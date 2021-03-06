import { Component, OnInit } from '@angular/core';
import { Image } from '../server/models/image';
import { UserService } from '../server/controllers/user.service';
import { ImageService } from '../server/controllers/image.service';
import { User } from '../server/models/user';
import { Router } from '@angular/router';
import { SkillService } from '../server/controllers/skill.service';
import { Skill } from '../server/models/skill';
import { ProjectService } from '../server/controllers/project.service';
import { Project } from '../server/models/project';
import { LinkService } from '../server/controllers/link.service';
import { MessageService } from '../server/controllers/message.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  images: Array<Image> = [];
  currentUser: User = null

  constructor(
    private _userService: UserService,
    private _imageService: ImageService,
    private _stackService: SkillService,
    private _projectService: ProjectService, 
    private _linkService: LinkService,
    private _router: Router,
    private _messageService: MessageService
  ) { }

  ngOnInit() {
    this.getImages()
    this.getUser()
  }
  // Messages
  getMessages(){
    this._messageService.showMessages()
    .then(status => this.getUser)
    .catch(err => console.log(err))
  }

  // User
  updateUser(user:User){
    this._userService.update(user)
    .then(status => this.getUser())
    .catch(err => console.log(err))
  }
  getUser(){
    this._userService.getCurrentUser()
    .then(user => {if (user == null) {
      this._router.navigateByUrl("/admin")
    }else{
      this.currentUser = user
    }
  })
    .catch(err => console.log(err))
  }

  // image CRUD
  getImages(){
    this._imageService.getImages()
    .then(images => this.images = images)
    .catch(err => console.log(err))
  }
  uploadImg(image:Image){
    this._imageService.createImage(image)
    .then(status => this.getImages())
    .catch(err => console.log(err))
  }
  destroyImg(id){
    this._imageService.deleteImg(id)
    .then(status => this.getImages())
    .catch(err => console.log(err))
  }

// Stack CRUD
  createStack(skill: Skill){
    this._stackService.createSkill(skill)
    .then(status => this.getUser())
    .catch(err => console.log(err))
  
  }
  destroyStack(id){
    this._stackService.deleteSkill(id)
    .then(status => this.getUser())
    .catch(err => console.log(err))
  }
  updateStack(stack){
    this._stackService.update(stack)
    .then(status => this.getUser())
    .catch(err => console.log(err))
  }
  // Project CRUD
  createProject(project: Project){
    this._projectService.createProject(project)
    .then(status => this.getUser())
    .catch(err => console.log(err))
  }
  destroyProject(id){
    this._projectService.deleteProject(id)
    .then(status => this.getUser())
    .catch(err => console.log(err))
  }
  updateProject(project){
    this._projectService.updateProject(project)
    .then(satus => this.getUser())
    .catch(err => console.log(err))
  }
  // Link CRUD
  createLink(link){
    this._linkService.createLink(link)
    .then(status => this.getUser())
    .catch(err => console.log(err))
  }
  destroyLink(id){
    this._linkService.deleteLink(id)
    .then(status => this.getUser())
    .catch(err => console.log(err))
  }
  updateLink(link){
    this._linkService.updateLink(link)
    .then(status => this.getUser())
    .catch(err => console.log(err))
  }
}
