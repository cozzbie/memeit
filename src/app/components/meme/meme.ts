import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from "rxjs/Rx";

import { Meme } from "../../interfaces/meme";

import _ from "lodash";

@Component({
    selector: 'app-meme',
    templateUrl: 'meme.html',
    styleUrls: ['meme.scss']
})
export class MemeComponent implements OnInit {

    @Input("meme") meme: Meme;
    @Input("index") index;
    @Output() hovered: EventEmitter<any> = new EventEmitter<any>()
    imger = "";
    loaded = false;
    borders: string[] = ["#EC407A", "#EF5350", "#AB47BC", "#42A5F5", "#5C6BC0", "#7E57C2"];
    border = "";

    constructor() { }

    ngOnInit(): void {
        const image = new Image();
        image.src = this.meme.url;
        image.onload = () => this.loaded = true;
        image.onerror = () => console.log("Image failed to load");
        // this.border = this.borders[_.random(0, this.borders.length)];
    }

    hasHovered(): void {
        this.hovered.emit(this.meme.url);
    }

}
