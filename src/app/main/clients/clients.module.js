(function ()
{
    'use strict';

    angular
        .module('app.clients', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.clients', {
                url    : '/clients',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/clients/clients.html',
                        controller : 'ClientsController as vm'
                    }
                }
            });

        // Navigation
        // msNavigationServiceProvider.saveItem('fuse', {
        //     title : 'CLIENTS',
        //     group : false,
        //     weight: 1
        // });

        msNavigationServiceProvider.saveItem('clients', {
            title    : 'CLIENTS',
            state    : 'app.clients',
            /*stateParams: {
                'param1': 'page'
             },*/
            weight   : 1,
            lid: "stlink"
        });
    }
})();