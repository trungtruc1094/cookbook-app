(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./main/main.module": [
		"./src/app/main/main.module.ts",
		"main-main-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = "admin-cookbook";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authService.initAuthListener();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/auth-guard.service */ "./src/app/shared/auth-guard.service.ts");
/* harmony import */ var _shared_services_ui_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/services/ui.service */ "./src/app/shared/services/ui.service.ts");
/* harmony import */ var _main_apps_apps_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./main/apps/apps.service */ "./src/app/main/apps/apps.service.ts");
/* harmony import */ var src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/services/helper.service */ "./src/app/shared/services/helper.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.reducer */ "./src/app/app.reducer.ts");
/* harmony import */ var _shared_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/shared-components/confirmation-dialog/confirmation-dialog.component */ "./src/app/shared/shared-components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _shared_services_firebase_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/services/firebase.service */ "./src/app/shared/services/firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Third party Module



// Firebase Module




// Components



// Feature Module
// Service





// Others

// import { SharedModule } from "./shared/shared.module";



var routes = [
    {
        path: "",
        loadChildren: "./main/main.module#MainModule"
    },
    { path: "login", component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] },
    { path: "signup", component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"] }
    //   { path: "dashboard", component: DashboardComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"], _shared_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmationDialogComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
                _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].firebase),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                // SharedModule,
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
                angular_2_local_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageModule"].withConfig({
                    prefix: "cookbook",
                    storageType: "localStorage"
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_app_reducer__WEBPACK_IMPORTED_MODULE_20__["reducers"])
            ],
            providers: [
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"],
                _shared_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"],
                _shared_services_ui_service__WEBPACK_IMPORTED_MODULE_16__["UiService"],
                _main_apps_apps_service__WEBPACK_IMPORTED_MODULE_17__["AppsService"],
                src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_18__["HelperService"],
                _shared_services_firebase_service__WEBPACK_IMPORTED_MODULE_22__["FirebaseService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
            entryComponents: [_shared_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmationDialogComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.reducer.ts":
/*!********************************!*\
  !*** ./src/app/app.reducer.ts ***!
  \********************************/
/*! exports provided: reducers, getIsAuthenticated, getCurrentUser, getIsLoading, getIsLoadingApp, getAppList, getIsLoadingCate, getCategoryList, getIsUploadingRecipe, getUploadingTask, getDownloadingURLs, getRecipeList, getRecipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsAuthenticated", function() { return getIsAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return getCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoading", function() { return getIsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoadingApp", function() { return getIsLoadingApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppList", function() { return getAppList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoadingCate", function() { return getIsLoadingCate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategoryList", function() { return getCategoryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsUploadingRecipe", function() { return getIsUploadingRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUploadingTask", function() { return getUploadingTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDownloadingURLs", function() { return getDownloadingURLs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecipeList", function() { return getRecipeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecipe", function() { return getRecipe; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.reducer */ "./src/app/auth/auth.reducer.ts");
/* harmony import */ var _shared_ui_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/ui.reducer */ "./src/app/shared/ui.reducer.ts");
/* harmony import */ var _main_apps_apps_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/apps/apps.reducer */ "./src/app/main/apps/apps.reducer.ts");




var reducers = {
    auth: _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["AuthReducer"],
    ui: _shared_ui_reducer__WEBPACK_IMPORTED_MODULE_2__["UiReducer"],
    apps: _main_apps_apps_reducer__WEBPACK_IMPORTED_MODULE_3__["AppsReducer"]
};
// Get Auth State
var getAuthState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('auth');
var getIsAuthenticated = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getIsAuthenticated"]);
var getCurrentUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["getCurrentUser"]);
// Get Ui State
var getUiState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('ui');
var getIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUiState, _shared_ui_reducer__WEBPACK_IMPORTED_MODULE_2__["getIsLoading"]);
var getIsLoadingApp = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUiState, _shared_ui_reducer__WEBPACK_IMPORTED_MODULE_2__["getIsLoadingApp"]);
var getAppList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUiState, _shared_ui_reducer__WEBPACK_IMPORTED_MODULE_2__["getAppList"]);
// Get Apps State
var getAppsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('apps');
var getIsLoadingCate = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAppsState, _main_apps_apps_reducer__WEBPACK_IMPORTED_MODULE_3__["getIsLoadingCate"]);
var getCategoryList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAppsState, _main_apps_apps_reducer__WEBPACK_IMPORTED_MODULE_3__["getCategoryList"]);
var getIsUploadingRecipe = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAppsState, _main_apps_apps_reducer__WEBPACK_IMPORTED_MODULE_3__["getIsUploadingRecipe"]);
var getUploadingTask = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAppsState, _main_apps_apps_reducer__WEBPACK_IMPORTED_MODULE_3__["getUploadingTask"]);
var getDownloadingURLs = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAppsState, _main_apps_apps_reducer__WEBPACK_IMPORTED_MODULE_3__["getDownloadingURLs"]);
var getRecipeList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAppsState, _main_apps_apps_reducer__WEBPACK_IMPORTED_MODULE_3__["getRecipeList"]);
var getRecipe = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAppsState, _main_apps_apps_reducer__WEBPACK_IMPORTED_MODULE_3__["getRecipe"]);


/***/ }),

/***/ "./src/app/auth/auth.actions.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.actions.ts ***!
  \**************************************/
/*! exports provided: IS_AUTHENTICATED, IS_UNAUTHENTICATED, Authenticated, Unauthenticated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_AUTHENTICATED", function() { return IS_AUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_UNAUTHENTICATED", function() { return IS_UNAUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Authenticated", function() { return Authenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unauthenticated", function() { return Unauthenticated; });
var IS_AUTHENTICATED = '[Auth] Is Authenticated';
var IS_UNAUTHENTICATED = '[Auth] Is Unauthenticated';
var Authenticated = /** @class */ (function () {
    function Authenticated(payload) {
        this.payload = payload;
        this.type = IS_AUTHENTICATED;
    }
    return Authenticated;
}());

var Unauthenticated = /** @class */ (function () {
    function Unauthenticated() {
        this.type = IS_UNAUTHENTICATED;
    }
    return Unauthenticated;
}());



