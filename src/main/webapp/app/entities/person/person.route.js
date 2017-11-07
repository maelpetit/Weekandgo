"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = require("../../shared");
var person_component_1 = require("./person.component");
var person_detail_component_1 = require("./person-detail.component");
var person_dialog_component_1 = require("./person-dialog.component");
var person_delete_dialog_component_1 = require("./person-delete-dialog.component");
exports.personRoute = [
    {
        path: 'person',
        component: person_component_1.PersonComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'People'
        },
        canActivate: [shared_1.UserRouteAccessService]
    }, {
        path: 'person/:id',
        component: person_detail_component_1.PersonDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'People'
        },
        canActivate: [shared_1.UserRouteAccessService]
    }
];
exports.personPopupRoute = [
    {
        path: 'person-new',
        component: person_dialog_component_1.PersonPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'People'
        },
        canActivate: [shared_1.UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'person/:id/edit',
        component: person_dialog_component_1.PersonPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'People'
        },
        canActivate: [shared_1.UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'person/:id/delete',
        component: person_delete_dialog_component_1.PersonDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'People'
        },
        canActivate: [shared_1.UserRouteAccessService],
        outlet: 'popup'
    }
];
