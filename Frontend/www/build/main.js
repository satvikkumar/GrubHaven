webpackJsonp([10],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChefPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< refs/remotes/origin/master
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_apiconfig__ = __webpack_require__(23);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_apiconfig__ = __webpack_require__(30);
>>>>>>> .gitignore is now working
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
 * Generated class for the ChefPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChefPage = /** @class */ (function () {
    function ChefPage(storage, alertCtrl, loadingCtrl, navCtrl, http) {
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.http = http;
    }
    ChefPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        var r_name = '';
        loading.present();
        this.storage.get('r_name').then(function (val) {
            console.log(val);
            r_name = val;
            var postParams = { employee_type: "chef", hotel_name: r_name };
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var url = __WEBPACK_IMPORTED_MODULE_4__assets_apiconfig__["a" /* APIURL */].URL1;
            var path = url.concat("/api/list");
            _this.http.post(path, JSON.stringify(postParams), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                _this.chefs = [];
                for (var i in data) {
                    _this.chefs.push(data[i].employee_name);
                }
                loading.dismiss();
            }, function (err) {
                console.log(err);
            });
        });
    };
    ChefPage.prototype.get_details = function ($event, chef) {
        var _this = this;
        var postParams = { employee_name: chef };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var url = __WEBPACK_IMPORTED_MODULE_4__assets_apiconfig__["a" /* APIURL */].URL1;
        var path = url.concat("/api/employee");
        this.http.post(path, JSON.stringify(postParams), { headers: headers })
            .subscribe(function (res) {
            var data = res.json();
            var alert = _this.alertCtrl.create({
                title: 'Employee Details',
                message: "Name: " + data.employee_name,
                inputs: [
                    {
                        name: 'employee_address', placeholder: data.address
                    },
                    {
                        name: 'contact', placeholder: data.contact
                    },
                    {
                        name: 'shift_time', placeholder: data.shift_time
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function (result) {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Change',
                        handler: function (result) {
                            var postParams = { employee_name: data.employee_name,
                                address: result.employee_address,
                                contact: result.contact,
                                shift_time: result.shift_time };
                            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                            headers.append('Content-Type', 'application/json');
                            var url = __WEBPACK_IMPORTED_MODULE_4__assets_apiconfig__["a" /* APIURL */].URL1;
                            var path = url.concat("/api/eedit");
                            _this.http.post(path, JSON.stringify(postParams), { headers: headers })
                                .subscribe(function (res) {
                                var alert2 = _this.alertCtrl.create({
                                    title: "Successful",
                                    subTitle: "Details Changed",
                                    buttons: ['Dismiss']
                                });
                                alert2.present();
                            }, function (err) {
                                console.log(err);
                            });
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    ChefPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< refs/remotes/origin/master
            selector: 'page-chef',template:/*ion-inline-start:"D:\Users\ShikharGupta\Desktop\GrubHaven\Frontend\src\pages\employee\chef\chef.html"*/'<!--\n\n  Generated template for the ChefPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons left>\n\n      <button ion-button left menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>GrubHaven</ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding="true">\n\n    <ion-card *ngFor="let chef of chefs" (click)="get_details($event,chef)">\n\n\n\n        <ion-card-header>\n\n            {{ chef }}\n\n        </ion-card-header>\n\n      \n\n        <ion-card-content>\n\n            \n\n          <!-- Add card content here! -->\n\n        </ion-card-content>\n\n\n\n        \n\n      \n\n      </ion-card>\n\n  </ion-content>\n\n'/*ion-inline-end:"D:\Users\ShikharGupta\Desktop\GrubHaven\Frontend\src\pages\employee\chef\chef.html"*/,
=======
            selector: 'page-chef',template:/*ion-inline-start:"/home/rohin/code/GrubHaven/Frontend/src/pages/employee/chef/chef.html"*/'<!--\n  Generated template for the ChefPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button left menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>GrubHaven</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding="true">\n    <ion-card *ngFor="let chef of chefs" (click)="get_details($event,chef)">\n\n        <ion-card-header>\n            {{ chef }}\n        </ion-card-header>\n      \n        <ion-card-content>\n            \n          <!-- Add card content here! -->\n        </ion-card-content>\n\n        \n      \n      </ion-card>\n  </ion-content>\n'/*ion-inline-end:"/home/rohin/code/GrubHaven/Frontend/src/pages/employee/chef/chef.html"*/,
>>>>>>> .gitignore is now working
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _e || Object])
    ], ChefPage);
    return ChefPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=chef.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_apiconfig__ = __webpack_require__(23);
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
 * Generated class for the ManageOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ManageOrderPage = /** @class */ (function () {
    function ManageOrderPage(storage, alertCtrl, loadingCtrl, navCtrl, http) {
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.http = http;
    }
    ManageOrderPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.storage.get('r_name').then(function (val) {
            var postParams = { hotel_name: val };
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var url = __WEBPACK_IMPORTED_MODULE_4__assets_apiconfig__["a" /* APIURL */].URL1;
            var path = url.concat("/api/vieworder");
            _this.http.post(path, JSON.stringify(postParams), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                _this.table_no = [];
                for (var i in data) {
                    _this.table_no.push(data[i].table_number);
                }
                loading.dismiss();
            }, function (err) {
                console.log(err);
            });
        });
    };
    ManageOrderPage.prototype.get_details = function ($event, t) {
        var _this = this;
        this.storage.get('r_name').then(function (val) {
            var postParams = { hotel_name: val, table_no: t };
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var url = __WEBPACK_IMPORTED_MODULE_4__assets_apiconfig__["a" /* APIURL */].URL1;
            var path = url.concat("/api/orderdetails");
            _this.http.post(path, JSON.stringify(postParams), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                // console.log(data)
                _this.list = "<table style='width:100%;'> <tr> <th>Dish</th> <th>Quantity</th> </tr>";
                for (var i in data[0].dish) {
                    var element = "<tr> <td>" + data[0].dish[i] + "</td><td align:'right'>    " + data[0].quantity[i] + "</td></tr>";
                    _this.list += element;
                    //  console.log(data[0].quantity[i]);
                }
                _this.list += "</table>";
                var alert = _this.alertCtrl.create({
                    title: 'Pending Order',
                    message: _this.list,
                    buttons: ['Ok']
                });
                alert.present();
            });
        });
    };
    ManageOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-manage-order',template:/*ion-inline-start:"D:\Users\ShikharGupta\Desktop\GrubHaven\Frontend\src\pages\manage-order\manage-order.html"*/'<!--\n  Generated template for the ManageOrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button left menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>GrubHaven</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding="true">\n  <ion-card *ngFor="let t of table_no" (click)="get_details($event,t)">\n\n    <ion-card-header>\n      Table# - {{ t }}\n    </ion-card-header>\n  </ion-card>\n  <ion-card-content>\n    <!-- add data! -->\n  </ion-card-content>\n\n</ion-content>\n'/*ion-inline-end:"D:\Users\ShikharGupta\Desktop\GrubHaven\Frontend\src\pages\manage-order\manage-order.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _e || Object])
    ], ManageOrderPage);
    return ManageOrderPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=manage-order.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaiterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< refs/remotes/origin/master
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_apiconfig__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(22);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_apiconfig__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(29);
>>>>>>> .gitignore is now working
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
 * Generated class for the WaiterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WaiterPage = /** @class */ (function () {
    function WaiterPage(storage, alertCtrl, loadingCtrl, navCtrl, navParams, http) {
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    WaiterPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        var r_name = '';
        loading.present();
        this.storage.get('r_name').then(function (val) {
            console.log(val);
            r_name = val;
            console.log(r_name);
            var postParams = { employee_type: "waiter", hotel_name: r_name };
            console.log(postParams);
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var url = __WEBPACK_IMPORTED_MODULE_2__assets_apiconfig__["a" /* APIURL */].URL1;
            var path = url.concat("/api/list");
            _this.http.post(path, JSON.stringify(postParams), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                _this.waiters = [];
                for (var i in data) {
                    _this.waiters.push(data[i].employee_name);
                }
                loading.dismiss();
            }, function (err) {
                console.log(err);
            });
        });
    };
    WaiterPage.prototype.get_details = function ($event, waiter) {
        var _this = this;
        var postParams = { employee_name: waiter };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var url = __WEBPACK_IMPORTED_MODULE_2__assets_apiconfig__["a" /* APIURL */].URL1;
        var path = url.concat("/api/employee");
        this.http.post(path, JSON.stringify(postParams), { headers: headers })
            .subscribe(function (res) {
            var data = res.json();
            var alert = _this.alertCtrl.create({
                title: 'Employee Details',
                message: "Name: " + data.employee_name,
                inputs: [
                    {
                        name: 'employee_address', placeholder: data.address
                    },
                    {
                        name: 'contact', placeholder: data.contact
                    },
                    {
                        name: 'shift_time', placeholder: data.shift_time
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function (result) {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Change',
                        handler: function (result) {
                            var postParams = { employee_name: data.employee_name,
                                address: result.employee_address,
                                contact: result.contact,
                                shift_time: result.shift_time };
                            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
                            headers.append('Content-Type', 'application/json');
                            var url = __WEBPACK_IMPORTED_MODULE_2__assets_apiconfig__["a" /* APIURL */].URL1;
                            var path = url.concat("/api/eedit");
                            console.log(path);
                            console.log(postParams);
                            _this.http.post(path, JSON.stringify(postParams), { headers: headers })
                                .subscribe(function (res) {
                                console.log(res);
                                var alert2 = _this.alertCtrl.create({
                                    title: "Successful",
                                    subTitle: "Details Changed",
                                    buttons: ['Dismiss']
                                });
                                alert2.present();
                            }, function (err) {
                                console.log(err);
                            });
                        }
                    }
                ]
            });
            alert.present();
        });
    };
    WaiterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< refs/remotes/origin/master
            selector: 'page-waiter',template:/*ion-inline-start:"D:\Users\ShikharGupta\Desktop\GrubHaven\Frontend\src\pages\employee\waiter\waiter.html"*/'<!--\n  Generated template for the WaiterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button left menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>GrubHaven</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding="true">\n\n    <ion-card *ngFor="let waiter of waiters" (click)="get_details($event,waiter)">\n\n        <ion-card-header>\n            {{ waiter }}\n        </ion-card-header>\n      \n        <ion-card-content>\n          <!-- Add card content here! -->\n        </ion-card-content>\n      \n      </ion-card>\n  </ion-content>'/*ion-inline-end:"D:\Users\ShikharGupta\Desktop\GrubHaven\Frontend\src\pages\employee\waiter\waiter.html"*/,
=======
            selector: 'page-waiter',template:/*ion-inline-start:"/home/rohin/code/GrubHaven/Frontend/src/pages/employee/waiter/waiter.html"*/'<!--\n  Generated template for the WaiterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button left menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>GrubHaven</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding="true">\n\n    <ion-card *ngFor="let waiter of waiters" (click)="get_details($event,waiter)">\n\n        <ion-card-header>\n            {{ waiter }}\n        </ion-card-header>\n      \n        <ion-card-content>\n          <!-- Add card content here! -->\n        </ion-card-content>\n      \n      </ion-card>\n  </ion-content>'/*ion-inline-end:"/home/rohin/code/GrubHaven/Frontend/src/pages/employee/waiter/waiter.html"*/,
>>>>>>> .gitignore is now working
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], WaiterPage);
    return WaiterPage;
}());

//# sourceMappingURL=waiter.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< refs/remotes/origin/master
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manager_home_manager_home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_apiconfig__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__customer_home_customer_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(22);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manager_home_manager_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_apiconfig__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__customer_home_customer_home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(29);
>>>>>>> .gitignore is now working
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RegisterPage = /** @class */ (function () {
    function RegisterPage(storage, alertCtrl, http, navCtrl, authService, AlertCtrl) {
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.AlertCtrl = AlertCtrl;
        this.registerCredentials = { unique_id: '', email: '', password: '', role: '', restaurant_name: '' };
        this.flag = 1;
        this.manager = true;
    }
    RegisterPage.prototype.radio_select = function (value) {
        if (value == 'manager') {
            this.manager = false;
        }
        else if (value == 'user') {
            this.manager = true;
        }
    };
    RegisterPage.prototype.GoToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        var details = { email: this.registerCredentials.email, password: this.registerCredentials.password, role: this.registerCredentials.role, restaurant_name: this.registerCredentials.restaurant_name };
        var header = { "headers": { "Content-Type": "application/json" } };
        console.log(details);
        if ((this.registerCredentials.role) == 'manager') {
            var postParams = { uniqueId: this.registerCredentials.unique_id, name: this.registerCredentials.restaurant_name };
            var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var url = __WEBPACK_IMPORTED_MODULE_6__assets_apiconfig__["a" /* APIURL */].URL1;
            var path = url.concat("/api/verify");
            console.log(path);
            console.log(postParams);
            this.http.post(path, JSON.stringify(postParams), { headers: headers })
                .subscribe(function (res) {
                console.log(res);
                //let data = res.json();
                console.log(JSON.stringify(res).length);
                if (JSON.stringify(res).length < 150) {
                    _this.flag = 0;
                    var alert_1 = _this.alertCtrl.create({
                        title: 'WARNING',
                        subTitle: 'You are not authorized to do this',
                        buttons: ['Dismiss']
                    });
                    alert_1.present();
                }
            });
        }
        if (this.flag == 1) {
            this.authService.createAccount(details).then(function (result) {
                var data = JSON.parse(JSON.stringify(result["user"]));
                console.log(result);
                if ((_this.registerCredentials.role) == 'manager') {
                    _this.storage.set('r_name', data.restaurant_name);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__manager_home_manager_home__["a" /* ManagerHomePage */], { username: _this.registerCredentials.email });
                }
                else {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__customer_home_customer_home__["a" /* CustomerHomePage */]);
                    console.log(data.role);
                }
            });
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< refs/remotes/origin/master
            selector: 'page-register',template:/*ion-inline-start:"D:\Users\ShikharGupta\Desktop\GrubHaven\Frontend\src\pages\register\register.html"*/'<ion-content class="login-content" padding>\n\n\n\n  \n\n    <ion-grid no-padding>\n\n      <!-- logo -->\n\n      <ion-row header align-items-start align-items-stretch>\n\n          <!-- <ion-col width-67> -->\n\n              <!-- <img src="../../assets/imgs/grubhaven.png"/> -->\n\n          <!-- </ion-col> -->\n\n  \n\n      <!-- Section form>-->\n\n    <ion-col col-10 offset-1 col-md-6 offset-md-3>\n\n      <form padding  #registerForm="ngForm">\n\n        <ion-row align-items-start>\n\n          <ion-col col-12>\n\n            <h1><strong>Welcome!</strong>Register a new account!</h1>\n\n          </ion-col>\n\n        </ion-row>\n\n        <!-- Input-field -->\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <div input-field>\n\n              <!-- Input-field-text -->\n\n              <ion-item no-padding>\n\n                <ion-input type="text" placeholder="Email" name="userName" [(ngModel)]="registerCredentials.email"  [ngModelOptions]="{standalone: true}" required></ion-input>\n\n  <!--               <ion-label no-margin *ngIf="!isUsernameValid">{{data.errorUser}}</ion-label>-->\n\n           </ion-item>\n\n              <!-- Input-field-password -->\n\n              <ion-item no-padding>\n\n                <ion-input  type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" [ngModelOptions]="{standalone: true}" required></ion-input>\n\n                <!-- <ion-label no-margin *ngIf="!isPasswordValid">{{data.errorPassword}}</ion-label> -->\n\n              </ion-item>\n\n                <ion-list radio-group [(ngModel)]="registerCredentials.role" name = "role" class = "field">\n\n\n\n                  <ion-list-header>\n\n                    Who are you?\n\n                  </ion-list-header>\n\n                \n\n                  <ion-item>\n\n                    <ion-label>Manager</ion-label>\n\n                    <ion-radio value="manager" (ionSelect)="radio_select(\'manager\')"></ion-radio>\n\n                  </ion-item>\n\n                \n\n                  <ion-item>\n\n                    <ion-label>User</ion-label>\n\n                    <ion-radio value="user" (ionSelect)="radio_select(\'user\')"></ion-radio>\n\n                  </ion-item>\n\n                  </ion-list>\n\n                <ion-item>\n\n                  <ion-input type="text" [disabled] = "manager" placeholder="Restaurant Name" name="restaurant_name" [(ngModel)]="registerCredentials.restaurant_name" required></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                  <ion-input type="password" [disabled] = "manager" placeholder="Unique Key" name="unique_id" [(ngModel)]="registerCredentials.unique_id" required></ion-input>\n\n                </ion-item>\n\n              \n\n            </div>\n\n            <!-- Login button -->\n\n            <ion-col col-12 no-padding>\n\n              <button no-margin ion-button full text-uppercase (click)=\'register()\'>Register</button>\n\n            </ion-col>\n\n            <!-- Description -->\n\n            <div description text-center>\n\n              <ion-row>\n\n                <!-- Signup now button -->\n\n                <ion-col col-12 no-padding>\n\n                  <p no-margin no-padding>Already a member!<a (click)="GoToLogin()">Login</a> </p>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </form>\n\n      </ion-col>\n\n    </ion-row>\n\n    </ion-grid>\n\n  </ion-content>'/*ion-inline-end:"D:\Users\ShikharGupta\Desktop\GrubHaven\Frontend\src\pages\register\register.html"*/,
=======
            selector: 'page-register',template:/*ion-inline-start:"/home/rohin/code/GrubHaven/Frontend/src/pages/register/register.html"*/'<ion-content class="login-content" padding>\n\n  \n    <ion-grid no-padding>\n      <!-- logo -->\n      <ion-row header align-items-start align-items-stretch>\n          <!-- <ion-col width-67> -->\n              <!-- <img src="../../assets/imgs/grubhaven.png"/> -->\n          <!-- </ion-col> -->\n  \n      <!-- Section form>-->\n    <ion-col col-10 offset-1 col-md-6 offset-md-3>\n      <form padding  #registerForm="ngForm">\n        <ion-row align-items-start>\n          <ion-col col-12>\n            <h1><strong>Welcome!</strong>Register a new account!</h1>\n          </ion-col>\n        </ion-row>\n        <!-- Input-field -->\n        <ion-row>\n          <ion-col col-12>\n            <div input-field>\n              <!-- Input-field-text -->\n              <ion-item no-padding>\n                <ion-input type="text" placeholder="Email" name="userName" [(ngModel)]="registerCredentials.email"  [ngModelOptions]="{standalone: true}" required></ion-input>\n  <!--               <ion-label no-margin *ngIf="!isUsernameValid">{{data.errorUser}}</ion-label>-->\n           </ion-item>\n              <!-- Input-field-password -->\n              <ion-item no-padding>\n                <ion-input  type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" [ngModelOptions]="{standalone: true}" required></ion-input>\n                <!-- <ion-label no-margin *ngIf="!isPasswordValid">{{data.errorPassword}}</ion-label> -->\n              </ion-item>\n                <ion-list radio-group [(ngModel)]="registerCredentials.role" name = "role" class = "field">\n\n                  <ion-list-header>\n                    Who are you?\n                  </ion-list-header>\n                \n                  <ion-item>\n                    <ion-label>Manager</ion-label>\n                    <ion-radio value="manager" (ionSelect)="radio_select(\'manager\')"></ion-radio>\n                  </ion-item>\n                \n                  <ion-item>\n                    <ion-label>User</ion-label>\n                    <ion-radio value="user" (ionSelect)="radio_select(\'user\')"></ion-radio>\n                  </ion-item>\n                  </ion-list>\n                <ion-item>\n                  <ion-input type="text" [disabled] = "manager" placeholder="Restaurant Name" name="restaurant_name" [(ngModel)]="registerCredentials.restaurant_name" required></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-input type="password" [disabled] = "manager" placeholder="Unique Key" name="unique_id" [(ngModel)]="registerCredentials.unique_id" required></ion-input>\n                </ion-item>\n              \n            </div>\n            <!-- Login button -->\n            <ion-col col-12 no-padding>\n              <button no-margin ion-button full text-uppercase (click)=\'register()\'>Register</button>\n            </ion-col>\n            <!-- Description -->\n            <div description text-center>\n              <ion-row>\n                <!-- Signup now button -->\n                <ion-col col-12 no-padding>\n                  <p no-margin no-padding>Already a member!<a (click)="GoToLogin()">Login</a> </p>\n                </ion-col>\n              </ion-row>\n            </div>\n          </ion-col>\n        </ion-row>\n      </form>\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n  </ion-content>'/*ion-inline-end:"/home/rohin/code/GrubHaven/Frontend/src/pages/register/register.html"*/,
>>>>>>> .gitignore is now working
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeReservationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< refs/remotes/origin/master
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_apiconfig__ = __webpack_require__(23);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_apiconfig__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(14);
>>>>>>> .gitignore is now working
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
 * Generated class for the MakeReservationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MakeReservationsPage = /** @class */ (function () {
    function MakeReservationsPage(navCtrl, navParams, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.restaurant_name = '';
        this.today = '';
        this.time = '';
        this.path = '';
        this.numTables = 0;
        this.tableInfo = [];
        this.isOneSelected = false;
        this.tableSelected = -1;
        this.contact_name = "";
        this.contact_number = "";
        this.restaurant_name = navParams.get('restaurant_name');
        this.numTables = navParams.get('numTables');
        var date = "2017-03-13";
        var time = "01:00";
        var timeAndDate = __WEBPACK_IMPORTED_MODULE_3_moment___default()(date + ' ' + time).format();
        this.time = timeAndDate;
        this.today = __WEBPACK_IMPORTED_MODULE_3_moment___default()().format();
    }
    MakeReservationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MakeReservationsPage');
        var url = __WEBPACK_IMPORTED_MODULE_2__assets_apiconfig__["a" /* APIURL */].URL1;
        var rname = "/" + this.restaurant_name;
        var image_name = rname.concat(".jpg");
        this.path = url.concat(image_name);
        console.log(this.numTables);
        this.getTableAvailability();
    };
    MakeReservationsPage.prototype.getTableAvailability = function () {
        var _this = this;
        this.isOneSelected = false;
        this.tableSelected = -1;
        this.tableInfo = [];
        for (var i = 0; i < this.numTables; i++) {
            this.tableInfo.push({ num: i + 1, reserved: 0 });
        }
        var postParams = {
            hotel_name: this.restaurant_name,
            time: __WEBPACK_IMPORTED_MODULE_3_moment___default()(this.time).hour(),
            date: __WEBPACK_IMPORTED_MODULE_3_moment___default()(this.today).format("DDMMYYYY"),
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var url = __WEBPACK_IMPORTED_MODULE_2__assets_apiconfig__["a" /* APIURL */].URL1;
        var path = url.concat("/api/tables");
        console.log(path);
        console.log(postParams);
        this.http.post(path, JSON.stringify(postParams), {
            headers: headers
        })
            .subscribe(function (res) {
            console.log(res.json());
            res.json().forEach(function (element) {
                console.log(element);
                _this.tableInfo[parseInt(element.table_number) - 1].reserved = 1;
            });
            console.log(_this.tableInfo);
            // res = JSON.parse(res.body)
        }, function (err) {
            console.log(err);
        });
    };
    MakeReservationsPage.prototype.handleButtonClick = function (tableNumber) {
        console.log("SELECTED" + tableNumber);
        this.isOneSelected = true;
        this.tableSelected = tableNumber;
    };
    MakeReservationsPage.prototype.makeReservation = function () {
        var _this = this;
        var postParams = {
            hotel_name: this.restaurant_name,
            time: __WEBPACK_IMPORTED_MODULE_3_moment___default()(this.time).hour(),
            date: __WEBPACK_IMPORTED_MODULE_3_moment___default()(this.today).format("DDMMYYYY"),
            table_number: this.tableSelected,
            customer_name: this.contact_name,
            contact: this.contact_number,
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var url = __WEBPACK_IMPORTED_MODULE_2__assets_apiconfig__["a" /* APIURL */].URL1;
        var path = url.concat("/api/makeReservation");
        console.log(path);
        console.log(postParams);
        this.http.post(path, JSON.stringify(postParams), {
            headers: headers
        })
            .subscribe(function (res) {
            console.log(res.json());
            console.log(_this.tableInfo);
            var alert2 = _this.alertCtrl.create({
                title: "Success!",
                subTitle: "Your table has been reserved. Have a great meal. ",
                buttons: ['Dismiss']
            });
            alert2.present();
            _this.navCtrl.pop();
            // this.navCtrl.push(CustomerHomePage);
        }, function (err) {
            console.log(err);
        });
    };
    MakeReservationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< refs/remotes/origin/master
            selector: 'page-make-reservations',template:/*ion-inline-start:"D:\Users\ShikharGupta\Desktop\GrubHaven\Frontend\src\pages\make-reservations\make-reservations.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n      <ion-title>GrubHaven</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n<ion-content>\n\n\n\n    <img src = "{{ path }}"/>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\ShikharGupta\Desktop\GrubHaven\Frontend\src\pages\make-reservations\make-reservations.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
=======
            selector: 'page-make-reservations',template:/*ion-inline-start:"/home/rohin/code/GrubHaven/Frontend/src/pages/make-reservations/make-reservations.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Table Reservation</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="no-scroll">\n  <ion-content padding class="buttons-components-page">\n    <ion-card>\n      <ion-card-content>\n        <img src="{{path}}" />\n      </ion-card-content>\n    </ion-card>\n\n    <ion-list>\n      <ion-item-group>\n        <ion-item>\n          <ion-label>Date</ion-label>\n          <ion-datetime displayFormat="MM/DD/YYYY" pickerFormat="MM/DD/YYYY" [(ngModel)]="today" (ionChange)="getTableAvailability()"></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label>TimeSlot</ion-label>\n          <ion-datetime displayFormat="h" pickerFormat="h" hourValues="01,02,03,04,05,06" [(ngModel)]="time"\n            (ionChange)="getTableAvailability()"></ion-datetime>\n        </ion-item>\n      </ion-item-group>\n    </ion-list>\n\n    <ion-content item-text-wrap text-center>\n      <button round ion-button (click)="handleButtonClick(table.num)" *ngFor="let table of tableInfo" [outline]="!(table.num == tableSelected)"\n        [attr.disabled]="table.reserved ? true : null">Table {{table.num}}</button>\n    </ion-content>\n\n  </ion-content>\n\n  <ion-footer no-shadow [hidden]="isOneSelected ? null: true">\n    <ion-item>\n      <ion-label color="primary" floating>Name</ion-label>\n      <ion-input [(ngModel)]="contact_name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="primary" floating>Contact Number</ion-label>\n      <ion-input [(ngModel)]="contact_number" type="tel"></ion-input>\n    </ion-item>\n\n    <ion-toolbar position="bottom" style="padding:10px;">\n      <button full color="secondary" ion-button (click)="makeReservation()">Reserve Table</button>\n    </ion-toolbar>\n  </ion-footer>\n</ion-content>\n'/*ion-inline-end:"/home/rohin/code/GrubHaven/Frontend/src/pages/make-reservations/make-reservations.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
>>>>>>> .gitignore is now working
    ], MakeReservationsPage);
    return MakeReservationsPage;
}());

//# sourceMappingURL=make-reservations.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< refs/remotes/origin/master
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_apiconfig__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customer_home_customer_home__ = __webpack_require__(44);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_apiconfig__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__customer_home_customer_home__ = __webpack_require__(45);
>>>>>>> .gitignore is now working
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ReviewPage = /** @class */ (function () {
    function ReviewPage(menu, storage, alertCtrl, navCtrl, http) {
        this.menu = menu;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.http = http;
        this.activeMenu = 'none';
        this.rating = '';
        this.restaurant_name = '';
        this.customer_name = '';
        this.review = '';
    }
    ReviewPage.prototype.ionViewDidLoad = function () {
        this.activeMenu = 'menucust';
        this.menu.enable(true, 'menucust');
        this.menu.enable(false, 'menurest');
    };
    ReviewPage.prototype.submit = function () {
        var _this = this;
        var value = parseInt(this.rating);
        var postParams = { hotel_name: this.restaurant_name, customer_name: this.customer_name, review: this.review, rating: value };
        console.log(postParams);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var url = __WEBPACK_IMPORTED_MODULE_4__assets_apiconfig__["a" /* APIURL */].URL1;
        var path = url.concat("/api/addReview");
        console.log(path);
        console.log(postParams);
        this.http.post(path, JSON.stringify(postParams), { headers: headers })
            .subscribe(function (res) {
            var alert2 = _this.alertCtrl.create({
                title: "Thanks :)",
                subTitle: "Successfully Submitted Review",
                buttons: ['Dismiss']
            });
            alert2.present();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__customer_home_customer_home__["a" /* CustomerHomePage */]);
        }, function (err) {
            console.log(err);
        });
    };
    ReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< refs/remotes/origin/master
            selector: 'page-review',template:/*ion-inline-start:"D:\Users\ShikharGupta\Desktop\GrubHaven\Frontend\src\pages\review\review.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons left>\n\n      <button ion-button left menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>GrubHaven</ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form  #registerForm="ngForm">\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-list inset>\n\n\n\n          <ion-item class = "field">\n\n            <ion-input class = "restname" type="text" placeholder="Enter Restaurant Name" name="restaurant_name" [(ngModel)]="restaurant_name" required></ion-input>\n\n          </ion-item>\n\n          <ion-item class = "field">\n\n            <ion-input class = "name" type="text" placeholder="Enter your name" name="customer_name" [(ngModel)]="customer_name" required></ion-input>\n\n          </ion-item>\n\n          <ion-item class = "field">\n\n            <ion-textarea class = "review" type="text" placeholder="Enter your review" name="review" [(ngModel)]="review" required></ion-textarea>\n\n          </ion-item>\n\n          <ion-list radio-group [(ngModel)]="rating" name = "rating" class = "field">\n\n\n\n            <ion-list-header>\n\n              Rating\n\n            </ion-list-header>\n\n          \n\n            <ion-item>\n\n              <ion-label>1 Star</ion-label>\n\n              <ion-radio value="one"></ion-radio>\n\n            </ion-item>\n\n          \n\n            <ion-item>\n\n              <ion-label>2 Star</ion-label>\n\n              <ion-radio value="two"></ion-radio>\n\n            </ion-item>\n\n          \n\n            <ion-item>\n\n              <ion-label>3 Star</ion-label>\n\n              <ion-radio value="3"></ion-radio>\n\n            </ion-item>\n\n          \n\n            <ion-item>\n\n              <ion-label>4 Star</ion-label>\n\n              <ion-radio value="4"></ion-radio>\n\n            </ion-item>\n\n          \n\n            <ion-item>\n\n              <ion-label>5 Star</ion-label>\n\n              <ion-radio value="5"></ion-radio>\n\n            </ion-item>\n\n          \n\n          </ion-list>\n\n          \n\n\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col class="signup-col">\n\n        <button ion-button class="submit-btn" full type="submit" block clear (click)="submit()">Submit</button>\n\n      </ion-col>\n\n    </ion-row>\n\n</form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\ShikharGupta\Desktop\GrubHaven\Frontend\src\pages\review\review.html"*/,
=======
            selector: 'page-review',template:/*ion-inline-start:"/home/rohin/code/GrubHaven/Frontend/src/pages/review/review.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button left menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>GrubHaven</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form  #registerForm="ngForm">\n    <ion-row>\n      <ion-col>\n        <ion-list inset>\n\n          <ion-item class = "field">\n            <ion-input class = "restname" type="text" placeholder="Enter Restaurant Name" name="restaurant_name" [(ngModel)]="restaurant_name" required></ion-input>\n          </ion-item>\n          <ion-item class = "field">\n            <ion-input class = "name" type="text" placeholder="Enter your name" name="customer_name" [(ngModel)]="customer_name" required></ion-input>\n          </ion-item>\n          <ion-item class = "field">\n            <ion-textarea class = "review" type="text" placeholder="Enter your review" name="review" [(ngModel)]="review" required></ion-textarea>\n          </ion-item>\n          <ion-list radio-group [(ngModel)]="rating" name = "rating" class = "field">\n\n            <ion-list-header>\n              Rating\n            </ion-list-header>\n          \n            <ion-item>\n              <ion-label>1 Star</ion-label>\n              <ion-radio value="one"></ion-radio>\n            </ion-item>\n          \n            <ion-item>\n              <ion-label>2 Star</ion-label>\n              <ion-radio value="two"></ion-radio>\n            </ion-item>\n          \n            <ion-item>\n              <ion-label>3 Star</ion-label>\n              <ion-radio value="3"></ion-radio>\n            </ion-item>\n          \n            <ion-item>\n              <ion-label>4 Star</ion-label>\n              <ion-radio value="4"></ion-radio>\n            </ion-item>\n          \n            <ion-item>\n              <ion-label>5 Star</ion-label>\n              <ion-radio value="5"></ion-radio>\n            </ion-item>\n          \n          </ion-list>\n          \n\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="signup-col">\n        <button ion-button class="submit-btn" full type="submit" block clear (click)="submit()">Submit</button>\n      </ion-col>\n    </ion-row>\n</form>\n</ion-content>\n'/*ion-inline-end:"/home/rohin/code/GrubHaven/Frontend/src/pages/review/review.html"*/,
>>>>>>> .gitignore is now working
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ReviewPage);
    return ReviewPage;
}());

//# sourceMappingURL=review.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< refs/remotes/origin/master
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_apiconfig__ = __webpack_require__(23);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_apiconfig__ = __webpack_require__(30);
>>>>>>> .gitignore is now working
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__make_reservations_make_reservations__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { Auth } from '../../providers/auth/auth';
var SearchPage = /** @class */ (function () {
    function SearchPage(alertCtrl, navCtrl, navParams, http) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    SearchPage.prototype.search = function () {
        var _this = this;
        //TODO 
        //Read json of restaurants and populate below array
        var postParams = { name: this.restaurant_name };
        console.log(postParams);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var url = __WEBPACK_IMPORTED_MODULE_3__assets_apiconfig__["a" /* APIURL */].URL1;
        var path = url.concat("/api/search");
        console.log(path);
        console.log(postParams);
        this.http.post(path, JSON.stringify(postParams), { headers: headers })
            .subscribe(function (res) {
            console.log(res);
            //let data = res.json();
            console.log(JSON.stringify(res).length);
            if (JSON.stringify(res).length < 150) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'SORRY :(',
                    subTitle: 'Restaurant Not Found',
                    buttons: ['Dismiss']
                });
                alert_1.present();
            }
            else {
                var data = res.json();
                console.log(data);
                var cont = document.getElementsByClassName('r_name')[0];
                var lbl1 = "RESTAURANT NAME: ";
                cont.innerHTML = lbl1.concat(data.name);
                console.log(cont.innerHTML);
                var cont = document.getElementsByClassName('r_address')[0];
                var lbl2 = "ADDRESS: ";
                cont.innerHTML = lbl2.concat(data.address);
                var cont = document.getElementsByClassName('r_city')[0];
                var lbl3 = "CITY: ";
                cont.innerHTML = lbl3.concat(data.city);
                var cont = document.getElementsByClassName('r_contact')[0];
                var lbl4 = "CONTACT: ";
                cont.innerHTML = lbl4.concat(data.contact);
                var cont = document.getElementsByClassName('r_cuisine')[0];
                var lbl5 = "CUISINE: ";
                cont.innerHTML = lbl5.concat(data.cuisine);
                _this.numTables = data.numTables;
                document.getElementById('content').style.display = 'block';
                var path2 = url.concat("/api/viewReviewByRestaurant");
                console.log(path);
                _this.http.post(path2, JSON.stringify(postParams), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    _this.reviews = [];
                    _this.custname = [];
                    for (var i in data) {
                        _this.reviews.push(data[i].review);
                        _this.custname.push(data[i].customer_name);
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    SearchPage.prototype.book = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__make_reservations_make_reservations__["a" /* MakeReservationsPage */], { restaurant_name: this.restaurant_name, numTables: this.numTables });
        //Add the link to make reservations
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< refs/remotes/origin/master
            selector: 'page-search',template:/*ion-inline-start:"D:\Users\ShikharGupta\Desktop\GrubHaven\Frontend\src\pages\search\search.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n      <ion-title>GrubHaven</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content class="login-content" padding>\n\n    <form  #registerForm="ngForm">\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-list inset>\n\n\n\n            <ion-item>\n\n              <ion-input class = "search" type="text" placeholder="Enter Restaurant Name" name="restaurant_name" [(ngModel)]="restaurant_name" required></ion-input>\n\n            </ion-item>\n\n\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col class="signup-col">\n\n          <button ion-button class="submit-btn" full type="submit" block clear (click)="search()">Search</button>\n\n        </ion-col>\n\n      </ion-row>\n\n  </form>\n\n\n\n<div id = "content">\n\n    <ion-label class = \'r_name\'></ion-label>\n\n    <ion-label class = \'r_address\'></ion-label>\n\n    <ion-label class = \'r_city\'></ion-label>\n\n    <ion-label class = \'r_contact\'></ion-label>\n\n    <ion-label class = \'r_cuisine\'></ion-label>\n\n\n\n    <button ion-button class="submit-btn" full type="submit" block clear (click)="book()">Book</button>\n\n\n\n    \n\n  </div>\n\n\n\n  \n\n\n\n\n\n\n\n\n\n  <ion-card *ngFor="let review of reviews;  let i = index">\n\n\n\n    <ion-card-header>\n\n    </ion-card-header>\n\n  \n\n    <ion-card-content>\n\n      {{ review }}\n\n    </ion-card-content>\n\n\n\n    <ion-card-content class = "by">\n\n      Review By: {{ custname[i] }}\n\n    </ion-card-content>\n\n\n\n    \n\n  \n\n  </ion-card>\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Users\ShikharGupta\Desktop\GrubHaven\Frontend\src\pages\search\search.html"*/
=======
            selector: 'page-search',template:/*ion-inline-start:"/home/rohin/code/GrubHaven/Frontend/src/pages/search/search.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      <ion-title>GrubHaven</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content class="login-content" padding>\n    <form  #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n\n            <ion-item>\n              <ion-input class = "search" type="text" placeholder="Enter Restaurant Name" name="restaurant_name" [(ngModel)]="restaurant_name" required></ion-input>\n            </ion-item>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" block clear (click)="search()">Search</button>\n        </ion-col>\n      </ion-row>\n  </form>\n\n<div id = "content">\n    <ion-label class = \'r_name\'></ion-label>\n    <ion-label class = \'r_address\'></ion-label>\n    <ion-label class = \'r_city\'></ion-label>\n    <ion-label class = \'r_contact\'></ion-label>\n    <ion-label class = \'r_cuisine\'></ion-label>\n\n    <button ion-button class="submit-btn" full type="submit" block clear (click)="book()">Book</button>\n\n    \n  </div>\n\n  \n\n\n\n\n  <ion-card *ngFor="let review of reviews;  let i = index">\n\n    <ion-card-header>\n    </ion-card-header>\n  \n    <ion-card-content>\n      {{ review }}\n    </ion-card-content>\n\n    <ion-card-content class = "by">\n      Review By: {{ custname[i] }}\n    </ion-card-content>\n\n    \n  \n  </ion-card>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/rohin/code/GrubHaven/Frontend/src/pages/search/search.html"*/
>>>>>>> .gitignore is now working
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 125:
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
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/customer-home/customer-home.module": [
<<<<<<< refs/remotes/origin/master
		291,
		9
	],
	"../pages/employee/chef/chef.module": [
		292,
		8
	],
	"../pages/employee/waiter/waiter.module": [
		294,
		7
	],
	"../pages/login/login.module": [
		295,
		6
	],
	"../pages/make-reservations/make-reservations.module": [
		296,
		5
	],
	"../pages/manage-order/manage-order.module": [
		293,
		4
	],
	"../pages/manager-home/manager-home.module": [
		299,
		3
	],
	"../pages/register/register.module": [
		297,
		2
	],
	"../pages/review/review.module": [
		298,
		1
	],
	"../pages/search/search.module": [
		300,
=======
		416,
		8
	],
	"../pages/employee/chef/chef.module": [
		417,
		7
	],
	"../pages/employee/waiter/waiter.module": [
		418,
		6
	],
	"../pages/login/login.module": [
		419,
		5
	],
	"../pages/make-reservations/make-reservations.module": [
		420,
		4
	],
	"../pages/manager-home/manager-home.module": [
		421,
		3
	],
	"../pages/register/register.module": [
		422,
		2
	],
	"../pages/review/review.module": [
		423,
		1
	],
	"../pages/search/search.module": [
		424,
>>>>>>> .gitignore is now working
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
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

<<<<<<< refs/remotes/origin/master
/***/ 212:
=======
/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIURL; });
var APIURL;
(function (APIURL) {
    APIURL["URL1"] = "http://18.136.208.244:8080";
    //URL1 = "http://localhost:8080"
})(APIURL || (APIURL = {}));
//# sourceMappingURL=apiconfig.js.map

/***/ }),

/***/ 335:
>>>>>>> .gitignore is now working
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__waiter_waiter__ = __webpack_require__(110);
<<<<<<< refs/remotes/origin/master
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chef_chef__ = __webpack_require__(108);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chef_chef__ = __webpack_require__(109);
>>>>>>> .gitignore is now working
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeePage = /** @class */ (function () {
    function EmployeePage() {
        this.Chef_tab = __WEBPACK_IMPORTED_MODULE_2__chef_chef__["a" /* ChefPage */];
        this.Waiter_tab = __WEBPACK_IMPORTED_MODULE_1__waiter_waiter__["a" /* WaiterPage */];
    }
    EmployeePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< refs/remotes/origin/master
            selector: 'page-employee',template:/*ion-inline-start:"D:\Users\ShikharGupta\Desktop\GrubHaven\Frontend\src\pages\employee\employee.html"*/'=<ion-tabs>\n\n    <ion-tab [root]="Chef_tab" tabTitle="Chefs"></ion-tab>\n\n    <ion-tab [root]="Waiter_tab" tabTitle="Waiters"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"D:\Users\ShikharGupta\Desktop\GrubHaven\Frontend\src\pages\employee\employee.html"*/
=======
            selector: 'page-employee',template:/*ion-inline-start:"/home/rohin/code/GrubHaven/Frontend/src/pages/employee/employee.html"*/'=<ion-tabs>\n    <ion-tab [root]="Chef_tab" tabTitle="Chefs"></ion-tab>\n    <ion-tab [root]="Waiter_tab" tabTitle="Waiters"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/home/rohin/code/GrubHaven/Frontend/src/pages/employee/employee.html"*/
>>>>>>> .gitignore is now working
        }),
        __metadata("design:paramtypes", [])
    ], EmployeePage);
    return EmployeePage;
}());

