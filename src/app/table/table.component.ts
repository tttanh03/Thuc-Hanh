import { Component, OnDestroy, Input } from '@angular/core'
import { ITable } from '../interfaces/ITable';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['table.component.scss']
}) 
export class TableComponent implements OnDestroy{ 
    @Input() table: ITable= {
        tableName: 'Table',
        tableStatus: 0
    }
    

    order() {
        //this.tableStatus = 1;
    }

    preparing() {
       //this.tableStatus = 2; 
    }
    ready() {
        //this.tableStatus = 3; 
     }
     
    serviced() {
        //this.tableStatus = 0; 
     }
    ngOnDestroy() {
        console.log('Component Table have been destroyed');
    }
}