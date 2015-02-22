angular.module('mobileApp').config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        'use strict';

        $locationProvider.html5Mode({
            enabled: true,              //takes the "#" out of our routes
            requireBase: false          //prevents errors...
        });

        $routeProvider
        .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
        .otherwise({ redirectTo: '/'
        
        });
    }
]);
