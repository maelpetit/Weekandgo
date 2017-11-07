"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var place_model_1 = require("./place.model");
var PlacePopupService = /** @class */ (function () {
    function PlacePopupService(modalService, router, placeService) {
        this.modalService = modalService;
        this.router = router;
        this.placeService = placeService;
        this.ngbModalRef = null;
    }
    PlacePopupService.prototype.open = function (component, id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var isOpen = _this.ngbModalRef !== null;
            if (isOpen) {
                resolve(_this.ngbModalRef);
            }
            if (id) {
                _this.placeService.find(id).subscribe(function (place) {
                    _this.ngbModalRef = _this.placeModalRef(component, place);
                    resolve(_this.ngbModalRef);
                });
            }
            else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(function () {
                    _this.ngbModalRef = _this.placeModalRef(component, new place_model_1.Place());
                    resolve(_this.ngbModalRef);
                }, 0);
            }
        });
    };
    PlacePopupService.prototype.placeModalRef = function (component, place) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.place = place;
        modalRef.result.then(function (result) {
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.ngbModalRef = null;
        }, function (reason) {
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.ngbModalRef = null;
        });
        return modalRef;
    };
    PlacePopupService = __decorate([
        core_1.Injectable()
    ], PlacePopupService);
    return PlacePopupService;
}());
exports.PlacePopupService = PlacePopupService;
