import { BaseEntity } from './../../shared';

export const enum PrecipitationType {
    'RAIN',
    'SNOW'
}

export class WeatherRequirements implements BaseEntity {
    constructor(
        public id?: number,
        public temperatureMin?: number,
        public temperatureMax?: number,
        public windSpeedMin?: number,
        public windSpeedMax?: number,
        public windAngleMin?: number,
        public windAngleMax?: number,
        public waveHeightMin?: number,
        public waveHeightMax?: number,
        public precipitationTypeMax?: PrecipitationType,
        public precipitationTypeMin?: PrecipitationType,
        public precipitationValueMax?: number,
        public precipitationValueMin?: number,
    ) {
    }
}
