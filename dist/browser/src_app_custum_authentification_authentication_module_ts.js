"use strict";
(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_custum_authentification_authentication_module_ts"],{

/***/ 8972:
/*!***************************************!*\
  !*** ./src/_services/auth.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);




const AUTH_API = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url_backend + `/authenticate`;
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ "Content-Type": "application/json" }),
};
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    login(username, password) {
        console.log(`user: ${username}`);
        return this.http
            // .post(AUTH_API, { username, password }, httpOptions)
            .post("http://localhost:8080/authenticate", { username, password }, httpOptions)
            .toPromise()
            .then((res) => res);
    }
    register(user) {
        return this.http.post("http://localhost:8080/" + "utilisateur", user, httpOptions);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: "root",
    })
], AuthService);



/***/ }),

/***/ 97195:
/*!******************************************************************!*\
  !*** ./src/app/custum/authentification/authentication.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationModule": () => (/* binding */ AuthenticationModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 75349);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 46736);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ 45790);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/shared.service */ 73742);









const routes = [
    { path: '', redirectTo: '/custum/login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent }
];
let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
            _register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ],
        providers: [src_services_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService]
    })
], AuthenticationModule);



/***/ }),

/***/ 46736:
/*!******************************************************************!*\
  !*** ./src/app/custum/authentification/login/login.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 84355);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss?ngResource */ 32074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/auth.service */ 8972);
/* harmony import */ var src_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/shared.service */ 73742);
/* harmony import */ var src_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services/token-storage.service */ 85956);









let LoginComponent = class LoginComponent {
    constructor(fb, sharedService, router, authService, tokenStorage) {
        this.fb = fb;
        this.sharedService = sharedService;
        this.router = router;
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.form = {
            username: null,
            password: null,
        };
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = "";
        this.roles = [];
        this.hide = true;
        this.loginform = true;
        this.recoverform = false;
    }
    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
        }
        this.loginForm = this.fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6)])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6)])],
            rememberMe: false
        });
    }
    onSubmit(formValues) {
        const { username, password } = this.form;
        this.authService.login(formValues.value.username, formValues.value.password).then((data) => {
            this.tokenStorage.saveToken(data.token);
            this.tokenStorage.saveUser(this.tokenStorage.getDecodedAccessToken(data.token).sub);
            this.tokenStorage.saveRole(this.tokenStorage.getDecodedAccessToken(data.token).aud);
            // this.tokenStorage.saveUser(data);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            // this.roles = this.tokenStorage.getUser().roles;
            // Cette condition juste en bas permet de savoir nous venons de la page de detail de produit pour pas
            if (sessionStorage.getItem("navigatedFrom") && sessionStorage.getItem("navigatedFrom") != null) {
                this.router.navigateByUrl(sessionStorage.getItem("navigatedFrom"));
                sessionStorage.removeItem("navigatedFrom");
            }
            else {
                this.router.navigateByUrl('/');
            }
        }, (err) => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
        });
    }
    reloadPage() {
        window.location.reload();
    }
    showRecoverForm() {
        this.loginform = !this.loginform;
        this.recoverform = !this.recoverform;
    }
    onLoginFormSubmit(values) {
        if (this.loginForm.valid) {
            this.router.navigate(['/']);
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder },
    { type: src_services_shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__.TokenStorageService }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginComponent);



/***/ }),

/***/ 45790:
/*!************************************************************************!*\
  !*** ./src/app/custum/authentification/register/register.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component.html?ngResource */ 12936);
/* harmony import */ var _register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.scss?ngResource */ 30614);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/user */ 32245);
/* harmony import */ var src_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/auth.service */ 8972);









let RegisterComponent = class RegisterComponent {
    constructor(fb, router, authService, snackBar) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.snackBar = snackBar;
        this.isdisabled = false;
        this.hide = true;
        this.userTypes = [
            { id: 1, name: 'Agent' },
            { id: 2, name: 'Agency' },
            { id: 3, name: 'Buyer' }
        ];
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__.User("", "", "", "", "", []);
        // this.user= new User("","","","","","", [])
    }
    ngOnInit() {
    }
    onSubmit(formValues) {
        this.user.roles.push('USER');
        this.authService.register(this.user)
            .subscribe(() => {
            alert("bonjour");
        }, (error) => {
        });
    }
    // public confirmationMotDePasse(premierMotDePasse, secondMotDePasse): Boolean{
    //   if(premierMotDePasse!= secondMotDePasse){
    //     return true
    //   }
    //   else{
    //     return false
    //   }
    // }
    onRegisterFormSubmit(values) {
        if (this.registerForm.valid) {
            console.log(values);
            this.snackBar.open('You registered successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar }
];
RegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-register',
        template: _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterComponent);



/***/ }),

