import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class LinkService {

  constructor(
    private _http: Http
  ) { }
  createLink(newLink){
    return this._http.post("/link/create", newLink).map(data => data.json()).toPromise()
  }
  getLinks(){
    return this._http.get("/links").map(data => data.json()).toPromise()
  }
  getOneLink(id){
    return this._http.get(`/link/${id}`).map(data => data.json()).toPromise()
  }
  deleteLink(id){
    return this._http.delete(`/link/delete/${id}`).map(data => data.json()).toPromise()
  }
  updateLink(link){
    return this._http.put(`/link/update/${link._id}`, link).map(data => data.json()).toPromise()
  }
}
