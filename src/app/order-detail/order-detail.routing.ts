import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderDetailComponent } from './order-detail.component';


const routes: Routes = [
    {
        path: ':tableId',
        component: OrderDetailComponent
      }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class OrderDetailRoutingModule { }