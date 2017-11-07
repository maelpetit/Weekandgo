"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PlaceDetailComponent = /** @class */ (function () {
    function PlaceDetailComponent(eventManager, placeService, route) {
        this.eventManager = eventManager;
        this.placeService = placeService;
        this.route = route;
    }
    PlaceDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.load(params['id']);
        });
        this.registerChangeInPlaces();
    };
    PlaceDetailComponent.prototype.load = function (id) {
        var _this = this;
        this.placeService.find(id).subscribe(function (place) {
            _this.place = place;
        });
    };
    PlaceDetailComponent.prototype.previousState = function () {
        window.history.back();
    };
    PlaceDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    };
    PlaceDetailComponent.prototype.registerChangeInPlaces = function () {
        var _this = this;
        this.eventSubscriber = this.eventManager.subscribe('placeListModification', function (response) { return _this.load(_this.place.id); });
    };
    PlaceDetailComponent = __decorate([
        core_1.Component({
            selector: 'jhi-place-detail',
            templateUrl: './place-detail.component.html'
        })
    ], PlaceDetailComponent);
    return PlaceDetailComponent;
}());
exports.PlaceDetailComponent = PlaceDetailComponent;
