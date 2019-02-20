import { NgModule } from '@angular/core';

import { OrderComponent } from './order.component';
import { OrderRoutingModule } from './order.routing';
import { SharedModule } from 'src/shared/shared.module';
import { OrderFoodComponent } from './order-food/order-food.component';
import { MenuService } from '../page/menu/services/menu.service';

@NgModule({
    imports: [
        SharedModule,
        OrderRoutingModule
    ],
    exports: [
        
    ],
    declarations: [
        OrderFoodComponent,
        OrderComponent],
    providers: [MenuService],
})
export class OrderModule { }
