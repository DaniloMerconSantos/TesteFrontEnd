export default class AppConfig{
    static $inject = ['$routeProvider'];
    constructor(routeProvider){
        routeProvider.when('/usuario', {
            templateUrl: 'views/index.html',
            controller: 'TesteController',
            controllerAs: 'testeFront'
        }).when('/usuario/form', {
            templateUrl: 'views/form.html',
            controller: 'TesteController',
            controllerAs: 'testeFront'
        })
    }
}