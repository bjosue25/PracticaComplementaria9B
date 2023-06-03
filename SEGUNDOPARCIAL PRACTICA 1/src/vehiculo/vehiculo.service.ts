import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { Vehiculo } from './entities/vehiculo.entity';

@Injectable()
export class VehiculoService {
  private vehics: Vehiculo[]=[
    {id:1, descripcion:'Mazda' , placa:'MBA-711', color:'Azul', estado:true},
    {id:2, descripcion:'Ford' , placa:'MAM-007', color:'Rojo', estado:true},
  ]

  create(createVehiculoDto: CreateVehiculoDto) {
    const vehiculo = new Vehiculo();
    vehiculo.id=  Math.max( ... this.vehics.map(elemento => elemento.id),0 )+1 ;
    vehiculo.placa= createVehiculoDto.placa;
    vehiculo.color= createVehiculoDto.color;
    vehiculo.descripcion= createVehiculoDto.descripcion;
    this.vehics.push(vehiculo);
    return vehiculo;
  }

  findAll() : Vehiculo[] {
    return this.vehics;
  }

  findOne(id: number) {
    const vehiculo =  this.vehics.find(vehiculo=> vehiculo.id===id);
    if (!vehiculo) throw new NotFoundException(`ID ${id} not found`)
    return vehiculo;
  }

  update(id: number, updatevehicDto: UpdateVehiculoDto ) {
    const { descripcion, placa, color, estado   } = updatevehicDto;
    const vehiculo = this.findOne(id);
    if (placa) vehiculo.placa= placa;
    if (color) vehiculo.color= color;
    if (estado!= undefined) vehiculo.estado= estado;

    this.vehics =  this.vehics.map( elemento=> {
      if (elemento.id===id) return vehiculo;
      return elemento;
    } )

    return vehiculo;

  }

  remove(id: number) {
    this.findOne(id);
    this.vehics =  this.vehics.filter(elemento=> elemento.id!== id);
  }
}
