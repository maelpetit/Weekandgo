"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WeatherRequirementsDeleteDialogComponent = /** @class */ (function () {
    function WeatherRequirementsDeleteDialogComponent(weatherRequirementsService, activeModal, eventManager) {
        this.weatherRequirementsService = weatherRequirementsService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
    }
    WeatherRequirementsDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    WeatherRequirementsDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.weatherRequirementsService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'weatherRequirementsListModification',
                content: 'Deleted an weatherRequirements'
            });
            _this.activeModal.dismiss(true);
        });
    };
    WeatherRequirementsDeleteDialogComponent = __decorate([
        core_1.Component({
            selector: 'jhi-weather-requirements-delete-dialog',
            templateUrl: './weather-requirements-delete-dialog.component.html'
        })
    ], WeatherRequirementsDeleteDialogComponent);
    return WeatherRequirementsDeleteDialogComponent;
}());
exports.WeatherRequirementsDeleteDialogComponent = WeatherRequirementsDeleteDialogComponent;
var WeatherRequirementsDeletePopupComponent = /** @class */ (function () {
    function WeatherRequirementsDeletePopupComponent(route, weatherRequirementsPopupService) {
        this.route = route;
        this.weatherRequirementsPopupService = weatherRequirementsPopupService;
    }
    WeatherRequirementsDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.weatherRequirementsPopupService
                .open(WeatherRequirementsDeleteDialogComponent, params['id']);
        });
    };
    WeatherRequirementsDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    WeatherRequirementsDeletePopupComponent = __decorate([
        core_1.Component({
            selector: 'jhi-weather-requirements-delete-popup',
            template: ''
        })
    ], WeatherRequirementsDeletePopupComponent);
    return WeatherRequirementsDeletePopupComponent;
}());
exports.WeatherRequirementsDeletePopupComponent = WeatherRequirementsDeletePopupComponent;
