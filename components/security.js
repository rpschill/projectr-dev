(function(angular) {
    'use strict';

    var securedRoutes = [];

    angular.module('app.security', [
        'ngRoute',
        'firebase.auth',
        'app.config'
    ])

        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.otherwise({ redirectTo: '/home' });
        }])

        .config(['$routeProvider', function($routeProvider) {

            $routeProvider.whenAuthenticated = function(path, route) {
                securedRoutes.push(path);
                route.resolve = route.resolve || {};
                route.resolve.user = ['Auth', function(Auth) {
                    return Auth.$requireAuth();
                }];
                $routeProvider.when(path, route);
                return this;
            }
        }])

        .run(['$rootScope', '$location', 'Auth', 'loginRedirectPath', function($rootScope, $location, Auth, loginRedirectPath) {
            Auth.$onAuth(check);
        }])
})