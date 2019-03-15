import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { TableService } from '../page/table/services/table.service';
import { StatusPipe } from '../page/table/pipes/status.pipe';
import { TableComponent } from '../page/table/table/table.component';
import { BartenderTableRoutingModule } from './bartender-table.routing';
import { BartenderFoodComponent } from './bartender-food/bartender-food.component';



@NgModule({
    imports: [
        SharedModule,
        BartenderTableRoutingModule
    ],
    exports: [],
    declarations: [
        TableComponent,
        BartenderFoodComponent,
        StatusPipe

    ],
    providers: [TableService],
})
export class TableModule { }
