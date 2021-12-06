(function() {
    "use strict";
    angular.module("app").controller("registerController", registerController);

    function registerController(
        $scope,
        $state,
        $rootScope,
        $registerService,
        $localStorage,
        toastr,
        $filter,
        $translate,
        $window
    ) {

        var userList = []
        $scope.user = {}
        function autoload() {
            if ($localStorage.userList ) {
                userList = $localStorage.userList
            } else {
                $localStorage.userList = []
            }
        }
        autoload();

        $scope.submit = function() {
            console.log($scope.registerFrom)

            if ($scope.registerFrom.$invalid) {
                toastr.clear();
                toastr.error("All fields are required");
                return;
            }
            var foundUser = []
            foundUser = userList.filter(function(element) {
                return element.email === $scope.user.email
            })
            if (foundUser.length > 0) {
                toastr.error('user already created')
                return;
            }
            userList.push($scope.user)
            $localStorage.userList = userList
            $state.go('login');
        };


    }
})();