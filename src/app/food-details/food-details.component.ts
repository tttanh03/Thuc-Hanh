import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFood } from 'src/app/interfaces/IFood';
import { MenuService } from '../page/menu/services/menu.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {
  foods: Array<IFood> =[];
  @Input() food: IFood = {
    id: '',
    name: 'Coffee',
    cover: '',
    categories: [{
      id: '',
      name: ''
    }]
  }
  constructor(
    private route: ActivatedRoute,
    private menuSvc: MenuService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.foodId;
    this.menuSvc.getFood(id).subscribe(data => {
      this.foods = data as any;
    });



  }
}