const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VehiculoSchema = new Schema({
  DescripcionVehiculo: String,
  PlacaVehiculo: String,
  ColorVehiculo: String,

});

const VehiculoModel = mongoose.model('Vehiculo', VehiculoSchema);

module.exports = VehiculoModel;