"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PersonDeleteDialogComponent = /** @class */ (function () {
    function PersonDeleteDialogComponent(personService, activeModal, eventManager) {
        this.personService = personService;
        this.activeModal = activeModal;
        this.eventManager = eventManager;
    }
    PersonDeleteDialogComponent.prototype.clear = function () {
        this.activeModal.dismiss('cancel');
    };
    PersonDeleteDialogComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        this.personService.delete(id).subscribe(function (response) {
            _this.eventManager.broadcast({
                name: 'personListModification',
                content: 'Deleted an person'
            });
            _this.activeModal.dismiss(true);
        });
    };
    PersonDeleteDialogComponent = __decorate([
        core_1.Component({
            selector: 'jhi-person-delete-dialog',
            templateUrl: './person-delete-dialog.component.html'
        })
    ], PersonDeleteDialogComponent);
    return PersonDeleteDialogComponent;
}());
exports.PersonDeleteDialogComponent = PersonDeleteDialogComponent;
var PersonDeletePopupComponent = /** @class */ (function () {
    function PersonDeletePopupComponent(route, personPopupService) {
        this.route = route;
        this.personPopupService = personPopupService;
    }
    PersonDeletePopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.personPopupService
                .open(PersonDeleteDialogComponent, params['id']);
        });
    };
    PersonDeletePopupComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    PersonDeletePopupComponent = __decorate([
        core_1.Component({
            selector: 'jhi-person-delete-popup',
            template: ''
        })
    ], PersonDeletePopupComponent);
    return PersonDeletePopupComponent;
}());
exports.PersonDeletePopupComponent = PersonDeletePopupComponent;
