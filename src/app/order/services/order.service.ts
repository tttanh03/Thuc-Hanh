import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IFood } from '../interfaces/IFood';

@Injectable()
export class OrderService {
    private _totalAmount: BehaviorSubject<Number> = new BehaviorSubject(0);
    get totalAmount() {
        return this._totalAmount.asObservable();
    }

    private _orderFoods: BehaviorSubject<IFood[]> = new BehaviorSubject([]);
    get orderFoods() {
        return this._orderFoods.asObservable();
    }
    constructor() { }

    addOrder(food: IFood, orderNumber: number) {
        let foods = this._orderFoods.getValue();
        // check existed food
        const index = foods.findIndex(o => o.id === food.id); 
        if(index > -1) {
            foods[index].orderNumber = orderNumber;
        } else {
            food.orderNumber = orderNumber;
            foods.push(food);
        }

        //calculate total amount
        let total = 0;
        foods.forEach(f => {
            total = total + (f.price * f.orderNumber)
        })
        this._totalAmount.next(total);
    }

    removeOrder(food: IFood, orderNumber: number) {
        let foods = this._orderFoods.getValue();
        // check existed food
        const index = foods.findIndex(o => o.id === food.id); 
        if(index > -1 && orderNumber > 0) {
            foods[index].orderNumber = orderNumber;
        } else {
            foods.splice(index, 1);
        }

        //calculate total amount
        let total = 0;
        foods.forEach(f => {
            total = total + (f.price * f.orderNumber)
        })
        this._totalAmount.next(total);
    }
}