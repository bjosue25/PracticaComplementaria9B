import { Module } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service';
import { VehiculoResolver } from './vehiculo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehiculo } from './entities/vehiculo.entity';

@Module({
  providers: [VehiculoResolver, VehiculoService],
  imports:[
    TypeOrmModule.forFeature([Vehiculo])
  ]
})
export class VehiculoModule {}
