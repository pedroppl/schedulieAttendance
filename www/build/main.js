webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmPage = /** @class */ (function () {
    function ConfirmPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ngName = "";
        this.ngDateTime = "";
        this.ngLastAction = "";
        this.mNav = navCtrl;
        this.ngName = this.navParams.get('name');
        this.ngLastAction = this.navParams.get('last_action');
        this.ngDateTime = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    }
    ConfirmPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad ConfirmPage');
    };
    //5 seconds after the page is loaded, change the root to the HomePage
    ConfirmPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.popToRoot();
        }, 5500);
    };
    ConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm',template:/*ion-inline-start:"/Users/pablo/Documentos/Work/SchedulieAttendance/src/pages/confirm/confirm.html"*/'<!--\n  Generated template for the ConfirmPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton>\n    <ion-title>confirm</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card>\n\n        <ion-card-header text-center>\n          <h1>Thank you {{ngName}}</h1>\n         \n        </ion-card-header>\n        \n      \n        <ion-card-content >\n    \n            <div padding text-center>\n              You {{ngLastAction}} at {{ngDateTime}}\n            </div>\n          \n            \n        </ion-card-content>\n      \n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pablo/Documentos/Work/SchedulieAttendance/src/pages/confirm/confirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ConfirmPage);
    return ConfirmPage;
}());

