import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from 'src/shared/shared.module';



@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [],
    declarations: [
        LoginComponent
    ],
    providers: [
        LoginComponent
    ],
})
export class AuthModule { }