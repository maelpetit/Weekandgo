"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WeatherRequirements = /** @class */ (function () {
    function WeatherRequirements(id, temperatureMin, temperatureMax, windSpeedMin, windSpeedMax, windAngleMin, windAngleMax, waveHeightMin, waveHeightMax, precipitationTypeMax, precipitationTypeMin, precipitationValueMax, precipitationValueMin) {
        this.id = id;
        this.temperatureMin = temperatureMin;
        this.temperatureMax = temperatureMax;
        this.windSpeedMin = windSpeedMin;
        this.windSpeedMax = windSpeedMax;
        this.windAngleMin = windAngleMin;
        this.windAngleMax = windAngleMax;
        this.waveHeightMin = waveHeightMin;
        this.waveHeightMax = waveHeightMax;
        this.precipitationTypeMax = precipitationTypeMax;
        this.precipitationTypeMin = precipitationTypeMin;
        this.precipitationValueMax = precipitationValueMax;
        this.precipitationValueMin = precipitationValueMin;
    }
    return WeatherRequirements;
}());
exports.WeatherRequirements = WeatherRequirements;