/***/ }),

/***/ "./src/app/auth/auth.reducer.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.reducer.ts ***!
  \**************************************/
/*! exports provided: AuthReducer, getIsAuthenticated, getCurrentUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthReducer", function() { return AuthReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsAuthenticated", function() { return getIsAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return getCurrentUser; });
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.actions */ "./src/app/auth/auth.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    isAuthenticated: false,
    currentUser: null
};
function AuthReducer(state, actions) {
    if (state === void 0) { state = initialState; }
    switch (actions.type) {
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["IS_AUTHENTICATED"]:
            return {
                isAuthenticated: true,
                currentUser: actions.payload
            };
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["IS_UNAUTHENTICATED"]:
            return __assign({}, state, { isAuthenticated: false });
        default:
            return state;
    }
}
var getIsAuthenticated = function (state) { return state.isAuthenticated; };
var getCurrentUser = function (state) { return state.currentUser; };


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.actions */ "./src/app/auth/auth.actions.ts");
/* harmony import */ var _shared_ui_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/ui.actions */ "./src/app/shared/ui.actions.ts");
/* harmony import */ var _main_apps_apps_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../main/apps/apps.service */ "./src/app/main/apps/apps.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Store

// Actions



var AuthService = /** @class */ (function () {
    function AuthService(afAuth, afStore, router, localService, store, appsService) {
        this.afAuth = afAuth;
        this.afStore = afStore;
        this.router = router;
        this.localService = localService;
        this.store = store;
        this.appsService = appsService;
    }
    AuthService.prototype.initAuthListener = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                console.log('User Authenticate: ', user);
                // this.authChange.next(true);
                _this.store.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_6__["Authenticated"](_this.af_current_user));
                // Loading Category from Service
                _this.appsService.getCategoryList();
            }
            else {
                console.log('User Unauthenicate');
                _this.store.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_6__["Unauthenticated"]());
                _this.router.navigate(["/login"]);
            }
        });
    };
    AuthService.prototype.signUpUser = function (signedUpUser) {
        var _this = this;
        this.store.dispatch(new _shared_ui_actions__WEBPACK_IMPORTED_MODULE_7__["Isloading"]());
        var currentUserId;
        this.afAuth.auth
            .createUserWithEmailAndPassword(signedUpUser.email, signedUpUser.password)
            .then(function (result) {
            console.log("Sign Up successfully");
            _this.setUserToLocal();
            currentUserId = _this.afAuth.auth.currentUser.uid;
            // Return true if login success
            return currentUserId;
        })
            .then(function (result) {
            if (result) {
                _this.afStore.collection("signedUpUsers").doc(result).set({
                    id: currentUserId,
                    email: signedUpUser.email,
                    fullName: signedUpUser.fullName,
                    createdDate: new Date()
                });
                _this.store.dispatch(new _shared_ui_actions__WEBPACK_IMPORTED_MODULE_7__["Isunloading"]());
                _this.af_current_user = {
                    userId: currentUserId,
                    fullName: signedUpUser.fullName,
                    email: signedUpUser.email,
                    password: signedUpUser.password
                };
                _this.store.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_6__["Authenticated"](_this.af_current_user));
                _this.localService.set("af_current_user", _this.af_current_user);
            }
            else {
                throw new Error("Failed save to database");
            }
        })
            .catch(function (error) {
            _this.store.dispatch(new _shared_ui_actions__WEBPACK_IMPORTED_MODULE_7__["Isunloading"]());
            console.log("Sign Up failed");
            _this.store.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_6__["Unauthenticated"]());
        });
    };
    AuthService.prototype.signInUser = function (authUser) {
        var _this = this;
        var currentUserId;
        this.store.dispatch(new _shared_ui_actions__WEBPACK_IMPORTED_MODULE_7__["Isloading"]());
        this.afAuth.auth
            .signInWithEmailAndPassword(authUser.email, authUser.password)
            .then(function (result) {
            console.log("Login successfully");
            _this.setUserToLocal();
            currentUserId = _this.afAuth.auth.currentUser.uid;
            // Return true if login success
            return currentUserId;
        })
            .then(function (result) {
            if (result) {
                _this.afStore.doc('signedUpUsers/' + result).valueChanges().subscribe(function (user) {
                    _this.store.dispatch(new _shared_ui_actions__WEBPACK_IMPORTED_MODULE_7__["Isunloading"]());
                    _this.af_current_user = {
                        userId: result,
                        fullName: user['fullName'],
                        email: user['email']
                    };
                    _this.store.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_6__["Authenticated"](_this.af_current_user));
                    _this.localService.set("af_current_user", _this.af_current_user);
                });
            }
            else {
                throw new Error("Failed to get user info");
            }
        })
            .catch(function (error) {
            _this.store.dispatch(new _shared_ui_actions__WEBPACK_IMPORTED_MODULE_7__["Isunloading"]());
            console.log("Login failed 1");
            _this.store.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_6__["Unauthenticated"]());
        });
    };
    AuthService.prototype.signOutUser = function () {
        this.afAuth.auth.signOut();
        this.current_user = "";
        this.token = "";
        console.log('Set unauthenticate');
        this.store.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_6__["Unauthenticated"]());
        // Remove current user & token from local
        this.localService.set("isLoggedIn", false);
        this.localService.remove("token", "current_user");
    };
    AuthService.prototype.isAuth = function () {
        if (this.localService.get("isLoggedIn") && this.localService.get("token")) {
            this.token = this.localService.get("token").toString();
            if (this.localService.get("current_user")) {
                this.current_user = this.localService.get("current_user");
            }
            return true;
        }
        else {
            return false;
        }
    };
    // Helper Functions
    AuthService.prototype.setUserToLocal = function () {
        var currentToken = JSON.parse(JSON.stringify(this.afAuth.auth.currentUser)).stsTokenManager.accessToken;
        console.log("Set User To Local", currentToken);
        this.localService.set("isLoggedIn", true);
        this.localService.set("token", currentToken);
        this.localService.set("current_user", this.afAuth.auth.currentUser);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular_2_local_storage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _main_apps_apps_service__WEBPACK_IMPORTED_MODULE_8__["AppsService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login {\n  background: url('signupBackground.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  min-height: 100vh;\n}\n\n#login .dark-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  min-height: 100vh;\n  background: rgba(0, 0, 0, 0.7);\n}\n\n#login .dark-overlay .logo-image img {\n  display:block;\n  margin:auto;\n  width: 350px;\n  height: auto;\n  padding: 20px;\n}\n\n#login .home-inner {\n  margin-top: 10px;\n}\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- LOGIN -->\n<section id=\"login\">\n  <div class=\"dark-overlay\">\n    <div class=\"logo-image\">\n      <img src=\"../../../assets/img/logo.png\" class=\"img-fluid img\" alt=\"Responsive image\">\n    </div>\n    <div class=\"home-inner container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 mx-auto\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <h4>Account Login</h4>\n            </div>\n            <div class=\"card-body\">\n              <form action=\"index.html\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n                <div class=\"form-group\">\n                  <label for=\"email\">Email</label>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter your email\" #email=\"ngModel\" ngModel name=\"email\"\n                    required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" />\n                </div>\n                <div class=\"alert alert-danger\" *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n                  <div *ngIf=\"email.errors?.required\">\n                    Email field can't be blank\n                  </div>\n                  <div *ngIf=\"email.errors?.pattern && email.touched\">\n                    The email id doesn't seem right\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"password\">Password</label>\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Enter your password\" #password=\"ngModel\"\n                    ngModel name=\"password\" required />\n                </div>\n                <div *ngIf=\"password.invalid && password.touched\" class=\"alert alert-danger\">\n                  <div *ngIf=\"password.errors?.required\">\n                    Password field can't be blank\n                  </div>\n                </div>\n                <input type=\"submit\" value=\"Login\" class=\"btn btn-primary btn-block\" [disabled]=\"!f.form.valid\" *ngIf=\"!(isLoading$ | async)\" />\n                <button class=\"btn btn-success btn-block\" disabled *ngIf=\"(isLoading$ | async)\">\n                  <h4 class=\"saving text-center\">\n                    Logging<span>.</span><span>.</span><span>.</span>\n                  </h4>\n                </button>\n                <a [routerLink]=\"['/signup']\">\n                  <p class=\"text-center text-primary mt-2\"><em>Don't have an account?</em></p>\n                </a>\n              </form>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.reducer */ "./src/app/app.reducer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// private authService: AuthService
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, localService, store) {
        this.authService = authService;
        this.router = router;
        this.localService = localService;
        this.store = store;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.isAuthenticatedSubs = this.authService.isAuthenticated.subscribe(result => {
        //   console.log('Login Result', result);
        //   if (result) {
        //     this.router.navigate(["/dashboard"]);
        //   }
        // })
        this.isLoading$ = this.store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_5__["getIsLoading"]);
        this.isAuthenticated$ = this.store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_5__["getIsAuthenticated"]);
        this.isAuthenticated$.subscribe(function (result) {
            console.log('Result Authenticate: ', result);
            if (result) {
                _this.router.navigate(["/dashboard"]);
            }
        });
        if (this.localService.get("isLoggedIn")) {
            console.log('Run login');
            this.authService.current_user = this.localService.get("current_user");
            this.authService.token = this.localService.get("token").toString();
            this.router.navigate(["/dashboard"]);
        }
    };
    LoginComponent.prototype.onSubmit = function (form) {
        this.authService.signInUser({
            email: form.value.email,
            password: form.value.password
        });
    };
    LoginComponent.prototype.onSignUp = function () {
        this.router.navigate['/signup'];
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#signup {\n  background: url('signupBackground.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  min-height: 100vh;\n}\n\n#signup .dark-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  min-height: 100vh;\n  background: rgba(0, 0, 0, 0.7);\n}\n\n#signup .dark-overlay .logo-image img {\n  display:block;\n  margin:auto;\n  width: 350px;\n  height: auto;\n  padding: 20px;\n}\n\n#signup .home-inner {\n  margin-top: 10px;\n}\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SIGNUP -->\n<section id=\"signup\">\n  <div class=\"dark-overlay\">\n    <div class=\"logo-image\">\n      <img src=\"../../../assets/img/logo.png\" class=\"img-fluid img\" alt=\"Responsive image\">\n    </div>\n    <div class=\"home-inner container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 mx-auto\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <h4>Account Signup</h4>\n            </div>\n            <div class=\"card-body\">\n              <form action=\"index.html\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n                <div class=\"form-group\">\n                  <label for=\"fullname\">Full Name</label>\n                  <input type=\"text\" class=\"form-control\" #fullname=\"ngModel\" ngModel name=\"fullname\" required />\n                </div>\n                <div class=\"alert alert-danger\" *ngIf=\"fullname.invalid && (fullname.dirty || fullname.touched)\">\n                  <div *ngIf=\"fullname.errors?.required\">\n                    Name field can't be blank\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"email\">Email</label>\n                  <input type=\"text\" class=\"form-control\" #email=\"ngModel\" ngModel name=\"email\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" />\n                </div>\n                <div class=\"alert alert-danger\" *ngIf=\"email.invalid && (email.dirty || email.touched)\">\n                  <div *ngIf=\"email.errors?.required\">\n                    Email field can't be blank\n                  </div>\n                  <div *ngIf=\"email.errors?.pattern\">\n                    The email id doesn't seem right\n                  </div>\n                </div>\n                <div ngModelGroup=\"userPassword\" #userPassword=\"ngModelGroup\" required>\n                  <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" class=\"form-control\" ngModel name=\"pwd\" minlength=\"8\" required />\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"password1\">Confirm password</label>\n                    <input type=\"password\" class=\"form-control\" ngModel name=\"confirmPwd\" />\n                  </div>\n                  <div class=\"alert alert-danger\" *ngIf=\"\n                          (userPassword.invalid ||\n                            userPassword.value?.pwd !=\n                              userPassword.value?.confirmPwd) &&\n                          userPassword.touched\n                        \">\n                    <div *ngIf=\"userPassword.invalid; else: nomatch\">\n                      Password needs to be more than 8 characters\n                    </div>\n                    <ng-template #nomatch> Passwords don't match </ng-template>\n                  </div>\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input type=\"checkbox\" class=\"form-check-input\" #agree=\"ngModel\" ngModel name=\"agree\" required\n                      [ngClass]=\"{'text-danger': agree.invalid}\">\n                    Agree to Terms and Conditions.\n                  </label>\n                </div>\n                <div class=\"alert alert-warning\" *ngIf=\"agree.invalid\">\n                  Please check to \"Agree to Terms and Conditions.\"\n                </div>\n                <input type=\"submit\" value=\"Register\" class=\"btn btn-success btn-block\" [disabled]=\"!f.form.valid\" *ngIf=\"!(isLoading$ | async)\"/>\n                <button class=\"btn btn-success btn-block\" disabled *ngIf=\"(isLoading$ | async)\">\n                  <h4 class=\"saving text-center\">\n                    Registering<span>.</span><span>.</span><span>.</span>\n                  </h4>\n                </button>\n                <a routerLink=\"/login\">\n                  <p class=\"text-center text-primary mt-2\"><i class=\"fa fa-arrow-left\"></i><em> Back to login</em></p>\n                </a>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-2-local-storage */ "./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.reducer */ "./src/app/app.reducer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, router, localService, store) {
        this.authService = authService;
        this.router = router;
        this.localService = localService;
        this.store = store;
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.isAuthenticatedSubs = this.authService.isAuthenticated.subscribe(result => {
        //   console.log('Login Result', result);
        //   if (result) {
        //     this.router.navigate(["/dashboard"]);
        //   }
        // })
        this.isAuthenticated$ = this.store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_5__["getIsAuthenticated"]);
        this.isLoading$ = this.store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_5__["getIsLoading"]);
        this.isAuthenticated$.subscribe(function (result) {
            if (result) {
                _this.router.navigate(["/dashboard"]);
            }
        });
        if (this.localService.get("isLoggedIn")) {
            console.log('Run login');
            this.authService.current_user = this.localService.get("current_user");
            this.authService.token = this.localService.get("token").toString();
            this.router.navigate(["/dashboard"]);
        }
    };
    SignupComponent.prototype.onSubmit = function (form) {
        // console.log('password:', form.value.userPassword.pwd);
        this.authService.signUpUser({
            fullName: form.value.fullname,
            email: form.value.email,
            password: form.value.userPassword.pwd
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angular_2_local_storage__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/apps.actions.ts":
/*!*******************************************!*\
  !*** ./src/app/main/apps/apps.actions.ts ***!
  \*******************************************/
/*! exports provided: IS_LOADING_CATE, IS_UNLOADING_CATE, UPLOADING_RECIPE, UN_UPLOADING_RECIPE, DOWNLOADING_URLS, SENDING_RECIPES, SENDING_RECIPE, IsloadingCate, IsunloadingCate, UploadingRecipe, UnUploadingRecipe, DownloadingURLs, SendingRecipes, SendingRecipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_LOADING_CATE", function() { return IS_LOADING_CATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_UNLOADING_CATE", function() { return IS_UNLOADING_CATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOADING_RECIPE", function() { return UPLOADING_RECIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UN_UPLOADING_RECIPE", function() { return UN_UPLOADING_RECIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWNLOADING_URLS", function() { return DOWNLOADING_URLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SENDING_RECIPES", function() { return SENDING_RECIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SENDING_RECIPE", function() { return SENDING_RECIPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsloadingCate", function() { return IsloadingCate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsunloadingCate", function() { return IsunloadingCate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadingRecipe", function() { return UploadingRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnUploadingRecipe", function() { return UnUploadingRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadingURLs", function() { return DownloadingURLs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendingRecipes", function() { return SendingRecipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendingRecipe", function() { return SendingRecipe; });
var IS_LOADING_CATE = '[Apps] Is Loading Cate';
var IS_UNLOADING_CATE = '[Apps] Is Unloading Cate';
var UPLOADING_RECIPE = '[Apps] Uploading Recipe';
var UN_UPLOADING_RECIPE = '[Apps] UnUploading Recipe';
var DOWNLOADING_URLS = '[Apps] Downloading URLs';
var SENDING_RECIPES = '[Apps] Sending Recipes';
var SENDING_RECIPE = '[Apps] Sending Recipe';
var IsloadingCate = /** @class */ (function () {
    function IsloadingCate() {
        this.type = IS_LOADING_CATE;
    }
    return IsloadingCate;
}());

var IsunloadingCate = /** @class */ (function () {
    function IsunloadingCate(payload) {
        this.payload = payload;
        this.type = IS_UNLOADING_CATE;
    }
    return IsunloadingCate;
}());

var UploadingRecipe = /** @class */ (function () {
    function UploadingRecipe(payload) {
        this.payload = payload;
        this.type = UPLOADING_RECIPE;
    }
    return UploadingRecipe;
}());

var UnUploadingRecipe = /** @class */ (function () {
    function UnUploadingRecipe() {
        this.type = UN_UPLOADING_RECIPE;
    }
    return UnUploadingRecipe;
}());

var DownloadingURLs = /** @class */ (function () {
    function DownloadingURLs(payload) {
        this.payload = payload;
        this.type = DOWNLOADING_URLS;
    }
    return DownloadingURLs;
}());

var SendingRecipes = /** @class */ (function () {
    function SendingRecipes(payload) {
        this.payload = payload;
        this.type = SENDING_RECIPES;
    }
    return SendingRecipes;
}());

var SendingRecipe = /** @class */ (function () {
    function SendingRecipe(payload) {
        this.payload = payload;
        this.type = SENDING_RECIPE;
    }
    return SendingRecipe;
}());



/***/ }),

/***/ "./src/app/main/apps/apps.reducer.ts":
/*!*******************************************!*\
  !*** ./src/app/main/apps/apps.reducer.ts ***!
  \*******************************************/
/*! exports provided: AppsReducer, getIsLoadingCate, getCategoryList, getIsUploadingRecipe, getUploadingTask, getDownloadingURLs, getRecipeList, getRecipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsReducer", function() { return AppsReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoadingCate", function() { return getIsLoadingCate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategoryList", function() { return getCategoryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsUploadingRecipe", function() { return getIsUploadingRecipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUploadingTask", function() { return getUploadingTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDownloadingURLs", function() { return getDownloadingURLs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecipeList", function() { return getRecipeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecipe", function() { return getRecipe; });
/* harmony import */ var _apps_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apps.actions */ "./src/app/main/apps/apps.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    isLoadingCate: false,
    categoryList: null,
    isUploadingRecipe: false,
    uploadingTask: null,
    recipeImages: null,
    recipeList: null,
    recipe: null
};
function AppsReducer(state, actions) {
    if (state === void 0) { state = initialState; }
    switch (actions.type) {
        case _apps_actions__WEBPACK_IMPORTED_MODULE_0__["IS_LOADING_CATE"]:
            return __assign({}, state, { isLoadingCate: true, categoryList: null });
        case _apps_actions__WEBPACK_IMPORTED_MODULE_0__["IS_UNLOADING_CATE"]:
            return __assign({}, state, { categoryList: actions.payload });
        case _apps_actions__WEBPACK_IMPORTED_MODULE_0__["UPLOADING_RECIPE"]:
            return __assign({}, state, { isUploadingRecipe: true, uploadingTask: actions.payload });
        case _apps_actions__WEBPACK_IMPORTED_MODULE_0__["UN_UPLOADING_RECIPE"]:
            return __assign({}, state, { isUploadingRecipe: false });
        case _apps_actions__WEBPACK_IMPORTED_MODULE_0__["DOWNLOADING_URLS"]:
            return __assign({}, state, { recipeImages: actions.payload });
        case _apps_actions__WEBPACK_IMPORTED_MODULE_0__["SENDING_RECIPES"]:
            return __assign({}, state, { recipeList: actions.payload });
        case _apps_actions__WEBPACK_IMPORTED_MODULE_0__["SENDING_RECIPE"]:
            return __assign({}, state, { recipe: actions.payload });
        default:
            return state;
    }
}
var getIsLoadingCate = function (state) { return state.isLoadingCate; };
var getCategoryList = function (state) { return state.categoryList; };
var getIsUploadingRecipe = function (state) { return state.isUploadingRecipe; };
var getUploadingTask = function (state) { return state.uploadingTask; };
var getDownloadingURLs = function (state) { return state.recipeImages; };
var getRecipeList = function (state) { return state.recipeList; };
var getRecipe = function (state) { return state.recipe; };


/***/ }),

