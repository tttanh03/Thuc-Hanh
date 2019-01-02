import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Table'
  
@Output() onAdd:EventEmitter<Boolean> = new EventEmitter ()

  constructor() { }

  ngOnInit() {
  }
add() {
  this.onAdd.emit(true)
}
}
