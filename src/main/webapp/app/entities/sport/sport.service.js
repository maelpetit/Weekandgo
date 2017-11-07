"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_constants_1 = require("../../app.constants");
var sport_model_1 = require("./sport.model");
var shared_1 = require("../../shared");
var SportService = /** @class */ (function () {
    function SportService(http) {
        this.http = http;
        this.resourceUrl = app_constants_1.SERVER_API_URL + 'api/sports';
    }
    SportService.prototype.create = function (sport) {
        var _this = this;
        var copy = this.convert(sport);
        return this.http.post(this.resourceUrl, copy).map(function (res) {
            var jsonResponse = res.json();
            return _this.convertItemFromServer(jsonResponse);
        });
    };
    SportService.prototype.update = function (sport) {
        var _this = this;
        var copy = this.convert(sport);
        return this.http.put(this.resourceUrl, copy).map(function (res) {
            var jsonResponse = res.json();
            return _this.convertItemFromServer(jsonResponse);
        });
    };
    SportService.prototype.find = function (id) {
        var _this = this;
        return this.http.get(this.resourceUrl + "/" + id).map(function (res) {
            var jsonResponse = res.json();
            return _this.convertItemFromServer(jsonResponse);
        });
    };
    SportService.prototype.query = function (req) {
        var _this = this;
        var options = shared_1.createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map(function (res) { return _this.convertResponse(res); });
    };
    SportService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id);
    };
    SportService.prototype.convertResponse = function (res) {
        var jsonResponse = res.json();
        var result = [];
        for (var i = 0; i < jsonResponse.length; i++) {
            result.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return new shared_1.ResponseWrapper(res.headers, result, res.status);
    };
    /**
     * Convert a returned JSON object to Sport.
     */
    SportService.prototype.convertItemFromServer = function (json) {
        var entity = Object.assign(new sport_model_1.Sport(), json);
        return entity;
    };
    /**
     * Convert a Sport to a JSON which can be sent to the server.
     */
    SportService.prototype.convert = function (sport) {
        var copy = Object.assign({}, sport);
        return copy;
    };
    SportService = __decorate([
        core_1.Injectable()
    ], SportService);
    return SportService;
}());
exports.SportService = SportService;
