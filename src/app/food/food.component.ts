import {Component, OnDestroy, Input} from '@angular/core'
import { IFood } from '../interfaces/IFood';

@Component ({
    selector: 'app-food',
    templateUrl: './food.component.html',
    styleUrls: ['food.component.scss']
})    

export class FoodComponent implements OnDestroy{
    @Input() food: IFood = {
        id: '',
        name: 'Coffee',
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
