import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { validationAuthGuard } from './validation-auth.guard';

describe('validationAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => validationAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
