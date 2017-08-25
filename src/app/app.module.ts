import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    Http, HttpModule, JsonpModule,
    RequestOptions,
    XHRBackend
} from '@angular/http';
import { AuthFactory } from "./providers/auth-factory";
import { AuthInterceptor } from './providers/auth-interceptor';
import { MemeService } from './providers/meme';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [
        MemeService,
        { provide: Http, deps: [XHRBackend, RequestOptions], useFactory: AuthFactory }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
