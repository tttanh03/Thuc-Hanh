import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { FoodComponent } from './food/food.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './services/menu.service';

@NgModule({
    imports: [
        SharedModule
    ],
    exports: [],
    declarations: [
        FoodComponent,
        FoodDetailsComponent,
        MenuComponent

    ],
    providers: [
        MenuService
    ],
})
export class MenuModule { }
