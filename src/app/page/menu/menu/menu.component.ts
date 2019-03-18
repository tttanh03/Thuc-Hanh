import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { IFood } from 'src/app/interfaces/IFood';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  foods: Array<IFood>;
  @Input() category = 0;
  OriginFoods: Array<IFood>;
  constructor(private menuSvc: MenuService, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.menuSvc.foods.subscribe((newData) => {
      console.log(newData);

      this.foods = newData;
      this.OriginFoods = newData;
    });
    this.menuSvc.getMenus()

  }
  tapOnFood(foods: IFood) {
    this.menuSvc.setCurrentFood(foods.name);
  }


  filterCoffee(index) {
    this.foods = this.OriginFoods;
    switch (index) {
      case 1:
        this.foods = this.foods.filter(x =>
          x.categories ? x.categories[0].id === '5be552923679acff6545fd51' : false);
          break;
      case 2:
        this.foods = this.foods.filter(x =>
          x.categories ? x.categories[0].id === '5be552b33679acff6545fd52' : false);
          break;
      case 3:
        this.foods = this.foods.filter(x =>
          x.categories ? x.categories[0].id === '5be552cc3679acff6545fd53' : false);
          break;
      case 4:
        this.foods = this.foods.filter(x =>
          x.categories ? x.categories[0].id === '5be552d53679acff6545fd54' : false);
          break;
    }
    console.log(this.foods);

  }
}

