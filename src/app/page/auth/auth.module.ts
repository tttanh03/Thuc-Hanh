import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from 'src/shared/shared.module';
import { AuthService } from './services/auth.service';
import { AuthRoutingModule } from './auth.routing';



@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        AuthRoutingModule
    ],
    exports: [],
    declarations: [
        LoginComponent
    ],
    providers: [
        AuthService
    ],
})
export class AuthModule { }