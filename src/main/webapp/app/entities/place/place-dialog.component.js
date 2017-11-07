"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PlaceDialogComponent = /** @class */ (function () {
    function PlaceDialogComponent(activeModal, jhiAlertService, placeService, sportService, eventManager) {
        this.activeModal = activeModal;
        this.jhiAlertService = jhiAlertService;
        this.placeService = placeService;
        this.sportService = sportService;
        this.eventManager = eventManager;
    }
    PlaceDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSaving = false;
        this.sportService.query()
            .subscribe(function (res) { _this.sports = res.json; }, function (res) { return _this.onError(res.json); });
    };
    PlaceDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    PlaceDialogComponent.prototype.save = function () {
        this.isSaving = true;
        if (this.place.id !== undefined) {
            this.subscribeToSaveResponse(this.placeService.update(this.place));
        }
        else {
            this.subscribeToSaveResponse(this.placeService.create(this.place));
        }
    };
    PlaceDialogComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) {
            return _this.onSaveSuccess(res);
        }, function (res) { return _this.onSaveError(); });
    };
    PlaceDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'placeListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
    };
    PlaceDialogComponent.prototype.onSaveError = function () {
        this.isSaving = false;
    };
    PlaceDialogComponent.prototype.onError = function (error) {
        this.jhiAlertService.error(error.message, null, null);
    };
    PlaceDialogComponent.prototype.trackSportById = function (index, item) {
        return item.id;
    };
    PlaceDialogComponent.prototype.getSelected = function (selectedVals, option) {
        if (selectedVals) {
            for (var i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    };
    PlaceDialogComponent = __decorate([
        core_1.Component({
            selector: 'jhi-place-dialog',
            templateUrl: './place-dialog.component.html'
        })
    ], PlaceDialogComponent);
    return PlaceDialogComponent;
}());
exports.PlaceDialogComponent = PlaceDialogComponent;
var PlacePopupComponent = /** @class */ (function () {
    function PlacePopupComponent(route, placePopupService) {
        this.route = route;
        this.placePopupService = placePopupService;
    }
    PlacePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.placePopupService
                    .open(PlaceDialogComponent, params['id']);
            }
            else {
                _this.placePopupService
                    .open(PlaceDialogComponent);
            }
        });
    };
    PlacePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    PlacePopupComponent = __decorate([
        core_1.Component({
            selector: 'jhi-place-popup',
            template: ''
        })
    ], PlacePopupComponent);
    return PlacePopupComponent;
}());
exports.PlacePopupComponent = PlacePopupComponent;
