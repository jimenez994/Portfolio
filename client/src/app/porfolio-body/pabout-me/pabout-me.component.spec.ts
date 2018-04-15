import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaboutMeComponent } from './pabout-me.component';

describe('PaboutMeComponent', () => {
  let component: PaboutMeComponent;
  let fixture: ComponentFixture<PaboutMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaboutMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
