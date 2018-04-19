import { Component, OnInit,Input } from '@angular/core';
import { header } from "./header";
@Component({
  selector: 'app-pheader',
  templateUrl: './pheader.component.html',
  styleUrls: ['./pheader.component.scss']
})
export class PheaderComponent implements OnInit {

  @Input()  primaryUser;
  constructor() { }

  ngOnInit() {
    new header();
  }

}
