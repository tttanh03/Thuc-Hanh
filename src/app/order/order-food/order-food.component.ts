import {Component, OnDestroy, Input} from '@angular/core'
import { OrderService } from '../services/order.service';
import { IFood } from 'src/app/interfaces/IFood';

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
    orderNumber: number = 0;
    
    constructor( private orderSerivce: OrderService) {
    }

    ngOnDestroy (){
        console.log ('Component has been destroyed')
    }

    removeOrder(food: IFood) {
        if(this.orderNumber === 0){
            this.orderSerivce.removeOrder(food, 0);
            return;
        }
        this.orderNumber--;
        this.orderSerivce.removeOrder(food, this.orderNumber);
    }

    addOrder(food: IFood) {
        this.orderNumber++;
        this.orderSerivce.addOrder(food, this.orderNumber);
    }
}