//# sourceMappingURL=employee.js.map

/***/ }),

<<<<<<< refs/remotes/origin/master
/***/ 213:
=======
/***/ 336:
>>>>>>> .gitignore is now working
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< refs/remotes/origin/master
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(357);
>>>>>>> .gitignore is now working


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

<<<<<<< refs/remotes/origin/master
/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIURL; });
var APIURL;
(function (APIURL) {
    APIURL["URL1"] = "http://18.136.208.244:8080";
    //URL1 = "http://localhost:8080"
})(APIURL || (APIURL = {}));
//# sourceMappingURL=apiconfig.js.map

/***/ }),

/***/ 234:
=======
/***/ 357:
>>>>>>> .gitignore is now working
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
<<<<<<< refs/remotes/origin/master
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_manager_home_manager_home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_employee_employee__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_search_search__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_employee_chef_chef__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_employee_waiter_waiter__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_customer_home_customer_home__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_review_review__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_make_reservations_make_reservations__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_manage_order_manage_order__ = __webpack_require__(109);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_manager_home_manager_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_employee_employee__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_search_search__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_employee_chef_chef__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_employee_waiter_waiter__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_customer_home_customer_home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_review_review__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_make_reservations_make_reservations__ = __webpack_require__(112);
>>>>>>> .gitignore is now working
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
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_manager_home_manager_home__["a" /* ManagerHomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_employee_employee__["a" /* EmployeePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_employee_chef_chef__["a" /* ChefPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_employee_waiter_waiter__["a" /* WaiterPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_customer_home_customer_home__["a" /* CustomerHomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_review_review__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_make_reservations_make_reservations__["a" /* MakeReservationsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_manage_order_manage_order__["a" /* ManageOrderPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], { tabsPlacement: 'top' }, {
                    links: [
                        { loadChildren: '../pages/customer-home/customer-home.module#CustomerHomePageModule', name: 'CustomerHomePage', segment: 'customer-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/employee/chef/chef.module#ChefPageModule', name: 'ChefPage', segment: 'chef', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/manage-order/manage-order.module#ManageOrderPageModule', name: 'ManageOrderPage', segment: 'manage-order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/employee/waiter/waiter.module#WaiterPageModule', name: 'WaiterPage', segment: 'waiter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/make-reservations/make-reservations.module#MakeReservationsPageModule', name: 'MakeReservationsPage', segment: 'make-reservations', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/review/review.module#ReviewPageModule', name: 'ReviewPage', segment: 'review', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/manager-home/manager-home.module#ManagerHomePageModule', name: 'ManagerHomePage', segment: 'manager-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_manager_home_manager_home__["a" /* ManagerHomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_employee_chef_chef__["a" /* ChefPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_employee_waiter_waiter__["a" /* WaiterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_employee_employee__["a" /* EmployeePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_customer_home_customer_home__["a" /* CustomerHomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_review_review__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_make_reservations_make_reservations__["a" /* MakeReservationsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_manage_order_manage_order__["a" /* ManageOrderPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__["a" /* AuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

<<<<<<< refs/remotes/origin/master
/***/ 283:
=======
/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 169,
	"./af.js": 169,
	"./ar": 170,
	"./ar-dz": 171,
	"./ar-dz.js": 171,
	"./ar-kw": 172,
	"./ar-kw.js": 172,
	"./ar-ly": 173,
	"./ar-ly.js": 173,
	"./ar-ma": 174,
	"./ar-ma.js": 174,
	"./ar-sa": 175,
	"./ar-sa.js": 175,
	"./ar-tn": 176,
	"./ar-tn.js": 176,
	"./ar.js": 170,
	"./az": 177,
	"./az.js": 177,
	"./be": 178,
	"./be.js": 178,
	"./bg": 179,
	"./bg.js": 179,
	"./bm": 180,
	"./bm.js": 180,
	"./bn": 181,
	"./bn.js": 181,
	"./bo": 182,
	"./bo.js": 182,
	"./br": 183,
	"./br.js": 183,
	"./bs": 184,
	"./bs.js": 184,
	"./ca": 185,
	"./ca.js": 185,
	"./cs": 186,
	"./cs.js": 186,
	"./cv": 187,
	"./cv.js": 187,
	"./cy": 188,
	"./cy.js": 188,
	"./da": 189,
	"./da.js": 189,
	"./de": 190,
	"./de-at": 191,
	"./de-at.js": 191,
	"./de-ch": 192,
	"./de-ch.js": 192,
	"./de.js": 190,
	"./dv": 193,
	"./dv.js": 193,
	"./el": 194,
	"./el.js": 194,
	"./en-au": 195,
	"./en-au.js": 195,
	"./en-ca": 196,
	"./en-ca.js": 196,
	"./en-gb": 197,
	"./en-gb.js": 197,
	"./en-ie": 198,
	"./en-ie.js": 198,
	"./en-il": 199,
	"./en-il.js": 199,
	"./en-nz": 200,
	"./en-nz.js": 200,
	"./eo": 201,
	"./eo.js": 201,
	"./es": 202,
	"./es-do": 203,
	"./es-do.js": 203,
	"./es-us": 204,
	"./es-us.js": 204,
	"./es.js": 202,
	"./et": 205,
	"./et.js": 205,
	"./eu": 206,
	"./eu.js": 206,
	"./fa": 207,
	"./fa.js": 207,
	"./fi": 208,
	"./fi.js": 208,
	"./fo": 209,
	"./fo.js": 209,
	"./fr": 210,
	"./fr-ca": 211,
	"./fr-ca.js": 211,
	"./fr-ch": 212,
	"./fr-ch.js": 212,
	"./fr.js": 210,
	"./fy": 213,
	"./fy.js": 213,
	"./gd": 214,
	"./gd.js": 214,
	"./gl": 215,
	"./gl.js": 215,
	"./gom-latn": 216,
	"./gom-latn.js": 216,
	"./gu": 217,
	"./gu.js": 217,
	"./he": 218,
	"./he.js": 218,
	"./hi": 219,
	"./hi.js": 219,
	"./hr": 220,
	"./hr.js": 220,
	"./hu": 221,
	"./hu.js": 221,
	"./hy-am": 222,
	"./hy-am.js": 222,
	"./id": 223,
	"./id.js": 223,
	"./is": 224,
	"./is.js": 224,
	"./it": 225,
	"./it.js": 225,
	"./ja": 226,
	"./ja.js": 226,
	"./jv": 227,
	"./jv.js": 227,
	"./ka": 228,
	"./ka.js": 228,
	"./kk": 229,
	"./kk.js": 229,
	"./km": 230,
	"./km.js": 230,
	"./kn": 231,
	"./kn.js": 231,
	"./ko": 232,
	"./ko.js": 232,
	"./ky": 233,
	"./ky.js": 233,
	"./lb": 234,
	"./lb.js": 234,
	"./lo": 235,
	"./lo.js": 235,
	"./lt": 236,
	"./lt.js": 236,
	"./lv": 237,
	"./lv.js": 237,
	"./me": 238,
	"./me.js": 238,
	"./mi": 239,
	"./mi.js": 239,
	"./mk": 240,
	"./mk.js": 240,
	"./ml": 241,
	"./ml.js": 241,
	"./mn": 242,
	"./mn.js": 242,
	"./mr": 243,
	"./mr.js": 243,
	"./ms": 244,
	"./ms-my": 245,
	"./ms-my.js": 245,
	"./ms.js": 244,
	"./mt": 246,
	"./mt.js": 246,
	"./my": 247,
	"./my.js": 247,
	"./nb": 248,
	"./nb.js": 248,
	"./ne": 249,
	"./ne.js": 249,
	"./nl": 250,
	"./nl-be": 251,
	"./nl-be.js": 251,
	"./nl.js": 250,
	"./nn": 252,
	"./nn.js": 252,
	"./pa-in": 253,
	"./pa-in.js": 253,
	"./pl": 254,
	"./pl.js": 254,
	"./pt": 255,
	"./pt-br": 256,
	"./pt-br.js": 256,
	"./pt.js": 255,
	"./ro": 257,
	"./ro.js": 257,
	"./ru": 258,
	"./ru.js": 258,
	"./sd": 259,
	"./sd.js": 259,
	"./se": 260,
	"./se.js": 260,
	"./si": 261,
	"./si.js": 261,
	"./sk": 262,
	"./sk.js": 262,
	"./sl": 263,
	"./sl.js": 263,
	"./sq": 264,
	"./sq.js": 264,
	"./sr": 265,
	"./sr-cyrl": 266,
	"./sr-cyrl.js": 266,
	"./sr.js": 265,
	"./ss": 267,
	"./ss.js": 267,
	"./sv": 268,
	"./sv.js": 268,
	"./sw": 269,
	"./sw.js": 269,
	"./ta": 270,
	"./ta.js": 270,
	"./te": 271,
	"./te.js": 271,
	"./tet": 272,
	"./tet.js": 272,
	"./tg": 273,
	"./tg.js": 273,
	"./th": 274,
	"./th.js": 274,
	"./tl-ph": 275,
	"./tl-ph.js": 275,
	"./tlh": 276,
	"./tlh.js": 276,
	"./tr": 277,
	"./tr.js": 277,
	"./tzl": 278,
	"./tzl.js": 278,
	"./tzm": 279,
	"./tzm-latn": 280,
	"./tzm-latn.js": 280,
	"./tzm.js": 279,
	"./ug-cn": 281,
	"./ug-cn.js": 281,
	"./uk": 282,
	"./uk.js": 282,
	"./ur": 283,
	"./ur.js": 283,
	"./uz": 284,
	"./uz-latn": 285,
	"./uz-latn.js": 285,
	"./uz.js": 284,
	"./vi": 286,
	"./vi.js": 286,
	"./x-pseudo": 287,
	"./x-pseudo.js": 287,
	"./yo": 288,
	"./yo.js": 288,
	"./zh-cn": 289,
	"./zh-cn.js": 289,
	"./zh-hk": 290,
	"./zh-hk.js": 290,
	"./zh-tw": 291,
	"./zh-tw.js": 291
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 390;

/***/ }),

