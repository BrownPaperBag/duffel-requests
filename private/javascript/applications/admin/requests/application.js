(function() {
  'use strict';

  angular.module('admin-requests', [
    'user',
    'admin-requests.controllers',
    'ngTable', 'cgBusy'
  ]);

  angular.module('admin-requests').value('cgBusyDefaults',{
      message: 'Loading requests',
      templateUrl: '/bower/angular-busy/angular-busy.html',
      minDuration: 700
  });

})();
