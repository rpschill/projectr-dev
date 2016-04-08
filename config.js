(function(angular) {
    'use strict';

    angular.module('app.config', [])

        .constant('FBURL', 'https://projectr-dev.firebaseio.com')

        .constant('loginRedirectPath', '/login');

})(angular);