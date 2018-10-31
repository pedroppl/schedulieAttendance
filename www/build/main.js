webpackJsonp([4],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClockCheckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_confirm__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_clock_in_out_service_clock_in_out_service__ = __webpack_require__(78);
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
    function ClockCheckPage(navCtrl, navParams, elementRef, clockInOut) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.elementRef = elementRef;
        this.clockInOut = clockInOut;
        this.ngName = "";
        this.ngAction = "";
        this.ngDateTime = "";
        this.ngCheck = "";
        this.userId = "";
        this.newAction = "";
        this.mNav = navCtrl;
        this.mClockInOut = clockInOut;
        console.log(navParams.get('name'));
        this.ngName = navParams.get('name');
        this.ngAction = navParams.get('last_action');
        this.rawDateTime = navParams.get('date_time');
        this.userId = navParams.get('user_id');
        if (this.ngAction === "clock out") {
            this.ngCheck = "Clock In";
        }
        else {
            this.ngCheck = "Clock Out";
        }
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        var lastDate = new Date(this.rawDateTime);
        this.ngDateTime = lastDate.getHours() + "." + lastDate.getMinutes() + " " + weekday[lastDate.getDay()] + " " + this.getGetOrdinal(lastDate.getDate()) + " " + monthNames[lastDate.getMonth()] + " " + lastDate.getFullYear();
    }
    ClockCheckPage.prototype.getGetOrdinal = function (n) {
        var s = ["th", "st", "nd", "rd"], v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };
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
                }
            }
        }, 30000);
    };
    ClockCheckPage.prototype.update = function () {
        var LastAction = this.ngAction;
        //Checking the last action of the user.
        if (LastAction === "clock out") {
            console.log("clocking in");
            this.newAction = "clock in";
            console.log(this.formatDate());
            this.mClockInOut.recordClockAction(this.userId, this.newAction, this.formatDate(), localStorage.getItem('token')).subscribe(this.responseOk.bind(this), this.responseFail.bind(this));
        }
        else {
            console.log("clocking out");
            this.newAction = "clock out";
            this.mClockInOut.recordClockAction(this.userId, this.newAction, this.formatDate(), localStorage.getItem('token')).subscribe(this.responseOk.bind(this), this.responseFail.bind(this));
            console.log(this.formatDate());
        }
    };
    ClockCheckPage.prototype.formatDate = function () {
        var mTestDate = new Date();
        var year = mTestDate.getFullYear();
        var month = (mTestDate.getUTCMonth() + 1).toString();
        var day = mTestDate.getDate().toString();
        var hour = mTestDate.getHours().toString();
        var minutes = mTestDate.getMinutes().toString();
        var seconds = mTestDate.getSeconds().toString();
        if (parseInt(month) < 10) {
            var dummy = "0" + month;
            month = dummy;
        }
        if (parseInt(day) < 10) {
            var dummy = "0" + day;
            day = (dummy);
        }
        if (parseInt(hour) < 10) {
            var dummy = "0" + hour;
            hour = (dummy);
        }
        if (parseInt(minutes) < 10) {
            var dummy = "0" + minutes;
            minutes = (dummy);
        }
        if (parseInt(seconds) < 10) {
            var dummy = "0" + seconds;
            seconds = (dummy);
        }
        var formatedDate = year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds;
        return formatedDate;
    };
    //30 seconds after the page is loaded, change the root to the HomePage
    ClockCheckPage.prototype.ngOnInit = function () {
        $(".clock").FlipClock({
            clockFace: 'TwentyFourHourClock'
        });
    };
    ClockCheckPage.prototype.responseOk = function (data) {
        var _this = this;
        console.log(data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__confirm_confirm__["a" /* ConfirmPage */], { 'name': this.ngName, 'last_action': this.newAction }).then(function (response) {
            clearTimeout(_this.mTimer);
        }, function (error) {
        }).catch(function (exception) {
        });
    };
    ClockCheckPage.prototype.responseFail = function (data) {
        console.log(data);
    };
    ClockCheckPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-clock-check',template:/*ion-inline-start:"/Users/pablo/Documentos/Work/SchedulieAttendance/src/pages/clock-check/clock-check.html"*/'<!--\n  Generated template for the ClockCheckPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar hideBackButton>\n    <ion-title>clockCheck</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n\n  <ion-card>\n\n    <ion-card-header text-center >\n      <ion-label style="font-size: 5rem">Welcome {{ngName}}</ion-label>\n      <ion-label style="font-size: 2.4rem"><strong>Your last action was - \'{{ngAction}}\' on {{ngDateTime}}</strong></ion-label>\n    </ion-card-header>\n  \n\n    <ion-card-content >\n\n      <div style="display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content:center;" class="clock" ></div>\n\n     \n\n        <div padding text-center>\n          <button  ion-button round large color="primary" style="height:10rem; width: 50rem;" (click)="update()">{{ngCheck}}</button>\n        </div>\n    </ion-card-content>\n  \n  </ion-card>\n\n \n\n</ion-content>\n'/*ion-inline-end:"/Users/pablo/Documentos/Work/SchedulieAttendance/src/pages/clock-check/clock-check.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_clock_in_out_service_clock_in_out_service__["a" /* ClockInOutServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_clock_in_out_service_clock_in_out_service__["a" /* ClockInOutServiceProvider */]) === "function" && _d || Object])
    ], ClockCheckPage);
    return ClockCheckPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=clock-check.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
            selector: 'page-confirm',template:/*ion-inline-start:"/Users/pablo/Documentos/Work/SchedulieAttendance/src/pages/confirm/confirm.html"*/'<!--\n  Generated template for the ConfirmPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton>\n    <ion-title>confirm</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card>\n\n        <ion-card-header text-center>\n          <ion-label style="font-size: 7rem"> Thank you {{ngName}}</ion-label>\n         \n        </ion-card-header>\n        \n      \n        <ion-card-content >\n            <div padding text-center>\n             <ion-label style="font-size: 5rem"> You {{ngLastAction}} at {{ngDateTime}}</ion-label>\n            </div>\n          \n            \n        </ion-card-content>\n      \n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pablo/Documentos/Work/SchedulieAttendance/src/pages/confirm/confirm.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
    ], ConfirmPage);
    return ConfirmPage;
    var _a, _b;
}());

