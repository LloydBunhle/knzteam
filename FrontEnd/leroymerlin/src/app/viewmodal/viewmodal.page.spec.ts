import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmodalPage } from './viewmodal.page';

describe('ViewmodalPage', () => {
  let component: ViewmodalPage;
  let fixture: ComponentFixture<ViewmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmodalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