/***/ "./src/app/main/apps/apps.service.ts":
/*!*******************************************!*\
  !*** ./src/app/main/apps/apps.service.ts ***!
  \*******************************************/
/*! exports provided: AppsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsService", function() { return AppsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _apps_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apps.actions */ "./src/app/main/apps/apps.actions.ts");
/* harmony import */ var src_app_shared_services_firebase_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/firebase.service */ "./src/app/shared/services/firebase.service.ts");
/* harmony import */ var src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/helper.service */ "./src/app/shared/services/helper.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_shared_services_ui_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/ui.service */ "./src/app/shared/services/ui.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppsService = /** @class */ (function () {
    function AppsService(afStore, afStorage, store, firebaseService, helperService, uiService) {
        this.afStore = afStore;
        this.afStorage = afStorage;
        this.store = store;
        this.firebaseService = firebaseService;
        this.helperService = helperService;
        this.uiService = uiService;
        this.offset = 8;
        this.prevKeys = []; // for prev button
        this.nextKey$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.prevKeys$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
    }
    // Adding new recipe
    AppsService.prototype.addNewRecipe = function (fileArr, recipeObj, appId, callback, callbackError) {
        var _this = this;
        var downloadURLs = [];
        var fileList = fileArr;
        var uploads = [];
        var _loop_1 = function (file) {
            var fileName = file.name;
            var path = "files/" + fileName;
            var ref = this_1.afStorage.ref(path);
            var task = this_1.afStorage.upload(path, file);
            var percentage$ = task.percentageChanges();
            var uploadFile = {
                fileName: fileName,
                percentage: percentage$
            };
            uploads.push(uploadFile);
            this_1.store.dispatch(new _apps_actions__WEBPACK_IMPORTED_MODULE_6__["UploadingRecipe"](uploads));
            // get notified when the download URL is available
            task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                ref.getDownloadURL().subscribe(function (res) {
                    downloadURLs.push(res);
                    if (downloadURLs.length == fileArr.length) {
                        var recipeObject_1 = __assign({}, recipeObj, { id: _this.afStore.createId(), recipeImages: downloadURLs, searchString: _this.uiService.changeToPlainText(recipeObj.recipeName) });
                        _this.store.dispatch(new _apps_actions__WEBPACK_IMPORTED_MODULE_6__["DownloadingURLs"](recipeObject_1.recipeImages));
                        _this.firebaseService.addDocumentToCollectionInDocument('availableApps', appId, 'recipeList', recipeObject_1).then(function (res) {
                            _this.store.dispatch(new _apps_actions__WEBPACK_IMPORTED_MODULE_6__["UnUploadingRecipe"]());
                            _this.helperService.updateRecipeQuantityToApp(recipeObject_1.appId, true);
                            callback('Adding recipe successfully');
                        })
                            .catch(function (error) {
                            callbackError('Unable to add recipe');
                        });
                    }
                });
            })).subscribe();
        };
        var this_1 = this;
        for (var _i = 0, fileList_1 = fileList; _i < fileList_1.length; _i++) {
            var file = fileList_1[_i];
            _loop_1(file);
        }
    };
    // Get Recipe List based on search
    AppsService.prototype.getRecipeListOnSearch = function (appId, searchValue) {
        var _this = this;
        this.firebaseService.getCollectionOnQuery('availableApps', appId, 'recipeList', function (ref) { return ref.orderBy('searchString').startAt(_this.uiService.changeToPlainText(searchValue)).endAt(_this.uiService.changeToPlainText(searchValue) + "\uf8ff").limit(10); }).subscribe(function (recipes) {
            _this.processPaginationFields(recipes);
            _this.store.dispatch(new _apps_actions__WEBPACK_IMPORTED_MODULE_6__["SendingRecipes"](_this.recipes));
        });
    };
    // Get Recipe List and Pagination
    AppsService.prototype.getRecipeListFirst = function (appId, key) {
        if (appId) {
            this.appId = appId;
            this.getRecipeList(appId, this.offset);
        }
        else {
            this.store.dispatch(new _apps_actions__WEBPACK_IMPORTED_MODULE_6__["SendingRecipes"](null));
        }
    };
    AppsService.prototype.getRecipeList = function (appId, offset, key) {
        var _this = this;
        if (key) {
            this.firebaseService.getCollectionOnQuery('availableApps', appId, 'recipeList', function (ref) { return ref.orderBy('id').startAt(key).limit(offset + 1); }).subscribe(function (recipes) {
                _this.processPaginationFields(recipes);
                _this.store.dispatch(new _apps_actions__WEBPACK_IMPORTED_MODULE_6__["SendingRecipes"](_this.recipes));
            });
        }
        else {
            this.firebaseService.getCollectionOnQuery('availableApps', appId, 'recipeList', function (ref) { return ref.orderBy('id').limit(offset + 1); }).subscribe(function (recipes) {
                _this.processPaginationFields(recipes);
                _this.store.dispatch(new _apps_actions__WEBPACK_IMPORTED_MODULE_6__["SendingRecipes"](_this.recipes));
            });
        }
    };
    AppsService.prototype.processPaginationFields = function (recipes) {
        this.recipes = lodash__WEBPACK_IMPORTED_MODULE_9__["slice"](recipes, 0, this.offset);
        this.nextKey = lodash__WEBPACK_IMPORTED_MODULE_9__["get"](recipes[this.offset], 'id');
        this.nextKey$.next(this.nextKey);
    };
    AppsService.prototype.nextPage = function () {
        this.prevKeys.push(lodash__WEBPACK_IMPORTED_MODULE_9__["first"](this.recipes)['id']); // set current key as pointer for previous page
        this.prevKeys$.next(this.prevKeys);
        this.getRecipeList(this.appId, this.offset, this.nextKey);
    };
    AppsService.prototype.prevPage = function () {
        var prevKey = lodash__WEBPACK_IMPORTED_MODULE_9__["last"](this.prevKeys); // use last key in array
        this.prevKeys = lodash__WEBPACK_IMPORTED_MODULE_9__["dropRight"](this.prevKeys); // then remove the last key in the array
        this.prevKeys$.next(this.prevKeys);
        this.getRecipeList(this.appId, this.offset, prevKey);
    };
    // Get Category List
    AppsService.prototype.getCategoryList = function () {
        var _this = this;
        this.store.dispatch(new _apps_actions__WEBPACK_IMPORTED_MODULE_6__["IsloadingCate"]());
        this.afStore.collection('availableCategories', function (ref) { return ref.orderBy('id'); }).valueChanges()
            .subscribe(function (categories) {
            _this.store.dispatch(new _apps_actions__WEBPACK_IMPORTED_MODULE_6__["IsunloadingCate"](categories));
            _this.helperService.updateCategories();
        }, function (error) {
            _this.store.dispatch(new _apps_actions__WEBPACK_IMPORTED_MODULE_6__["IsunloadingCate"](null));
        });
    };
    // Remove Recipe
    AppsService.prototype.removeRecipe = function (id, appId, callback, errorCallback) {
        var _this = this;
        this.firebaseService.removeDocumentInCollectionOfDocument('availableApps', appId, 'recipeList', id)
            .then(function (res) {
            if (res) {
                _this.helperService.updateRecipeQuantityToApp(appId, false);
                callback('Remove recipe successfully');
            }
        })
            .catch(function (error) {
            errorCallback('Remove recipe unsuccessfully');
        });
    };
    AppsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            src_app_shared_services_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"],
            src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_8__["HelperService"],
            src_app_shared_services_ui_service__WEBPACK_IMPORTED_MODULE_10__["UiService"]])
    ], AppsService);
    return AppsService;
}());



