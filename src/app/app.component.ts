import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MemeService } from "./providers/meme";
import { Observable } from "rxjs/Rx";
import { Meme } from "./interfaces/meme";
import _ from "lodash";

declare var $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    memes: Meme[] = [];
    populartags: string[] = [];
    searchcontrol: FormControl;
    newCurrent = 1;
    imgbackie = "https://zikmemes.s3.amazonaws.com/banga.jpg";
    backimageset = true;

    constructor(private memesrv: MemeService){
        this.searchcontrol = new FormControl();
    }

    ngOnInit(): void {
        this.memesrv.all()
            .subscribe(d => {
                if (d.status == 200) this.memes = d.data;
            });

        this.memesrv.popular()
            .subscribe(d => {
                if (d.status == 200) this.populartags = d.data;
            });

        this.beginLazyObserve()
            .switchMap(m => this.searchcontrol.value ? this.memesrv.find(m) : this.memesrv.all())
            .subscribe(d => {
                if (d.status == 200) this.memes = this.memes.concat(d.data);
            });

        this.loadsearchcontrol();
    }

    isHovered(e): void {
        this.backimageset = false;
        this.imgbackie = e;

        setTimeout(() => this.backimageset = true, 10);
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
                if (current >= (document.body.clientHeight * this.newCurrent)) {
                    this.newCurrent++;
                    return true;
                }
            })
            .debounceTime(200)
            .distinct();
    }
}
