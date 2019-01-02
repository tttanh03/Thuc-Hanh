import { Component, OnInit } from '@angular/core';
import { IMenu } from '../interfaces/IMenu';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  menus: IMenu[] = [
    {icon: 'coffee.png', iconActive: 'coffee-color.png', active: false},
    {icon: 'order.png', name: 'Order', iconActive: 'order-color.png', active: false },
    {icon: 'user.png', name: 'User', iconActive: 'user-color.png', active: false},
  ]
  constructor() { }
  
  ngOnInit() {
  }

  onTapMenu(menu) {
    this.menus.forEach(item => {
      item.active = false;
    })
    menu.active = true;
  }
}

