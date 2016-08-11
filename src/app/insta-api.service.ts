import { Injectable } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { PhotoListComponent } from './photo-list';
import { CONFIG } from './instaConfig';

@Injectable()
export class InstaAPIService {

  private user_id: string = CONFIG.USER_ID;
  private access_token: string = CONFIG.ACCESS_TOKEN;

  constructor (private jsonp: Jsonp) {}

  private instaURL: string = 'https://api.instagram.com/' +
    'v1/users/' + this.user_id +
    '/media/recent/' +
    '?count=99' +
    '&callback=JSONP_CALLBACK' +
    '&access_token=' + this.access_token;

  getPhotos(): Observable<any> {
    console.log('CONFIG: ', CONFIG);
    return this.jsonp.get(this.instaURL)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
