import { Component, Input, OnDestroy } from '@angular/core';
import { OrderService } from 'src/app/order/services/order.service';
import { MenuService } from 'src/app/page/menu/services/menu.service';
import { IFood } from 'src/app/interfaces/IFood';


@Component({
  selector: 'app-ordered-food',
  templateUrl: './ordered-food.component.html',
  styleUrls: ['./ordered-food.component.scss']
})
export class OrderedFoodComponent implements OnDestroy {
  @Input() food: IFood = {
    id: '',
    name: 'Coffee',
    price: 1,
    cover: '',
    categories: [{
        id:'',
        name:''
    }],
    orderNumber : 1
}

  constructor(private orderSerivce: OrderService, private menu:MenuService) { }

  ngOnDestroy() {
  }

}
