import { Component, OnInit, Output } from '@angular/core';
import { IMenu } from '../interfaces/IMenu';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/page/profile/service/user.service';
import { IUser } from 'src/app/page/profile/interface/IUser';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  
  user:IUser;
  menus: IMenu[] = [
    {icon: 'coffee.png', name:'Menu', iconActive: 'coffee-color.png', active: false},
    {icon: 'order.png', name: 'Table', iconActive: 'order-color.png', active: false },
    {icon: 'user.png', name: 'User', iconActive: 'user-color.png', active: false},
  ]

  constructor(private router: Router,
    private userSvc: UserService,
    private route: ActivatedRoute) {}
  
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
    if (menu.name === 'Table') {
      this.router.navigate(['/tables'])
    }
    if (menu.name === 'User') {
      const id = this.route.snapshot.params.userId
      this.userSvc.getCurrentUser(id).subscribe(data => {
        this.user = data
        console.log (data)
        this.router.navigate(['/profile/info'])
      })

    }
  }
}

