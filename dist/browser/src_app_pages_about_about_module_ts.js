"use strict";
(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["src_app_pages_about_about_module_ts"],{

/***/ 38824:
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _about_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component.html?ngResource */ 92230);
/* harmony import */ var _about_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component.scss?ngResource */ 13020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent.ctorParameters = () => [];
AboutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-about',
        template: _about_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_about_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AboutComponent);



/***/ }),

/***/ 98777:
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutModule": () => (/* binding */ AboutModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 75349);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component */ 38824);






const routes = [
    { path: '', component: _about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, pathMatch: 'full' }
];
let AboutModule = class AboutModule {
};
AboutModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]
    })
], AboutModule);



/***/ }),

/***/ 13020:
/*!*************************************************************!*\
  !*** ./src/app/pages/about/about.component.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 92230:
/*!*************************************************************!*\
  !*** ./src/app/pages/about/about.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<app-header-image [backgroundImage]=\"'assets/images/others/about.jpg'\" \r\n                  [bgImageAnimate]=\"false\" \r\n                  [contentOffsetToTop]=\"true\"                \r\n                  [title]=\"'Conseils'\"\r\n                  [desc]=\"'Nous vous aidons à trouver la clé de votre maison'\">\r\n</app-header-image>\r\n\r\n\r\n<div class=\"theme-container\">\r\n    <mat-card class=\"main-content-header\">\r\n        \r\n        <div class=\"section pt-2\">\r\n            <div class=\"px-3\">\r\n                <div class=\"theme-container\">\r\n                    <h1 class=\"section-title\">Notre histoire</h1>\r\n\r\n                    <p class=\"px-3\">ENGUIBAT – IMMO est une agence immobilière dont la vocation est de faire la promotion des biens immobiliers dans toutes ses formes dans le but de satisfaire nos clients et nous sommes installés à CONAKRY  dans la commune de RATOMAH précisément à LAMBAYI.</p>\r\n\r\n                    <div fxLayout=\"row wrap\">\r\n\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-3\"> \r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <mat-icon class=\"mat-icon-xlg\" color=\"primary\">A</mat-icon>\r\n                                <h2 class=\"capitalize fw-600 mx-2\"> propos de l'entreprise</h2>\r\n                            </div>                            \r\n                            <p class=\"mt-2\">\r\n                                À notre agence immobilière, nous croyons que le processus de l'achat ou de la vente d'une propriété devrait être simple et sans stress pour nos clients. Avec une équipe d'agents hautement formés et dévoués, nous avons aidé de nombreux clients à atteindre leurs objectifs immobiliers. Nous sommes une agence innovante, offrant des services de pointe tels que la signature de la transaction en ligne et une expérience client exceptionnelle axée sur la satisfaction, pour vous assurer que votre processus d'achat ou de vente est fluide et agréable.\r\n                                \r\n                                Nous sommes également une agence immobilière passionnée par la création de liens solides et de confiance avec nos clients. Nous ne vendons pas seulement des propriétés, nous créons des communautés. Nous sommes engagés à fournir des conseils judicieux, une écoute attentive et une expertise immobilière de premier plan. Nous sommes fiers de notre approche holistique axée sur la construction de relations solides avec nos clients et de notre réputation établie d'excellence dans le domaine de l'immobilier.\r\n                                \r\n                                Notre agence a une forte présence en ligne et sur les réseaux sociaux, où nous partageons régulièrement des annonces de propriétés ainsi que des outils pour vous aider à prendre des décisions éclairées sur l'achat ou la vente de votre propriété. Nous sommes disponibles pour répondre à toutes vos questions et cherchons toujours à atteindre votre satisfaction.\r\n                                \r\n                                En somme, nous sommes une équipe passionnée par les transactions immobilières et prêtes à exploiter notre expertise pour vous aider à atteindre vos objectifs avec succès. Si vous cherchez une agence immobilière qui vous accompagne tout au long de votre projet immobilier, nous sommes là pour vous.\r\n                                </p>\r\n                        </div>\r\n\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-3\"> \r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <mat-icon class=\"mat-icon-xlg\" color=\"primary\">N</mat-icon>\r\n                                <h2 class=\"capitalize fw-600 mx-2\"> otre Vision</h2>\r\n                            </div> \r\n                            <p class=\"mt-2\">Dans le souci de satisfaire nos nombreux clients, notre agence immobilière ENGUIBAT-IMMO a des visions qui vous aideront à optimiser votre profit parmi lesquelles vous avez :\r\n\r\n                                1)- Développer une expertise dans un créneau spécifique du marché immobilier, comme les propriétés de luxe, les biens immobiliers commerciaux ou les propriétés résidentielles haut de gamme.\r\n                                2)- Offrir des services de gestion immobilière pour aider les propriétaires à gérer leurs propriétés, y compris la location, la maintenance et les réparations.\r\n                                3)- Utiliser des technologies avancées pour améliorer l’expérience des clients, par exemple, en proposant  des visites virtuelles en 3D des propriétés ou en utilisant des chatbots pour répondre aux questions des clients.\r\n                                4)- Etablir des partenariats avec des entreprises locales pour offrir des services complémentaires, tels que des services de déménagements ou de nettoyage.\r\n                                5)- Mettre en en place un programme de fidélisation pour les clients réguliers afin de les récompenser   pour leur fidélité et leur donner des accès à des offres exclusives. \r\n                                6)- Investir dans la formation continue pour les agents immobiliers afin de maintenir leur expertise à jour et de les aider à mieux servir leurs clients.\r\n                                7)- Etablir une forte présence en ligne avec un site web convivial, des comptes de réseaux sociaux actifs et une stratégie de marketing numérique efficace.\r\n                                8)- Développer un programme de parrainage pour encourager les clients existants à recommander l’entreprise à leur famille et leur et à leurs amis.\r\n                                9)- Offrir des services de conseil en financement immobilier pour aider les clients à comprendre les options de financement disponibles pour leur projet immobilier.\r\n                                10)- Participer activement à la communauté locale en organisant ou en parrainant des évènements locaux pour renforcer la notoriété de l’entreprise et établir des relations avec les membres de la communauté.\r\n                                </p>\r\n                        </div>\r\n\r\n                    </div>\r\n            \r\n                    \r\n                </div>\r\n            </div>   \r\n        </div> \r\n\r\n    </mat-card> \r\n \r\n</div>\r\n\r\n<app-mission></app-mission> \r\n\r\n<app-our-services></app-our-services>\r\n\r\n<app-testimonials></app-testimonials>  \r\n\r\n<!-- <app-our-agents></app-our-agents> -->\r\n      \r\n<app-clients></app-clients>\r\n\r\n<app-get-in-touch></app-get-in-touch>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_about_about_module_ts.js.map