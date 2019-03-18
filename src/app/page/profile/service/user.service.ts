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
    

getCurrentUser (id: String) {
            return this.httpClient.get(`users/${id}`).pipe(map((res: any) => {
            const user: IUser = {
                id: res.id,
                name: res.name,
                picture: res.pictures,
                role: res.role,
                email: res.email

            }
            console.log(user)
            return user;

        }))

}


    }