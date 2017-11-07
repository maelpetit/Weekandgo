"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sport_module_1 = require("./sport/sport.module");
var place_module_1 = require("./place/place.module");
var person_module_1 = require("./person/person.module");
var weather_requirements_module_1 = require("./weather-requirements/weather-requirements.module");
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */
var WeekandgoEntityModule = /** @class */ (function () {
    function WeekandgoEntityModule() {
    }
    WeekandgoEntityModule = __decorate([
        core_1.NgModule({
            imports: [
                sport_module_1.WeekandgoSportModule,
                place_module_1.WeekandgoPlaceModule,
                person_module_1.WeekandgoPersonModule,
                weather_requirements_module_1.WeekandgoWeatherRequirementsModule,
            ],
            declarations: [],
            entryComponents: [],
            providers: [],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], WeekandgoEntityModule);
    return WeekandgoEntityModule;
}());
exports.WeekandgoEntityModule = WeekandgoEntityModule;