/***/ 408:
>>>>>>> .gitignore is now working
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< refs/remotes/origin/master
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_manager_home_manager_home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_employee_employee__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_search_search__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_review_review__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_manage_order_manage_order__ = __webpack_require__(109);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_manager_home_manager_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_employee_employee__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_search_search__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_review_review__ = __webpack_require__(113);
>>>>>>> .gitignore is now working
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
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_manager_home_manager_home__["a" /* ManagerHomePage */] }
        ];
    }
    MyApp.prototype.goToEmployees = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_employee_employee__["a" /* EmployeePage */]);
    };
    MyApp.prototype.goToSearch = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_search_search__["a" /* SearchPage */]);
    };
    MyApp.prototype.goToReview = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_review_review__["a" /* ReviewPage */]);
    };
    MyApp.prototype.goToOrders = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_manage_order_manage_order__["a" /* ManageOrderPage */]);
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
<<<<<<< refs/remotes/origin/master
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Users\ShikharGupta\Desktop\GrubHaven\Frontend\src\app\app.html"*/'<ion-menu [content]="content" id="menurest">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list inset>\n\n      <button ion-item menuClose   (click)="goToEmployees()">\n\n        Manage Employees\n\n      </button>\n\n      <button ion-item menuClose   (click)="goToInventory()">\n\n        Inventory\n\n      </button>\n\n      <button ion-item menuClose   (click)="goToOrders()">\n\n        View Orders\n\n      </button>\n\n      <button ion-item  menuClose    (click)="goToTables()">\n\n        Manage Tables\n\n      </button>\n\n      <button ion-item  menuClose    (click)="goToReservations()">\n\n      Reservations\n\n      </button>\n\n      <button ion-item  menuClose    (click)="goToAnalytics()">\n\n      View Analytics\n\n      </button>\n\n      \n\n      <!-- *ngFor="let p of pages" (click)="openPage(p)"> -->\n\n\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-menu [content]="content" id="menucust">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list inset>\n\n      <button ion-item menuClose   (click)="goToSearch()">\n\n        Search for Restaurant\n\n      </button>\n\n      <button ion-item menuClose   (click)="goToOrder()">\n\n        Place order\n\n      </button>\n\n      <button ion-item menuClose   (click)="goToBill()">\n\n        View Bills\n\n      </button>\n\n      <button ion-item  menuClose    (click)="goToRecommend()">\n\n        My Recommender\n\n      </button>\n\n      <button ion-item  menuClose    (click)="goToReview()">\n\n        Write a review\n\n      </button>\n\n\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\Users\ShikharGupta\Desktop\GrubHaven\Frontend\src\app\app.html"*/
=======
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/rohin/code/GrubHaven/Frontend/src/app/app.html"*/'<ion-menu [content]="content" id="menurest">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list inset>\n      <button ion-item menuClose   (click)="goToEmployees()">\n        Manage Employees\n      </button>\n      <button ion-item menuClose   (click)="goToInventory()">\n        Inventory\n      </button>\n      <button ion-item menuClose   (click)="goToOrders()">\n        View Orders\n      </button>\n      <button ion-item  menuClose    (click)="goToTables()">\n        Manage Tables\n      </button>\n      <button ion-item  menuClose    (click)="goToReservations()">\n      Reservations\n      </button>\n      <button ion-item  menuClose    (click)="goToAnalytics()">\n      View Analytics\n      </button>\n      \n      <!-- *ngFor="let p of pages" (click)="openPage(p)"> -->\n\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-menu [content]="content" id="menucust">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list inset>\n      <button ion-item menuClose   (click)="goToSearch()">\n        Search for Restaurant\n      </button>\n      <button ion-item menuClose   (click)="goToOrder()">\n        Place order\n      </button>\n      <button ion-item menuClose   (click)="goToBill()">\n        View Bills\n      </button>\n      <button ion-item  menuClose    (click)="goToRecommend()">\n        My Recommender\n      </button>\n      <button ion-item  menuClose    (click)="goToReview()">\n        Write a review\n      </button>\n\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/rohin/code/GrubHaven/Frontend/src/app/app.html"*/
>>>>>>> .gitignore is now working
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