/***/ }),

/***/ "./src/app/shared/auth-guard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/auth-guard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isAuth()) {
            return true;
        }
        else {
            this.router.navigate(["/login"]);
            // return false;
        }
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.canLoad = function (route) {
        if (this.authService.isAuth()) {
            return true;
        }
        else {
            this.router.navigate(["/login"]);
            // return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/services/firebase.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/firebase.service.ts ***!
  \*****************************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FirebaseService = /** @class */ (function () {
    function FirebaseService(afStorage, afStore, afAuth) {
        this.afStorage = afStorage;
        this.afStore = afStore;
        this.afAuth = afAuth;
    }
    // ADD, UPDATE, REMOVE DOCUMENT
    FirebaseService.prototype.addDocument = function (documentObj, collectionName) {
        var id = documentObj['id'];
        return this.afStore.collection("" + collectionName).doc(id).set(documentObj)
            .then(function (res) {
            return true;
        })
            .catch(function (error) {
            throw new Error('Unable to add new document to collection');
        });
    };
    FirebaseService.prototype.updateDocument = function (documentChangedObj, collectionName, documentId) {
        return this.afStore.doc(collectionName + "/" + documentId).update(documentChangedObj)
            .then(function (result) {
            return true;
        })
            .catch(function (error) {
            throw new Error('Unable to upload the document');
        });
    };
    FirebaseService.prototype.getDocument = function (collectionName, documentId) {
        return this.afStore.doc(collectionName + "/" + documentId).valueChanges();
    };
    // COLLECTION RETRIEVE
    FirebaseService.prototype.getCollection = function (collectionName) {
        return this.afStore.collection("" + collectionName).valueChanges();
    };
    // COLLECTION RETRIEVE BASED ON ID
    FirebaseService.prototype.getCollectionOnQuery = function (collectionParentName, docParentId, collectionName, queryFn) {
        return this.afStore.doc(collectionParentName + "/" + docParentId).collection("" + collectionName, queryFn).valueChanges();
    };
    // CONTROL RECIPES INSIDE DOCUMENT 
    FirebaseService.prototype.addDocumentToCollectionInDocument = function (collectionNameParent, docId, collectionName, documentObj) {
        var id = documentObj['id'];
        return this.afStore.doc(collectionNameParent + "/" + docId).collection("" + collectionName).doc(id).set(documentObj)
            .then(function (res) {
            return true;
        })
            .catch(function (error) {
            throw new Error('Unable to add new document to collection');
        });
    };
    FirebaseService.prototype.removeDocumentInCollectionOfDocument = function (collectionNameParent, docParentId, collectionName, docId) {
        return this.afStore.doc(collectionNameParent + "/" + docParentId).collection("" + collectionName).doc("" + docId).delete()
            .then(function (result) {
            return true;
        })
            .catch(function (error) {
            throw new Error('Unable to remove the document');
        });
    };
    FirebaseService.prototype.getDocumentInCollectionOfDocument = function (collectionNameParent, docParentId, collectionName, docId) {
        return this.afStore.doc(collectionNameParent + "/" + docParentId).collection(collectionName).doc(docId).valueChanges();
    };
    FirebaseService.prototype.updateDocumentOfCollectionInDocument = function (collectionNameParent, docId, collectionName, documentObj) {
        var id = documentObj['id'];
        return this.afStore.doc(collectionNameParent + "/" + docId).collection("" + collectionName).doc(id).set(documentObj)
            .then(function (res) {
            return true;
        })
            .catch(function (error) {
            throw new Error('Unable to add new document to collection');
        });
    };
    FirebaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/shared/services/helper.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/helper.service.ts ***!
  \***************************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-components/confirmation-dialog/confirmation-dialog.component */ "./src/app/shared/shared-components/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase.service */ "./src/app/shared/services/firebase.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app.reducer */ "./src/app/app.reducer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HelperService = /** @class */ (function () {
    function HelperService(modalService, firebaseService, store) {
        this.modalService = modalService;
        this.firebaseService = firebaseService;
        this.store = store;
        this.categoriesList = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.recipe_level = [
            {
                id: 1,
                title: 'Easy'
            },
            {
                id: 2,
                title: 'Medium'
            },
            {
                id: 3,
                title: 'Hard'
            }
        ];
        this.ingredient_unit = [
            {
                id: 1,
                title: 'Kg(s)'
            },
            {
                id: 2,
                title: 'Gram(s)'
            },
            {
                id: 3,
                title: 'mL'
            },
            {
                id: 4,
                title: 'L'
            }
        ];
        this.categories = [];
    }
    HelperService.prototype.showPNotify = function (title, message, type) {
        new PNotify({
            target: document.body,
            data: {
                title: title,
                text: message,
                type: type
            }
        });
    };
    HelperService.prototype.confirmDialogComponent = function (title, message, btnOkText, btnCancelText, dialogSize) {
        if (btnOkText === void 0) { btnOkText = 'OK'; }
        if (btnCancelText === void 0) { btnCancelText = 'Cancel'; }
        if (dialogSize === void 0) { dialogSize = 'sm'; }
        var modalRef = this.modalService.open(_shared_components_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmationDialogComponent"], { size: dialogSize });
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.message = message;
        modalRef.componentInstance.btnOkText = btnOkText;
        modalRef.componentInstance.btnCancelText = btnCancelText;
        return modalRef.result;
    };
    HelperService.prototype.updateRecipeQuantityToApp = function (id, flag) {
        var _this = this;
        if (flag) {
            this.firebaseService.getDocument('availableApps', id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (res) {
                var updatedRecipeQuantity = res['recipeQuantity'] + 1;
                _this.firebaseService.updateDocument({ recipeQuantity: updatedRecipeQuantity }, 'availableApps', id);
            });
        }
        else {
            this.firebaseService.getDocument('availableApps', id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (res) {
                var updatedRecipeQuantity = res['recipeQuantity'] - 1;
                _this.firebaseService.updateDocument({ recipeQuantity: updatedRecipeQuantity }, 'availableApps', id);
            });
        }
    };
    HelperService.prototype.convertLevelId = function (id) {
        var result = this.recipe_level.filter(function (element) { return element.id == +id; });
        return result[0].title;
    };
    HelperService.prototype.convertUnitId = function (id) {
        var result = this.ingredient_unit.filter(function (element) { return element.id === +id; });
        return result[0].title;
    };
    HelperService.prototype.updateCategories = function () {
        var _this = this;
        this.store.select(_app_reducer__WEBPACK_IMPORTED_MODULE_7__["getCategoryList"]).subscribe(function (categories) {
            _this.categories = categories;
            _this.categoriesList.next(_this.categories);
        });
    };
    HelperService.prototype.convertCategoryId = function (id) {
        var result = this.categories.filter(function (element) { return element.id === +id; });
        return result[0].category;
    };
    HelperService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])
    ], HelperService);
    return HelperService;
}());



