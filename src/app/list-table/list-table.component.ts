import { Component, OnInit, Input } from '@angular/core';
import { ITable } from '../interfaces/ITable';
import { TableService } from '../services/table.service';
import { Observable } from 'rxjs';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent implements OnInit {
  tables: Array<ITable> = [];
  @Input() displayMode = 0;
  constructor(private tableSvc: TableService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.tableSvc.tables.subscribe((newData) => {
      this.tables = newData;

    });
    this.tableSvc.getTables()
    const viewMode = this.route.snapshot.queryParams.view;
    if (viewMode === 'list') {
      this.displayMode = 1; }
      else {
        this.displayMode = 0;
      }
    }
    tapOnTable(table:ITable) {
      this.tableSvc.setCurrentTable(table.tableName);

    }
    onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
    }
  }
