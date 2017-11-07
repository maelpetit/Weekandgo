"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(id, firstName, lastName, email, phoneNumber, birthDate, distanceMax, currentPlace, sportLists) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.birthDate = birthDate;
        this.distanceMax = distanceMax;
        this.currentPlace = currentPlace;
        this.sportLists = sportLists;
    }
    return Person;
}());
exports.Person = Person;
