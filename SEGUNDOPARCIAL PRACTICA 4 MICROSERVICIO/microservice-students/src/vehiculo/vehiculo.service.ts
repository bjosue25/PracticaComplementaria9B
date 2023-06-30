import { VehiculoDTO } from './dto/vehiculo.dto';
import { HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { VEHICULO } from 'src/common/models/models';
import { IVehiculo } from 'src/common/interfaces/vehiculo.interface';


@Injectable()
export class VehiculoService {
  constructor(@InjectModel(VEHICULO.name) private readonly model: Model<IVehiculo>) {}

  
  async create(vehiculoDTO: VehiculoDTO): Promise<IVehiculo> {
    const newStudent = new this.model(vehiculoDTO);
    return await newStudent.save();
  }

  async findAll(): Promise<IVehiculo[]> {
    return await this.model.find();
  }

  async findOne(id: string): Promise<IVehiculo> {
    return await this.model.findById(id);
  }

  async update(id: string, vehiculoDTO: VehiculoDTO): Promise<IVehiculo> {
    return await this.model.findByIdAndUpdate(id, vehiculoDTO , { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
