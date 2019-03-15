import { Component, OnInit, Input } from '@angular/core';
import { ITable } from '../page/table/interfaces/ITable';
import { Router, ActivatedRoute } from '@angular/router';
import { TableService } from '../page/table/services/table.service';

@Component({
  selector: 'app-bartender-table',
  templateUrl: './bartender-table.component.html',
  styleUrls: ['./bartender-table.component.scss']
})
export class BartenderTableComponent implements OnInit {

  tables: Array<ITable> = [];
  @Input() 
  constructor(private tableSvc: TableService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.tableSvc.tables.subscribe((newData) => {
      this.tables = newData;

    });
    this.tableSvc.getTables()

    tapOnTable(table:ITable) {
      this.tableSvc.setCurrentTable(table.tableName);

    }

  }
