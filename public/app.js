define(["require", "exports", "angular", "./app.config"], function (require, exports, angular, app_config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const myAppModule = angular.module('myApp', []);
    myAppModule.config('AppConfig', app_config_1.default);
});
