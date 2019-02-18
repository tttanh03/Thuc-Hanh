import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout.component';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
    imports: [
        SharedModule
    ],
    exports: [],
    declarations: [
        HeaderComponent,
        MenuBarComponent,
        PageNotFoundComponent,
        LayoutComponent
    ],
    providers: [],
})
export class LayoutModule { }