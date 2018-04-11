import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.scss']
})
export class ImgListComponent implements OnInit {

  @Input() images;
  @Output() deleteImgEvent = new EventEmitter
  constructor() { }

  ngOnInit() {
  }
  deleteImg(id){
    this.deleteImgEvent.emit(id);
  }

}
