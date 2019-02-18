import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from 'src/app/services/login-guard.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class AuthRoutingModule { }