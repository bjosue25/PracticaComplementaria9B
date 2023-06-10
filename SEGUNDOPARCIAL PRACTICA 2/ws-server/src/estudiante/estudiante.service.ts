import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from './entities/estudiante.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EstudianteService {

  private readonly logger = new Logger('EstudianteService');

  constructor( 
    @InjectRepository(Estudiante) 
    private readonly estudianteRepository: Repository<Estudiante>,

    ){}

  
  async create(createEstudianteDto: CreateEstudianteDto) {
    try {
      const estudiante =  this.estudianteRepository.create(createEstudianteDto);
      await this.estudianteRepository.save(estudiante);
      return estudiante;
    } catch (error) {
      console.log(error)
      if (error.code==='23505')
        throw new BadRequestException(error.detail)
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado')
    }
    
  }

  findAll() {
    return this.estudianteRepository.find({});
  }

  async findOne(id: string) {
    const estudiante= await  this.estudianteRepository.findOneBy ({ id });
    if (!estudiante)
      throw new NotFoundException(`Estudiante ${id} no encontrado`);
    return estudiante;

  }

  async update(id: string, updateEstudianteDto: UpdateEstudianteDto) {
    const estudiante = await this.estudianteRepository.preload({
      id: id,
      ...updateEstudianteDto
    });
    if (!estudiante) throw new NotFoundException(`Estudiante ${id} no encontrado`)

    try {
      await  this.estudianteRepository.save(estudiante)
      return estudiante;
      
    } catch (error) {
      console.log(error)
    }

  }

  async remove(id: string) {
    const estudiante = await this.findOne(id);
    await this.estudianteRepository.remove(estudiante);

  }
  prueba():String[]{
    return ['uno','dos','tres'];
  }
}
