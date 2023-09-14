import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { validationLoginGuard } from './validation-login.guard';

describe('validationLoginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => validationLoginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
