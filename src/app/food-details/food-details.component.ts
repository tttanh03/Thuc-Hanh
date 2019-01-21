import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../services/menu.service';
import { IFood } from '../interfaces/IFood';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {
  @Input() food: IFood = {
    id: '',
        name: 'Coffee',
        cover: 'https://tucsonfoodie.com/wp-content/uploads/2018/09/pexels-photo-302899-600x400.jpeg',
        categories: [{
            id:'',
            name:''
        }]}
  constructor(private route: ActivatedRoute, private foodService: MenuService) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id
    //this.foodService.getFood(id).subscribe.
  }

}
