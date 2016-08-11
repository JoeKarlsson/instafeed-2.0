/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { InstaAPIService } from './insta-api.service';

describe('Service: InstaAPI', () => {
  beforeEach(() => {
    addProviders([InstaAPIService]);
  });

  it('should ...',
    inject([InstaAPIService],
      (service: InstaAPIService) => {
        expect(service).toBeTruthy();
      }));
});
