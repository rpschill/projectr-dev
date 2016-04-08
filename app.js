(function(angular) {
    'use strict';

    angular.module('app.module', [

       /* App modules */
        'app.config',
        'app.router',


        /* Angular modules */
        'ngAnimate',
        'ngRoute',
        'ngSanitize',

        /* 3rd-party modules */
        'angular.filter',
        'firebase',
        'mgcrea.ngStrap',
        'angularMoment',
        'timer',
        'angular-humanize',
        'ui.grid',
        'ui.grid.draggable-rows'
    ])

        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.otherwise({
                redirectTo: '/home'
            });
        }])

        .run(['$rootScope', 'Auth', function($rootScope, Auth) {
            // track status of authentication
            Auth.$onAuth(function(user) {
                $rootScope.loggedIn = !!user;
            });
        }]);
})(angular);