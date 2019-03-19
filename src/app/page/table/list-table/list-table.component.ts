import { Component, OnInit, Input } from '@angular/core';
import { ITable } from '../interfaces/ITable';
import { TableService } from '../services/table.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router'
import { UserService } from '../../profile/service/user.service';
import { IUser } from '../../profile/interface/IUser';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent implements OnInit {
  tables: Array<ITable> = [];
  filledTable: Array<ITable> = [];
  @Input() displayMode = 0;

  constructor(private tableSvc: TableService, private route: ActivatedRoute, private userSvc: UserService) {
    this.tableSvc.tables.subscribe((newData) => {
      this.tables = newData;
      const id = this.route.snapshot.params.userId
      this.userSvc.getCurrentUser(id).subscribe(data => {
        if (data.role === "bartender") {
          this.filledTable = this.tables.filter(x =>
            x.tableStatus === 1)
        } else {
          this.filledTable = this.tables;
        }

      })
    });
  }
  ngOnInit() {
    
    this.tableSvc.getTables()

    const viewMode = this.route.snapshot.queryParams.view;
    if (viewMode === 'list') {
      this.displayMode = 1;
    }
    else {
      this.displayMode = 0;
    }
  }
  tapOnTable(table: ITable) {
    this.tableSvc.setCurrentTable(table.tableName);

  }
  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }
}