/***/ 32245:
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
    constructor(prenom, nom, telephone, email, password, roles) {
        this.prenom = prenom;
        this.nom = nom;
        this.telephone = telephone;
        this.email = email;
        this.password = password;
        this.roles = roles;
    }
}


/***/ }),

/***/ 32074:
/*!*******************************************************************************!*\
  !*** ./src/app/custum/authentification/login/login.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 30614:
/*!*************************************************************************************!*\
  !*** ./src/app/custum/authentification/register/register.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 84355:
/*!*******************************************************************************!*\
  !*** ./src/app/custum/authentification/login/login.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"p-3\">\r\n    <div class=\"theme-container\">\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"my-3\">\r\n          <mat-card [style.max-width.px]=\"500\">\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"text-center\">  \r\n              <h1 class=\"uppercase\">Connectez-vous</h1>  \r\n              <a mat-button routerLink=\"/custum/register\" color=\"accent\" class=\"w-100\">N'avez-vous pas de compte? creez-en un!</a>    \r\n            </div>\r\n            <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\r\n                <mat-form-field appearance=\"outline\" class=\"w-100 mt-2\">\r\n                    <mat-icon matPrefix class=\"mr-1 text-muted\">person</mat-icon>\r\n                    <mat-label>Adresse mail</mat-label>\r\n                    <input matInput placeholder=\"Username\" [(ngModel)]=\"form.username\" #username=\"ngModel\" name=\"username\" required>\r\n                    <!-- <mat-error *ngIf=\"loginForm.controls.username.errors?.required\">Username is required</mat-error>\r\n                    <mat-error *ngIf=\"loginForm.controls.username.hasError('minlength')\">Username isn't long enough, minimum of 6 characters</mat-error> -->\r\n                </mat-form-field>\r\n                <mat-form-field appearance=\"outline\" class=\"w-100 mt-1\">\r\n                    <mat-icon matPrefix class=\"mr-1 text-muted\">lock</mat-icon>\r\n                    <mat-label>Mot de passe</mat-label>\r\n                    <input matInput placeholder=\"Password\" [(ngModel)]=\"form.password\" name=\"password\" name=\"password\" minlength=\"5\" required  #password=\"ngModel\" [type]=\"hide ? 'password' : 'text'\">\r\n                    <!-- <mat-error *ngIf=\"loginForm.controls.password.errors?.required\">Le mot de passe est obligatoire</mat-error> -->\r\n                    <!-- <mat-error *ngIf=\"loginForm.controls.password.hasError('minlength')\">Password isn't long enough, minimum of 6 characters</mat-error> -->\r\n                    <button mat-icon-button matSuffix (click)=\"hide = !hide\" type=\"button\" class=\"text-muted\">\r\n                        <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                    </button>\r\n                </mat-form-field> \r\n                <mat-slide-toggle formControlName=\"rememberMe\" class=\"my-2\">Keep me signed in</mat-slide-toggle>\r\n                <div class=\"text-center mt-2\"> \r\n                    <button mat-raised-button color=\"accent\" class=\"uppercase\" type=\"submit\" [disabled]=\"!f.form.valid\">\r\n                      Se connecter\r\n                    </button>\r\n                </div>     \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mt-3\">\r\n                    <div class=\"divider w-100\"></div>\r\n                    <h3 class=\"text-muted ws-nowrap fw-500 p-2\">ou connectez-vous avec:</h3>                       \r\n                    <div class=\"divider w-100\"></div>\r\n                </div>  \r\n                <div class=\"text-center py-3\">\r\n                    <button mat-mini-fab color=\"primary\" matTooltip=\"Facebook\" type=\"button\">\r\n                      <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                          <path d=\"M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z\" />\r\n                      </svg>\r\n                    </button>                        \r\n                    <button mat-mini-fab color=\"primary\" matTooltip=\"Twitter\" type=\"button\" class=\"mx-3\">\r\n                      <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                          <path d=\"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z\" />\r\n                      </svg>\r\n                    </button>\r\n                    <button mat-mini-fab color=\"primary\" matTooltip=\"Google\" type=\"button\">\r\n                      <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                          <path d=\"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z\" />\r\n                      </svg>\r\n                    </button> \r\n                </div>     \r\n            </form>\r\n            <mat-card-actions fxLayoutAlign=\"end center\">\r\n              <button mat-button>\r\n                <mat-icon class=\"text-muted\">vpn_key</mat-icon>\r\n                <span class=\"mx-1\">Reset Password</span>\r\n              </button> \r\n            </mat-card-actions>\r\n          </mat-card>\r\n      </div> \r\n  \r\n    </div>\r\n  </div>";

/***/ }),

