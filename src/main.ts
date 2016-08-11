import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from '@angular/http';
import { AppComponent, environment, InstaAPIService } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(
  AppComponent,
  [
    InstaAPIService,
    HTTP_PROVIDERS,
    JSONP_PROVIDERS
  ]
);
