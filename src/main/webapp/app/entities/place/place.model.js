"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Place = /** @class */ (function () {
    function Place(id, nom, latitude, longitude, sportLists) {
        this.id = id;
        this.nom = nom;
        this.latitude = latitude;
        this.longitude = longitude;
        this.sportLists = sportLists;
    }
    return Place;
}());
exports.Place = Place;
