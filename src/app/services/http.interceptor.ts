import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({providedIn: 'root'})
export class HeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = sessionStorage.getItem('token');
        if (req.method === 'GET' || req.method === 'DELETE') {
            const params = req.params.set('access_token', token);
            const authReq = req.clone({ url: this.prepareUrl(req.url), params });
            return next.handle(authReq);
        } else if (req.method === 'POST' || req.method === 'PUT') {
            req.body.access_token = token;
            const body = req.body;
            const authReq = req.clone({ url: this.prepareUrl(req.url), body });
            return next.handle(authReq);
        }
    }
    private isAbsoluteUrl(url: string): boolean {
        const absolutePattern = /^https?:\/\//i;
        return absolutePattern.test(url);
    }

    private prepareUrl(url: string): string {
        url = this.isAbsoluteUrl(url) ? url : environment.baseUrl + '/' + url;
        return url.replace(/([^:]\/)\/+/g, '$1');
    }
}