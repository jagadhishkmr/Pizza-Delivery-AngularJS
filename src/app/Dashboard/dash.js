(function() {
    "use strict";
    angular.module("app").controller("dashController", dashController);

    function dashController(
        $scope,
        $state,
        $rootScope,
        $loginService,
        $localStorage,
        toastr,
        $filter,
        $translate,
        $window
    )
 

    {
        $scope.myCart = []
        var cartList = []

        $scope.nav = function(route) {
            $state.go(route)
        }

        function autoload(){
            if(!$localStorage.cart){
                $localStorage.cart = []
            }
            else{
                cartList = $localStorage.cart
                manageCart();
               // $localStorage.myCart=[]
                $localStorage.myCart= $scope.myCart
            }
        }
        autoload();

        $scope.menu = [

            {
                "id": "1",
                "name": "Margarita pizza",
                "price": "450",
                "image": "/assets/images/PIZZA/margarita-bacon.jpg"

            },
            {
                "id": "2",
                "name": "Chicken Pizza",
                "price": "550",
                "image": "assets/images/PIZZA/CHICKEN PIZZA.jpg"


            },
            {
                "id": "3",
                "name": "Salami-cornolives pizza",
                "price": "400",
                "description": "A thick base pizza with fresh tomato sauce",
                "image": "assets/images/PIZZA/pizza-7680x4320-salami-corn-olives-5972.jpg"

            },
            {
                "id": "4",
                "name": "Tomato pepper pizza",
                "price": "350",
                "image": "/assets/images/PIZZA/pizza-tomato-pepper-4k-16605.jpg"

            },
            {
                "id": "5",
                "name": "Broccoli pizza",
                "price": "300",
                "description": "A thick base pizza with fresh tomato sauce",
                "image": "/assets/images/PIZZA/pizza-3840x2160-broccoli-parsley-basil-saffron-tomatoes-sausage-689.jpg"

            },
            {
                "id": "6",
                "name": "Pepperoni pizza",
                "price": "420",
                "description": "A thick base pizza with fresh tomato sauce",
                "image": "/assets/images/PIZZA/pepperoni-pizza-4.jpg"

            },
            {
                "id": "7",
                "name": "Italian pizza",
                "price": "358",
                "description": "A thick base pizza with fresh tomato sauce",
                "image": "/assets/images/PIZZA/italian pizza.jpg"

            },
            {
                "id": "8",
                "name": "Cheese pizza",
                "price": "290",
                "description": "A thick base pizza with fresh tomato sauce",
                "image": "/assets/images/PIZZA/cheese pizza.jpg"

            },
            {
                "id": "9",
                "name": "Shrimps pizza",
                "price": "375",
                "description": "A thick base pizza with fresh tomato sauce",
                "image": "/assets/images/PIZZA/shrimps-pizza.jpg"

            }


        ]

        function manageCart(){
            
            $scope.myCart = cartList.filter(function (element){
                return element.user === $localStorage.user.email
            })
        }

        $scope.pushToCart = function(item) {
            item.user = $localStorage.user.email
            cartList.push(item)
            $localStorage.cart = cartList
            manageCart();
            

        }
        
        
    }

})();