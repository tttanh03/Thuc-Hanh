import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedFoodComponent } from './ordered-food.component';

describe('OrderedFoodComponent', () => {
  let component: OrderedFoodComponent;
  let fixture: ComponentFixture<OrderedFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderedFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderedFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
