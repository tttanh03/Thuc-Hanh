import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { FoodComponent } from './food/food.component';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './services/menu.service';
import { MenuRoutingModule } from './menu.routing';

@NgModule({
    imports: [
        SharedModule,
        MenuRoutingModule
    ],
    exports: [],
    declarations: [
        FoodComponent,
        MenuComponent

    ],
    providers: [
        MenuService
    ],
})
export class MenuModule { }
