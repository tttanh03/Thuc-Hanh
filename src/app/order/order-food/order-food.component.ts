import {Component, OnDestroy, Input} from '@angular/core'
import { IFood } from '../interfaces/IFood';

@Component ({
    selector: 'app-order-food',
    templateUrl: './order-food.component.html',
    styleUrls: ['order-food.component.scss']
})    

export class OrderFoodComponent implements OnDestroy{
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