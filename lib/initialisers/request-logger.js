module.exports = function(app) {
  var Request = require('../models/Request').model();

  app.all('*', function(req, res, next) {
    var port = req.app.settings.port;
    port = port == 80 || port == 443 ? '' : ':' + port;

    (new Request({
      uri: req.path,
      userId: req.user ? req.user.id : null,
      url: res.locals.requested_url = req.protocol + '://' + req.host  + port + req.path,
      status: res.statusCode,
      method: req.method
    })).save();

    next();
  });
};
