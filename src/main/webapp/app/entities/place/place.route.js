"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = require("../../shared");
var place_component_1 = require("./place.component");
var place_detail_component_1 = require("./place-detail.component");
var place_dialog_component_1 = require("./place-dialog.component");
var place_delete_dialog_component_1 = require("./place-delete-dialog.component");
exports.placeRoute = [
    {
        path: 'place',
        component: place_component_1.PlaceComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Places'
        },
        canActivate: [shared_1.UserRouteAccessService]
    }, {
        path: 'place/:id',
        component: place_detail_component_1.PlaceDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Places'
        },
        canActivate: [shared_1.UserRouteAccessService]
    }
];
exports.placePopupRoute = [
    {
        path: 'place-new',
        component: place_dialog_component_1.PlacePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Places'
        },
        canActivate: [shared_1.UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'place/:id/edit',
        component: place_dialog_component_1.PlacePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Places'
        },
        canActivate: [shared_1.UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'place/:id/delete',
        component: place_delete_dialog_component_1.PlaceDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Places'
        },
        canActivate: [shared_1.UserRouteAccessService],
        outlet: 'popup'
    }
];
