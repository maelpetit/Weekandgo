"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = require("../../shared");
var sport_component_1 = require("./sport.component");
var sport_detail_component_1 = require("./sport-detail.component");
var sport_dialog_component_1 = require("./sport-dialog.component");
var sport_delete_dialog_component_1 = require("./sport-delete-dialog.component");
exports.sportRoute = [
    {
        path: 'sport',
        component: sport_component_1.SportComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Sports'
        },
        canActivate: [shared_1.UserRouteAccessService]
    }, {
        path: 'sport/:id',
        component: sport_detail_component_1.SportDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Sports'
        },
        canActivate: [shared_1.UserRouteAccessService]
    }
];
exports.sportPopupRoute = [
    {
        path: 'sport-new',
        component: sport_dialog_component_1.SportPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Sports'
        },
        canActivate: [shared_1.UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'sport/:id/edit',
        component: sport_dialog_component_1.SportPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Sports'
        },
        canActivate: [shared_1.UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'sport/:id/delete',
        component: sport_delete_dialog_component_1.SportDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Sports'
        },
        canActivate: [shared_1.UserRouteAccessService],
        outlet: 'popup'
    }
];
