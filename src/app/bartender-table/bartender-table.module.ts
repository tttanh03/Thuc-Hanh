import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { TableComponent } from './table/table.component';
import { ListTableComponent } from './list-table/list-table.component';
import { TableService } from './services/table.service';
import { StatusPipe } from './pipes/status.pipe';
import { TableRoutingModule } from './table.routing';

@NgModule({
    imports: [
        SharedModule,
        TableRoutingModule
    ],
    exports: [],
    declarations: [
        TableComponent,
        ListTableComponent,
        StatusPipe

    ],
    providers: [TableService],
})
export class TableModule { }
