import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pabout-me',
  templateUrl: './pabout-me.component.html',
  styleUrls: ['./pabout-me.component.scss']
})
export class PaboutMeComponent implements OnInit {

  @Input() primaryUser;
  constructor() { }

  ngOnInit() {
  }

}