/***/ }),

/***/ "./src/app/shared/services/ui.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/services/ui.service.ts ***!
  \***********************************************/
/*! exports provided: UiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiService", function() { return UiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ui_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui.actions */ "./src/app/shared/ui.actions.ts");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firebase.service */ "./src/app/shared/services/firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UiService = /** @class */ (function () {
    // appsChanged = new Subject<MoApp[]>();
    function UiService(afStore, store, firebaseService) {
        this.afStore = afStore;
        this.store = store;
        this.firebaseService = firebaseService;
    }
    UiService.prototype.getAppList = function () {
        var _this = this;
        this.store.dispatch(new _ui_actions__WEBPACK_IMPORTED_MODULE_3__["IsloadingApp"]());
        this.firebaseService.getCollection('availableApps').subscribe(function (apps) {
            _this.store.dispatch(new _ui_actions__WEBPACK_IMPORTED_MODULE_3__["IsunloadingApp"](apps));
        }, function (err) {
            _this.store.dispatch(new _ui_actions__WEBPACK_IMPORTED_MODULE_3__["IsunloadingApp"](null));
        });
        // this.afStore.collection('availableApps').snapshotChanges()
        //     .pipe(
        //         map(docArray => {
        //             return docArray.map(doc => {
        //                 return {
        //                     id: doc.payload.doc.id,
        //                     appName: doc.payload.doc.data()["appName"],
        //                     createdDate: doc.payload.doc.data()["createdDate"],
        //                     recipeQuantity: doc.payload.doc.data()["recipeQuantity"],
        //                     url: doc.payload.doc.data()["url"]
        //                 };
        //             });
        //             // throw Error();
        //         })
        //     )
        //     .subscribe(
        //         (apps) => {
        //             // this.appsChanged.next([...apps]);
        //             this.store.dispatch(new Ui.IsunloadingApp(apps));
        //         },
        //         error => {
        //             // this.appsChanged.next(null);
        //             this.store.dispatch(new Ui.IsunloadingApp(null));
        //         }
        //     );
    };
    UiService.prototype.changeToPlainText = function (name) {
        var url = name.toLowerCase();
        url = url.replace(/\s+/g, '');
        return url;
    };
    UiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]])
    ], UiService);
    return UiService;
}());



