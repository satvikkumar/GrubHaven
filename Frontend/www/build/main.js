webpackJsonp([6],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChefPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_apiconfig__ = __webpack_require__(48);
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
    function ChefPage(alertCtrl, loadingCtrl, navCtrl, http) {
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
        loading.present();
        var postParams = { employee_type: "chef" };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var url = __WEBPACK_IMPORTED_MODULE_3__assets_apiconfig__["a" /* APIURL */].URL1;
        var path = url.concat("/api/list");
        this.http.post(path, JSON.stringify(postParams), { headers: headers })
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
    };
    ChefPage.prototype.get_details = function ($event, chef) {
        var _this = this;
        console.log(chef);
        var postParams = { employee_name: chef };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var url = __WEBPACK_IMPORTED_MODULE_3__assets_apiconfig__["a" /* APIURL */].URL1;
        var path = url.concat("/api/employee");
        console.log(path);
        console.log(postParams);
        this.http.post(path, JSON.stringify(postParams), { headers: headers })
            .subscribe(function (res) {
            console.log(res);
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
                            var url = __WEBPACK_IMPORTED_MODULE_3__assets_apiconfig__["a" /* APIURL */].URL1;
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
    ChefPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chef',template:/*ion-inline-start:"/home/roshvenkatesh/Sem7/SE/Project/GH/GrubHaven/Frontend/src/pages/employee/chef/chef.html"*/'<!--\n  Generated template for the ChefPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding="true">\n    <ion-card *ngFor="let chef of chefs" (click)="get_details($event,chef)">\n\n        <ion-card-header>\n            {{ chef }}\n        </ion-card-header>\n      \n        <ion-card-content>\n            \n          <!-- Add card content here! -->\n        </ion-card-content>\n\n        \n      \n      </ion-card>\n  </ion-content>\n'/*ion-inline-end:"/home/roshvenkatesh/Sem7/SE/Project/GH/GrubHaven/Frontend/src/pages/employee/chef/chef.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _d || Object])
    ], ChefPage);
    return ChefPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=chef.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaiterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_apiconfig__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
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
    function WaiterPage(alertCtrl, loadingCtrl, navCtrl, navParams, http) {
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
        loading.present();
        var postParams = { employee_type: "waiter" };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var url = __WEBPACK_IMPORTED_MODULE_2__assets_apiconfig__["a" /* APIURL */].URL1;
        var path = url.concat("/api/list");
        this.http.post(path, JSON.stringify(postParams), { headers: headers })
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
    };
    WaiterPage.prototype.get_details = function ($event, waiter) {
        var _this = this;
        console.log(waiter);
        var postParams = { employee_name: waiter };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var url = __WEBPACK_IMPORTED_MODULE_2__assets_apiconfig__["a" /* APIURL */].URL1;
        var path = url.concat("/api/employee");
        console.log(path);
        console.log(postParams);
        this.http.post(path, JSON.stringify(postParams), { headers: headers })
            .subscribe(function (res) {
            console.log(res);
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
            selector: 'page-waiter',template:/*ion-inline-start:"/home/roshvenkatesh/Sem7/SE/Project/GH/GrubHaven/Frontend/src/pages/employee/waiter/waiter.html"*/'<!--\n  Generated template for the WaiterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding="true">\n\n    <ion-card *ngFor="let waiter of waiters" (click)="get_details($event,waiter)">\n\n        <ion-card-header>\n            {{ waiter }}\n        </ion-card-header>\n      \n        <ion-card-content>\n          <!-- Add card content here! -->\n        </ion-card-content>\n      \n      </ion-card>\n  </ion-content>'/*ion-inline-end:"/home/roshvenkatesh/Sem7/SE/Project/GH/GrubHaven/Frontend/src/pages/employee/waiter/waiter.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _e || Object])
    ], WaiterPage);
    return WaiterPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=waiter.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manager_home_manager_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(53);
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
    function RegisterPage(navCtrl, authService, AlertCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.AlertCtrl = AlertCtrl;
        this.registerCredentials = { email: '', password: '', role: '' };
    }
    RegisterPage.prototype.GoToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        var details = { email: this.registerCredentials.email, password: this.registerCredentials.password, role: this.registerCredentials.role };
        var header = { "headers": { "Content-Type": "application/json" } };
        this.authService.createAccount(details).then(function (result) {
            var data = JSON.parse(JSON.stringify(result["user"]));
            console.log(result);
            if ((data.role) == 'manager')
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__manager_home_manager_home__["a" /* ManagerHomePage */], { username: _this.registerCredentials.email });
            else
                console.log(data.role);
            //Shruthi add customer home here
        }, function (err) {
            /*let data = err.json();
           let alert = this.AlertCtrl.create({
              title:  "Error",
              message: data.error,
              buttons : ['Dismiss']
            });
            alert.present();
            console.log(data);*/
        });
        /*if (this.registerCredentials.role == 'manager')
          this.navCtrl.push(ManagerHomePage, { username: this.registerCredentials.email });
    
        else
          console.log("CUSTOMER")*/
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/roshvenkatesh/Sem7/SE/Project/GH/GrubHaven/Frontend/src/pages/register/register.html"*/'<ion-content class="login-content" padding>\n\n  \n    <ion-grid no-padding>\n      <!-- logo -->\n      <ion-row header align-items-start align-items-stretch>\n          <!-- <ion-col width-67> -->\n              <!-- <img src="../../assets/imgs/grubhaven.png"/> -->\n          <!-- </ion-col> -->\n  \n      <!-- Section form>-->\n    <ion-col col-10 offset-1 col-md-6 offset-md-3>\n      <form padding  #registerForm="ngForm">\n        <ion-row align-items-start>\n          <ion-col col-12>\n            <h1><strong>Welcome!</strong>Register a new account!</h1>\n          </ion-col>\n        </ion-row>\n        <!-- Input-field -->\n        <ion-row>\n          <ion-col col-12>\n            <div input-field>\n              <!-- Input-field-text -->\n              <ion-item no-padding>\n                <ion-input type="text" placeholder="Email" name="userName" [(ngModel)]="registerCredentials.email"  [ngModelOptions]="{standalone: true}" required></ion-input>\n  <!--               <ion-label no-margin *ngIf="!isUsernameValid">{{data.errorUser}}</ion-label>-->\n           </ion-item>\n              <!-- Input-field-password -->\n              <ion-item no-padding>\n                <ion-input  type="password" placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" [ngModelOptions]="{standalone: true}" required></ion-input>\n                <!-- <ion-label no-margin *ngIf="!isPasswordValid">{{data.errorPassword}}</ion-label> -->\n              </ion-item>\n              <ion-item no-padding>\n                  <ion-input type="text" placeholder="Role" name="role" [(ngModel)]="registerCredentials.role" required></ion-input>\n                  <!-- <ion-label no-margin *ngIf="!isPasswordValid">{{data.errorPassword}}</ion-label> -->\n                </ion-item>\n              \n            </div>\n            <!-- Login button -->\n            <ion-col col-12 no-padding>\n              <button no-margin ion-button full text-uppercase (click)=\'register()\'>Register</button>\n            </ion-col>\n            <!-- Description -->\n            <div description text-center>\n              <ion-row>\n                <!-- Signup now button -->\n                <ion-col col-12 no-padding>\n                  <p no-margin no-padding>Already a member!<a (click)="GoToLogin()">Login</a> </p>\n                </ion-col>\n              </ion-row>\n            </div>\n          </ion-col>\n        </ion-row>\n      </form>\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n  </ion-content>'/*ion-inline-end:"/home/roshvenkatesh/Sem7/SE/Project/GH/GrubHaven/Frontend/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_apiconfig__ = __webpack_require__(48);
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
    function SearchPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
    }
    SearchPage.prototype.search = function () {
        //TODO 
        //Read json of restaurants and populate below array
        var postParams = { name: this.restaurant_name };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var url = __WEBPACK_IMPORTED_MODULE_3__assets_apiconfig__["a" /* APIURL */].URL1;
        var path = url.concat("/api/search");
        console.log(path);
        console.log(postParams);
        this.http.post(path, JSON.stringify(postParams), { headers: headers })
            .subscribe(function (res) {
            console.log(res);
            var data = res.json();
            var cont = document.getElementsByClassName('r_name')[0];
            var lbl1 = "RESTAURANT NAME: ";
            cont.innerHTML = lbl1.concat(data.name);
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
            document.getElementById('content').style.display = 'block';
        }, function (err) {
            console.log(err);
        });
    };
    SearchPage.prototype.book = function () {
        //Add the link to make reservations
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/home/roshvenkatesh/Sem7/SE/Project/GH/GrubHaven/Frontend/src/pages/search/search.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      <ion-title>GrubHaven</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content class="login-content" padding>\n  <div class="login-box">\n    <form  #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n\n            <ion-item>\n              <ion-input type="text" placeholder="search" name="restaurant_name" [(ngModel)]="restaurant_name" required></ion-input>\n            </ion-item>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" block clear (click)="search()">Search</button>\n        </ion-col>\n      </ion-row>\n  </form>\n</div>\n\n<div id = "content">\n    <ion-label class = \'r_name\'></ion-label>\n    <ion-label class = \'r_address\'></ion-label>\n    <ion-label class = \'r_city\'></ion-label>\n    <ion-label class = \'r_contact\'></ion-label>\n    <ion-label class = \'r_cuisine\'></ion-label>\n\n    <button ion-button class="submit-btn" full type="submit" block clear (click)="book()">Book</button>\n\n    \n  </div>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/roshvenkatesh/Sem7/SE/Project/GH/GrubHaven/Frontend/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/employee/chef/chef.module": [
		287,
		5
	],
	"../pages/employee/waiter/waiter.module": [
		288,
		4
	],
	"../pages/login/login.module": [
		289,
		3
	],
	"../pages/manager-home/manager-home.module": [
		290,
		2
	],
	"../pages/register/register.module": [
		291,
		1
	],
	"../pages/search/search.module": [
		292,
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
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__waiter_waiter__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chef_chef__ = __webpack_require__(106);
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
            selector: 'page-employee',template:/*ion-inline-start:"/home/roshvenkatesh/Sem7/SE/Project/GH/GrubHaven/Frontend/src/pages/employee/employee.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      <ion-title>GrubHaven</ion-title>\n    </ion-navbar>\n  </ion-header>\n<ion-content padding="true" >\n  <ion-tabs tabsPlacement = "top">\n    <ion-tab [root]="Chef_tab" tabTitle="Chefs"></ion-tab>\n    <ion-tab [root]="Waiter_tab" tabTitle="Waiter"></ion-tab>\n  </ion-tabs>\n  </ion-content>\n'/*ion-inline-end:"/home/roshvenkatesh/Sem7/SE/Project/GH/GrubHaven/Frontend/src/pages/employee/employee.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], EmployeePage);
    return EmployeePage;
}());

//# sourceMappingURL=employee.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_manager_home_manager_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_employee_employee__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_search_search__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_employee_chef_chef__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_employee_waiter_waiter__ = __webpack_require__(107);
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
                __WEBPACK_IMPORTED_MODULE_16__pages_employee_waiter_waiter__["a" /* WaiterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/employee/chef/chef.module#ChefPageModule', name: 'ChefPage', segment: 'chef', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/employee/waiter/waiter.module#WaiterPageModule', name: 'WaiterPage', segment: 'waiter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/manager-home/manager-home.module#ManagerHomePageModule', name: 'ManagerHomePage', segment: 'manager-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_12__pages_employee_employee__["a" /* EmployeePage */]
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

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_manager_home_manager_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_employee_employee__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_search_search__ = __webpack_require__(109);
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
    MyApp.prototype.goToInventory = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_search_search__["a" /* SearchPage */]);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/roshvenkatesh/Sem7/SE/Project/GH/GrubHaven/Frontend/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list inset>\n      <button ion-item menuClose   (click)="goToEmployees()">\n        Manage Employees\n      </button>\n      <button ion-item menuClose   (click)="goToInventory()">\n        Inventory\n      </button>\n      <button ion-item menuClose   (click)="goToOrders()">\n        View Orders\n      </button>\n      <button ion-item  menuClose    (click)="goToTables()">\n        Manage Tables\n      </button>\n      <button ion-item  menuClose    (click)="goToReservations()">\n      Reservations\n      </button>\n      <button ion-item  menuClose    (click)="goToAnalytics()">\n      View Analytics\n      </button>\n      \n      <!-- *ngFor="let p of pages" (click)="openPage(p)"> -->\n\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/roshvenkatesh/Sem7/SE/Project/GH/GrubHaven/Frontend/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
            selector: 'page-manager-home',template:/*ion-inline-start:"/home/roshvenkatesh/Sem7/SE/Project/GH/GrubHaven/Frontend/src/pages/manager-home/manager-home.html"*/'<ion-header>\n    <ion-toolbar>\n      <ion-buttons left>\n        <button ion-button left menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>GrubHaven</ion-title>\n    </ion-toolbar>\n  </ion-header>\n<ion-content class = "basic">\n\n      <h1> Hello {{user}} </h1>\n   \n</ion-content>'/*ion-inline-end:"/home/roshvenkatesh/Sem7/SE/Project/GH/GrubHaven/Frontend/src/pages/manager-home/manager-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ManagerHomePage);
    return ManagerHomePage;
}());

//# sourceMappingURL=manager-home.js.map

/***/ }),

