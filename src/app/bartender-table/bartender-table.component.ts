import { Component, OnInit, Input } from '@angular/core';
import { ITable } from '../page/table/interfaces/ITable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bartender-table',
  templateUrl: './bartender-table.component.html',
  styleUrls: ['./bartender-table.component.scss']
})
export class BartenderTableComponent implements OnInit {

  @Input() table: ITable= {
    id:'',
    tableName: 'Table',
    tableStatus: 0
}
constructor(private router: Router) {}
ngOnInit() {}

openBill(id) {
    this.router.navigate(['vieworder',id])
}
ngOnDestroy() {
    console.log('Component Table have been destroyed');
}
}