/***/ }),

/***/ "./src/app/shared/shared-components/confirmation-dialog/confirmation-dialog.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/shared/shared-components/confirmation-dialog/confirmation-dialog.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/shared-components/confirmation-dialog/confirmation-dialog.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/shared-components/confirmation-dialog/confirmation-dialog.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ title }}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"dismiss()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  {{ message }}\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"decline()\">{{ btnCancelText }}</button>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"accept()\">{{ btnOkText }}</button>\n</div>"

/***/ }),

/***/ "./src/app/shared/shared-components/confirmation-dialog/confirmation-dialog.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/shared-components/confirmation-dialog/confirmation-dialog.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationDialogComponent = /** @class */ (function () {
    function ConfirmationDialogComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ConfirmationDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmationDialogComponent.prototype.decline = function () {
        this.activeModal.close(false);
    };
    ConfirmationDialogComponent.prototype.accept = function () {
        this.activeModal.close(true);
    };
    ConfirmationDialogComponent.prototype.dismiss = function () {
        this.activeModal.dismiss();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmationDialogComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmationDialogComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmationDialogComponent.prototype, "btnOkText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmationDialogComponent.prototype, "btnCancelText", void 0);
    ConfirmationDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirmation-dialog',
            template: __webpack_require__(/*! ./confirmation-dialog.component.html */ "./src/app/shared/shared-components/confirmation-dialog/confirmation-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirmation-dialog.component.css */ "./src/app/shared/shared-components/confirmation-dialog/confirmation-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], ConfirmationDialogComponent);
    return ConfirmationDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/ui.actions.ts":
