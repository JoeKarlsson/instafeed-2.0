import { Component, OnInit } from '@angular/core';
import { PhotoComponent } from '../photo';
import { InstaAPIService } from '../insta-api.service';

@Component({
  moduleId: module.id,
  selector: 'app-photo-list',
  templateUrl: 'photo-list.component.html',
  styleUrls: ['photo-list.component.css'],
  directives: [PhotoComponent],
})

export class PhotoListComponent implements OnInit {
  private errorMessage: string;
  public photos: Array<any>;
  private instaAPI: InstaAPIService;
  private grid: Boolean;

  constructor( instaAPI: InstaAPIService) {
    this.instaAPI = instaAPI
  }

  onSetGrid(e) {
    this.grid = true;
    console.log('this.grid: ', this.grid);
  }

  onSetList(e) {
    this.grid = false;
    console.log('this.grid: ', this.grid);
  }

  ngOnInit() {
    this.grid = true;
    this.getInstaPhotos();
  }

  getInstaPhotos() {
    this.instaAPI.getPhotos()
    .subscribe(
      photos => this.photos = photos,
      error =>  this.errorMessage = <any>error
    );
  }

}
