import { Component, OnInit } from '@angular/core';
import { IFood } from '../interfaces/IFood';
import { OrderService } from '../order/services/order.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ITable } from '../page/table/interfaces/ITable';
import { BillService } from '../order/services/bill.service';
import { UserService } from '../page/profile/service/user.service';
import { IUser } from '../page/profile/interface/IUser';


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  orderFoods: Array<IFood> = [];
  table: ITable;
  user: IUser;
  isAdmin: Boolean = false;
  constructor(private orderService: OrderService,
    private location: Location,
    private billService: BillService,
    private router: Router,
    private route: ActivatedRoute,
    private userSvc: UserService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.billId
    this.billService.getBill(id).subscribe(data => {
      this.orderFoods = data.details as any;
      this.table = data.table;
    })
    const userId = this.route.snapshot.params.userId
    this.userSvc.getCurrentUser(userId).subscribe(res => {
      this.user = res;
      
      if(this.user.role === 'admin') {

        this.isAdmin = true;
      }
    })
  }

  goBack() {
    this.location.back();
  }
  goTables() {
    this.router.navigate(['tables'])
  }
  editOrder(id) {
    const billId = this.route.snapshot.params.billId
    this.router.navigate([`order/${id}`, { billId: billId }])
  }

  done() {
    const id = this.route.snapshot.params.billId
    this.orderService.updateBill(id, this.table.id, this.table.customerName, this.orderFoods, 4).subscribe(data => {
      this.router.navigate(['/tables']);
    });
  }
  updateStatus() {
    const id = this.route.snapshot.params.billId
    this.orderService.updateBill(id, this.table.id, this.table.customerName, this.orderFoods, 2).subscribe(data => {
      this.router.navigate(['/tables']);
    });
  }

}
