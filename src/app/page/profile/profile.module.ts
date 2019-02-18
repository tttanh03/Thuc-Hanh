import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { InfoComponent } from './info/info.component';




@NgModule({
    imports: [
        SharedModule
    ],
    exports: [],
    declarations: [
        ProfileComponent,
        ScheduleComponent,
        InfoComponent

    ],
    providers: [],
})
export class ProfileModule { }
