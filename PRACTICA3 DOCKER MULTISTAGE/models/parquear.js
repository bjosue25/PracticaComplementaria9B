const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ParquearSchema = new Schema({
  ID_Vehiculo: String,
  ID_Parqueo: String,
  Entrada: Date,
  Salida: Date,

});

const ParquerModel = mongoose.model('Parqueo', ParquearSchema);

module.exports = ParquerModel;