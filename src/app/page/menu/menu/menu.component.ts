import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../services/menu.service';

import { Observable } from 'rxjs';
import { ActivatedRoute} from '@angular/router';
import { IFood } from 'src/app/interfaces/IFood';

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
   this.menuSvc.setCurrentFood(foods.name);}

   filterCoffee () {}
//    const result = this.foods.filter (x => {
//     return x.categories ? x.categories.name === "5be552923679acff6545fd51" : false
//   })
//   console.log(result);
// }

    
    // this.menuSvc.foods.subscribe((newFoods) => {
    //   this.foods= newFoods;

    // });
    // this.menuSvc.getMenus()
  }

