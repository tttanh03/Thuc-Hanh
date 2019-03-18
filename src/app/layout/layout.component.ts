import { Component, OnInit } from '@angular/core';
import { ITable } from '../page/table/interfaces/ITable';
import { IUser } from '../page/profile/interface/IUser';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  title = 'angulark08';
  tables: Array<ITable> = [];
  displayMode: number = 0;
  user: IUser[];
  constructor(
    ) {}
    

  ngOnInit() {

  }

  }
  
  // addTable() {
  //   this.tables.push({
  //     tableName: 'New Table',
  //     tableStatus: 0
  //   })
  // }
  

