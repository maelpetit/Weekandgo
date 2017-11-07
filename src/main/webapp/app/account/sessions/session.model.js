"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Session = /** @class */ (function () {
    function Session(series, tokenDate, ipAddress, userAgent) {
        this.series = series;
        this.tokenDate = tokenDate;
        this.ipAddress = ipAddress;
        this.userAgent = userAgent;
    }
    return Session;
}());
exports.Session = Session;
