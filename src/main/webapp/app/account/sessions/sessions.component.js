"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SessionsComponent = /** @class */ (function () {
    function SessionsComponent(sessionsService, principal) {
        this.sessionsService = sessionsService;
        this.principal = principal;
    }
    SessionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionsService.findAll().subscribe(function (sessions) { return _this.sessions = sessions; });
        this.principal.identity().then(function (account) {
            _this.account = account;
        });
    };
    SessionsComponent.prototype.invalidate = function (series) {
        var _this = this;
        this.sessionsService.delete(encodeURIComponent(series)).subscribe(function (response) {
            if (response.status === 200) {
                _this.error = null;
                _this.success = 'OK';
                _this.sessionsService.findAll().subscribe(function (sessions) { return _this.sessions = sessions; });
            }
            else {
                _this.success = null;
                _this.error = 'ERROR';
            }
        });
    };
    SessionsComponent = __decorate([
        core_1.Component({
            selector: 'jhi-sessions',
            templateUrl: './sessions.component.html'
        })
    ], SessionsComponent);
    return SessionsComponent;
}());
exports.SessionsComponent = SessionsComponent;
