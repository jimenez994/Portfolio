import { Component, OnInit } from '@angular/core';
import { bla } from './bla';
declare var summary: any;



@Component({
  selector: 'app-plinks',
  templateUrl: './plinks.component.html',
  styleUrls: ['./plinks.component.scss']
})

export class PlinksComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    new bla();
  }

}
