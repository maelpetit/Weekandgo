"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WeatherRequirementsDialogComponent = /** @class */ (function () {
    function WeatherRequirementsDialogComponent(activeModal, jhiAlertService, weatherRequirementsService, eventManager) {
        this.activeModal = activeModal;
        this.jhiAlertService = jhiAlertService;
        this.weatherRequirementsService = weatherRequirementsService;
        this.eventManager = eventManager;
    }
    WeatherRequirementsDialogComponent.prototype.ngOnInit = function () {
        this.isSaving = false;
    };
    WeatherRequirementsDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    WeatherRequirementsDialogComponent.prototype.save = function () {
        this.isSaving = true;
        if (this.weatherRequirements.id !== undefined) {
            this.subscribeToSaveResponse(this.weatherRequirementsService.update(this.weatherRequirements));
        }
        else {
            this.subscribeToSaveResponse(this.weatherRequirementsService.create(this.weatherRequirements));
        }
    };
    WeatherRequirementsDialogComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) {
            return _this.onSaveSuccess(res);
        }, function (res) { return _this.onSaveError(); });
    };
    WeatherRequirementsDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'weatherRequirementsListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
    };
    WeatherRequirementsDialogComponent.prototype.onSaveError = function () {
        this.isSaving = false;
    };
    WeatherRequirementsDialogComponent.prototype.onError = function (error) {
        this.jhiAlertService.error(error.message, null, null);
    };
    WeatherRequirementsDialogComponent = __decorate([
        core_1.Component({
            selector: 'jhi-weather-requirements-dialog',
            templateUrl: './weather-requirements-dialog.component.html'
        })
    ], WeatherRequirementsDialogComponent);
    return WeatherRequirementsDialogComponent;
}());
exports.WeatherRequirementsDialogComponent = WeatherRequirementsDialogComponent;
var WeatherRequirementsPopupComponent = /** @class */ (function () {
    function WeatherRequirementsPopupComponent(route, weatherRequirementsPopupService) {
        this.route = route;
        this.weatherRequirementsPopupService = weatherRequirementsPopupService;
    }
    WeatherRequirementsPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.weatherRequirementsPopupService
                    .open(WeatherRequirementsDialogComponent, params['id']);
            }
            else {
                _this.weatherRequirementsPopupService
                    .open(WeatherRequirementsDialogComponent);
            }
        });
    };
    WeatherRequirementsPopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    WeatherRequirementsPopupComponent = __decorate([
        core_1.Component({
            selector: 'jhi-weather-requirements-popup',
            template: ''
        })
    ], WeatherRequirementsPopupComponent);
    return WeatherRequirementsPopupComponent;
}());
exports.WeatherRequirementsPopupComponent = WeatherRequirementsPopupComponent;
