(function() {
  'use strict';

  angular.module('requests-admin', [
    'user',
    'requests-admin.controllers',
    'ngTable', 'cgBusy'
  ]);

  angular.module('requests-admin').value('cgBusyDefaults',{
      message: 'Loading requests',
      templateUrl: '/bower/angular-busy/angular-busy.html',
      minDuration: 700
  });

})();
