import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { Vehiculo } from './entities/vehiculo.entity';
export declare class VehiculoService {
    private vehics;
    create(createVehiculoDto: CreateVehiculoDto): Vehiculo;
    findAll(): Vehiculo[];
    findOne(id: number): Vehiculo;
    update(id: number, updatevehicDto: UpdateVehiculoDto): Vehiculo;
    remove(id: number): void;
}
