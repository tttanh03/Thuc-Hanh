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
        id:'',
        tableName: 'Table',
        tableStatus: 0
    }
    constructor(private router: Router) {}
ngOnInit() {}
    order(id) {
        this.router.navigate(['order',id])
    }
    preparing(id) {
        this.router.navigate(['vieworder',id])
    }
    ngOnDestroy() {
        console.log('Component Table have been destroyed');
    }
}