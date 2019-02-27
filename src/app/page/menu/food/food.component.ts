import {Component, OnDestroy, Input} from '@angular/core';
import { IFood } from 'src/app/interfaces/IFood';



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
   
   
    
    ngOnDestroy (){
        console.log ('Component has been destroyed')
    }
}
