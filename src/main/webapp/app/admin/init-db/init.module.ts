import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WeekandgoSharedModule } from '../../shared';

import { InitService } from './init.service';


@NgModule({
    imports: [
        WeekandgoSharedModule
    ],
    providers: [
        InitService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WeekandgoAdminModule {}
