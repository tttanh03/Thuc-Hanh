import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer, BehaviorSubject, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { IFood } from 'src/app/interfaces/IFood';


@Injectable({providedIn: 'root'})
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
        const url = `foods`
        this.httpClient.get(url).pipe(map((response: any) => {
            let data = response.rows.map(x => {

                let food: IFood = {
                    orderNumber: 0,
                    id: x.id,
                    name: x.name,
                    price: x.price,
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
            // data = data.filter(x => x.price === 29000)
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
        return this.httpClient.get('menu/' + id).pipe(
            map((res:any) => {
              let food:IFood ={

                id: res.id,
                name: res.name,
                price: res.price,
                cover: res.pictures ? res.pictures[0] : '',
                categories: res.categories ? res.categories.map(i => {
                    return {
                        id: i.id,
                        name: i.name
                    }
                }) : []
            }
              return food;
            })
          )

    }

}
