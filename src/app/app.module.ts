import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { StatusPipe } from './pipes/status.pipe';
import { FoodComponent } from './food/food.component';
import { ListTableComponent } from './list-table/list-table.component';
import { TableService } from './services/table.service';
import { HttpClientModule } from '@angular/common/http';
import { MenuService } from './services/menu.service';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthService } from './services/auth.service';
import { OnboardingComponent } from './onboarding/onboarding.component';

@NgModule({
  declarations: [
    TableComponent,
    AppComponent,
    HeaderComponent,
    MenuBarComponent,
    StatusPipe,
    FoodComponent,
    ListTableComponent,
    MenuComponent,
    ProfileComponent,
    PageNotFoundComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    FoodDetailsComponent,
    LoginComponent,
    LayoutComponent,
    OnboardingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'onboarding',
        component: OnboardingComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: '',
            component: ListTableComponent
          },
          {
            path: 'menu',
            component: MenuComponent
            
          },
          {
            path: 'profile',
            component: ProfileComponent,
            children: [
              {
                path: 'menu1',
                component: Demo1Component
              },
              {
                path: 'menu2',
                component: Demo2Component
              },
              {
                path: 'menu3',
                component: Demo3Component
              }
            ]


          },
          {
            path: 'detail',
            component: FoodDetailsComponent
          },
          {
            path: '**',
            component: PageNotFoundComponent
          }


        ]
      }

    ])
  ],
  providers: [
    TableService,
    MenuService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
