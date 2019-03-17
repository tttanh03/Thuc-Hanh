import { Component, OnInit } from '@angular/core';
import { ITable } from '../page/table/interfaces/ITable';
import { IUser } from '../page/profile/interface/IUser';
import { UserService } from '../page/profile/service/user.service';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private userSvc: UserService,
    private route:ActivatedRoute
    ) {}
    

  ngOnInit() {
    const id = this.route.snapshot.params.userId
    this.userSvc.getUser(id)
  }

  }
  
  // addTable() {
  //   this.tables.push({
  //     tableName: 'New Table',
  //     tableStatus: 0
  //   })
  // }
  