//# sourceMappingURL=confirm.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeManagerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(159);
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
 * Generated class for the HomeManagerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeManagerPage = /** @class */ (function () {
    function HomeManagerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomeManagerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeManagerPage');
    };
    HomeManagerPage.prototype.pushAttendance = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    HomeManagerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-manager',template:/*ion-inline-start:"/Users/pablo/Documentos/Work/SchedulieAttendance/src/pages/home-manager/home-manager.html"*/'<!--\n  Generated template for the HomeManagerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>home-Manager</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card >\n\n        <ion-card-header text-center>\n          <h1>Welcome Manager</h1>\n        </ion-card-header>\n        \n      \n        <ion-card-content >\n          <ion-list no-lines style="display: flex;\n          flex-direction: row;\n          align-items: center;\n          justify-content:space-evenly;">\n            <ion-item >\n                <div padding text-center>\n                    <button ion-button round large color="primary" (click)="pushAttendance()">Employee Attendance</button>\n                  </div>\n            </ion-item>\n\n          </ion-list>\n          \n        </ion-card-content>\n      </ion-card>\n     \n\n</ion-content>\n'/*ion-inline-end:"/Users/pablo/Documentos/Work/SchedulieAttendance/src/pages/home-manager/home-manager.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HomeManagerPage);
    return HomeManagerPage;
}());

