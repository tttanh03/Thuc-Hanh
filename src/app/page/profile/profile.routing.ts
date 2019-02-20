import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { InfoComponent } from './info/info.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        children: [
<<<<<<< HEAD
            {
                path: 'info',
                component: InfoComponent
            },
            {
                path: 'schedule',
                component: ScheduleComponent
            }
        ]
    }
=======
          {
            path: 'info',
            component: InfoComponent
          },
          {
            path: 'schedule',
            component: ScheduleComponent
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
export class ProfileRoutingModule { }