import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlinksComponent } from './plinks.component';

describe('PlinksComponent', () => {
  let component: PlinksComponent;
  let fixture: ComponentFixture<PlinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
