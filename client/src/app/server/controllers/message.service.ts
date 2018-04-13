import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class MessageService {

  constructor(
    private _http: Http
  ) { }
  createMessage(newMessage){
    return this._http.post(`/message/create/${newMessage._user}`, newMessage).map(data => data.json()).toPromise()
  }
  showMessages(){
    return this._http.get("/messages").map(data => data.json()).toPromise()
  }
  deleteMessage(id){
    return this._http.get(`/message/delete/${id}`).map(data => data.json()).toPromise()
  }

}
