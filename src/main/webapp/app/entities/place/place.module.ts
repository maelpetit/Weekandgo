import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { WeekandgoSharedModule } from '../../shared';
import {
    PlaceService,
    PlacePopupService,
    PlaceComponent,
    PlaceDetailComponent,
    PlaceDialogComponent,
    PlacePopupComponent,
    PlaceDeletePopupComponent,
    PlaceDeleteDialogComponent,
    placeRoute,
    placePopupRoute,
} from './';

const ENTITY_STATES = [
    ...placeRoute,
    ...placePopupRoute,
];

@NgModule({
    imports: [
        WeekandgoSharedModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCJgTsyc6pW3-Fdbteh3clxi9nqu94MA9s'
        }),
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        PlaceComponent,
        PlaceDetailComponent,
        PlaceDialogComponent,
        PlaceDeleteDialogComponent,
        PlacePopupComponent,
        PlaceDeletePopupComponent,
    ],
    entryComponents: [
        PlaceComponent,
        PlaceDialogComponent,
        PlacePopupComponent,
        PlaceDeleteDialogComponent,
        PlaceDeletePopupComponent,
    ],
    providers: [
        PlaceService,
        PlacePopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WeekandgoPlaceModule {}
