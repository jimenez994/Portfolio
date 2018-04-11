import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../server/models/user';

@Component({
  selector: 'app-other-edit',
  templateUrl: './other-edit.component.html',
  styleUrls: ['./other-edit.component.scss']
})
export class OtherEditComponent implements OnInit {

  @Input() currentUser: User;
  @Input() images;
  @Output() updateUserEvent = new EventEmitter()
  userEdit: User = new User();
  constructor() { }

  ngOnInit() {
    Object.assign(this.userEdit, this.currentUser);
  }
  update() {
    this.userEdit.canEditOther = false;
    console.log(this.userEdit);
    this.updateUserEvent.emit(this.userEdit);
  }

}
