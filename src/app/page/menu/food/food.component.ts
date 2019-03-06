import {Component, OnDestroy, Input} from '@angular/core';
import { IFood } from 'src/app/interfaces/IFood';
import { Router, ActivatedRoute } from '@angular/router';



@Component ({
    selector: 'app-food',
    templateUrl: './food.component.html',
    styleUrls: ['food.component.scss']
})    

export class FoodComponent implements OnDestroy{
    @Input() food: IFood = {
        id: '',
        name: 'Coffee',
        price: 1,
        cover: '',
        categories: [{
            id:'',
            name:''
        }]
    }
   constructor (private router: Router) {}

    detail(id) {
    this.router.navigate(['menu', id])
   }
   
    
    ngOnDestroy (){
        console.log ('Component has been destroyed')
    }
}
