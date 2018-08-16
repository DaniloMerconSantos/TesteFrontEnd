define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AppConfig {
        constructor(routeProvider) {
            routeProvider.when('/usuario', {
                templateUrl: 'views/index.html',
                controller: 'TesteController',
                controllerAs: 'testeFront'
            }).when('/usuario/form', {
                templateUrl: 'views/form.html',
                controller: 'TesteController',
                controllerAs: 'testeFront'
            });
        }
    }
    AppConfig.$inject = ['$routeProvider'];
    exports.default = AppConfig;
});
