import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../server/controllers/message.service';
import { Message } from '../../server/models/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages: Array<Message> = []

  constructor(
    private _messageService: MessageService
  ) { }

  ngOnInit() {
    this.getMessages()
  }
  getMessages(){
    this._messageService.showMessages()
    .then(status => this.messages = status)
    .catch(err => console.log(err))
  }
}
