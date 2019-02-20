import { NgModule } from '@angular/core';
import { OnboardingComponent } from './onboarding.component';
import { OnboardingRoutingModule } from './onboarding.routing';


@NgModule({
    imports: [
        OnboardingRoutingModule
    ],
    exports: [],
    declarations: [OnboardingComponent],
    providers: [],
})
export class OnboardingModule { }
