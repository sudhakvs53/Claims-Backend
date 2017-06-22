(() => {

    angular.module('adminApp', []);

    angular.module('adminApp').controller('adminBodyController', adminBodyController);

    function adminBodyController($http, $scope) {
        const vm = this;

        // controller methods
        vm.getAppConstantValues = getAppConstantValues;
        vm.addValueToAppConstant = addValueToAppConstant;
        vm.deleteValueFromAppConstant = deleteValueFromAppConstant;

        // display list of application constant values on click
        vm.display_lst = {};

        // fetch application constants on page load
        $http({
            method: 'GET',
            url: '/get_application_constants',
        }).then(function(response) {
            vm.application_constant_lst = response.data;
        });


        function getAppConstantValues(appConstantName) {
            vm.display_lst.visible = true;
            angular.element('#addItemTextbox').val('');
            vm.application_constant_lst.forEach(function(item) {
                if (item.name == appConstantName) {
                    vm.display_lst.values = item.values;
                    vm.display_lst.name = appConstantName;
                }
            });
        };


        function addValueToAppConstant() {
            const value_item = angular.element('#addItemTextbox').val();
            $http({
                method: 'POST',
                url: '/set_application_constant_value',
                data: {
                    name: vm.display_lst.name,
                    value: value_item
                }
            }).then(function(response) {
                if (response.data == true) {
                    window.nacho = vm.display_lst.values;
                    vm.display_lst.values.push(value_item);
                    vm.application_constant_lst.forEach(function(item) {
                        if (vm.display_lst.name == item.name) {
                            item.values.push(value_item);
                        }
                    });
                    $scope.$digest();
                } else {
                    alert('update failed');
                }
            });
        }


        function deleteValueFromAppConstant(value_item) {
            $http({
                method: 'POST',
                url: '/del_application_constant_value',
                data: {
                    name: vm.display_lst.name,
                    value: value_item
                }
            }).then(function(response) {
                if (response.data == true) {
                    vm.display_lst.values.pop(value_item);
                    vm.application_constant_lst.forEach(function(item) {
                        if (vm.display_lst.name == item.name) {
                            item.values.pop(value_item);
                        }
                    });
                    $scope.$digest();
                } else {
                    alert('update failed');
                }
            });
        }


        function addNewNameToAppConstant() {
            $http({
                method: 'POST',
                url: '/set_application_constant_name'
            }).then(function(response) {
                if (response == true) {
                    vm.display_app_constant_lst.pop(angular.element('#addItemTextbox').val());
                } else {
                    alert('update failed');
                }
            });
        }


    }

    adminBodyController.$inject = ['$http', '$scope'];

})();