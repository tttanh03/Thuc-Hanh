import { Component, OnInit } from '@angular/core';
import { MenuService } from '../page/menu/services/menu.service';
import { ActivatedRoute } from '@angular/router';
import { IFood } from './interfaces/IFood';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  foods: Array<IFood> = [];
  
  constructor(private menuSvc: MenuService,private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.menuSvc.foods.subscribe((newData) => {
      this.foods = newData;
    });
    this.menuSvc.getMenus()
  }



}
