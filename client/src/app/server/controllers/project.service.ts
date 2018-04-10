import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs";
import "rxjs/add/operator/map";

@Injectable()
export class ProjectService {

  constructor(
    private _http: Http
  ) { }
  createProject(newProject){
    return this._http.post("/project/create", newProject).map(data => data.json()).toPromise()
  }
  getPrjects(){
    return this._http.get("/projects").map(data => data.json()).toPromise()
  }
  getOneProject(id){
    return this._http.get(`/project/${id}`).map(data => data.json()).toPromise()
  }
  deleteProject(id){
    return this._http.delete(`/project/delete/${id}`).map(data => data.json()).toPromise()
  }
  updateProject(project){
    return this._http.put(`/project/update/${project._id}`, project).map(data => data.json()).toPromise()
  }
}
