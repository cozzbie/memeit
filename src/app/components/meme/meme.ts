import { Component, OnInit, Input } from '@angular/core';
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
    imger = "";

    constructor() { }

    ngOnInit(): void {
        // const image = new Image();
        // image.src = this.meme.url;
        // image.onload = () => {}
        // image.onerror = () => console.log("Image failed to load");

    }
}
