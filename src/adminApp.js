(() => {

    angular.module('adminApp', []);

    angular.module('adminApp').controller('adminBodyController', adminBodyController);

    function adminBodyController($http) {
        const vm = this;

        vm.get_app_constant_values = get_app_constant_values;

        vm.display_app_constant_lst = [];

        $http({
            method: 'GET',
            url: '/get_application_constants',
        }).then(function(response) {
            // window.nacho = response.data;
            vm.application_constants_lst = response.data;
        });

        function get_app_constant_values(ele) {
            window.nacho = ele;
            vm.display_app_constant_lst = [];
            vm.application_constants_lst.forEach(function(item) {
                if (item.name == ele) {
                    vm.display_app_constant_lst = item.values;
                }
            });
        };

    }

    adminBodyController.$inject = ['$http'];

})();