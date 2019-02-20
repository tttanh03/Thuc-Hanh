import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardingComponent } from './onboarding.component';

const routes: Routes = [{
    path: '',
    component: OnboardingComponent
  }]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class OnboardingRoutingModule { }