import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { FoodDetailsComponent } from './food-details/food-details.component';

const routes: Routes = [
    {
        path: '',
        component: MenuComponent,
        children: [
<<<<<<< HEAD
            {
                path: 'detail',
                component: FoodDetailsComponent
            }
        ]
    }
=======
          {
            path: 'detail',
            component: FoodDetailsComponent
          }
        ]
      }
>>>>>>> 25f351cf77b915fa2f4b1c9006ed6b8e52c6e205
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class MenuRoutingModule { }