import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { IFood } from '../interfaces/IFood';
import { Observable } from 'rxjs';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  foods: Array<IFood> = [];
  
  constructor(private menuSvc: MenuService,private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.menuSvc.foods.subscribe((newData) => {
      this.foods = newData;
    });
    this.menuSvc.getMenus()
  }
    tapOnFood (foods: IFood) {
   this.menuSvc.setCurrentFood(foods.name);

    }
    // this.menuSvc.foods.subscribe((newFoods) => {
    //   this.foods= newFoods;

    // });
    // this.menuSvc.getMenus()
  }

