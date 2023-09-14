import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoDosComponent } from './acceso-dos.component';

describe('AccesoDosComponent', () => {
  let component: AccesoDosComponent;
  let fixture: ComponentFixture<AccesoDosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccesoDosComponent]
    });
    fixture = TestBed.createComponent(AccesoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
