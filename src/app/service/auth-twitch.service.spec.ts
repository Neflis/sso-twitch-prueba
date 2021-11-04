import { TestBed } from '@angular/core/testing';

import { AuthTwitchService } from './auth-twitch.service';

describe('AuthTwitchService', () => {
  let service: AuthTwitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthTwitchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
