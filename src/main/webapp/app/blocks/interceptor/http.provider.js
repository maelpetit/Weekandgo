"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ng_jhipster_1 = require("ng-jhipster");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var login_modal_service_1 = require("../../shared/login/login-modal.service");
var state_storage_service_1 = require("../../shared/auth/state-storage.service");
var auth_expired_interceptor_1 = require("./auth-expired.interceptor");
var errorhandler_interceptor_1 = require("./errorhandler.interceptor");
var notification_interceptor_1 = require("./notification.interceptor");
function interceptableFactory(backend, defaultOptions, injector, stateStorageService, loginServiceModal, eventManager) {
    return new ng_jhipster_1.JhiInterceptableHttp(backend, defaultOptions, [
        new auth_expired_interceptor_1.AuthExpiredInterceptor(injector, stateStorageService, loginServiceModal),
        // Other interceptors can be added here
        new errorhandler_interceptor_1.ErrorHandlerInterceptor(eventManager),
        new notification_interceptor_1.NotificationInterceptor(injector)
    ]);
}
exports.interceptableFactory = interceptableFactory;
function customHttpProvider() {
    return {
        provide: http_1.Http,
        useFactory: interceptableFactory,
        deps: [
            http_1.XHRBackend,
            http_1.RequestOptions,
            core_1.Injector,
            state_storage_service_1.StateStorageService,
            login_modal_service_1.LoginModalService,
            ng_jhipster_1.JhiEventManager
        ]
    };
}
exports.customHttpProvider = customHttpProvider;
