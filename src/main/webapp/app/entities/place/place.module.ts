import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

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
import {BrowserModule} from '@angular/platform-browser';
import {AgmCoreModule} from '@agm/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

const ENTITY_STATES = [
    ...placeRoute,
    ...placePopupRoute,
];

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDNmDC8sk5oIyIh0aF7uZsnWeuEYeibMWE'
        }),
        WeekandgoSharedModule,
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
