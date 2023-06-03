import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudianteModule } from './estudiante/estudiante.module';
import { VehiculoModule } from './vehiculo/vehiculo.module';


@Module({
  imports: [EstudianteModule, VehiculoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
