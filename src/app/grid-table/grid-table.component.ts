import { Component, OnInit } from '@angular/core';
import { ITable } from '../interfaces/ITable';
import { TableService } from '../services/table.service';


@Component({
  selector: 'app-grid-table',
  templateUrl: './grid-table.component.html',
  styleUrls: ['./grid-table.component.scss']
})
export class GridTableComponent implements OnInit {
  tables: Array<ITable> = [];
  
  constructor (private tableSvc: TableService) {

  }
  ngOnInit() {
    this.tables = this.tableSvc.tables;
  }
}
  
