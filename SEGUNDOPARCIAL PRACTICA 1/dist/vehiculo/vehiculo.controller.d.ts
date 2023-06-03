import { VehiculoService } from './vehiculo.service';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { Vehiculo } from './entities/vehiculo.entity';
export declare class VehiculoController {
    private readonly vehiculoService;
    constructor(vehiculoService: VehiculoService);
    create(createVehiculoDto: CreateVehiculoDto): Vehiculo;
    findAll(): Vehiculo[];
    findOne(id: number): Vehiculo;
    update(id: string, updateVehiculoDto: UpdateVehiculoDto): Vehiculo;
    remove(id: string): void;
}
