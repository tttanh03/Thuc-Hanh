import { Component, OnInit } from '@angular/core';
import { MenuService } from '../page/menu/services/menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IFood } from '../interfaces/IFood';
import { ITable } from '../page/table/interfaces/ITable';
import { OrderService } from './services/order.service';
import { TableService } from '../page/table/services/table.service';
import { BillService } from './services/bill.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  foods: Array<IFood> = [];
  orderFoods: Array<IFood> =[];
  table: ITable;
  customer:String;
  
  constructor(private menuSvc: MenuService,
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    private billService: BillService,
    private tableSvc: TableService) {
  }
  ngOnInit() {
    this.menuSvc.foods.subscribe((newData) => {
      this.foods = newData;
      const id = this.route.snapshot.params.tableId;
      this.tableSvc.getTable(id).subscribe(data => {
        this.table = data;
        const billId = this.table.billId
        if(billId) {
          this.billService.getBill(billId).subscribe(data => {
            this.customer = data.customer;
            this.foods.map(f => {
              const orderFood = data.details.find(x => x.id === f.id)
              if(orderFood) {
                f.orderNumber = orderFood.orderNumber
              } else {
                f.orderNumber = 0;
              }
            })
          })
        }
      })
    });
    
    this.menuSvc.getMenus()
    this.orderService.orderFoods.subscribe(data => {
      this.orderFoods = data;
    })


   
  }


  order() {
    if(this.table.tableStatus) {
      this.orderService.updateBill(this.table.billId, this.table.id ,this.customer, this.orderFoods).subscribe((data: any) => {
        this.router.navigate(['vieworder', data.id])
      })
    } else {
      this.orderService.createBill(this.table.id, this.customer, this.orderFoods).subscribe((data: any) => {
        this.router.navigate(['vieworder', data.id])
      })
      
    }
   
  }
}
