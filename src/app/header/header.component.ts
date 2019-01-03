import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Table';
  
  
@Output() onAdd:EventEmitter<Boolean> = new EventEmitter ()

  constructor(private tableSvc: TableService) {

  }

  ngOnInit() {
  }
add() {
  //this.onAdd.emit(true)
  this.tableSvc.addTable();
}
}
