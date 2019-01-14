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

@NgModule({
  declarations: [
    TableComponent,
    AppComponent,
    HeaderComponent,
    MenuBarComponent,
    StatusPipe,
    FoodComponent,
    ListTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
