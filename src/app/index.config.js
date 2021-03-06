(function () {
  'use strict';

  angular
    .module('app')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-center';
    toastrConfig.preventDuplicates = false;
    toastrConfig.progressBar = true;
    toastrConfig.maxOpened = 3;
    $logProvider.debugEnabled(true);

  }

})();
