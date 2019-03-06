import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { MenuService } from '../page/menu/services/menu.service';
import { FormsModule } from '@angular/forms';
import { OrderDetailRoutingModule } from './order-detail.routing';
import { OrderService } from '../order/services/order.service';
import { OrderDetailComponent } from './order-detail.component';
import { OrderedFoodComponent } from './ordered-food/ordered-food.component';
import { TableService } from '../page/table/services/table.service';


@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        OrderDetailRoutingModule
    ],
    exports: [
        
    ],
    declarations: [
        OrderDetailComponent,
        OrderedFoodComponent
        ],
    providers: [MenuService, OrderService, TableService],
})
export class OrderDetailModule { }
