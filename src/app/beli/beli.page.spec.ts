import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeliPage } from './beli.page';

describe('BeliPage', () => {
  let component: BeliPage;
  let fixture: ComponentFixture<BeliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeliPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
