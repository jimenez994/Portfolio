import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-pheader',
  templateUrl: './pheader.component.html',
  styleUrls: ['./pheader.component.scss']
})
export class PheaderComponent implements OnInit {

  @Input()  primaryUser;
  constructor() { }

  ngOnInit() {
  }

}