//# sourceMappingURL=home-manager.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/clock-check/clock-check.module": [
		281,
		3
	],
	"../pages/confirm/confirm.module": [
		282,
		2
	],
	"../pages/home-manager/home-manager.module": [
		283,
		1
	],
	"../pages/login-manager/login-manager.module": [
		284,
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
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clock_check_clock_check__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_manager_login_manager__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_clock_in_out_service_clock_in_out_service__ = __webpack_require__(78);
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
    function HomePage(navCtrl, nParams, toastCtrl, alertCtrl, mStaffInfo, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.nParams = nParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.mStaffInfo = mStaffInfo;
        this.loadingCtrl = loadingCtrl;
        this.userList = new Array;
        this.mInputLenght = 0;
        this.mNav = navCtrl;
        this.mNavParams = nParams;
        this.ngIdEmployee = "";
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.mConnected = false;
        this.setLoadingWindow();
    };
    HomePage.prototype.setLoadingWindow = function () {
        //lets prepare a loading popup.
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
    };
    HomePage.prototype.numberPad = function (numberInput) {
        if (numberInput == "back") {
            if (this.ngIdEmployee.length > 0) {
                this.ngIdEmployee = this.ngIdEmployee.slice(0, this.ngIdEmployee.length - 1);
                this.mInputLenght--;
            }
        }
        else {
            if (this.mInputLenght <= 4) {
                this.ngIdEmployee += numberInput;
                this.mInputLenght++;
            }
            if (this.mInputLenght >= 4) {
                this.connect();
            }
        }
    };
    HomePage.prototype.responseOk = function (data) {
        // console.log(data);
        //Connection was succesful! if there is no data, show error. If so, lets do the next connection.
        if (data === null) {
            if (this.mConnected != true) {
                var toast = this.toastCtrl.create({
                    message: 'Incorrect Employee PIN, Please try again.',
                    duration: 3000,
                    position: "top"
                });
                toast.present();
                this.loading.dismiss();
                this.setLoadingWindow();
                this.ngIdEmployee = "";
                this.mInputLenght = 0;
            }
        }
        else {
            this.mConnected = true;
            this.name = data.name;
            //We have the name of the user, lets check his clock data.
            this.staffID = data.id;
            this.mStaffInfo.getStaffClockInfo(data.id, localStorage.getItem('token')).subscribe(this.responseClockOk.bind(this), this.responseFail.bind(this));
        }
    };
    HomePage.prototype.responseClockOk = function (data) {
        //console.log(data);
        this.action = data.action;
        this.action_ts = data.action_ts;
        this.loading.dismiss();
        this.mNav.push(__WEBPACK_IMPORTED_MODULE_2__clock_check_clock_check__["a" /* ClockCheckPage */], {
            'user_id': this.staffID,
            'name': this.name,
            'last_action': this.action,
            'date_time': this.action_ts
        });
        this.ngIdEmployee = "";
        this.mInputLenght = 0;
    };
    HomePage.prototype.responseFail = function (data) {
        console.log(data);
        var toast = this.toastCtrl.create({
            message: 'Cant connect with the server',
            duration: 3000,
            position: "top"
        });
        toast.present();
        this.ngIdEmployee = "";
    };
    HomePage.prototype.connect = function () {
        var _this = this;
        this.loading.present();
        //If we dont get a response in 10 seconds, lets close the loading window and tell the user about it.
        setTimeout(function () {
            _this.loading.dismiss();
        }, 10000);
        // console.log(localStorage.getItem('token'));
        var pin = this.ngIdEmployee;
        this.mStaffInfo.getStaffInfo(pin, localStorage.getItem('token')).subscribe(this.responseOk.bind(this), this.responseFail.bind(this));
    };
    HomePage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Manager Options',
            message: "Enter a valid code",
            inputs: [
                {
                    name: 'Code',
                    placeholder: 'Code'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        console.log(data);
                        if (data['Code'] === "exit") {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_manager_login_manager__["a" /* LoginManagerPage */]);
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/pablo/Documentos/Work/SchedulieAttendance/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Demo Company</ion-title>\n    <ion-buttons end>\n      <button ion-button round outline color="danger">Help Me</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n\n\n\n    <ion-card >\n\n        <ion-card-header text-center>\n          <h1>Employee Attendance</h1>\n        </ion-card-header>\n        \n      \n        <ion-card-content >\n            <ion-list>\n              <ion-item style="font-size: 30px;"> \n                  <ion-input disabled=true [(ngModel)]="ngIdEmployee" maxlength="4" text-center type="password" placeholder="Employee PIN"></ion-input>\n              </ion-item>\n            \n            </ion-list>\n          \n            <div padding text-center >\n                <ion-grid   >\n                    <ion-row text-center style="justify-content: center;">\n                        \n                      <ion-col col-2 text-center > <button ion-button round style="font-size: 2.5rem;"  color="primary" (click)="numberPad(\'1\')">1</button></ion-col>\n                      <ion-col text-center col-2> <button ion-button round style="font-size: 2.5rem;"  color="primary" (click)="numberPad(\'2\')">2</button></ion-col>\n                      <ion-col text-center col-2> <button ion-button round style="font-size: 2.5rem;"  color="primary" (click)="numberPad(\'3\')">3</button></ion-col>\n                      \n                     \n                    </ion-row>\n                    \n                    <ion-row style="justify-content: center;">\n                        <ion-col col-2> <button ion-button round style="font-size: 2.5rem;"  color="primary" (click)="numberPad(\'4\')">4</button></ion-col>\n                        <ion-col col-2> <button ion-button round style="font-size: 2.5rem;"  color="primary" (click)="numberPad(\'5\')">5</button></ion-col>\n                        <ion-col col-2> <button ion-button round style="font-size: 2.5rem;"  color="primary" (click)="numberPad(\'6\')">6</button></ion-col>\n          \n                    </ion-row>\n          \n                    <ion-row style="justify-content: center;">\n                        <ion-col col-2> <button ion-button round style="font-size: 2.5rem;"  color="primary" (click)="numberPad(\'7\')">7</button></ion-col>\n                        <ion-col col-2> <button ion-button round style="font-size: 2.5rem;"  color="primary" (click)="numberPad(\'8\')">8</button></ion-col>\n                        <ion-col col-2> <button ion-button round style="font-size: 2.5rem;"  color="primary" (click)="numberPad(\'9\')">9</button></ion-col>\n          \n                    </ion-row>\n          \n                    <ion-row style="justify-content: center;">\n                        <ion-col col-2 ><button ion-button round style="font-size: 2.4rem;"  color="primary" (click)="showPrompt()"><ion-icon name="key"></ion-icon></button></ion-col>\n                        <ion-col col-2> <button ion-button round style="font-size: 2.5rem;"  color="primary" (click)="numberPad(\'0\')">0</button></ion-col>\n                        <ion-col col-2><button ion-button round style="font-size: 2.5rem;"  color="primary" (click)="numberPad(\'back\')"><ion-icon name="arrow-round-back"></ion-icon></button></ion-col>\n          \n                    </ion-row>\n                  </ion-grid>\n          \n            </div>\n        </ion-card-content>\n      \n      </ion-card>\n\n\n      \n \n\n    \n\n</ion-content>\n'/*ion-inline-end:"/Users/pablo/Documentos/Work/SchedulieAttendance/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__providers_clock_in_out_service_clock_in_out_service__["a" /* ClockInOutServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_clock_in_out_service_clock_in_out_service__["a" /* ClockInOutServiceProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _f || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the LoginManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LoginManagerProvider = /** @class */ (function () {
    function LoginManagerProvider(http) {
        this.http = http;
        console.log('Hello LoginManagerProvider Provider');
    }
    LoginManagerProvider.prototype.getLoginToken = function (email, password /* there are other optionals params that MUST be included */) {
        var url = "https://app.schedulie.com/api/2018/authenticate";
        var postParams = { email: '', password: '' };
        postParams.email = email;
        postParams.password = password;
        return this.http.post(url, postParams);
    };
    LoginManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LoginManagerProvider);
    return LoginManagerProvider;
}());

