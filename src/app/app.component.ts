import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MemeService } from "./providers/meme";
import { Observable } from "rxjs/Rx";

import _ from "lodash";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    memes: string[] = _.range(20);
    populartags: string[] = ["timi", "chrisse", "tiana", "marley", "bob"];
    searchcontrol: FormControl;
    newCurrent = 0;

    constructor(private memesrv: MemeService){}

    ngOnInit(): void {
        this.beginLazyObserve()
            .subscribe(d => {});
    }

    runfirstqueues(): void {

    }

    loadsearchcontrol(): void {
        this.searchcontrol
            .valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .filter(y => y && y.length > 3)
            .switchMap(m => this.memesrv.find(m))
            .subscribe(d => {
                if (d.status === 200) this.memes.concat(d.data);
            });
    }

    // Watcher for lazy loading
    beginLazyObserve(): any {
        return Observable.fromEvent(window, "scroll")
            .map(() => window.scrollY)
            .filter(current => {
                if ((current >= document.body.clientHeight - window.innerHeight) && current >= this.newCurrent) {
                    this.newCurrent = current;
                    return true;
                }
            })
            .debounceTime(200)
            .distinct();
    }
}
