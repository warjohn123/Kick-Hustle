(function ()
{
    'use strict';

    angular
        .module('app.clients')
        .controller('ClientsController', ClientsController);

    /** @ngInject */
    function ClientsController()
    {
        var vm = this;

        // Data


        vm.clients = [
            {
                name: 'Canopy Point Coffee',
                location: 'Fort Worth'
            },
            {
                name: 'Test',
                location: 'Test'
            },
            {
                name: 'Test',
                location: 'Test'
            },
            {
                name: 'Test',
                location: 'Test'
            }
        ];

        // Methods

        //////////
    }
})();
