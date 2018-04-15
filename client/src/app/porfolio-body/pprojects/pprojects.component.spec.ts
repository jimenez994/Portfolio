import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PprojectsComponent } from './pprojects.component';

describe('PprojectsComponent', () => {
  let component: PprojectsComponent;
  let fixture: ComponentFixture<PprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
