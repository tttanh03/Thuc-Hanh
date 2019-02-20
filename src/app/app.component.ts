import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnChanges,OnDestroy {
  
  constructor(){

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
