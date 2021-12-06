(function() {
    'use strict';
    angular
        .module('app')
        .controller('loginController', loginController)

    function loginController($scope, $state, $rootScope, $loginService, $localStorage, toastr, $filter, $translate, $window) {

        var userList = $localStorage.userList
        $localStorage.loggedIn = false

        $scope.user = {}

        $scope.navigate = function(route) {
            $state.go(route)
        }



        $scope.submit = function() {
            if ($scope.loginForm.$invalid) {
                toastr.clear();
                toastr.error("invalid email");
                return;
            }
            var foundUser = []
            foundUser = userList.filter(function(element) {
                return element.email === $scope.user.email
            })
            console.log(foundUser)
            if (foundUser.length > 0) {
                if (foundUser[0].password === $scope.user.password) {
                    $localStorage.loggedIn = true
                    $localStorage.user = $scope.user
                    $state.go('dash')
                } else {
                    toastr.error("Invalid Password")
                }
            } else {
                toastr.error("User Not Found")
            }
        }

    }
})();