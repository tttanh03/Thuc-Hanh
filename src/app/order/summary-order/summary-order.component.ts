import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { OrderService } from '../services/order.service';
import { IFood } from 'src/app/interfaces/IFood';
import { Router, ActivatedRoute } from '@angular/router';
import { ITable } from 'src/app/page/table/interfaces/ITable';
import { TableService } from 'src/app/page/table/services/table.service';


@Component({
  selector: 'app-summary-order',
  templateUrl: './summary-order.component.html',
  styleUrls: ['./summary-order.component.scss']
})
export class SummaryOrderComponent implements OnInit {

  totalAmount: Number = 0;
  orderFoods: IFood[];
  showPopup: Boolean = false;
  note: String;
  table:ITable;

  @Output () onOrder = new EventEmitter();
  constructor(private orderService: OrderService,
    private router: Router,
    private tableSvc: TableService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.orderService.totalAmount.subscribe(data => {
      this.totalAmount = data;
    })
    this.orderService.orderFoods.subscribe(data => {
      this.orderFoods = data;
    })
    const id = this.route.snapshot.params.tableId;
    this.tableSvc.getTable(id).subscribe(data => {
      this.table = data;
    })
  }
  orderfood(id) {
    //this.tableStatus = 1;
    this.onOrder.emit();
    
  }
}
