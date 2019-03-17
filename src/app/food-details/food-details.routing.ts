import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodDetailsComponent } from './food-details.component';


const routes: Routes = [
    {
        path: ':foodId',
        component: FoodDetailsComponent
      }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class FoodDetailsRoutingModule { }