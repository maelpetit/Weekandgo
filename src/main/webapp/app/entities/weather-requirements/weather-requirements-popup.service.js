"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var weather_requirements_model_1 = require("./weather-requirements.model");
var WeatherRequirementsPopupService = /** @class */ (function () {
    function WeatherRequirementsPopupService(modalService, router, weatherRequirementsService) {
        this.modalService = modalService;
        this.router = router;
        this.weatherRequirementsService = weatherRequirementsService;
        this.ngbModalRef = null;
    }
    WeatherRequirementsPopupService.prototype.open = function (component, id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var isOpen = _this.ngbModalRef !== null;
            if (isOpen) {
                resolve(_this.ngbModalRef);
            }
            if (id) {
                _this.weatherRequirementsService.find(id).subscribe(function (weatherRequirements) {
                    _this.ngbModalRef = _this.weatherRequirementsModalRef(component, weatherRequirements);
                    resolve(_this.ngbModalRef);
                });
            }
            else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(function () {
                    _this.ngbModalRef = _this.weatherRequirementsModalRef(component, new weather_requirements_model_1.WeatherRequirements());
                    resolve(_this.ngbModalRef);
                }, 0);
            }
        });
    };
    WeatherRequirementsPopupService.prototype.weatherRequirementsModalRef = function (component, weatherRequirements) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.weatherRequirements = weatherRequirements;
        modalRef.result.then(function (result) {
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.ngbModalRef = null;
        }, function (reason) {
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.ngbModalRef = null;
        });
        return modalRef;
    };
    WeatherRequirementsPopupService = __decorate([
        core_1.Injectable()
    ], WeatherRequirementsPopupService);
    return WeatherRequirementsPopupService;
}());
exports.WeatherRequirementsPopupService = WeatherRequirementsPopupService;
