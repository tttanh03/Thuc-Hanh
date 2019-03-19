import { Injectable } from '@angular/core';
import { IUser } from '../interface/IUser';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable(
    { providedIn: 'root' }
)
export class UserService {

    constructor(private httpClient: HttpClient) {
    }


    getCurrentUser(id: String) {
        return this.httpClient.get(`users/me`).pipe(map((res: any) => {
            const user: IUser = {
                email: res.email,
                id: res.id,
                name: res.name,
                picture: res.picture,
                role: res.role,
                
            }
            console.log(user)
            return user;

        }))

    }

}