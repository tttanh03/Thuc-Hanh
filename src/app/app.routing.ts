import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { LoginGuard } from './services/login-guard.service';
import { AuthGuard } from './services/auth-guard.service';
import { OrderDetailComponent } from './order-detail/order-detail.component';

const routes: Routes = [
  {
    path: 'onboarding',
    loadChildren: './page/onboarding/onboarding.module#OnboardingModule'
  },
  {
    path: 'login',
    canActivate: [LoginGuard],
    loadChildren: './page/auth/auth.module#AuthModule'
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path: 'tables',
        loadChildren: './page/table/table.module#TableModule'
      },
      {
        path: 'menu',
        loadChildren: './page/menu/menu.module#MenuModule'
      },
      {
        path: 'profile',
        loadChildren: './page/profile/profile.module#ProfileModule'
      }
    ]
  },
  {
    path: 'order',
    loadChildren: './order/order.module#OrderModule'
  },
  {
    path: 'vieworder',
    component: OrderDetailComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }