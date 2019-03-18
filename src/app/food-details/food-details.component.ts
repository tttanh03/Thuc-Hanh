import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFood } from 'src/app/interfaces/IFood';
import { MenuService } from '../page/menu/services/menu.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {

  @Input() food: IFood = {
    id: '',
    name: '',
    cover: '',
    categories: [{
      id: '',
      name: ''
    }]
  }
  constructor(
    private route: ActivatedRoute,
    private menuSvc: MenuService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.foodId;
    this.menuSvc.getFood(id).subscribe(data => {
      console.log(data);
      this.food = data;
    });

  }
  goBack() {
    this.location.back();
  }
}
