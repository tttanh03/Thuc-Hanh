import { Component, OnInit } from '@angular/core';
import { IMenu } from '../interfaces/IMenu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  menus: IMenu[] = [
    {icon: 'coffee.png', name:'Menu', iconActive: 'coffee-color.png', active: false},
    {icon: 'order.png', name: 'Order', iconActive: 'order-color.png', active: false },
    {icon: 'user.png', name: 'User', iconActive: 'user-color.png', active: false},
  ]
  constructor(private router: Router) {}
  
  ngOnInit() {
  }

  onTapMenu(menu:IMenu) {
    this.menus.forEach(item => {
      item.active = false;
    })
    menu.active = true;
    if (menu.name === 'Menu') {
      this.router.navigate(['/menu'])
    }
    if (menu.name === 'Order') {
      this.router.navigate(['/tables'])
    }
    if (menu.name === 'User') {
      this.router.navigate(['/profile/info'])
    }
  }
}