<<<<<<< refs/remotes/origin/master
/***/ 44:
=======
/***/ 45:
>>>>>>> .gitignore is now working
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< refs/remotes/origin/master
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_apiconfig__ = __webpack_require__(23);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_apiconfig__ = __webpack_require__(30);
>>>>>>> .gitignore is now working
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
 * Generated class for the CustomerHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomerHomePage = /** @class */ (function () {
    function CustomerHomePage(menu, storage, alertCtrl, navCtrl, http) {
        this.menu = menu;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.http = http;
        this.activeMenu = 'none';
    }
    CustomerHomePage.prototype.ionViewDidLoad = function () {
        this.activeMenu = 'menucust';
        this.menu.enable(true, 'menucust');
        this.menu.enable(false, 'menurest');
    };
    CustomerHomePage.prototype.search = function () {
        var _this = this;
        var postParams = { city: this.city };
        console.log(postParams);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var url = __WEBPACK_IMPORTED_MODULE_4__assets_apiconfig__["a" /* APIURL */].URL1;
        var path = url.concat("/api/viewReview");
        console.log(path);
        this.http.post(path, JSON.stringify(postParams), { headers: headers })
            .subscribe(function (res) {
            var data = res.json();
            _this.reviews = [];
            _this.restaurant = [];
            _this.custname = [];
            for (var i in data) {
                _this.reviews.push(data[i].review);
                _this.restaurant.push(data[i].hotel_name);
                _this.custname.push(data[i].customer_name);
            }
        }, function (err) {
            console.log(err);
        });
    };
    CustomerHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< refs/remotes/origin/master
            selector: 'page-customer-home',template:/*ion-inline-start:"D:\Users\ShikharGupta\Desktop\GrubHaven\Frontend\src\pages\customer-home\customer-home.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons left>\n\n      <button ion-button left menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>GrubHaven</ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div>\n\n    <form  #registerForm="ngForm">\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-list inset>\n\n\n\n            <ion-item>\n\n              <ion-input class = "search" type="text" placeholder="Enter City" name="city" [(ngModel)]="city" required></ion-input>\n\n            </ion-item>\n\n\n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col class="signup-col">\n\n          <button ion-button class="submit-btn" full type="submit" block clear (click)="search()">Search</button>\n\n        </ion-col>\n\n      </ion-row>\n\n  </form>\n\n</div>\n\n  <ion-card *ngFor="let review of reviews;  let i = index">\n\n\n\n      <ion-card-header class = "rname">\n\n       {{ restaurant[i] }}  \n\n      </ion-card-header>\n\n    \n\n      <ion-card-content>\n\n        {{ review }}\n\n        <!-- Add card content here! -->\n\n      </ion-card-content>\n\n\n\n      <ion-card-content class = "by">\n\n        Review By: {{ custname[i] }}\n\n        <!-- Add card content here! -->\n\n      </ion-card-content>\n\n\n\n      \n\n    \n\n    </ion-card>\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"D:\Users\ShikharGupta\Desktop\GrubHaven\Frontend\src\pages\customer-home\customer-home.html"*/,
=======
            selector: 'page-customer-home',template:/*ion-inline-start:"/home/rohin/code/GrubHaven/Frontend/src/pages/customer-home/customer-home.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button left menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>GrubHaven</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <form  #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n\n            <ion-item>\n              <ion-input class = "search" type="text" placeholder="Enter City" name="city" [(ngModel)]="city" required></ion-input>\n            </ion-item>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" block clear (click)="search()">Search</button>\n        </ion-col>\n      </ion-row>\n  </form>\n</div>\n  <ion-card *ngFor="let review of reviews;  let i = index">\n\n      <ion-card-header class = "rname">\n       {{ restaurant[i] }}  \n      </ion-card-header>\n    \n      <ion-card-content>\n        {{ review }}\n        <!-- Add card content here! -->\n      </ion-card-content>\n\n      <ion-card-content class = "by">\n        Review By: {{ custname[i] }}\n        <!-- Add card content here! -->\n      </ion-card-content>\n\n      \n    \n    </ion-card>\n</ion-content>\n\n\n'/*ion-inline-end:"/home/rohin/code/GrubHaven/Frontend/src/pages/customer-home/customer-home.html"*/,
>>>>>>> .gitignore is now working
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], CustomerHomePage);
    return CustomerHomePage;
}());

