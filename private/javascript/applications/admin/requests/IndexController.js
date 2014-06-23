(function() {
  'use strict';

  angular.module('admin-requests.controllers')
  .controller('IndexController', [
    '$scope', '$resource', 'ngTableParams',
    function IndexController($scope, $resource, ngTableParams) {

      var Request = $resource('/duffel-requests/api/requests/:id', {}, {
        query: {
          isArray: false
        }
      });

      $scope.requestPromise = null;
      $scope.requestsTable = new ngTableParams({
        page: 1,
        count: 10,
        // sorting: {
        //   created: 'asc'
        // }
      }, {
        total: 0,
        getData: function($defer, params) {
          $scope.requestsPromise = Request.query(params.url(), function(data) {
            params.total(data.total);
            $defer.resolve(data.result);
          });
        }
      });
    }
  ]);
})();
