import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTableComponent } from './list-table/list-table.component';


const routes: Routes = [
    {
        path: '',
        component: ListTableComponent,
        children: [
            
        ]
      }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class TableRoutingModule { }