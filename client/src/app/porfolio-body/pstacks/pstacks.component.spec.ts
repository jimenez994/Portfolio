import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PstacksComponent } from './pstacks.component';

describe('PstacksComponent', () => {
  let component: PstacksComponent;
  let fixture: ComponentFixture<PstacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PstacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PstacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
