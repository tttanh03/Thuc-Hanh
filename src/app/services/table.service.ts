import { Injectable } from '@angular/core';
import { ITable } from '../interfaces/ITable';

@Injectable()
export class TableService {
    tables: ITable[] = [
        {
        tableName: 'TAB.01',
        tableStatus: 0
      },
      {
        tableName: 'TAB.02',
        tableStatus: 1,
        customerName: 'Mr.An',
        totalOrder: 3
      },
      {
        tableName: 'TAB.03',
        tableStatus: 0
      },
      {
        tableName: 'TAB.04',
        tableStatus: 2,
        customerName: 'Ms.Nhi',
        totalOrder: 2
      },
      {
        tableName: 'TAB.05',
        tableStatus: 3,
        customerName: 'Mr.Loc',
        totalOrder: 3
      },
      {
        tableName: 'TAB.06',
        tableStatus: 0
      },
      {
        tableName: 'TAB.07',
        tableStatus: 0
      },
      {
        tableName: 'TAB.08',
        tableStatus: 1,
        customerName: 'Mr.Dung',
        totalOrder: 2
        
      } 
      
    ];

    addTable() {
        this.tables.push({
          tableName: 'New Table',
          tableStatus: 0
        })
    
}

}