import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WeekandgoSharedModule } from '../../shared';

import { EventService } from "./event.service";


@NgModule({
    imports: [
        WeekandgoSharedModule
    ],
    providers: [
        EventService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WeekandgoPersonModule {}