//# sourceMappingURL=customer-home.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the ManagerHomePage page.
 *a
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ManagerHomePage = /** @class */ (function () {
    function ManagerHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = navParams.get('username');
    }
    ManagerHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ManagerHomePage');
    };
    ManagerHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< refs/remotes/origin/master
            selector: 'page-manager-home',template:/*ion-inline-start:"D:\Users\ShikharGupta\Desktop\GrubHaven\Frontend\src\pages\manager-home\manager-home.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n      <ion-buttons left>\n\n        <button ion-button left menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-title>GrubHaven</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n<ion-content class = "basic">\n\n\n\n      <h1> Hello {{user}} </h1>\n\n   \n\n</ion-content>'/*ion-inline-end:"D:\Users\ShikharGupta\Desktop\GrubHaven\Frontend\src\pages\manager-home\manager-home.html"*/,
=======
            selector: 'page-manager-home',template:/*ion-inline-start:"/home/rohin/code/GrubHaven/Frontend/src/pages/manager-home/manager-home.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-buttons left>\n        <button ion-button left menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>GrubHaven</ion-title>\n    </ion-toolbar>\n  </ion-header>\n<ion-content class = "basic">\n\n      <h1> Hello {{user}} </h1>\n   \n</ion-content>'/*ion-inline-end:"/home/rohin/code/GrubHaven/Frontend/src/pages/manager-home/manager-home.html"*/,
