import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherEditComponent } from './other-edit.component';

describe('OtherEditComponent', () => {
  let component: OtherEditComponent;
  let fixture: ComponentFixture<OtherEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
