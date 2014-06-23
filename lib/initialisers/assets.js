var path = require('path');

module.exports = function(app) {
  var assetManager = app.get('assetManager');

  var privateDirectory = path.join(__dirname, '/../../private/');

  assetManager.addFiles({
    permission: 'view-requests',
    profile: 'duffel-requests-admin',
    after: [
      'angular', 'ng-table'
    ],
    before: 'ng-application-bootstrap',
    js: [
      path.join(privateDirectory, '/javascript/applications/admin/requests/application.js'),
      path.join(privateDirectory, '/javascript/applications/admin/requests/controllers.js'),
      path.join(privateDirectory, '/javascript/applications/admin/requests/IndexController.js')
    ]
  });
};

