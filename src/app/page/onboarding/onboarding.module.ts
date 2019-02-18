import { NgModule } from '@angular/core';
import { OnboardingComponent } from './onboarding.component';
import { OnBoardingRoutingModule } from './onboarding.routing';


@NgModule({
    imports: [
        OnBoardingRoutingModule
    ],
    exports: [],
    declarations: [OnboardingComponent],
    providers: [],
})
export class OnboardingModule { }
