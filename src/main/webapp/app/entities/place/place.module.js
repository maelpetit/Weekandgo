"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shared_1 = require("../../shared");
var _1 = require("./");
var place_apimaps_1 = require("./place.apimaps");
var ENTITY_STATES = _1.placeRoute.concat(_1.placePopupRoute);
var WeekandgoPlaceModule = /** @class */ (function () {
    function WeekandgoPlaceModule() {
    }
    WeekandgoPlaceModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_1.WeekandgoSharedModule,
                place_apimaps_1.WeekandgoApiMapsModule,
                router_1.RouterModule.forRoot(ENTITY_STATES, { useHash: true })
            ],
            declarations: [
                _1.PlaceComponent,
                _1.PlaceDetailComponent,
                _1.PlaceDialogComponent,
                _1.PlaceDeleteDialogComponent,
                _1.PlacePopupComponent,
                _1.PlaceDeletePopupComponent,
            ],
            entryComponents: [
                _1.PlaceComponent,
                _1.PlaceDialogComponent,
                _1.PlacePopupComponent,
                _1.PlaceDeleteDialogComponent,
                _1.PlaceDeletePopupComponent,
            ],
            providers: [
                _1.PlaceService,
                _1.PlacePopupService,
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], WeekandgoPlaceModule);
    return WeekandgoPlaceModule;
}());
exports.WeekandgoPlaceModule = WeekandgoPlaceModule;
