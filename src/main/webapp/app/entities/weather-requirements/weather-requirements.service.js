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
var weather_requirements_model_1 = require("./weather-requirements.model");
var shared_1 = require("../../shared");
var WeatherRequirementsService = /** @class */ (function () {
    function WeatherRequirementsService(http) {
        this.http = http;
        this.resourceUrl = app_constants_1.SERVER_API_URL + 'api/weather-requirements';
    }
    WeatherRequirementsService.prototype.create = function (weatherRequirements) {
        var _this = this;
        var copy = this.convert(weatherRequirements);
        return this.http.post(this.resourceUrl, copy).map(function (res) {
            var jsonResponse = res.json();
            return _this.convertItemFromServer(jsonResponse);
        });
    };
    WeatherRequirementsService.prototype.update = function (weatherRequirements) {
        var _this = this;
        var copy = this.convert(weatherRequirements);
        return this.http.put(this.resourceUrl, copy).map(function (res) {
            var jsonResponse = res.json();
            return _this.convertItemFromServer(jsonResponse);
        });
    };
    WeatherRequirementsService.prototype.find = function (id) {
        var _this = this;
        return this.http.get(this.resourceUrl + "/" + id).map(function (res) {
            var jsonResponse = res.json();
            return _this.convertItemFromServer(jsonResponse);
        });
    };
    WeatherRequirementsService.prototype.query = function (req) {
        var _this = this;
        var options = shared_1.createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map(function (res) { return _this.convertResponse(res); });
    };
    WeatherRequirementsService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id);
    };
    WeatherRequirementsService.prototype.convertResponse = function (res) {
        var jsonResponse = res.json();
        var result = [];
        for (var i = 0; i < jsonResponse.length; i++) {
            result.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return new shared_1.ResponseWrapper(res.headers, result, res.status);
    };
    /**
     * Convert a returned JSON object to WeatherRequirements.
     */
    WeatherRequirementsService.prototype.convertItemFromServer = function (json) {
        var entity = Object.assign(new weather_requirements_model_1.WeatherRequirements(), json);
        return entity;
    };
    /**
     * Convert a WeatherRequirements to a JSON which can be sent to the server.
     */
    WeatherRequirementsService.prototype.convert = function (weatherRequirements) {
        var copy = Object.assign({}, weatherRequirements);
        return copy;
    };
    WeatherRequirementsService = __decorate([
        core_1.Injectable()
    ], WeatherRequirementsService);
    return WeatherRequirementsService;
}());
exports.WeatherRequirementsService = WeatherRequirementsService;
