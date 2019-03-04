import { Component, OnDestroy, Input, OnInit } from '@angular/core'
import { ITable } from '../interfaces/ITable';
import { Router } from '@angular/router';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['table.component.scss']
}) 
export class TableComponent implements OnDestroy, OnInit{ 
    @Input() table: ITable= {
        tableName: 'Table',
        tableStatus: 0
    }
    constructor(private router: Router) {}
ngOnInit() {}
    order() {
        //this.tableStatus = 1;
        this.router.navigate(['/order'])
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