"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PlaceComponent = /** @class */ (function () {
    function PlaceComponent(placeService, jhiAlertService, eventManager, principal) {
        this.placeService = placeService;
        this.jhiAlertService = jhiAlertService;
        this.eventManager = eventManager;
        this.principal = principal;
    }
    PlaceComponent.prototype.loadAll = function () {
        var _this = this;
        this.placeService.query().subscribe(function (res) {
            _this.place = res.json;
        }, function (res) { return _this.onError(res.json); });
    };
    PlaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAll();
        this.principal.identity().then(function (account) {
            _this.currentAccount = account;
        });
        this.registerChangeInPlaces();
    };
    PlaceComponent.prototype.ngOnDestroy = function () {
        this.eventManager.destroy(this.eventSubscriber);
    };
    PlaceComponent.prototype.trackId = function (index, item) {
        return item.id;
    };
    PlaceComponent.prototype.registerChangeInPlaces = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('placeListModification', function (response) { return _this.loadAll(); });
    };
    PlaceComponent.prototype.onError = function (error) {
        this.jhiAlertService.error(error.message, null, null);
    };
    PlaceComponent = __decorate([
        core_1.Component({
            selector: 'jhi-place',
            templateUrl: './place.component.html'
        })
    ], PlaceComponent);
    return PlaceComponent;
}());
exports.PlaceComponent = PlaceComponent;
