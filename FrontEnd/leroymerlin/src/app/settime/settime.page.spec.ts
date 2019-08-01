import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettimePage } from './settime.page';

describe('SettimePage', () => {
  let component: SettimePage;
  let fixture: ComponentFixture<SettimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettimePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
