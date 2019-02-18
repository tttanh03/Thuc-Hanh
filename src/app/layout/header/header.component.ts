import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TableService } from 'src/app/page/table/services/table.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: String = 'MENU';


  @Output() onAdd: EventEmitter<Boolean> = new EventEmitter()

  constructor(private tableSvc: TableService) {

  }

  ngOnInit() {
    this.tableSvc.currentTable.subscribe(newTitle => {
      this.title = newTitle;
      this.title = newTitle || 'Table'
    })
  }
  add() {
    //this.onAdd.emit(true)
    this.tableSvc.addTable();
  }
}
