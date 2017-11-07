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
var person_model_1 = require("./person.model");
var shared_1 = require("../../shared");
var PersonService = /** @class */ (function () {
    function PersonService(http, dateUtils) {
        this.http = http;
        this.dateUtils = dateUtils;
        this.resourceUrl = app_constants_1.SERVER_API_URL + 'api/people';
    }
    PersonService.prototype.create = function (person) {
        var _this = this;
        var copy = this.convert(person);
        return this.http.post(this.resourceUrl, copy).map(function (res) {
            var jsonResponse = res.json();
            return _this.convertItemFromServer(jsonResponse);
        });
    };
    PersonService.prototype.update = function (person) {
        var _this = this;
        var copy = this.convert(person);
        return this.http.put(this.resourceUrl, copy).map(function (res) {
            var jsonResponse = res.json();
            return _this.convertItemFromServer(jsonResponse);
        });
    };
    PersonService.prototype.find = function (id) {
        var _this = this;
        return this.http.get(this.resourceUrl + "/" + id).map(function (res) {
            var jsonResponse = res.json();
            return _this.convertItemFromServer(jsonResponse);
        });
    };
    PersonService.prototype.query = function (req) {
        var _this = this;
        var options = shared_1.createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map(function (res) { return _this.convertResponse(res); });
    };
    PersonService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id);
    };
    PersonService.prototype.convertResponse = function (res) {
        var jsonResponse = res.json();
        var result = [];
        for (var i = 0; i < jsonResponse.length; i++) {
            result.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return new shared_1.ResponseWrapper(res.headers, result, res.status);
    };
    /**
     * Convert a returned JSON object to Person.
     */
    PersonService.prototype.convertItemFromServer = function (json) {
        var entity = Object.assign(new person_model_1.Person(), json);
        entity.birthDate = this.dateUtils
            .convertDateTimeFromServer(json.birthDate);
        return entity;
    };
    /**
     * Convert a Person to a JSON which can be sent to the server.
     */
    PersonService.prototype.convert = function (person) {
        var copy = Object.assign({}, person);
        copy.birthDate = this.dateUtils.toDate(person.birthDate);
        return copy;
    };
    PersonService = __decorate([
        core_1.Injectable()
    ], PersonService);
    return PersonService;
}());
exports.PersonService = PersonService;
