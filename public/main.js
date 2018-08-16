requirejs.config({
    baseUrl: './',
    paths: {
        'app': 'app',
        'jquery': 'node_modules/jquery/dist/jquery',
        'angular': 'node_modules/angular/angular',
        'angular-route': 'node_modules/angular-route/angular-route'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
    }
});

requirejs(['app'], function () {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['myApp']);
    })
})
