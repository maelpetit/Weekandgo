"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SportDeleteDialogComponent = /** @class */ (function () {
    function SportDeleteDialogComponent(sportService, activeModal, eventManager) {
        this.sportService = sportService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
    }
    SportDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    SportDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.sportService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'sportListModification',
                content: 'Deleted an sport'
            });
            _this.activeModal.dismiss(true);
        });
    };
    SportDeleteDialogComponent = __decorate([
        core_1.Component({
            selector: 'jhi-sport-delete-dialog',
            templateUrl: './sport-delete-dialog.component.html'
        })
    ], SportDeleteDialogComponent);
    return SportDeleteDialogComponent;
}());
exports.SportDeleteDialogComponent = SportDeleteDialogComponent;
var SportDeletePopupComponent = /** @class */ (function () {
    function SportDeletePopupComponent(route, sportPopupService) {
        this.route = route;
        this.sportPopupService = sportPopupService;
    }
    SportDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.sportPopupService
                .open(SportDeleteDialogComponent, params['id']);
        });
    };
    SportDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    SportDeletePopupComponent = __decorate([
        core_1.Component({
            selector: 'jhi-sport-delete-popup',
            template: ''
        })
    ], SportDeletePopupComponent);
    return SportDeletePopupComponent;
}());
exports.SportDeletePopupComponent = SportDeletePopupComponent;
