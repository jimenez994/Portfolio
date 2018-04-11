import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Link } from '../../server/models/link';

@Component({
  selector: 'app-link-edit',
  templateUrl: './link-edit.component.html',
  styleUrls: ['./link-edit.component.scss']
})
export class LinkEditComponent implements OnInit {

  @Input() images;
  @Input() link;
  @Output() updateLinkEvent = new EventEmitter;
  linkEdit: Link = new Link();
  constructor() { }

  ngOnInit() {
    Object.assign(this.linkEdit, this.link);
  }
  updateLink(){
    this.linkEdit.editable = false;
    this.updateLinkEvent.emit(this.linkEdit);
  }
}
