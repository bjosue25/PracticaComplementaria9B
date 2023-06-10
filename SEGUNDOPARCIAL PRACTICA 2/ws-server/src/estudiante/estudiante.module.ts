import { Module } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteController } from './estudiante.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiante.entity';

@Module({
  controllers: [EstudianteController],
  providers: [EstudianteService],
  imports:[ TypeOrmModule.forFeature([
    Estudiante
  ]) ],
  exports:[ EstudianteService, TypeOrmModule ]
})
export class EstudianteModule {}
