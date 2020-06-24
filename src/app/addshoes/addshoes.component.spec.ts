import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshoesComponent } from './addshoes.component';

describe('AddshoesComponent', () => {
  let component: AddshoesComponent;
  let fixture: ComponentFixture<AddshoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddshoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddshoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
