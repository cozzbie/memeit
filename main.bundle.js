webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"clearback\">\n    <div class=\"topcover\"></div>\n    <img *ngIf=\"backimageset\" class=\"animated fadeIn\" [src]=\"imgbackie\" alt=\"\">\n</div>\n\n<div *ngIf=\"showpopularmobile\" [ngClass]=\"{fadeIn: showpopularmobile, fadeOut: bounceout}\"  class=\"popularmobile animated\">\n    <div class=\"hpop\">\n        <div (click)=\"closemodal()\" class=\"closepopular\"><i class=\"remove circle outline icon\"></i></div>\n        <div>Popular Tags</div>\n    </div>\n    <span *ngIf=\"!populartags.length\">Loading</span>\n    <span class=\"animated fadeIn tag clickable\" *ngFor=\"let tag of populartags\" (click)=\"settag(tag.name)\">{{tag.name}}</span>\n</div>\n\n<section class=\"ui container\">\n    <div class=\"nav\">\n        <div class=\"logo\">\n            <div>MEMEIT<span style=\"display: inline-block;\" class=\"animated bounce infinite\">.</span></div>\n            <div (click)=\"showpopular()\" class=\"popular\"><i class=\"area chart icon\"></i></div>\n        </div>\n    </div>\n\n    <div class=\"searchzone\">\n        <div class=\"ui fluid icon input\">\n            <input [formControl]=\"searchcontrol\" name=\"searcher\" type=\"text\" placeholder=\"Search Tags...\">\n            <i class=\"search icon\"></i>\n        </div>\n\n        <div class=\"populartags\">\n            Popular Tags &nbsp; <i class=\"area chart icon\"></i>: <span *ngIf=\"!populartags.length\">Loading</span> <span class=\"animated fadeIn tag clickable\" *ngFor=\"let tag of populartags\" (click)=\"settag(tag.name)\">{{tag.name}}</span>\n        </div>\n    </div>\n\n    <div class=\"memes\">\n        <app-meme class=\"meme\" *ngFor=\"let meme of memes; let idx = index\" [meme]=\"meme\" [index]=\"idx\" (hovered)=\"isHovered($event)\"></app-meme>\n    </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clearback {\n  width: 100%;\n  height: 105vh;\n  position: fixed;\n  z-index: -1;\n  background-color: black; }\n  .clearback img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n  .clearback .topcover {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: rgba(0, 0, 0, 0.7);\n    z-index: 100; }\n\n.popularmobile {\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  z-index: 1000;\n  background-color: white;\n  text-align: center;\n  font-size: 1.3em;\n  overflow: auto; }\n  .popularmobile .hpop {\n    font-size: 1.2em;\n    padding: .8em;\n    width: 100%;\n    color: white;\n    background-color: #AB47BC; }\n    .popularmobile .hpop .closepopular {\n      position: absolute;\n      top: 5px;\n      right: 5px;\n      font-size: .9em; }\n  .popularmobile .tag {\n    padding: 1em;\n    display: block !important;\n    padding: .5em;\n    border-bottom: 1px solid #E1BEE7;\n    color: #AB47BC; }\n\nsection {\n  min-height: 100vh;\n  padding: 1em;\n  color: white; }\n  section div.nav {\n    width: 100%;\n    height: 6vh; }\n    section div.nav .logo {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      font-size: 2em;\n      font-weight: bold; }\n      section div.nav .logo .popular {\n        display: inline-block;\n        font-size: .7em !important; }\n  section div.searchzone .populartags {\n    display: none; }\n  section div.memes {\n    margin: 1em 0; }\n    section div.memes .meme {\n      width: 100%;\n      margin: 0 0 1em; }\n\n@media only screen and (min-width: 768px) {\n  .clearback {\n    height: 100vh; }\n  .popularmobile {\n    display: none; }\n  section {\n    min-height: 100vh;\n    padding: 1em;\n    color: white; }\n    section div.nav .logo .popular {\n      display: none; }\n    section div.searchzone .populartags {\n      display: block; }\n      section div.searchzone .populartags span {\n        display: inline-block;\n        padding: .5em; }\n    section div.memes {\n      -webkit-column-count: 4;\n              column-count: 4;\n      margin: 1em 0; }\n      section div.memes .meme {\n        -webkit-column-break-inside: avoid;\n                break-inside: avoid; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_meme__ = __webpack_require__("../../../../../src/app/providers/meme.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(memesrv) {
        this.memesrv = memesrv;
        this.memes = [];
        this.populartags = [];
        this.newCurrent = 1;
        this.imgbackie = "https://zikmemes.s3.amazonaws.com/banga.jpg";
        this.backimageset = true;
        this.showpopularmobile = false;
        this.bounceout = false;
        this.searchcontrol = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.memesrv.all()
            .subscribe(function (d) {
            if (d.status == 200)
                _this.memes = d.data;
        });
        this.memesrv.popular()
            .subscribe(function (d) {
            if (d.status == 200)
                _this.populartags = d.data;
        });
        this.beginLazyObserve()
            .switchMap(function (m) { return _this.searchcontrol.value ? _this.memesrv.find(m) : _this.memesrv.all(); })
            .subscribe(function (d) {
            if (d.status == 200)
                _this.memes = _this.memes.concat(d.data);
        });
        this.loadsearchcontrol();
    };
    AppComponent.prototype.isHovered = function (e) {
        var _this = this;
        this.backimageset = false;
        this.imgbackie = e;
        setTimeout(function () { return _this.backimageset = true; }, 10);
    };
    AppComponent.prototype.showpopular = function () {
        this.showpopularmobile = true;
    };
    AppComponent.prototype.loadsearchcontrol = function () {
        var _this = this;
        this.searchcontrol
            .valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .filter(function (y) { return y && y.length > 3; })
            .switchMap(function (m) { return _this.memesrv.find(m); })
            .subscribe(function (d) {
            if (d.status === 200)
                _this.memes = d.data;
        });
    };
    AppComponent.prototype.settag = function (t) {
        this.searchcontrol.setValue(t);
        this.closemodal();
    };
    AppComponent.prototype.closemodal = function () {
        var _this = this;
        this.bounceout = true;
        setTimeout(function () {
            _this.showpopularmobile = false;
            _this.bounceout = false;
        }, 1000);
    };
    // Watcher for lazy loading
    AppComponent.prototype.beginLazyObserve = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].fromEvent(window, "scroll")
            .map(function () { return window.scrollY; })
            .filter(function (current) {
            if (current >= (document.body.clientHeight * _this.newCurrent)) {
                _this.newCurrent++;
                return true;
            }
        })
            .debounceTime(200)
            .distinct();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__providers_meme__["a" /* MemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_meme__["a" /* MemeService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_factory__ = __webpack_require__("../../../../../src/app/providers/auth-factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_meme__ = __webpack_require__("../../../../../src/app/providers/meme.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_meme_meme__ = __webpack_require__("../../../../../src/app/components/meme/meme.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_meme_meme__["a" /* MemeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__providers_meme__["a" /* MemeService */],
            { provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]], useFactory: __WEBPACK_IMPORTED_MODULE_4__providers_auth_factory__["a" /* AuthFactory */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/meme/meme.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cmeme\">\n    <img (mouseenter)=\"hasHovered()\" *ngIf=\"loaded\" class=\"memeimage animated fadeIn\" [src]=\"meme.url\" alt=\"\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/meme/meme.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cmeme {\n  position: relative; }\n  .cmeme img.memeimage {\n    width: 100%;\n    margin-bottom: .6em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/meme/meme.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_meme__ = __webpack_require__("../../../../../src/app/interfaces/meme.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_meme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__interfaces_meme__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemeComponent = (function () {
    function MemeComponent() {
        this.hovered = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.imger = "";
        this.loaded = false;
        this.borders = ["#EC407A", "#EF5350", "#AB47BC", "#42A5F5", "#5C6BC0", "#7E57C2"];
        this.border = "";
    }
    MemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var image = new Image();
        image.src = this.meme.url;
        image.onload = function () { return _this.loaded = true; };
        image.onerror = function () { return console.log("Image failed to load"); };
        // this.border = this.borders[_.random(0, this.borders.length)];
    };
    MemeComponent.prototype.hasHovered = function () {
        this.hovered.emit(this.meme.url);
    };
    return MemeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])("meme"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces_meme__["Meme"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces_meme__["Meme"]) === "function" && _a || Object)
], MemeComponent.prototype, "meme", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])("index"),
    __metadata("design:type", Object)
], MemeComponent.prototype, "index", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _b || Object)
], MemeComponent.prototype, "hovered", void 0);
MemeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-meme',
        template: __webpack_require__("../../../../../src/app/components/meme/meme.html"),
        styles: [__webpack_require__("../../../../../src/app/components/meme/meme.scss")]
    }),
    __metadata("design:paramtypes", [])
], MemeComponent);

