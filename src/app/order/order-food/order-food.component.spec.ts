import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderFoodComponent } from './order-food.component';
import { IFood } from 'src/app/interfaces/IFood';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../services/order.service';


describe('OrderFoodComponent', () => {
  let component: OrderFoodComponent;
  let fixture: ComponentFixture<OrderFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFoodComponent ],
      imports: [FormsModule],
      providers: [OrderService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('khong cho phep order am', () => {
    component.orderNumber = 0;
    const food: IFood = {
      id: '',
      categories: [{
        id: '',
        name: ''
      }],
      cover: '',
      name: '',
    }
    component.removeOrder(food);
    expect(component.orderNumber).toBeGreaterThanOrEqual(0)
  })

  it('render ten cua thuc uong la coffee', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('coffee');
  })

});
