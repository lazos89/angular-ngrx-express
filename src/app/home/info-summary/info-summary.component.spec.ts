import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSummaryComponent } from './info-summary.component';

describe('InfoSummaryComponent', () => {
  let component: InfoSummaryComponent;
  let fixture: ComponentFixture<InfoSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
