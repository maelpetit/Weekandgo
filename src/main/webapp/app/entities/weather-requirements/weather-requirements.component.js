"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WeatherRequirementsComponent = /** @class */ (function () {
    function WeatherRequirementsComponent(weatherRequirementsService, jhiAlertService, eventManager, principal) {
        this.weatherRequirementsService = weatherRequirementsService;
        this.jhiAlertService = jhiAlertService;
        this.eventManager = eventManager;
        this.principal = principal;
    }
    WeatherRequirementsComponent.prototype.loadAll = function () {
        var _this = this;
        this.weatherRequirementsService.query().subscribe(function (res) {
            _this.weatherRequirements = res.json;
        }, function (res) { return _this.onError(res.json); });
    };
    WeatherRequirementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAll();
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInWeatherRequirements();
    };
    WeatherRequirementsComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    WeatherRequirementsComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    WeatherRequirementsComponent.prototype.registerChangeInWeatherRequirements = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('weatherRequirementsListModification', function (response) { return _this.loadAll(); });
    };
    WeatherRequirementsComponent.prototype.onError = function (error) {
        this.jhiAlertService.error(error.message, null, null);
    };
    WeatherRequirementsComponent = __decorate([
        core_1.Component({
            selector: 'jhi-weather-requirements',
            templateUrl: './weather-requirements.component.html'
        })
    ], WeatherRequirementsComponent);
    return WeatherRequirementsComponent;
}());
exports.WeatherRequirementsComponent = WeatherRequirementsComponent;
