(function () {
  'use strict';

  angular
    .module('app')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state, $localStorage) {

    $log.debug('runBlock end');

    $rootScope.rootPath = apiConstant.rootPath();

    // $rootScope.$on('$stateChangeSuccess', function (event, toState){
    //   if(toState.name !== 'login' && toState.name !== 'register'){
    //     if(!getAuthState()){$state.go('login')}
    //   }
    // });

    function getAuthState(){
      return $localStorage.loggedIn
    }

  }
})();
