import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MemeService } from "./providers/meme";
import { Observable } from "rxjs/Rx";
import { Meme } from "./interfaces/meme";
import _ from "lodash";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    memes: Meme[] = [];
    populartags: string[] = ["utilize", "intend", "envy"];
    searchcontrol: FormControl;
    newCurrent = 0;

    constructor(private memesrv: MemeService){
        this.searchcontrol = new FormControl();
    }

    ngOnInit(): void {
        this.memesrv.popular()
            .subscribe(d => {
                if (d.status == 200) this.memes = d.data;
            });

        this.beginLazyObserve()
            .switchMap(m => this.searchcontrol.value ? this.memesrv.find(m) : this.memesrv.popular())
            .subscribe(d => {
                if (d.status == 200) this.memes = this.memes.concat(d.data);
            });

        this.loadsearchcontrol();
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
                if (d.status === 200) this.memes = d.data;
            });
    }

    settag(t): void {
        this.searchcontrol.setValue(t);
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
