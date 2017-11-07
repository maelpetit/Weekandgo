"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = require("../../shared");
var sessions_component_1 = require("./sessions.component");
exports.sessionsRoute = {
    path: 'sessions',
    component: sessions_component_1.SessionsComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Sessions'
    },
    canActivate: [shared_1.UserRouteAccessService]
};
