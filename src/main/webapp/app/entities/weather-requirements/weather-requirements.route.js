"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = require("../../shared");
var weather_requirements_component_1 = require("./weather-requirements.component");
var weather_requirements_detail_component_1 = require("./weather-requirements-detail.component");
var weather_requirements_dialog_component_1 = require("./weather-requirements-dialog.component");
var weather_requirements_delete_dialog_component_1 = require("./weather-requirements-delete-dialog.component");
exports.weatherRequirementsRoute = [
    {
        path: 'weather-requirements',
        component: weather_requirements_component_1.WeatherRequirementsComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'WeatherRequirements'
        },
        canActivate: [shared_1.UserRouteAccessService]
    }, {
        path: 'weather-requirements/:id',
        component: weather_requirements_detail_component_1.WeatherRequirementsDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'WeatherRequirements'
        },
        canActivate: [shared_1.UserRouteAccessService]
    }
];
exports.weatherRequirementsPopupRoute = [
    {
        path: 'weather-requirements-new',
        component: weather_requirements_dialog_component_1.WeatherRequirementsPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'WeatherRequirements'
        },
        canActivate: [shared_1.UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'weather-requirements/:id/edit',
        component: weather_requirements_dialog_component_1.WeatherRequirementsPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'WeatherRequirements'
        },
        canActivate: [shared_1.UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'weather-requirements/:id/delete',
        component: weather_requirements_delete_dialog_component_1.WeatherRequirementsDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'WeatherRequirements'
        },
        canActivate: [shared_1.UserRouteAccessService],
        outlet: 'popup'
    }
];
