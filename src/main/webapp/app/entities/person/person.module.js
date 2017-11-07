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
var ENTITY_STATES = _1.personRoute.concat(_1.personPopupRoute);
var WeekandgoPersonModule = /** @class */ (function () {
    function WeekandgoPersonModule() {
    }
    WeekandgoPersonModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_1.WeekandgoSharedModule,
                router_1.RouterModule.forRoot(ENTITY_STATES, { useHash: true })
            ],
            declarations: [
                _1.PersonComponent,
                _1.PersonDetailComponent,
                _1.PersonDialogComponent,
                _1.PersonDeleteDialogComponent,
                _1.PersonPopupComponent,
                _1.PersonDeletePopupComponent,
            ],
            entryComponents: [
                _1.PersonComponent,
                _1.PersonDialogComponent,
                _1.PersonPopupComponent,
                _1.PersonDeleteDialogComponent,
                _1.PersonDeletePopupComponent,
            ],
            providers: [
                _1.PersonService,
                _1.PersonPopupService,
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], WeekandgoPersonModule);
    return WeekandgoPersonModule;
}());
exports.WeekandgoPersonModule = WeekandgoPersonModule;
