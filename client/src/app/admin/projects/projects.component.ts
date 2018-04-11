import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Project } from '../../server/models/project';
import { ProjectService } from '../../server/controllers/project.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  newProject = new Project();

  @Input() currentUser;
  @Input() images;
  @Output() destroyProjectEvent = new EventEmitter;
  @Output() updateProjectEvent = new EventEmitter;
  @Output() createProjectEvent = new EventEmitter;
  constructor(
    private _projectService: ProjectService,
  ) { }

  ngOnInit() {
  }
  createProject(project){
    this.createProjectEvent.emit(this.newProject);
    this.newProject = new Project();
  }
  deleteProject(project){
    console.log("delete")
    this.destroyProjectEvent.emit(project);
  }
  updateProject(project){
    this.updateProjectEvent.emit(project);
  }
}