var _a, _b;
//# sourceMappingURL=meme.js.map

/***/ }),

/***/ "../../../../../src/app/interfaces/meme.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=meme.js.map

/***/ }),

/***/ "../../../../../src/app/providers/auth-factory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_interceptor__ = __webpack_require__("../../../../../src/app/providers/auth-interceptor.ts");
/* harmony export (immutable) */ __webpack_exports__["a"] = AuthFactory;

function AuthFactory(backend, defaultOptions) {
    return new __WEBPACK_IMPORTED_MODULE_0__providers_auth_interceptor__["a" /* AuthInterceptor */](backend, defaultOptions);
}
//# sourceMappingURL=auth-factory.js.map

/***/ }),

/***/ "../../../../../src/app/providers/auth-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthInterceptor = (function (_super) {
    __extends(AuthInterceptor, _super);
    function AuthInterceptor(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    AuthInterceptor.prototype.request = function (url, options) {
        return this.intercept(_super.prototype.request.call(this, url, this.getRequestOptionArgs(url, options)));
    };
    AuthInterceptor.prototype.get = function (url, options) {
        return this.intercept(_super.prototype.get.call(this, url, this.getRequestOptionArgs(url, options)));
    };
    AuthInterceptor.prototype.post = function (url, body, options) {
        return this.intercept(_super.prototype.post.call(this, url, body, this.getRequestOptionArgs(url, options)));
    };
    AuthInterceptor.prototype.put = function (url, body, options) {
        return this.intercept(_super.prototype.put.call(this, url, body, this.getRequestOptionArgs(url, options)));
    };
    AuthInterceptor.prototype.delete = function (url, options) {
        return this.intercept(_super.prototype.delete.call(this, url, this.getRequestOptionArgs(url, options)));
    };
    AuthInterceptor.prototype.getRequestOptionArgs = function (url, options) {
        if (options == null)
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        if (options.headers == null)
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]();
        options.headers.append("client_token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGllbnRfaWQiOjF9.tWe2qSK319mZQQ1nANTdWS1cZ61-RW6QS1hlKPkaC4M");
        return options;
    };
    AuthInterceptor.prototype.intercept = function (observable) {
        return observable.catch(function (err, source) {
            if (err.status === 401 && !__WEBPACK_IMPORTED_MODULE_6_lodash___default.a.endsWith(err.url, '/login')) {
                //this._router.navigate(['/login']);
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].empty();
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(err);
            }
        });
    };
    return AuthInterceptor;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]));