>>>>>>> .gitignore is now working
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ManagerHomePage);
    return ManagerHomePage;
}());

//# sourceMappingURL=manager-home.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< refs/remotes/origin/master
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__manager_home_manager_home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__customer_home_customer_home__ = __webpack_require__(44);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__manager_home_manager_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__customer_home_customer_home__ = __webpack_require__(45);
>>>>>>> .gitignore is now working
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = /** @class */ (function () {
    function LoginPage(storage, nav, authService, alertCtrl, loadingCtrl, http) {
        this.storage = storage;
        this.nav = nav;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
    }
    LoginPage.prototype.createAccount = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var postParams = { email: this.email, password: this.password };
        var header = { "headers": { "Content-Type": "application/json" } };
        console.log(postParams);
        this.authService.login(postParams).then(function (result) {
            var data = JSON.parse(JSON.stringify(result["user"]));
            if ((data.role) == 'manager') {
                console.log(data.restaurant_name);
                _this.storage.set('r_name', data.restaurant_name);
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_5__manager_home_manager_home__["a" /* ManagerHomePage */], { username: _this.email });
            }
            else {
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_7__customer_home_customer_home__["a" /* CustomerHomePage */]);
                console.log(data.role);
            }
        }, function (err) {
            console.log(err);
            //this.nav.push(ManagerHomePage, { username: this.email });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< refs/remotes/origin/master
            selector: 'page-login',template:/*ion-inline-start:"D:\Users\ShikharGupta\Desktop\GrubHaven\Frontend\src\pages\login\login.html"*/'<ion-content class="login-content" padding>\n\n\n\n  \n\n    <ion-grid no-padding>\n\n      <!-- logo -->\n\n      <ion-row header align-items-start align-items-stretch>\n\n          <!-- <ion-img style="width: 80px; height: 80px;" src="../../assets/imgs/grubhaven.png"></ion-img>       -->\n\n      <!-- Section form>-->\n\n    <ion-col col-10 offset-1 col-md-6 offset-md-3>\n\n      <form padding  #registerForm="ngForm">\n\n        <ion-row align-items-start>\n\n          <ion-col col-12>\n\n            <h1><strong>Welcome back,</strong> Please login to your account</h1>\n\n          </ion-col>\n\n        </ion-row>\n\n        <!-- Input-field -->\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <div input-field>\n\n              <!-- Input-field-text -->\n\n              <ion-item no-padding>\n\n                <ion-input type="text" placeholder="Email" name="userName" [(ngModel)]="email"  [ngModelOptions]="{standalone: true}" required></ion-input>\n\n  <!--               <ion-label no-margin *ngIf="!isUsernameValid">{{data.errorUser}}</ion-label>-->\n\n           </ion-item>\n\n              <!-- Input-field-password -->\n\n              <ion-item no-padding>\n\n                <ion-input  type="password" placeholder="Password" name="password" [(ngModel)]="password" [ngModelOptions]="{standalone: true}" required></ion-input>\n\n                <!-- <ion-label no-margin *ngIf="!isPasswordValid">{{data.errorPassword}}</ion-label> -->\n\n              </ion-item>\n\n            </div>\n\n            <!-- Login button -->\n\n            <ion-col col-12 no-padding>\n\n              <button no-margin ion-button full text-uppercase (click)=\'login()\'>Login</button>\n\n            </ion-col>\n\n            <!-- Description -->\n\n            <div description text-center>\n\n              <ion-row>\n\n                <!-- Reset your password button--> \n\n                <ion-col col-12 no-padding no-margin>\n\n                  <p no-margin padding>Forgot Password?<a>Reset Password</a> </p>\n\n                </ion-col>\n\n                <!-- Signup now button -->\n\n                <ion-col col-12 no-padding>\n\n                  <p no-margin no-padding>Not yet a member?<a (click)="createAccount()">Sign up now</a> </p>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </form>\n\n      </ion-col>\n\n    </ion-row>\n\n    </ion-grid>\n\n  </ion-content>'/*ion-inline-end:"D:\Users\ShikharGupta\Desktop\GrubHaven\Frontend\src\pages\login\login.html"*/,
=======
            selector: 'page-login',template:/*ion-inline-start:"/home/rohin/code/GrubHaven/Frontend/src/pages/login/login.html"*/'<ion-content class="login-content" padding>\n\n  \n    <ion-grid no-padding>\n      <!-- logo -->\n      <ion-row header align-items-start align-items-stretch>\n          <!-- <ion-img style="width: 80px; height: 80px;" src="../../assets/imgs/grubhaven.png"></ion-img>       -->\n      <!-- Section form>-->\n    <ion-col col-10 offset-1 col-md-6 offset-md-3>\n      <form padding  #registerForm="ngForm">\n        <ion-row align-items-start>\n          <ion-col col-12>\n            <h1><strong>Welcome back,</strong> Please login to your account</h1>\n          </ion-col>\n        </ion-row>\n        <!-- Input-field -->\n        <ion-row>\n          <ion-col col-12>\n            <div input-field>\n              <!-- Input-field-text -->\n              <ion-item no-padding>\n                <ion-input type="text" placeholder="Email" name="userName" [(ngModel)]="email"  [ngModelOptions]="{standalone: true}" required></ion-input>\n  <!--               <ion-label no-margin *ngIf="!isUsernameValid">{{data.errorUser}}</ion-label>-->\n           </ion-item>\n              <!-- Input-field-password -->\n              <ion-item no-padding>\n                <ion-input  type="password" placeholder="Password" name="password" [(ngModel)]="password" [ngModelOptions]="{standalone: true}" required></ion-input>\n                <!-- <ion-label no-margin *ngIf="!isPasswordValid">{{data.errorPassword}}</ion-label> -->\n              </ion-item>\n            </div>\n            <!-- Login button -->\n            <ion-col col-12 no-padding>\n              <button no-margin ion-button full text-uppercase (click)=\'login()\'>Login</button>\n            </ion-col>\n            <!-- Description -->\n            <div description text-center>\n              <ion-row>\n                <!-- Reset your password button--> \n                <ion-col col-12 no-padding no-margin>\n                  <p no-margin padding>Forgot Password?<a>Reset Password</a> </p>\n                </ion-col>\n                <!-- Signup now button -->\n                <ion-col col-12 no-padding>\n                  <p no-margin no-padding>Not yet a member?<a (click)="createAccount()">Sign up now</a> </p>\n                </ion-col>\n              </ion-row>\n            </div>\n          </ion-col>\n        </ion-row>\n      </form>\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n  </ion-content>'/*ion-inline-end:"/home/rohin/code/GrubHaven/Frontend/src/pages/login/login.html"*/,
>>>>>>> .gitignore is now working
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< refs/remotes/origin/master
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_apiconfig__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(265);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_apiconfig__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(388);
>>>>>>> .gitignore is now working
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthProvider = /** @class */ (function () {
    function AuthProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    AuthProvider.prototype.checkAuthentication = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //Load token if exists
            _this.storage.get('token').then(function (value) {
                _this.token = value;
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                headers.append('Authorization', _this.token);
                var url = __WEBPACK_IMPORTED_MODULE_3__assets_apiconfig__["a" /* APIURL */].URL1;
                var path = url.concat("/api/login");
                //console.log(path);
                _this.http.get(path)
                    .subscribe(function (res) {
                    resolve(res);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    AuthProvider.prototype.createAccount = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var url = __WEBPACK_IMPORTED_MODULE_3__assets_apiconfig__["a" /* APIURL */].URL1;
            var path = url.concat("/api/register");
            console.log(details);
            _this.http.post(path, details, { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                _this.token = data.token;
                _this.storage.set('token', data.token);
                resolve(data);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthProvider.prototype.login = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            var url = __WEBPACK_IMPORTED_MODULE_3__assets_apiconfig__["a" /* APIURL */].URL1;
            var path = url.concat("/api/login");
            console.log(path);
            _this.http.post(path, JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                console.log(data);
                _this.token = data.token;
                _this.storage.set('token', data.token);
                resolve(data);
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.logout = function () {
        this.storage.set('token', '');
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _b || Object])
    ], AuthProvider);
    return AuthProvider;
    var _a, _b;
}());

//# sourceMappingURL=auth.js.map

/***/ })

<<<<<<< refs/remotes/origin/master
},[213]);
=======
},[336]);
>>>>>>> .gitignore is now working
//# sourceMappingURL=main.js.map