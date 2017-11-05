import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { WeekandgoSportModule } from './sport/sport.module';
import { WeekandgoPlaceModule } from './place/place.module';
import { WeekandgoPersonModule } from './person/person.module';
import { WeekandgoWeatherRequirementsModule } from './weather-requirements/weather-requirements.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        WeekandgoSportModule,
        WeekandgoPlaceModule,
        WeekandgoPersonModule,
        WeekandgoWeatherRequirementsModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WeekandgoEntityModule {}