AuthInterceptor = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ConnectionBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ConnectionBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]) === "function" && _b || Object])
], AuthInterceptor);

var _a, _b;
//# sourceMappingURL=auth-interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/providers/meme.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MemeService = (function () {
    function MemeService(http) {
        this.http = http;
        this.server = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].server;
    }
    MemeService.prototype.all = function () {
        var obs = this.http.get(this.server + "api/memes");
        return this.processObservable(obs);
    };
    MemeService.prototype.find = function (o) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        var tags = __WEBPACK_IMPORTED_MODULE_7_lodash___default.a.map(__WEBPACK_IMPORTED_MODULE_7_lodash___default.a.split(o, /[,\s]\s*/), __WEBPACK_IMPORTED_MODULE_7_lodash___default.a.trim).join(",");
        params.set("tags", tags);
        var obs = this.http.get(this.server + "api/memes", { search: params });
        return this.processObservable(obs);
    };
    MemeService.prototype.popular = function () {
        var obs = this.http.get(this.server + "api/memes/popular_tags");
        return this.processObservable(obs);
    };
    MemeService.prototype.processObservable = function (obs) {
        return obs.map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    return MemeService;
}());
MemeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MemeService);

var _a;
//# sourceMappingURL=meme.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    server: "https://zikmemes-api.herokuapp.com/"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map