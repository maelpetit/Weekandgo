"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var window_service_1 = require("./tracker/window.service");
var _1 = require("./");
var WeekandgoSharedCommonModule = /** @class */ (function () {
    function WeekandgoSharedCommonModule() {
    }
    WeekandgoSharedCommonModule = __decorate([
        core_1.NgModule({
            imports: [
                _1.WeekandgoSharedLibsModule
            ],
            declarations: [
                _1.JhiAlertComponent,
                _1.JhiAlertErrorComponent
            ],
            providers: [
                window_service_1.WindowRef,
                platform_browser_1.Title,
                {
                    provide: core_1.LOCALE_ID,
                    useValue: 'en'
                },
            ],
            exports: [
                _1.WeekandgoSharedLibsModule,
                _1.JhiAlertComponent,
                _1.JhiAlertErrorComponent
            ]
        })
    ], WeekandgoSharedCommonModule);
    return WeekandgoSharedCommonModule;
}());
exports.WeekandgoSharedCommonModule = WeekandgoSharedCommonModule;
