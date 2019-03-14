import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BartenderFoodInfoComponent } from './bartender-food-info.component';

describe('BartenderFoodInfoComponent', () => {
  let component: BartenderFoodInfoComponent;
  let fixture: ComponentFixture<BartenderFoodInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BartenderFoodInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BartenderFoodInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
