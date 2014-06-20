var Request = null;

function initialiseSchema(database) {
  Request = database.connections.main.define('requests', {
    uri: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    user_id: String,
    status: Number,
    ip: String,
    duration: Number,
    method: String,
    created: {
      type: Date,
      default: Date.now
    }
  });
}

module.exports = {
  initialise: function(database) {
    initialiseSchema(database);
  },
  model: function() {
    return Request;
  }
};

