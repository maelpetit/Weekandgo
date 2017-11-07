"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var person_model_1 = require("./person.model");
var PersonPopupService = /** @class */ (function () {
    function PersonPopupService(datePipe, modalService, router, personService) {
        this.datePipe = datePipe;
        this.modalService = modalService;
        this.router = router;
        this.personService = personService;
        this.ngbModalRef = null;
    }
    PersonPopupService.prototype.open = function (component, id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var isOpen = _this.ngbModalRef !== null;
            if (isOpen) {
                resolve(_this.ngbModalRef);
            }
            if (id) {
                _this.personService.find(id).subscribe(function (person) {
                    person.birthDate = _this.datePipe
                        .transform(person.birthDate, 'yyyy-MM-ddTHH:mm:ss');
                    _this.ngbModalRef = _this.personModalRef(component, person);
                    resolve(_this.ngbModalRef);
                });
            }
            else {
                // setTimeout used as a workaround for getting ExpressionChangedAfterItHasBeenCheckedError
                setTimeout(function () {
                    _this.ngbModalRef = _this.personModalRef(component, new person_model_1.Person());
                    resolve(_this.ngbModalRef);
                }, 0);
            }
        });
    };
    PersonPopupService.prototype.personModalRef = function (component, person) {
        var _this = this;
        var modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.person = person;
        modalRef.result.then(function (result) {
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.ngbModalRef = null;
        }, function (reason) {
            _this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
            _this.ngbModalRef = null;
        });
        return modalRef;
    };
    PersonPopupService = __decorate([
        core_1.Injectable()
    ], PersonPopupService);
    return PersonPopupService;
}());
exports.PersonPopupService = PersonPopupService;
