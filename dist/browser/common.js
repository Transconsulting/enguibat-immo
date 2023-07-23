"use strict";
(self["webpackChunkhousekey"] = self["webpackChunkhousekey"] || []).push([["common"],{

/***/ 84422:
/*!*********************************************!*\
  !*** ./src/_services/properties.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesService": () => (/* binding */ PropertiesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 64865);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 24766);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 38699);








let PropertiesService = class PropertiesService {
    constructor(http, bottomSheet, snackBar, dialog, translateService, platformId) {
        this.http = http;
        this.bottomSheet = bottomSheet;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.translateService = translateService;
        this.platformId = platformId;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url_backend;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + '/assets/data/';
        this.apiKey = 'AIzaSyAO7Mg2Cs1qzo_3jkKkZAKY6jtwIlm41-I';
    }
    listeProperty() {
        return this.http.get(this.API_URL + 'listeProperty');
    }
    getAnnonceById(id) {
        return this.http.get(this.API_URL + 'listeProperty/dommaineByUuid/{uuid}?uuid=' + id);
    }
    getProperties() {
        return this.http.get(this.url + 'properties.json');
    }
    getPropertyById(id) {
        return this.http.get(this.url + 'property-' + id + '.json');
    }
    getFeaturedProperties() {
        return this.http.get(this.url + 'featured-properties.json');
    }
    getRelatedProperties() {
        return this.http.get(this.url + 'related-properties.json');
    }
    getPropertiesByAgentId(agentId) {
        return this.http.get(this.url + 'properties-agentid-' + agentId + '.json');
    }
    getLocations() {
        return this.http.get(this.url + 'locations.json');
    }
    getAddress(lat = 40.714224, lng = -73.961452) {
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=' + this.apiKey);
    }
    getLatLng(address) {
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?key=' + this.apiKey + '&address=' + address);
    }
    getFullAddress(lat = 40.714224, lng = -73.961452) {
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=' + this.apiKey).subscribe(data => {
            return data['results'][0]['formatted_address'];
        });
    }
};
PropertiesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__.MatBottomSheet },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID,] }] }
];
PropertiesService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], PropertiesService);



/***/ }),

/***/ 78867:
/*!*******************************!*\
  !*** ./src/app/app.models.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdditionalFeature": () => (/* binding */ AdditionalFeature),
/* harmony export */   "Area": () => (/* binding */ Area),
/* harmony export */   "Gallery": () => (/* binding */ Gallery),
/* harmony export */   "Location": () => (/* binding */ Location),
/* harmony export */   "Pagination": () => (/* binding */ Pagination),
/* harmony export */   "Plan": () => (/* binding */ Plan),
/* harmony export */   "Price": () => (/* binding */ Price),
/* harmony export */   "Property": () => (/* binding */ Property),
/* harmony export */   "Video": () => (/* binding */ Video)
/* harmony export */ });
class Property {
    constructor(id, title, desc, propertyType, propertyStatus, city, zipCode, neighborhood, street, location, formattedAddress, features, featured, priceDollar, priceEuro, bedrooms, bathrooms, garages, area, yearBuilt, ratingsCount, ratingsValue, additionalFeatures, gallery, plans, videos, published, lastUpdate, views) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.propertyType = propertyType;
        this.propertyStatus = propertyStatus;
        this.city = city;
        this.zipCode = zipCode;
        this.neighborhood = neighborhood;
        this.street = street;
        this.location = location;
        this.formattedAddress = formattedAddress;
        this.features = features;
        this.featured = featured;
        this.priceDollar = priceDollar;
        this.priceEuro = priceEuro;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.garages = garages;
        this.area = area;
        this.yearBuilt = yearBuilt;
        this.ratingsCount = ratingsCount;
        this.ratingsValue = ratingsValue;
        this.additionalFeatures = additionalFeatures;
        this.gallery = gallery;
        this.plans = plans;
        this.videos = videos;
        this.published = published;
        this.lastUpdate = lastUpdate;
        this.views = views;
    }
}
class Area {
    constructor(id, value, unit) {
        this.id = id;
        this.value = value;
        this.unit = unit;
    }
}
class AdditionalFeature {
    constructor(id, name, value) {
        this.id = id;
        this.name = name;
        this.value = value;
    }
}
class Location {
    constructor(propertyId, lat, lng) {
        this.propertyId = propertyId;
        this.lat = lat;
        this.lng = lng;
    }
}
class Price {
}
class Gallery {
    constructor(id, small, medium, big) {
        this.id = id;
        this.small = small;
        this.medium = medium;
        this.big = big;
    }
}
class Plan {
    constructor(id, name, desc, area, rooms, baths, image) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.area = area;
        this.rooms = rooms;
        this.baths = baths;
        this.image = image;
    }
}
class Video {
    constructor(id, name, link) {
        this.id = id;
        this.name = name;
        this.link = link;
    }
}
class Pagination {
    constructor(page, perPage, prePage, nextPage, total, totalPages) {
        this.page = page;
        this.perPage = perPage;
        this.prePage = prePage;
        this.nextPage = nextPage;
        this.total = total;
        this.totalPages = totalPages;
    }
}


/***/ })

}]);
//# sourceMappingURL=common.js.map