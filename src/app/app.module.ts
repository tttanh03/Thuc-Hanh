import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app.routing';
import { HeaderInterceptor } from './services/http.interceptor';
import { BartenderTableComponent } from './bartender-table/bartender-table.component';
import { BartenderFoodComponent } from './bartender-table/bartender-food/bartender-food.component';
import { BartenderFoodInfoComponent } from './bartender-table/bartender-food-info/bartender-food-info.component';




@NgModule({
  declarations: [
    AppComponent,
    BartenderTableComponent,
    BartenderFoodComponent,
    BartenderFoodInfoComponent,

    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    AppRoutingModule,
    
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
