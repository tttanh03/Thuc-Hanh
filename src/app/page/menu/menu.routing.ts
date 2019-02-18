import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { FoodDetailsComponent } from './food-details/food-details.component';

const routes: Routes = [
    {
        path: '',
        component: MenuComponent,
        children: [
            {
                path: 'detail',
                component: FoodDetailsComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class MenuRoutingModule { }