/*!**************************************!*\
  !*** ./src/app/shared/ui.actions.ts ***!
  \**************************************/
/*! exports provided: IS_LOADING, IS_UNLOADING, IS_LOADING_APP, IS_UNLOADING_APP, Isloading, Isunloading, IsloadingApp, IsunloadingApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_LOADING", function() { return IS_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_UNLOADING", function() { return IS_UNLOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_LOADING_APP", function() { return IS_LOADING_APP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_UNLOADING_APP", function() { return IS_UNLOADING_APP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Isloading", function() { return Isloading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Isunloading", function() { return Isunloading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsloadingApp", function() { return IsloadingApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsunloadingApp", function() { return IsunloadingApp; });
var IS_LOADING = '[Auth] Is Loading';
var IS_UNLOADING = '[Auth] Is Unloading';
var IS_LOADING_APP = '[Auth] Is Loading App';
var IS_UNLOADING_APP = '[Auth] Is Unloading App';
var Isloading = /** @class */ (function () {
    function Isloading() {
        this.type = IS_LOADING;
    }
    return Isloading;
}());

var Isunloading = /** @class */ (function () {
    function Isunloading() {
        this.type = IS_UNLOADING;
    }
    return Isunloading;
}());

var IsloadingApp = /** @class */ (function () {
    function IsloadingApp() {
        this.type = IS_LOADING_APP;
    }
    return IsloadingApp;
}());

