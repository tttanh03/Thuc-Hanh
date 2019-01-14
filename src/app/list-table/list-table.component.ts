import { Component, OnInit, Input } from '@angular/core';
import { ITable } from '../interfaces/ITable';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent implements OnInit {
  tables: Array<ITable> = [];
  @Input() displayMode = 0;
  constructor(private tableSvc: TableService) {
  }
  ngOnInit() {
    this.tableSvc.tables.subscribe((newTables) => {
      this.tables = newTables;

    });
    this.tableSvc.getTables()
  }
}