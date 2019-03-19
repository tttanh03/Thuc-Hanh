import { Component, OnDestroy, Input, OnInit } from '@angular/core'
import { ITable } from '../interfaces/ITable';
import { Router } from '@angular/router';
import { IUser } from '../../profile/interface/IUser';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['table.component.scss']
}) 
export class TableComponent implements OnDestroy, OnInit{ 
    @Input() user: IUser;
    @Input() table: ITable= {
        id:'',
        tableName: 'Table',
        tableStatus: 0
    }
    constructor(private router: Router) {
        
    }
ngOnInit() {}
    order(id) {
        this.router.navigate(['order',id])
    }
    openBill(id) {
        this.router.navigate(['vieworder',id])
    }
    ngOnDestroy() {
        console.log('Component Table have been destroyed');
    }
}