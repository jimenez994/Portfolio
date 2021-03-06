import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../../server/models/user';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  @Input() currentUser;
  @Input() images;
  @Output() updateUserEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  update(user: User){
    this.updateUserEvent.emit(user);
  }

}
