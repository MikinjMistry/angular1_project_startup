(function() {
    'use strict';

    angular
        .module('angular1JavaApp')
        .factory('PasswordResetInit', PasswordResetInit);

    PasswordResetInit.$inject = ['$resource'];

    function PasswordResetInit($resource) {
        var service = $resource('api/account/reset-password/init', {}, {});

        return service;
    }
})();
