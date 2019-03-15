import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BartenderTableComponent } from './bartender-table.component';


const routes: Routes = [
    {
        path: '',
        component: BartenderTableComponent,
        children: [
            
        ]
      }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class BartenderTableRoutingModule { }