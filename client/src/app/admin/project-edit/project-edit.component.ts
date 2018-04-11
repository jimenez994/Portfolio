import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../server/models/project';
import { Image } from '../../server/models/image';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {

  @Input() project: Project;
  @Input() images: Image;
  @Output() updateProjectEvent= new EventEmitter()
  projectEdit: Project = new Project();
  constructor() { }

  ngOnInit() {
    Object.assign(this.projectEdit, this.project);
  }
  updateProject(){
    this.projectEdit.editable = false;
    this.updateProjectEvent.emit(this.projectEdit);
  }
}
