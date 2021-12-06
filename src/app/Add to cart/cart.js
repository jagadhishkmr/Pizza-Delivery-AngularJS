(function () {
  "use strict";
  angular.module("app").controller("cartController", cartController);
  function cartController(
    $scope,
    $state,
    $rootScope,
    $loginService,
    $localStorage,
    toastr,
    $filter,
    $translate,
    $window
  ) {
    $scope.nav = function (route){
      $state.go(route)
    }

    $scope.item = $localStorage.myCart
    console.log($scope.item)
    

   
       $scope.remove =  function() {
        $localStorage.removeItem('ngStorage-myCart');
        //localStorage.removeItem('ngStorage-cart');
      }
      
    
          
        





   
    
    
     




  }
})();
