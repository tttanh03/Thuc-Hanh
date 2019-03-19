import { Injectable } from '@angular/core';
import { ITable } from '../interfaces/ITable';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer, BehaviorSubject, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { IUser } from '../../profile/interface/IUser';
import { UserService } from '../../profile/service/user.service';
import { ActivatedRoute } from '@angular/router';
@Injectable(
  { providedIn: 'root' }
)
export class TableService {
  private _tables: BehaviorSubject<ITable[]> = new BehaviorSubject([]);
  private _currentTable: BehaviorSubject<String> = new BehaviorSubject<String>('');

  get currentTable() {
    return this._currentTable.asObservable();

  }
  get tables() {
    return this._tables.asObservable();
  }

  constructor(private httpClient: HttpClient,
    private userSvc: UserService,
    private route: ActivatedRoute) {
  }

  addTable() {
  }

  getTables() {
    const url = `tables`
    this.httpClient.get(url).pipe(
      map((response: any) => {
        let data = response.map(x => {
          const table: ITable = {
            id: x.id,
            tableName: x.name,
            customerName: x.customerName,
            tableStatus: x.status,
            totalOrder: x.numberOrder,
            billId: x.billId
          }
          return table;
        })
      //   const id = this.route.snapshot.params.userId
      //   this.userSvc.getCurrentUser(id).subscribe(res => {
      //   if (res.role === "bartender") {
      //     const data = data.filter (x =>
      //       x.tableStatus === 1)
      //       return data
      //   } 
      // })
      return data;
    }))
      .subscribe((data: any[]) => {
        
        this._tables.next(data)

      }, (error) => {
        console.log(error)
      }, () => {
        console.log('completed');
      }
      )
  }

  setCurrentTable(tableName: String) {
    this._currentTable.next(tableName);
  }
  getTable(id: String) {
    return this.httpClient.get('tables/' + id).pipe(
      map((res: any) => {
        let table: ITable = {
          id: res.id,
          tableName: res.name,
          customerName: res.customerName,
          tableStatus: res.status,
          totalOrder: res.numberOrder,
          billId: res.billId,
        }
        return table;
      })
    )
  }
}

