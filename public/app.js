define(["require", "exports", "angular", "./services/teste.service", "./controllers/teste.controller"], function (require, exports, angular, teste_service_1, teste_controller_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var myAppModule = angular.module('myApp', ["ngRoute"]);
    myAppModule.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/usuario', {
                templateUrl: 'views/index.html',
                controller: 'TesteController',
                controllerAs: 'testeFront'
            }).when('/usuario/form', {
                templateUrl: 'views/form.html',
                controller: 'TesteController',
                controllerAs: 'testeFront'
            });
        }]);
    myAppModule.controller('TesteController', teste_controller_1.default);
    myAppModule.service('Teste', teste_service_1.default);
});
