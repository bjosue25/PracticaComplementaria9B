import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { VehiculoController } from './vehiculo.controller';

@Module({
  imports: [ProxyModule],
  controllers: [VehiculoController],
})
export class VehiculoModule {}
