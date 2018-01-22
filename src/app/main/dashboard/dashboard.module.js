(function ()
{
    'use strict';

    angular
        .module('app.dashboard', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.dashboard', {
                url    : '/dashboard',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/dashboard/dashboard.html',
                        controller : 'DashboardController as vm'
                    }
                }
            });

        // Navigation

        msNavigationServiceProvider.saveItem('dashboard', {
            title    : 'DASHBOARD',
            state    : 'app.dashboard',
            weight   : 1,
            lid: "stlink"
        });
    }
})();