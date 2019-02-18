import { Injectable } from '@angular/core';
import { ITable } from '../interfaces/ITable';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer, BehaviorSubject, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TableService {
  private _tables: BehaviorSubject<ITable[]> = new BehaviorSubject([]);
  private _currentTable: BehaviorSubject<String> = new BehaviorSubject<String>('');

  get currentTable() {
    return this._currentTable.asObservable();

  }
  get tables() {
    return this._tables.asObservable();
  }

  constructor(private httpClient: HttpClient) {
  }

  addTable() {
    // this.tables.push({
    //   tableName: 'New Table',
    //   tableStatus: 0
    // })
  }

  getTables() {
    const url = `http://lexuanquynh.com:8080/tables?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZTU0ZmEwMzY3OWFjZmY2NTQ1ZmQ0YSIsImlhdCI6MTU0MTc1NDc4NH0.kpj_nqM8aiT7OpjTmheRfYE8IRY0z4xSE-CP7GGWbHM`
    this.httpClient.get(url).pipe(
      map((response: any) => {
        const data = response.map(x => {
          let table: ITable = {
            tableName: x.name,
            customerName: x.bill ? x.bill.customer : undefined,
            tableStatus: x.bill ? x.bill.status : 0,
            totalOrder: x.bill ? x.bill.details.length : undefined
          }
          return table;
        })
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

    // this.tables = data;
  }
  setCurrentTable(tableName: String) {
    this._currentTable.next(tableName);
  }
}
