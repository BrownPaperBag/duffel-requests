module.exports = function(parameters) {
  var app = parameters.app;

  app.protect.get('/requests/admin', 'view-requests', function(req, res){
    res.render('/duffel-requests/admin/index.nunjucks');
  });
};
