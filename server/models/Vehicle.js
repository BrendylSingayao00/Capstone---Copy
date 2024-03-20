const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  plateNumber: { type: String, required: true },
  vehicleName: { type: String, required: true },
  carImage: { type: String, required: true },
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;