//# sourceMappingURL=login-manager.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


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

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_clock_check_clock_check__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_confirm_confirm__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_manager_home_manager__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_manager_login_manager__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_login_manager_login_manager__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_clock_in_out_service_clock_in_out_service__ = __webpack_require__(78);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_confirm_confirm__["a" /* ConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_manager_home_manager__["a" /* HomeManagerPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_manager_login_manager__["a" /* LoginManagerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/clock-check/clock-check.module#ClockCheckPageModule', name: 'ClockCheckPage', segment: 'clock-check', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirm/confirm.module#ConfirmPageModule', name: 'ConfirmPage', segment: 'confirm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-manager/home-manager.module#HomeManagerPageModule', name: 'HomeManagerPage', segment: 'home-manager', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-manager/login-manager.module#LoginManagerPageModule', name: 'LoginManagerPage', segment: 'login-manager', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["a" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_clock_check_clock_check__["a" /* ClockCheckPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_confirm_confirm__["a" /* ConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_manager_home_manager__["a" /* HomeManagerPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_manager_login_manager__["a" /* LoginManagerPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_login_manager_login_manager__["a" /* LoginManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__providers_clock_in_out_service_clock_in_out_service__["a" /* ClockInOutServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_manager_login_manager__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { HomePage } from '../pages/home/home';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_manager_login_manager__["a" /* LoginManagerPage */];
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginManagerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_manager_home_manager__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_manager_login_manager__ = __webpack_require__(160);
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
 * Generated class for the LoginManagerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginManagerPage = /** @class */ (function () {
    function LoginManagerPage(navCtrl, navParams, login) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mLogin = login;
    }
    LoginManagerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginManagerPage');
    };
    LoginManagerPage.prototype.connect = function () {
        this.mLogin.getLoginToken(this.ngManagerEmail, this.ngManagerPassword).subscribe(this.loginOk.bind(this), this.loginFail.bind(this));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_manager_home_manager__["a" /* HomeManagerPage */]);
    };
    LoginManagerPage.prototype.loginOk = function (data) {
        console.log(data['authResponse']);
        localStorage.setItem('token', data['authResponse'].token);
        localStorage.setItem('role_id', data['authResponse'].role_id);
    };
    LoginManagerPage.prototype.loginFail = function () {
    };
    LoginManagerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-manager',template:/*ion-inline-start:"/Users/pablo/Documentos/Work/SchedulieAttendance/src/pages/login-manager/login-manager.html"*/'<!--\n  Generated template for the LoginManagerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Manager Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card >\n\n      <ion-card-header text-center>\n        <h1>Manager Login</h1>\n      </ion-card-header>\n      \n    \n      <ion-card-content >\n        <ion-list no-lines style="display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content:space-evenly;">\n          <ion-item >\n            <ion-label text-center floating>Email</ion-label>\n            <ion-input [(ngModel)]="ngManagerEmail" style="border: 1px solid grey; border-radius: 15px; font-size: 2.5rem;" text-center type="email" value="manager@schedulie.com"></ion-input>\n          </ion-item>\n        \n          <ion-item>\n              <ion-label text-center floating>Password</ion-label>\n              <ion-input [(ngModel)]="ngManagerPassword" style="border: 1px solid grey; border-radius: 15px; font-size: 2.5rem;"  text-center type="password" value="manager"></ion-input>\n          </ion-item>\n\n         \n          \n        </ion-list>\n        \n      </ion-card-content>\n    </ion-card>\n    <div padding text-center>\n        <button ion-button round large color="primary" (click)="connect()">CONNECT</button>\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pablo/Documentos/Work/SchedulieAttendance/src/pages/login-manager/login-manager.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_login_manager_login_manager__["a" /* LoginManagerProvider */]])
    ], LoginManagerPage);
    return LoginManagerPage;
}());

