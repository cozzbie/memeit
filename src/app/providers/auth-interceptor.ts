import { Injectable } from "@angular/core"
import {
    Http, Request,
    Response, Headers,
    RequestOptions, RequestOptionsArgs, ConnectionBackend
} from '@angular/http';
import { Observable } from "rxjs/Rx";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import _ from "lodash";

@Injectable()
export class AuthInterceptor extends Http {

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }

    request(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.request(url, this.getRequestOptionArgs(url, options)));
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.get(url, this.getRequestOptionArgs(url, options)));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.post(url, body, this.getRequestOptionArgs(url, options)));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.put(url, body, this.getRequestOptionArgs(url, options)));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.intercept(super.delete(url, this.getRequestOptionArgs(url, options)));
    }

    getRequestOptionArgs(url: string | Request, options?: RequestOptionsArgs): RequestOptionsArgs {

        if (options == null) options = new RequestOptions();
        if (options.headers == null) options.headers = new Headers();
        
        options.headers.append("client_token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGllbnRfaWQiOjF9.tWe2qSK319mZQQ1nANTdWS1cZ61-RW6QS1hlKPkaC4M");

        return options;
    }

    intercept(observable: Observable<Response>): Observable<Response> {
        return observable.catch((err, source) => {
            if (err.status === 401 && !_.endsWith(err.url, '/login')) {
                //this._router.navigate(['/login']);
                return Observable.empty();
            } else {
                return Observable.throw(err);
            }
        });

    }
}
