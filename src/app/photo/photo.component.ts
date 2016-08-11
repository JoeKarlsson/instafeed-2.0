import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-photo',
  templateUrl: 'photo.component.html',
  styleUrls: ['photo.component.css']
})
export class PhotoComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
