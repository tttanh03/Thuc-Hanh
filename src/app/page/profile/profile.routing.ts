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
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class ProfileRoutingModule { }