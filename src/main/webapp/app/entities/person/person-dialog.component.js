"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PersonDialogComponent = /** @class */ (function () {
    function PersonDialogComponent(activeModal, jhiAlertService, personService, placeService, sportService, eventManager) {
        this.activeModal = activeModal;
        this.jhiAlertService = jhiAlertService;
        this.personService = personService;
        this.placeService = placeService;
        this.sportService = sportService;
        this.eventManager = eventManager;
    }
    PersonDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSaving = false;
        this.placeService.query()
            .subscribe(function (res) { _this.places = res.json; }, function (res) { return _this.onError(res.json); });
        this.sportService.query()
            .subscribe(function (res) { _this.sports = res.json; }, function (res) { return _this.onError(res.json); });
    };
    PersonDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    PersonDialogComponent.prototype.save = function () {
        this.isSaving = true;
        if (this.person.id !== undefined) {
            this.subscribeToSaveResponse(this.personService.update(this.person));
        }
        else {
            this.subscribeToSaveResponse(this.personService.create(this.person));
        }
    };
    PersonDialogComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) {
            return _this.onSaveSuccess(res);
        }, function (res) { return _this.onSaveError(); });
    };
    PersonDialogComponent.prototype.onSaveSuccess = function (result) {
        this.eventManager.broadcast({ name: 'personListModification', content: 'OK' });
        this.isSaving = false;
        this.activeModal.dismiss(result);
    };
    PersonDialogComponent.prototype.onSaveError = function () {
        this.isSaving = false;
    };
    PersonDialogComponent.prototype.onError = function (error) {
        this.jhiAlertService.error(error.message, null, null);
    };
    PersonDialogComponent.prototype.trackPlaceById = function (index, item) {
        return item.id;
    };
    PersonDialogComponent.prototype.trackSportById = function (index, item) {
        return item.id;
    };
    PersonDialogComponent.prototype.getSelected = function (selectedVals, option) {
        if (selectedVals) {
            for (var i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    };
    PersonDialogComponent = __decorate([
        core_1.Component({
            selector: 'jhi-person-dialog',
            templateUrl: './person-dialog.component.html'
        })
    ], PersonDialogComponent);
    return PersonDialogComponent;
}());
exports.PersonDialogComponent = PersonDialogComponent;
var PersonPopupComponent = /** @class */ (function () {
    function PersonPopupComponent(route, personPopupService) {
        this.route = route;
        this.personPopupService = personPopupService;
    }
    PersonPopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.personPopupService
                    .open(PersonDialogComponent, params['id']);
            }
            else {
                _this.personPopupService
                    .open(PersonDialogComponent);
            }
        });
    };
    PersonPopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    PersonPopupComponent = __decorate([
        core_1.Component({
            selector: 'jhi-person-popup',
            template: ''
        })
    ], PersonPopupComponent);
    return PersonPopupComponent;
}());
exports.PersonPopupComponent = PersonPopupComponent;
