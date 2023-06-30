import { Module } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service';
import { VehiculoController } from './vehiculo.controller';
import { VehiculoSchema } from './schema/vehiculo.schema';
import {VEHICULO } from 'src/common/models/models';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: VEHICULO.name,
        useFactory: () => VehiculoSchema,
      },
    ]),
  ],
  controllers: [VehiculoController],
  providers: [VehiculoService],
})
export class VehiculoModule {}