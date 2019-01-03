import { Component, OnInit } from '@angular/core';
import { ITable } from '../interfaces/ITable';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent implements OnInit {
  tables: Array<ITable> = [];
constructor (private tableSvc: TableService) {

}
ngOnInit() {
  this.tables = this.tableSvc.tables;
}
}