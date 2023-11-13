/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LogsService } from './logs.service';

describe('Service: Logs', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogsService]
    });
  });

  it('should ...', inject([LogsService], (service: LogsService) => {
    expect(service).toBeTruthy();
  }));
});
