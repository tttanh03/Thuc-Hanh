import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { LoginGuard } from 'src/app/services/login-guard.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    }
]
=======
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
    path: '',
    component: LoginComponent

  }]
>>>>>>> 25f351cf77b915fa2f4b1c9006ed6b8e52c6e205

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class AuthRoutingModule { }