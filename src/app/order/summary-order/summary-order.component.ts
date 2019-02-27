import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { IFood } from 'src/app/interfaces/IFood';


@Component({
  selector: 'app-summary-order',
  templateUrl: './summary-order.component.html',
  styleUrls: ['./summary-order.component.scss']
})
export class SummaryOrderComponent implements OnInit {

  totalAmount: Number = 0;
  orderFoods: IFood[];
  showPopup: false;
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.totalAmount.subscribe(data => {
      this.totalAmount = data;
    })
    this.orderService.orderFoods.subscribe(data => {
      this.orderFoods = data;
    })
  }

}
