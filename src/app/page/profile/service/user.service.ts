import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../interface/IUser';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable(
    { providedIn: 'root' }
)
export class UserService {
    private _user: BehaviorSubject<IUser[]> = new BehaviorSubject([]);
    private _currentUser: BehaviorSubject<String> = new BehaviorSubject<String>('');

    get currentUser() {
        return this._currentUser.asObservable();

    }
    get user() {
        return this._user.asObservable();
    }

    constructor(private httpClient: HttpClient) {
    }
    getUser(id: String) {
        const url = `users`
        this.httpClient.get(url).pipe(map((response: any) => {
            let data = response.rows.map(x => {

                let user: IUser = {
                    id: x.id,
                    name: x.name,
                    picture: x.pictures,
                    role: x.role,
                    email:x.email
                }
                return user;
            })
            return data;

        }))

            .subscribe((data: any[]) => {
                this._user.next(data);
            }, (error) => {
                console.log(error)
            }, () => {
                console.log('completed');

            })
        }
getCurrentUser (id: String) {
            return this.httpClient.get(`users/${id}`).pipe(map((res: any) => {
            let user: IUser = {
                id: res.id,
                name: res.name,
                picture: res.pictures,
                role: res.role,
                email: res.email

            }
            return user;

        }))
}
        // return this.httpClient.get(`users/${id}`).pipe(map((res: any) => {
        //     let user: IUser = {
        //         id: res.id,
        //         name: res.name,
        //         picture: res.pictures,
        //         role: res.role,
        //         email: res.email

        //     }
        //     return user;

        // }))


    }