import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from './page/table/table.module';
import { MenuModule } from './page/menu/menu.module';
import { ProfileModule } from './page/profile/profile.module';
import { OnboardingModule } from './page/onboarding/onboarding.module';
import { AuthModule } from './page/auth/auth.module';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    MenuModule,
    ProfileModule,
    OnboardingModule,
    AuthModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
