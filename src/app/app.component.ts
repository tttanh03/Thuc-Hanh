import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
//import { ITable } from './interfaces/ITable';
//import { TableService } from './services/table.service';
import { IFood } from './interfaces/IFood';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnChanges,OnDestroy {
  
  constructor(private menuSvc: MenuService){

  }
  ngOnInit() {
    
  }
  

  ngOnChanges() {
  //   // Se vao day khi thuoc tinh cua component thay doi 
  }

ngOnDestroy() {
  //   // Se vao day khi component bi huy di
  //   console.log('Component Bi Huy')
}

  // check() {
  //   alert(this.title);
  // }
  
  // addTable() {
  //   this.tables.push({
  //     tableName: 'New Table',
  //     tableStatus: 0
  //   })
  // }


}
