"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = require("ng-jhipster");
var Observable_1 = require("rxjs/Observable");
var auth_session_service_1 = require("../../shared/auth/auth-session.service");
var AuthExpiredInterceptor = /** @class */ (function (_super) {
    __extends(AuthExpiredInterceptor, _super);
    function AuthExpiredInterceptor(injector, stateStorageService, loginServiceModal) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        _this.stateStorageService = stateStorageService;
        _this.loginServiceModal = loginServiceModal;
        return _this;
    }
    AuthExpiredInterceptor.prototype.requestIntercept = function (options) {
        return options;
    };
    AuthExpiredInterceptor.prototype.responseIntercept = function (observable) {
        var _this = this;
        return observable.catch(function (error) {
            if (error.status === 401 && error.text() !== '' && error.json().path && error.json().path.indexOf('/api/account') === -1) {
                var destination = _this.stateStorageService.getDestinationState();
                if (destination !== null) {
                    var to = destination.destination;
                    var toParams = destination.params;
                    if (to.name === 'accessdenied') {
                        _this.stateStorageService.storePreviousState(to.name, toParams);
                    }
                }
                else {
                    _this.stateStorageService.storeUrl('/');
                }
                var authServer = _this.injector.get(auth_session_service_1.AuthServerProvider);
                authServer.logout();
                _this.loginServiceModal.open();
            }
            return Observable_1.Observable.throw(error);
        });
    };
    return AuthExpiredInterceptor;
}(ng_jhipster_1.JhiHttpInterceptor));
exports.AuthExpiredInterceptor = AuthExpiredInterceptor;