/***/ 12936:
/*!*************************************************************************************!*\
  !*** ./src/app/custum/authentification/register/register.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"p-3\">\r\n    <div class=\"theme-container\">\r\n  \r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"my-3\">\r\n          <mat-card [style.max-width.px]=\"500\">\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"text-center\">  \r\n              <h3 class=\"uppercase\">Création de compte</h3>  \r\n              <a mat-button routerLink=\"/custum/login\" color=\"accent\" class=\"w-100\">Avez-vous déjà un compte? Connectez-vous!</a>  \r\n            </div>\r\n            <form #formValues=\"ngForm\" (ngSubmit)=\"onSubmit(formValues)\"> \r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-2\">\r\n                    <mat-icon matPrefix class=\"mr-1 text-muted\">person</mat-icon>\r\n                    <mat-label>Prénoms</mat-label>\r\n                    <input matInput placeholder=\"Prénoms\" name=\"prenom\" [(ngModel)]=\"this.user.prenom\" #prenom=\"ngModel\" required>\r\n                    <!-- <mat-error *ngIf=\"registerForm.controls.prenom.errors?.required\">Le prénom est obligatoire</mat-error>\r\n                    <mat-error *ngIf=\"registerForm.controls.prenom.hasError('minlength')\">Le mot de passe saisi est trop court</mat-error> -->\r\n                  </mat-form-field>\r\n                  <div *ngIf=\"prenom.invalid && (prenom.touched || prenom.dirty)\">\r\n                    <div *ngIf=\"prenom.errors?.['required']\">\r\n                      <small>Champ obligatoire</small>\r\n                    </div>\r\n                  </div>\r\n\r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-2\">\r\n                  <mat-icon matPrefix class=\"mr-1 text-muted\">person</mat-icon>\r\n                  <mat-label>Nom</mat-label>\r\n                  <input matInput placeholder=\"Nom\" name=\"nom\" [(ngModel)]=\"this.user.nom\" #nom=\"ngModel\" required>\r\n                  <!-- <mat-error *ngIf=\"registerForm.controls.prenom.errors?.required\">Le prénom est obligatoire</mat-error>\r\n                  <mat-error *ngIf=\"registerForm.controls.prenom.hasError('minlength')\">Le mot de passe saisi est trop court</mat-error> -->\r\n              </mat-form-field>\r\n              <div *ngIf=\"nom.invalid && (nom.touched || nom.dirty)\">\r\n                <div *ngIf=\"nom.errors?.['required']\">\r\n                  <small>Champ obligatoire</small>\r\n                </div>\r\n              </div>\r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-1\">\r\n                    <mat-icon matPrefix class=\"mr-1 text-muted\">email</mat-icon>\r\n                    <mat-label>Email</mat-label>\r\n                    <input matInput placeholder=\"Email\"  name=\"email\" [(ngModel)]=\"this.user.email\" #email=\"ngModel\">\r\n                    <!-- <mat-error *ngIf=\"registerForm.controls.email.errors?.required\">L'adresse mail est obligatoire</mat-error>\r\n                    <mat-error *ngIf=\"registerForm.controls.email.hasError('invalidEmail')\">Adresse mail invalide</mat-error> -->\r\n                </mat-form-field>\r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-2\">\r\n                    <mat-icon matPrefix class=\"mr-1 text-muted\">phone</mat-icon>\r\n                    <mat-label>Télephone (Facultatif)</mat-label>\r\n                    <input matInput type=\"number\" placeholder=\"Téléphone\" name=\"telephone\" [(ngModel)]=\"this.user.telephone\" #telephone=\"ngModel\">\r\n                    <!-- <mat-error *ngIf=\"registerForm.controls.telephone.errors?.required\">Le prénom est obligatoire</mat-error>\r\n                    <mat-error *ngIf=\"registerForm.controls.telephone.hasError('minlength')\">Le champ téléphone saisi est trop court</mat-error> -->\r\n               </mat-form-field>\r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-1\">\r\n                  <mat-icon matPrefix class=\"mr-1 text-muted\">lock</mat-icon>\r\n                  <mat-label>Mot de passe</mat-label>\r\n                  <input matInput maxlength=\"15\" placeholder=\"Mot de passe\" type=\"password\" name=\"password\" [(ngModel)]=\"this.user.password\" #password=\"ngModel\" type=\"password\" minlength=\"6\" required>\r\n                  <!-- <mat-error *ngIf=\"registerForm.controls.password.errors?.required\">Password is required</mat-error>\r\n                  <mat-error *ngIf=\"registerForm.controls.password.hasError('minlength')\">Password isn't long enough, minimum of 6 characters</mat-error> -->\r\n                  \r\n                  <button mat-icon-button matSuffix (click)=\"hide = !hide\" type=\"button\" class=\"text-muted\">\r\n                      <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                  </button>\r\n                </mat-form-field> \r\n                <div *ngIf=\"password.invalid && (password.touched || password.dirty)\">\r\n                  <div *ngIf=\"password.errors?.['required']\">\r\n                    <small>Champ obligatoire</small>\r\n                  </div>\r\n                  <div *ngIf=\"password.errors?.['minlength']\">\r\n                    <small>Le champ doit avoir au minimun 6 caractères</small>\r\n                  </div>\r\n                  <div *ngIf=\"password.errors?.['maxlength']\">\r\n                    <small>Le champ doit avoir au maximun 6 caractères</small>\r\n                  </div>\r\n                </div>\r\n                <mat-form-field  appearance=\"outline\" class=\"w-100 mt-1\">\r\n                  <mat-icon matPrefix class=\"mr-1 text-muted\">lock</mat-icon>\r\n                  <mat-label>Confirm Password</mat-label>\r\n                  <input matInput placeholder=\"Confirm Password\" required name=\"secondMotDePasse\" [(ngModel)]=\"this.secondMotDePasse\" #secondMotDePass=\"ngModel\" [type]=\"hide ? 'password' : 'text'\">\r\n                  <!-- <mat-error *ngIf=\"registerForm.controls.confirmPassword.errors?.required\">Confirm Password is required</mat-error>\r\n                  <mat-error *ngIf=\"registerForm.controls.confirmPassword.hasError('mismatchedPasswords')\">Passwords do not match</mat-error> -->\r\n                  <button mat-icon-button matSuffix (click)=\"hide = !hide\" type=\"button\" class=\"text-muted\">\r\n                      <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                  </button>\r\n                </mat-form-field> \r\n                <div *ngIf=\"secondMotDePass.invalid && (secondMotDePass.touched || secondMotDePass.dirty)\">\r\n                  <div *ngIf=\"secondMotDePass.errors?.['required']\">\r\n                    <small>Champ obligatoire</small>\r\n                  </div>\r\n                  <div *ngIf=\"secondMotDePass.errors?.['minlength']\">\r\n                    <small>Le champ doit avoir au minimun 6 caractères</small>\r\n                  </div>\r\n                  <div *ngIf=\"secondMotDePass.errors?.['maxlength']\">\r\n                    <small>Le champ doit avoir au maximum 15 caractères</small>\r\n                  </div>\r\n                  <div *ngIf=\"this.secondMotDePass != this.user.password\">\r\n                    <small>Le champ doit avoir au maximum 15 caractères</small>\r\n                  </div>\r\n                  \r\n                </div>\r\n                <div class=\"text-center mt-2\"> \r\n                    <button mat-raised-button color=\"accent\" [disabled]=\"!formValues.form.valid || (this.secondMotDePasse != this.user.password)\" class=\"uppercase\" type=\"submit\">\r\n                        Valider\r\n                    </button>\r\n                </div> \r\n            </form>\r\n            <div class=\"divider mt-4\"></div> \r\n            <!-- <mat-card-actions fxLayoutAlign=\"center center\" class=\"text-center\">\r\n               <small class=\"my-3\">By clicking the \"Create an Account\" button you agree with our <a mat-button routerLink=\"/terms-conditions\" color=\"primary\" class=\"mx-2\">Terms and conditions</a> </small>\r\n            </mat-card-actions> -->\r\n          </mat-card>\r\n      </div> \r\n  \r\n    </div>\r\n  </div>";

/***/ })

}]);
//# sourceMappingURL=src_app_custum_authentification_authentication_module_ts.js.map