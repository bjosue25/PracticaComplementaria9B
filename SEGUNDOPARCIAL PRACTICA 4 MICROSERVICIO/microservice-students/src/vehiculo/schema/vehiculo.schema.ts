import * as mongoose from 'mongoose';

export const VehiculoSchema = new mongoose.Schema(
  {
    identificacion: { type: String, required: true },
    descripcion: { type: String, required: true },
    placa: { type: String, required: true },
    color: { type: String, required: true },
    
  },
  { timestamps: true },
);

VehiculoSchema.index({ descripcion: 1 }, { unique: true });
VehiculoSchema.index({ placa: 1 }, { unique: true });
