import { NgModule } from '@angular/core';

import { OrderComponent } from './order.component';
import { OrderRoutingModule } from './order.routing';
import { SharedModule } from 'src/shared/shared.module';
import { OrderFoodComponent } from './order-food/order-food.component';
import { MenuService } from '../page/menu/services/menu.service';
import { SummaryOrderComponent } from './summary-order/summary-order.component';
import { FormsModule } from '@angular/forms';
import { OrderService } from './services/order.service';

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        OrderRoutingModule
    ],
    exports: [
        
    ],
    declarations: [
        OrderFoodComponent,
        OrderComponent,
        SummaryOrderComponent],
    providers: [MenuService, OrderService],
})
export class OrderModule { }
