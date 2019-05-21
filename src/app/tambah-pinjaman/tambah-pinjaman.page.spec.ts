import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahPinjamanPage } from './tambah-pinjaman.page';

describe('TambahPinjamanPage', () => {
  let component: TambahPinjamanPage;
  let fixture: ComponentFixture<TambahPinjamanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahPinjamanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahPinjamanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
