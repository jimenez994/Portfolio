import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Link } from '../../server/models/link';
import { LinkService } from '../../server/controllers/link.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  newLink = new Link()

  @Input() currentUser;
  @Input() images;
  @Output() createLinkEvent = new EventEmitter;
  @Output() destroyLinkEvent = new EventEmitter;
  @Output() updateLinkEvent = new EventEmitter;
  constructor(
    private _linkServer: LinkService
  ) { }

  ngOnInit() {
  }
  createLink(link){
    this.createLinkEvent.emit(this.newLink);
    this.newLink = new Link();
  }
  deleteLink(link){
    this.destroyLinkEvent.emit(link);
  }
  updateLink(link){
    this.updateLinkEvent.emit(link);
  }
}
