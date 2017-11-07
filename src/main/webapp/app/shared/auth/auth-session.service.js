"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_constants_1 = require("../../app.constants");
var AuthServerProvider = /** @class */ (function () {
    function AuthServerProvider(http) {
        this.http = http;
    }
    AuthServerProvider.prototype.login = function (credentials) {
        var data = 'j_username=' + encodeURIComponent(credentials.username) +
            '&j_password=' + encodeURIComponent(credentials.password) +
            '&remember-me=' + credentials.rememberMe + '&submit=Login';
        var headers = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.post(app_constants_1.SERVER_API_URL + 'api/authentication', data, { headers: headers });
    };
    AuthServerProvider.prototype.logout = function () {
        var _this = this;
        // logout from the server
        return this.http.post(app_constants_1.SERVER_API_URL + 'api/logout', {}).map(function (response) {
            // to get a new csrf token call the api
            _this.http.get(app_constants_1.SERVER_API_URL + 'api/account').subscribe(function () { }, function () { });
            return response;
        });
    };
    AuthServerProvider = __decorate([
        core_1.Injectable()
    ], AuthServerProvider);
    return AuthServerProvider;
}());
exports.AuthServerProvider = AuthServerProvider;
