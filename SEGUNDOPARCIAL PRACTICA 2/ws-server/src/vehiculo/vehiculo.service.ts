import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { Vehiculo } from './entities/vehiculo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class VehiculoService {

  private readonly logger = new Logger('VehiculoService');

  constructor( 
    @InjectRepository(Vehiculo) 
    private readonly vehiculoRepository: Repository<Vehiculo>,

    ){}


  async create(createVehiculoDto: CreateVehiculoDto) {
    try {
      const vehiculo =  this.vehiculoRepository.create(createVehiculoDto);
      await this.vehiculoRepository.save(vehiculo);
      return vehiculo;
    } catch (error) {
      console.log(error)
      if (error.code==='23505')
        throw new BadRequestException(error.detail)
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado')
    }

  }

  findAll() {
    return this.vehiculoRepository.find({});
  }

  async findOne(id:string) {
    const vehiculo= await  this.vehiculoRepository.findOneBy ({ id });
    if (!vehiculo)
      throw new NotFoundException('vehiculo ${id} no encontrado');
    return vehiculo;

  }

  async update(id:string, updateVehiculoDto: UpdateVehiculoDto) {
    const vehiculo = await this.vehiculoRepository.preload({
      id: id,
      ...updateVehiculoDto
    });
    if (!vehiculo) throw new NotFoundException('vehiculo ${id} no encontrado')

    try {
      await  this.vehiculoRepository.save(vehiculo)
      return vehiculo;

    } catch (error) {
      console.log(error)
    }

  }

  async remove(id: string) {
    const vehiculo = await this.findOne(id);
    await this.vehiculoRepository.remove(vehiculo);

  }
  prueba():String[]{
    return ['uno','dos','tres'];
  }
}