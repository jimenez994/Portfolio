import { Component, OnInit } from '@angular/core';
import { UserService } from '../server/controllers/user.service';
import { User } from '../server/models/user';
import { MessageService } from '../server/controllers/message.service';
import { Message } from '../server/models/message';

@Component({
  selector: 'app-porfolio-body',
  templateUrl: './porfolio-body.component.html',
  styleUrls: ['./porfolio-body.component.scss']
})
export class PorfolioBodyComponent implements OnInit {

  users = null;
  primaryUser = null;
  newMessage: Message;

  constructor(
    private _userServices: UserService,
    private _mesageService: MessageService
  ) { }
  ngOnInit() {
    this.getUsers()
  }
  getUsers(){
    this._userServices.getUsers()
    .then(users => {
      this.users = users
      this.primaryUser = users[0]
    })
    .catch(err => console.log(err))
  }

  createMessage(message: Message){
    message._user = this.primaryUser._id
    this._mesageService.createMessage(message)
    .then(status => this.getUsers())
    .catch(err => console.log(err))
  }

}

