import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {

  @Input() images;
  @Input() currentUser;
  @Output() updateUserEvent = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }
  update(user){
    this.updateUserEvent.emit(user);
  }

}