var IsunloadingApp = /** @class */ (function () {
    function IsunloadingApp(payload) {
        this.payload = payload;
        this.type = IS_UNLOADING_APP;
    }
    return IsunloadingApp;
}());



/***/ }),

/***/ "./src/app/shared/ui.reducer.ts":
/*!**************************************!*\
  !*** ./src/app/shared/ui.reducer.ts ***!
  \**************************************/
/*! exports provided: UiReducer, getIsLoading, getIsLoadingApp, getAppList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiReducer", function() { return UiReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoading", function() { return getIsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoadingApp", function() { return getIsLoadingApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppList", function() { return getAppList; });
/* harmony import */ var _ui_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.actions */ "./src/app/shared/ui.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    isLoading: false,
    isLoadingApp: false,
    appList: null
};
function UiReducer(state, actions) {
    if (state === void 0) { state = initialState; }
    switch (actions.type) {
        case _ui_actions__WEBPACK_IMPORTED_MODULE_0__["IS_LOADING"]:
            return __assign({}, state, { isLoading: true });
        case _ui_actions__WEBPACK_IMPORTED_MODULE_0__["IS_UNLOADING"]:
            return __assign({}, state, { isLoading: false });
        case _ui_actions__WEBPACK_IMPORTED_MODULE_0__["IS_LOADING_APP"]:
            return __assign({}, state, { isLoadingApp: true });
        case _ui_actions__WEBPACK_IMPORTED_MODULE_0__["IS_UNLOADING_APP"]:
            return __assign({}, state, { isLoadingApp: false, appList: actions.payload });
        default:
            return state;
    }
}
var getIsLoading = function (state) { return state.isLoading; };
var getIsLoadingApp = function (state) { return state.isLoadingApp; };
var getAppList = function (state) { return state.appList; };


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBJ0oRw8FUdjtHT2xxeZQ_M2D3tb3LdxBg",
        authDomain: "ng-fitness-tracker-27d5b.firebaseapp.com",
        databaseURL: "https://ng-fitness-tracker-27d5b.firebaseio.com",
        projectId: "ng-fitness-tracker-27d5b",
        storageBucket: "ng-fitness-tracker-27d5b.appspot.com",
        messagingSenderId: "868267748366"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/Documents/GitHub/cookbook-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map