const mongoose = require('mongoose');

const TripSchema = mongoose.Schema = {
  startTime: Date,
  startPointAddress: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Address'
  },
  descriptionAddress: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Address'
  },
  passengers: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  }],
  driver: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  },
};

module.exports = mongoose.model("Trip", TripSchema)