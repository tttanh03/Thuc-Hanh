import { Component, OnInit } from '@angular/core';
import { ITable } from '../interfaces/ITable';

@Component({
  selector: 'app-grid-table',
  templateUrl: './grid-table.component.html',
  styleUrls: ['./grid-table.component.scss']
})
export class GridTableComponent implements OnInit {
  tables: Array<ITable> = [];
  constructor() {
    console.log(this.tables)
  }

  ngOnInit() {
    this.tables = [ {
      tableName: 'Table 1',
      tableStatus: 0
    },
    {
      tableName: 'Table 2',
      tableStatus: 1,
      customerName: 'Mr.An',
      totalOrder: 3
    },
    {
      tableName: 'Table 3',
      tableStatus: 0
    },
    {
      tableName: 'Table 4',
      tableStatus: 2,
      customerName: 'Ms.Nhi',
      totalOrder: 2
    },
    {
      tableName: 'Table 5',
      tableStatus: 3,
      customerName: 'Mr.Loc',
      totalOrder: 3
    },
    {
      tableName: 'Table 6',
      tableStatus: 0
    },
    {
      tableName: 'Table 7',
      tableStatus: 0
    },
    {
      tableName: 'Table 8',
      tableStatus: 1,
      customerName: 'Mr.Dung',
      totalOrder: 2
    }
  ];
    // setTimeout(() => {
    //   this.tables = []
    // }, 3000)
  }

}
