"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PlaceDeleteDialogComponent = /** @class */ (function () {
    function PlaceDeleteDialogComponent(placeService, activeModal, eventManager) {
        this.placeService = placeService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
    }
    PlaceDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    PlaceDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.placeService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'placeListModification',
                content: 'Deleted an place'
            });
            _this.activeModal.dismiss(true);
        });
    };
    PlaceDeleteDialogComponent = __decorate([
        core_1.Component({
            selector: 'jhi-place-delete-dialog',
            templateUrl: './place-delete-dialog.component.html'
        })
    ], PlaceDeleteDialogComponent);
    return PlaceDeleteDialogComponent;
}());
exports.PlaceDeleteDialogComponent = PlaceDeleteDialogComponent;
var PlaceDeletePopupComponent = /** @class */ (function () {
    function PlaceDeletePopupComponent(route, placePopupService) {
        this.route = route;
        this.placePopupService = placePopupService;
    }
    PlaceDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.placePopupService
                .open(PlaceDeleteDialogComponent, params['id']);
        });
    };
    PlaceDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    PlaceDeletePopupComponent = __decorate([
        core_1.Component({
            selector: 'jhi-place-delete-popup',
            template: ''
        })
    ], PlaceDeletePopupComponent);
    return PlaceDeletePopupComponent;
}());
exports.PlaceDeletePopupComponent = PlaceDeletePopupComponent;
