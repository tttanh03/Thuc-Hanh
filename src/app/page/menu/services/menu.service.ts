import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer, BehaviorSubject, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { IFood } from '../interfaces/IFood';

@Injectable()
export class MenuService {
    private _foods: BehaviorSubject<IFood[]> = new BehaviorSubject([]);
    private _currentMenu: BehaviorSubject<String> = new BehaviorSubject<String>('');

    get currentMenu() {
        return this._currentMenu.asObservable();

    }
    get foods() {
        return this._foods.asObservable();
    }

    constructor(private httpClient: HttpClient) {
    }


    getMenus() {
        const url = `https://lexuanquynh.com/foods?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViZTU0ZjRiMzY3OWFjZmY2NTQ1ZmQ0OSIsImlhdCI6MTU0MTc1NTA5OH0.KvtTL9T6AMeSw6r33aqOOBo9yb0iKDE2-1qhVW4lLpo`
        this.httpClient.get(url).pipe(map((response: any) => {
            const data = response.rows.map(x => {

                let food: IFood = {

                    id: x.id,
                    name: x.name,
                    cover: x.pictures ? x.pictures[0] : '',
                    categories: x.categories ? x.categories.map(i => {
                        return {
                            id: i.id,
                            name: i.name
                        }
                    }) : []
                }
                return food;


            })
            return data;

        }))

            .subscribe((data: any[]) => {
                this._foods.next(data);
            }, (error) => {
                console.log(error)
            }, () => {
                console.log('completed');

            })

    }



    setCurrentFood(name: String) {
        this._currentMenu.next(name);
    }
    getFood(id: string) {

    }

}
