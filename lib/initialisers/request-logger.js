module.exports = function(app) {

  app.all('*', function(req, res, next) {
    (new Request({
      uri: req.path,
      userId: req.user ? req.user.id : null
    })).save();

    next();
  });
};
