module.exports = {
  initialise: require('./lib/initialise'),
  catchall: require('./lib/catchall'),
  Request: function() {
    return require('./lib/models/Request').model();
  }
};
