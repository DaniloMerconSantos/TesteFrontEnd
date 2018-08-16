import * as jQuery from "jquery";
import * as angular from "angular";

import TesteService from "./services/teste.service";
import TesteController from "./controllers/teste.controller";

const myAppModule =  angular.module('myApp',["ngRoute"]);

myAppModule.config(['$routeProvider', function($routeProvider){

    $routeProvider.when('/usuario', {
        templateUrl: 'views/index.html',
        controller: 'TesteController',
        controllerAs: 'testeFront'
    }).when('/usuario/form', {
        templateUrl: 'views/form.html',
        controller: 'TesteController',
        controllerAs: 'testeFront'
    })
}]);

myAppModule.controller('TesteController', TesteController);
myAppModule.service('Teste', TesteService);
