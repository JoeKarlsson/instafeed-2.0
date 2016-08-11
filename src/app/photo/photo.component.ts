import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-photo',
  templateUrl: 'photo.component.html',
  styleUrls: ['photo.component.css']
})
export class PhotoComponent implements OnInit {

  @Input() link:string;
  @Input() caption:string;
  @Input() thumbnail:string;

  constructor() { }

  ngOnInit() {
  }

}
