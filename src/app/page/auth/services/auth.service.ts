import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthService {

    constructor(private httpClient: HttpClient) { }

    login(email: String, password: String) {
        let headers = new HttpHeaders();
        const encode = btoa(`${email}:${password}`);
        headers = headers.set("Authorization", `Basic ${encode}`);
        headers = headers.set("Content-Type", "application/json");
        return this.httpClient.post('http://lexuanquynh.com:8080/auth', {}, { headers: headers })
            .pipe(tap((res: any) => {
                sessionStorage.setItem('token', res.token);
            }));
    }
}