import { Component, OnInit, ViewChild } from '@angular/core';
import { ITable } from '../page/table/interfaces/ITable';
import { IUser } from '../page/profile/interface/IUser';
import { MenuBarComponent } from './menu-bar/menu-bar.component';


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

  @ViewChild(MenuBarComponent) menuBarEl:MenuBarComponent;
  constructor(
    ) {}
    

  ngOnInit() {

  }
public get currentMenuName(){
  const menu = this.menuBarEl.menus.find(x => x.active);
  return menu?menu.name: 'Table';

}
  }
  
  // addTable() {
  //   this.tables.push({
  //     tableName: 'New Table',
  //     tableStatus: 0
  //   })
  // }
  