/***/ 48:
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

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manager_home_manager_home__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(108);
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
    function LoginPage(nav, authService, alertCtrl, loadingCtrl, http) {
        this.nav = nav;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
    }
    LoginPage.prototype.createAccount = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var postParams = { email: this.email, password: this.password };
        var header = { "headers": { "Content-Type": "application/json" } };
        console.log(postParams);
        this.authService.login(postParams).then(function (result) {
            var data = JSON.parse(JSON.stringify(result["user"]));
            if ((data.role) == 'manager') {
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_4__manager_home_manager_home__["a" /* ManagerHomePage */], { username: _this.email });
            }
            else
                console.log(data.role);
        }, function (err) {
            console.log(err);
            //this.nav.push(ManagerHomePage, { username: this.email });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/roshvenkatesh/Sem7/SE/Project/GH/GrubHaven/Frontend/src/pages/login/login.html"*/'<ion-content class="login-content" padding>\n\n  \n    <ion-grid no-padding>\n      <!-- logo -->\n      <ion-row header align-items-start align-items-stretch>\n          <!-- <ion-img style="width: 80px; height: 80px;" src="../../assets/imgs/grubhaven.png"></ion-img>       -->\n      <!-- Section form>-->\n    <ion-col col-10 offset-1 col-md-6 offset-md-3>\n      <form padding  #registerForm="ngForm">\n        <ion-row align-items-start>\n          <ion-col col-12>\n            <h1><strong>Welcome back,</strong> Please login to your account</h1>\n          </ion-col>\n        </ion-row>\n        <!-- Input-field -->\n        <ion-row>\n          <ion-col col-12>\n            <div input-field>\n              <!-- Input-field-text -->\n              <ion-item no-padding>\n                <ion-input type="text" placeholder="Email" name="userName" [(ngModel)]="email"  [ngModelOptions]="{standalone: true}" required></ion-input>\n  <!--               <ion-label no-margin *ngIf="!isUsernameValid">{{data.errorUser}}</ion-label>-->\n           </ion-item>\n              <!-- Input-field-password -->\n              <ion-item no-padding>\n                <ion-input  type="password" placeholder="Password" name="password" [(ngModel)]="password" [ngModelOptions]="{standalone: true}" required></ion-input>\n                <!-- <ion-label no-margin *ngIf="!isPasswordValid">{{data.errorPassword}}</ion-label> -->\n              </ion-item>\n            </div>\n            <!-- Login button -->\n            <ion-col col-12 no-padding>\n              <button no-margin ion-button full text-uppercase (click)=\'login()\'>Login</button>\n            </ion-col>\n            <!-- Description -->\n            <div description text-center>\n              <ion-row>\n                <!-- Reset your password button--> \n                <ion-col col-12 no-padding no-margin>\n                  <p no-margin padding>Forgot Password?<a>Reset Password</a> </p>\n                </ion-col>\n                <!-- Signup now button -->\n                <ion-col col-12 no-padding>\n                  <p no-margin no-padding>Not yet a member?<a (click)="createAccount()">Sign up now</a> </p>\n                </ion-col>\n              </ion-row>\n            </div>\n          </ion-col>\n        </ion-row>\n      </form>\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n  </ion-content>'/*ion-inline-end:"/home/roshvenkatesh/Sem7/SE/Project/GH/GrubHaven/Frontend/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_apiconfig__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(261);
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
            console.log(credentials);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map