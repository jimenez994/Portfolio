import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pstacks',
  templateUrl: './pstacks.component.html',
  styleUrls: ['./pstacks.component.scss']
})
export class PstacksComponent implements OnInit {

  @Input() primaryUser;
  constructor() { }

  ngOnInit() {
  }

}
