module.exports = function(app) {
  var Request = require('../models/Request').model();

  app.all('*', function(req, res, next) {

    // @todo Decide whether to manually handle this or use Connect responseTime?
    res.startTimestamp = new Date();

    var responseWrite = res.write,
      responseEnd = res.end,
      chunks = [];

    res.write = function (chunk) {
      chunks.push(chunk);
      responseWrite.apply(res, arguments);
    };

    res.end = function (chunk) {
      if (chunk) {
        chunks.push(chunk);
      }

      var port = req.app.settings.port;
      port = port == 80 || port == 443 ? '' : ':' + port;

      Request.create({
        uri: req.path,
        userId: req.user ? req.user.id : null,
        url: res.locals.requested_url = req.protocol + '://' + req.hostname  + port + req.path,
        status: res.statusCode,
        method: req.method,
        ip: req.ip,
        duration: (new Date()) - res.startTimestamp
      });

      responseEnd.apply(res, arguments);
    };

    next();

  }).after('error-handler');
};
