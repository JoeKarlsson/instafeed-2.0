import { Component } from '@angular/core';
import { PhotoListComponent } from './photo-list';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [PhotoListComponent]
})
export class AppComponent {
  title = 'Angular 2 Instafeed';
}
