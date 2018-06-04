const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema = {
  lng: String,
  lat: String,
  addressString: String,
}
module.exports = mongoose.model("Address", AddressSchema)