"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SportDetailComponent = /** @class */ (function () {
    function SportDetailComponent(eventManager, sportService, route) {
        this.eventManager = eventManager;
        this.sportService = sportService;
        this.route = route;
    }
    SportDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['id']);
        });
        this.registerChangeInSports();
    };
    SportDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.sportService.find(id).subscribe(function (sport) {
            _this.sport = sport;
        });
    };
    SportDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    SportDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    };
    SportDetailComponent.prototype.registerChangeInSports = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('sportListModification', function (response) { return _this.load(_this.sport.id); });
    };
    SportDetailComponent = __decorate([
        core_1.Component({
            selector: 'jhi-sport-detail',
            templateUrl: './sport-detail.component.html'
        })
    ], SportDetailComponent);
    return SportDetailComponent;
}());
exports.SportDetailComponent = SportDetailComponent;
