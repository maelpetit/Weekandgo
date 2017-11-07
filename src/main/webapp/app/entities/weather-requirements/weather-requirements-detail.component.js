"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WeatherRequirementsDetailComponent = /** @class */ (function () {
    function WeatherRequirementsDetailComponent(eventManager, weatherRequirementsService, route) {
        this.eventManager = eventManager;
        this.weatherRequirementsService = weatherRequirementsService;
        this.route = route;
    }
    WeatherRequirementsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['id']);
        });
        this.registerChangeInWeatherRequirements();
    };
    WeatherRequirementsDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.weatherRequirementsService.find(id).subscribe(function (weatherRequirements) {
            _this.weatherRequirements = weatherRequirements;
        });
    };
    WeatherRequirementsDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    WeatherRequirementsDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    };
    WeatherRequirementsDetailComponent.prototype.registerChangeInWeatherRequirements = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('weatherRequirementsListModification', function (response) { return _this.load(_this.weatherRequirements.id); });
    };
    WeatherRequirementsDetailComponent = __decorate([
        core_1.Component({
            selector: 'jhi-weather-requirements-detail',
            templateUrl: './weather-requirements-detail.component.html'
        })
    ], WeatherRequirementsDetailComponent);
    return WeatherRequirementsDetailComponent;
}());
exports.WeatherRequirementsDetailComponent = WeatherRequirementsDetailComponent;
