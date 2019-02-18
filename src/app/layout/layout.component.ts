import { Component, OnInit } from '@angular/core';
import { ITable } from '../page/table/interfaces/ITable';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  title = 'angulark08';
  tables: Array<ITable> = [];
  displayMode: number = 0;
  constructor() { }

  ngOnInit() {
  }
  check() {
    alert(this.title);
  }
  
  addTable() {
    this.tables.push({
      tableName: 'New Table',
      tableStatus: 0
    })
  }
  
}
