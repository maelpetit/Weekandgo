"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PersonDetailComponent = /** @class */ (function () {
    function PersonDetailComponent(eventManager, personService, route) {
        this.eventManager = eventManager;
        this.personService = personService;
        this.route = route;
    }
    PersonDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['id']);
        });
        this.registerChangeInPeople();
    };
    PersonDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.personService.find(id).subscribe(function (person) {
            _this.person = person;
        });
    };
    PersonDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    PersonDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    };
    PersonDetailComponent.prototype.registerChangeInPeople = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('personListModification', function (response) { return _this.load(_this.person.id); });
    };
    PersonDetailComponent = __decorate([
        core_1.Component({
            selector: 'jhi-person-detail',
            templateUrl: './person-detail.component.html'
        })
    ], PersonDetailComponent);
    return PersonDetailComponent;
}());
exports.PersonDetailComponent = PersonDetailComponent;
