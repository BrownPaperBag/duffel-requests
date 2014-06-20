var controllerLoader = require('controller-loader'),
  path = require('path');

module.exports = function(app, callback) {
  require('./models/Request').initialise(app.get('database'));

  require('../lib/initialisers/assets')(app);
  require('../lib/initialisers/visor')(app);

  app.get('nunjucksEnvironment').loaders
    .push(new (app.get('nunjucks')).FileSystemLoader(path.join(__dirname, 'views')));

  controllerLoader.load(path.resolve(path.join(__dirname, 'controllers')), function(controller) {
    require(controller)({
      app: app
    });
  }, callback);
};