//# sourceMappingURL=login-manager.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClockInOutServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ClockInOutServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ClockInOutServiceProvider = /** @class */ (function () {
    function ClockInOutServiceProvider(http) {
        this.http = http;
        console.log('Hello ClockInOutServiceProvider Provider');
    }
    ClockInOutServiceProvider.prototype.recordClockAction = function (id, action, action_ts, token /* there are other optionals params that MUST be included */) {
        var url = "https://app.schedulie.com/api/tas/";
        url = url + id + "/clock";
        var options = { token: '' };
        options.token = token;
        var postParams = { /* token:'', */ action: '', action_ts: '' };
        //postParams.token=token;
        postParams.action = action;
        postParams.action_ts = action_ts;
        return this.http.post(url, postParams, { params: options });
    };
    ClockInOutServiceProvider.prototype.getStaffInfo = function (pin, token /* there are other optionals params that MUST be included */) {
        var url = "https://app.schedulie.com/api/2018/assigneepin";
        var options = { pin: '', token: '' };
        options.pin = pin;
        options.token = token;
        return this.http.get(url, { params: options });
    };
    ClockInOutServiceProvider.prototype.getStaffClockInfo = function (id, token /* there are other optionals params that MUST be included */) {
        var url = "https://app.schedulie.com/api/lasttas/" + id + "/";
        var options = { token: '' };
        options.token = token;
        return this.http.get(url, { params: options });
    };
    ClockInOutServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], ClockInOutServiceProvider);
    return ClockInOutServiceProvider;
    var _a;
}());

//# sourceMappingURL=clock-in-out-service.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map