import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoUnoComponent } from './acceso-uno.component';

describe('AccesoUnoComponent', () => {
  let component: AccesoUnoComponent;
  let fixture: ComponentFixture<AccesoUnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccesoUnoComponent]
    });
    fixture = TestBed.createComponent(AccesoUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