//# sourceMappingURL=confirm.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/clock-check/clock-check.module": [
		270,
		1
	],
	"../pages/confirm/confirm.module": [
		271,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clock_check_clock_check__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, nParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.nParams = nParams;
        this.toastCtrl = toastCtrl;
        this.userList = new Array;
        this.mNav = navCtrl;
        this.mNavParams = nParams;
        this.ngIdEmployee = "";
        console.log(localStorage.getItem('User_List'));
        //Create and reset all the data and vars needed calling a method to do so.
        //After the sign in, collect all the data from the user and push to the next page
        //Show the info collected and show the current time.
        //When check-in/check-out update the data and push to the next page
        //Show the updated info.
        //After 5 seconds, change the ROOT path of the App to home.
    }
    HomePage.prototype.ionViewDidEnter = function () {
        //  this.ngIdEmployee = "";
        this.mConnected = false;
    };
    HomePage.prototype.connect = function () {
        var id = this.ngIdEmployee;
        var tempList = new Array();
        tempList = JSON.parse(localStorage.getItem('User_List'));
        for (var index = 0; index < tempList.length; index++) {
            if (id == tempList[index].user_id) {
                this.mConnected = true;
                this.mNav.push(__WEBPACK_IMPORTED_MODULE_2__clock_check_clock_check__["a" /* ClockCheckPage */], { 'user_id': id, 'name': tempList[index].name, 'last_action': tempList[index].last_action, 'date_time': tempList[index].date_time }).then(function (response) {
                    console.log('Response ' + response);
                }, function (error) {
                    console.log('Error: ' + error);
                }).catch(function (exception) {
                    console.log('Exception ' + exception);
                });
                this.ngIdEmployee = "";
                break;
            }
            else {
                this.mConnected = false;
            }
        }
        if (this.mConnected != true) {
            var toast = this.toastCtrl.create({
                message: 'Incorrect Employee PIN, Please try again.',
                duration: 3000,
                position: "top"
            });
            toast.present();
            this.ngIdEmployee = "";
        }
        //do whatever with the data in the input
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/pablo/Documentos/Work/SchedulieAttendance/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Demo Company</ion-title>\n    <ion-buttons end>\n      <button ion-button round outline color="danger">Help Me</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n\n    <ion-card>\n\n        <ion-card-header text-center>\n          <h1>Employee Attendance</h1>\n        </ion-card-header>\n        \n      \n        <ion-card-content >\n            <ion-list>\n              <ion-item>\n                  <ion-input [(ngModel)]="ngIdEmployee" text-center type="text" placeholder="Employee PIN"></ion-input>\n              </ion-item>\n            \n            </ion-list>\n          \n            <div padding text-center>\n              <button ion-button round large color="primary" (click)="connect()">CHECK IN/OUT</button>\n            </div>\n        </ion-card-content>\n      \n      </ion-card>\n\n \n\n    \n\n</ion-content>\n'/*ion-inline-end:"/Users/pablo/Documentos/Work/SchedulieAttendance/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
var userList = new Array;
var user1 = {
    'user_id': 'abc1',
    'name': 'John Woodlock',
    'last_action': 'Clocked In',
    'date_time': new Date().getHours() + "." + new Date().getMinutes() + " " + new Date().toDateString()
};
var user2 = {
    'user_id': '1234',
    'name': 'Anna Roxane',
    'last_action': 'Clocked Out',
    'date_time': "8.37" + " " + new Date().toDateString()
};
var user3 = {
    'user_id': '3344',
    'name': 'Emily Timto',
    'last_action': 'null',
    'date_time': new Date().getHours() + "." + new Date().getMinutes() + " " + new Date().toDateString()
};
userList[0] = user1;
userList[1] = user2;
userList[2] = user3;
localStorage.setItem('User_List', JSON.stringify(userList));
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_clock_check_clock_check__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_confirm_confirm__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_clock_check_clock_check__["a" /* ClockCheckPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_confirm_confirm__["a" /* ConfirmPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/clock-check/clock-check.module#ClockCheckPageModule', name: 'ClockCheckPage', segment: 'clock-check', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirm/confirm.module#ConfirmPageModule', name: 'ConfirmPage', segment: 'confirm', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_clock_check_clock_check__["a" /* ClockCheckPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_confirm_confirm__["a" /* ConfirmPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/pablo/Documentos/Work/SchedulieAttendance/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/pablo/Documentos/Work/SchedulieAttendance/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClockCheckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_confirm__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ClockCheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClockCheckPage = /** @class */ (function () {
    function ClockCheckPage(navCtrl, navParams, elementRef) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.elementRef = elementRef;
        this.ngName = "";
        this.ngAction = "";
        this.ngDateTime = "";
        this.ngCheck = "";
        this.userId = "";
        this.mNav = navCtrl;
        console.log(navParams.get('name'));
        this.ngName = navParams.get('name');
        this.ngAction = navParams.get('last_action');
        this.ngDateTime = navParams.get('date_time');
        this.userId = navParams.get('user_id');
        if (this.ngAction === "Clocked Out") {
            this.ngCheck = "Clock In";
        }
        else {
            this.ngCheck = "Clock Out";
        }
    }
    ClockCheckPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ClockCheckPage');
        //Checking if there is more than one page in the page stack, if so, ask if there are more than 2 pages. If so, delete the stacked pages.
        //We do this to prevent the timers to keep going even when the page is not visible.
        console.log("page stack count: " + this.navCtrl.length());
        this.mTimer = setTimeout(function () {
            if (_this.navCtrl.length() > 1) {
                if (_this.navCtrl.length() > 2) {
                    _this.navCtrl.remove(2);
                    _this.navCtrl.remove(3);
                }
                else {
                    _this.navCtrl.remove(1, 1);
                    console.log("page stack count: " + _this.navCtrl.length());
                    console.log("removed in clockCleck");
                }
            }
            // this.navCtrl.popToRoot();
            // might try this instead
            //this.navCtrl.setRoot(HomePage);
            // this.navCtrl.popToRoot();
        }, 30000);
    };
    ClockCheckPage.prototype.update = function () {
        var _this = this;
        var mAction = this.ngAction;
        //let mDateTime = this.ngDateTime;
        var mId = this.userId;
        var newAction = "";
        var newDateTime = "";
        //Getting the user data and parse it
        var tempList = new Array();
        tempList = JSON.parse(localStorage.getItem('User_List'));
        //Looking for the user we need to update the data.
        for (var index = 0; index < tempList.length; index++) {
            if (mId == tempList[index].user_id) {
                if (mAction === "Clocked Out") {
                    newAction = "Clocked In";
                    newDateTime = new Date().getHours() + "." + new Date().getMinutes() + " " + new Date().toDateString();
                    //update the data in the tempList
                    tempList[index].last_action = newAction;
                    tempList[index].date_time = newDateTime;
                }
                else {
                    newAction = "Clocked Out";
                    newDateTime = new Date().getHours() + "." + new Date().getMinutes() + " " + new Date().toDateString();
                    //Update the data in the tempList
                    tempList[index].last_action = newAction;
                    tempList[index].date_time = newDateTime;
                }
            }
        }
        //Update the localStorage safely
        localStorage.removeItem('User_List');
        localStorage.setItem('User_List', JSON.stringify(tempList));
        console.log(JSON.parse(localStorage.getItem('User_List')));
        //this.navCtrl.setRoot(HomePage);
        //this.navCtrl.get
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__confirm_confirm__["a" /* ConfirmPage */], { 'name': this.ngName, 'last_action': newAction }).then(function (response) {
            console.log('Response ' + response);
            clearTimeout(_this.mTimer);
        }, function (error) {
            console.log('Error: ' + error);
        }).catch(function (exception) {
            console.log('Exception ' + exception);
        });
    };
    //30 seconds after the page is loaded, change the root to the HomePage
    ClockCheckPage.prototype.ngOnInit = function () {
        $(".clock").FlipClock({
            clockFace: 'TwentyFourHourClock'
        });
    };
    ClockCheckPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-clock-check',template:/*ion-inline-start:"/Users/pablo/Documentos/Work/SchedulieAttendance/src/pages/clock-check/clock-check.html"*/'<!--\n  Generated template for the ClockCheckPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar hideBackButton>\n    <ion-title>clockCheck</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n\n  <ion-card>\n\n    <ion-card-header text-center >\n      <h1>Welcome {{ngName}}</h1>\n      <h3>Your last action was -\' {{ngAction}} \' on {{ngDateTime}}</h3>\n    </ion-card-header>\n  \n\n    <ion-card-content >\n\n      <div style="display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content:center;" class="clock" ></div>\n\n     \n\n        <div padding text-center>\n          <button ion-button round large color="primary" (click)="update()">{{ngCheck}}</button>\n        </div>\n    </ion-card-content>\n  \n  </ion-card>\n\n \n\n</ion-content>\n'/*ion-inline-end:"/Users/pablo/Documentos/Work/SchedulieAttendance/src/pages/clock-check/clock-check.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _c || Object])
    ], ClockCheckPage);
    return ClockCheckPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=clock-check.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map