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

  constructor( instaAPI: InstaAPIService) {
console.log('InstaAPIService: ', InstaAPIService);
    this.instaAPI = instaAPI
  }

  ngOnInit() {
    // this.photos = [{name: 'Joe'}, {name:'Jon'}, {name:'Ray'}];
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
