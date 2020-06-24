import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesdeskComponent } from './shoesdesk.component';

describe('ShoesdeskComponent', () => {
  let component: ShoesdeskComponent;
  let fixture: ComponentFixture<ShoesdeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoesdeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
