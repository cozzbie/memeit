import { Injectable } from "@angular/core";
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable, Subscription } from "rxjs/Rx";
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import _ from "lodash";


@Injectable()
export class MemeService {
    server = environment.server;

    constructor(private http: Http){}

    all(): Observable<any> {
        const obs = this.http.get(this.server + "api/memes");
        return this.processObservable(obs);
    }

    find(o: string): Observable<any> {
        const params = new URLSearchParams();
        const tags = _.map(_.split(o, /[,\s]\s*/), _.trim).join(",");
        params.set("tags", tags);
        const obs = this.http.get(this.server + "api/memes", { search: params });
        return this.processObservable(obs);
    }

    popular(): Observable<any> {
        const obs = this.http.get(this.server + "api/memes/popular_tags");
        return this.processObservable(obs);
    }

    processObservable(obs: Observable<Object>): Observable<Object[]> {
        return obs.map((res: Response) => res.json())
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
