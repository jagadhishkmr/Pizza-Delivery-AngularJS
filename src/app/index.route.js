(function () {
  'use strict';
  angular
    .module('app')
    .config(routerConfig);
  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/Login/Login.html',
        controller: 'loginController',
        authenticate: true
      })
      .state('register', {
        url: '/register',
        templateUrl: 'app/Register/Register.html',
        controller: 'registerController'
      })
      .state('dash', {
        url: '/dash',
        templateUrl: 'app/Dashboard/dash.html',
        controller: 'dashController'
      })
      .state('cart', {
        url: '/cart',
        templateUrl: 'app/Add to cart/cart.html',
        controller: 'cartController'
      });
    $urlRouterProvider.otherwise('/login');
  }
})();
