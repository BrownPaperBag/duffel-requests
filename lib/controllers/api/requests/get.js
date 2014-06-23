var Request = require('duffel-requests').Request();

module.exports = function(parameters) {
  var app = parameters.app;

  app.protect.get('/duffel-requests/api/requests', 'view-requests', function(req, res){

    var page = req.query.page,
      count = req.query.count,
      sorting = req.query.sorting || {},
      filter = req.query.filter || {};

    var order = [];
    Object.keys(sorting).forEach(function(key) {
      order.push(key + ' ' + (sorting[key] == 'asc' ? 'ASC' : 'DESC'));
    });

    var where = false;

    Object.keys(filter).forEach(function(key) {
      if (!where) {
        where = {};
      }
      where[key] = {
        like: filter[key]
      };
    });

    var params = {
      where: where,
      order: order.join(', '),
      limit: count,
      skip: (page - 1) * count
    };

    Request.all(params, function(error, requests) {
      if (error) throw error;
      Request.count(where, function(error, count) {
        if (error) throw error;
        res.json({
          total: count,
          result: requests
        });
      });
    });
  });
};

