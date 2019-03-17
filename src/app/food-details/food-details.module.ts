import { NgModule } from '@angular/core';
import { FoodDetailsComponent } from './food-details.component';
import { SharedModule } from 'src/shared/shared.module';
import { FoodDetailsRoutingModule } from './food-details.routing';
import { MenuService } from '../page/menu/services/menu.service';

@NgModule({
    imports: [SharedModule,
    FoodDetailsRoutingModule],

    exports: [],
    declarations:  [FoodDetailsComponent],
    providers: [MenuService],
})
export class FoodDetailsModule { }
