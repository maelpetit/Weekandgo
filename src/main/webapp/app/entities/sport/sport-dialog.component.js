"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SportDialogComponent = /** @class */ (function () {
    function SportDialogComponent(activeModal, jhiAlertService, sportService, weatherRequirementsService, placeService, personService, eventManager) {
        this.activeModal = activeModal;
        this.jhiAlertService = jhiAlertService;
        this.sportService = sportService;
        this.weatherRequirementsService = weatherRequirementsService;
        this.placeService = placeService;
        this.personService = personService;
        this.eventManager = eventManager;
    }
    SportDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSaving = false;
        this.weatherRequirementsService.query()
            .subscribe(function (res) { _this.weatherrequirements = res.json; }, function (res) { return _this.onError(res.json); });
        this.placeService.query()
            .subscribe(function (res) { _this.places = res.json; }, function (res) { return _this.onError(res.json); });
        this.personService.query()
            .subscribe(function (res) { _this.people = res.json; }, function (res) { return _this.onError(res.json); });
    };
    SportDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    SportDialogComponent.prototype.save = function () {
        this.isSaving = true;
        if (this.sport.id !== undefined) {
            this.subscribeToSaveResponse(this.sportService.update(this.sport));
        }
        else {
            this.subscribeToSaveResponse(this.sportService.create(this.sport));
        }
    };
    SportDialogComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) {
            return _this.onSaveSuccess(res);
        }, function (res) { return _this.onSaveError(); });
    };
    SportDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'sportListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
    };
    SportDialogComponent.prototype.onSaveError = function () {
        this.isSaving = false;
    };
    SportDialogComponent.prototype.onError = function (error) {
        this.jhiAlertService.error(error.message, null, null);
    };
    SportDialogComponent.prototype.trackWeatherRequirementsById = function (index, item) {
        return item.id;
    };
    SportDialogComponent.prototype.trackPlaceById = function (index, item) {
        return item.id;
    };
    SportDialogComponent.prototype.trackPersonById = function (index, item) {
        return item.id;
    };
    SportDialogComponent.prototype.getSelected = function (selectedVals, option) {
        if (selectedVals) {
            for (var i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    };
    SportDialogComponent = __decorate([
        core_1.Component({
            selector: 'jhi-sport-dialog',
            templateUrl: './sport-dialog.component.html'
        })
    ], SportDialogComponent);
    return SportDialogComponent;
}());
exports.SportDialogComponent = SportDialogComponent;
var SportPopupComponent = /** @class */ (function () {
    function SportPopupComponent(route, sportPopupService) {
        this.route = route;
        this.sportPopupService = sportPopupService;
    }
    SportPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.sportPopupService
                    .open(SportDialogComponent, params['id']);
            }
            else {
                _this.sportPopupService
                    .open(SportDialogComponent);
            }
        });
    };
    SportPopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    SportPopupComponent = __decorate([
        core_1.Component({
            selector: 'jhi-sport-popup',
            template: ''
        })
    ], SportPopupComponent);
    return SportPopupComponent;
}());
exports.SportPopupComponent = SportPopupComponent;
