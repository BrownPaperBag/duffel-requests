var controllerLoader = require('controller-loader'),
  path = require('path');

module.exports = function(app, mongoose, connection, callback) {
  require('./models/Request').initialise(mongoose, connection);

  require('../lib/initialisers/request-logger')(app);

  controllerLoader.load(path.resolve(path.join(__dirname, 'controllers')), function(controller) {
    require(controller)({
      app: app
    });
  }, callback);
};

