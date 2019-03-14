import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BartenderFoodComponent } from './bartender-food.component';

describe('BartenderFoodComponent', () => {
  let component: BartenderFoodComponent;
  let fixture: ComponentFixture<BartenderFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BartenderFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BartenderFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
