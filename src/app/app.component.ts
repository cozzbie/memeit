import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MemeService } from "./providers/meme";

import _ from "lodash";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    memes: string[] = _.range(20);
    populartags: string[] = [];
    searchcontrol: FormControl;

    constructor(){}

    ngOnInit(): void {
        this.searchcontrol
            .valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .filter(y => y && y.length > 3)
            .subscribe(d => {}),
            e => console.log(e));
    }
}
