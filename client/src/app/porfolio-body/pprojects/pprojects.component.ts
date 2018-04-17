import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-pprojects',
  templateUrl: './pprojects.component.html',
  styleUrls: ['./pprojects.component.scss']
})
export class PprojectsComponent implements OnInit {
  @Input() primaryUser;
  constructor() { }

  ngOnInit() {
  }

}
