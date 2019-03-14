import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BartenderTableComponent } from './bartender-table.component';

describe('BartenderTableComponent', () => {
  let component: BartenderTableComponent;
  let fixture: ComponentFixture<BartenderTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BartenderTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BartenderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
