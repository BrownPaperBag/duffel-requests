module.exports = function(app, callback) {
  require('./models/Request').initialise(app.get('database'));

  require('../lib/initialisers/request-logger')(app);

  callback();
};

