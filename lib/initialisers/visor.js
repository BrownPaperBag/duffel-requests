module.exports = function(app) {
  var collector = app.get('visor');
  collector.add('Requests', {
    'name': 'Requests',
    'uri': '/requests/admin',
    'permission': 'view-requests'
  });
};

