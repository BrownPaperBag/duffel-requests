var RequestSchema = null,
  Request = null,
  timestamps = require('mongoose-times');

function initialiseSchema(mongoose, connection) {
  RequestSchema = new mongoose.Schema({
    uri: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    userId: String,
    status: Number,
    method: String
  });

  RequestSchema.plugin(timestamps);
  Request = connection.model('Request', RequestSchema);
}

module.exports = {
  initialise: function(mongoose, connection) {
    initialiseSchema(mongoose, connection);
  },
  model: function() {
    return Request;
  }
};

