import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { VehiculoService } from './vehiculo.service';
import { Vehiculo } from './entities/vehiculo.entity';
import { CreateVehiculoInput } from './dto/create-vehiculo.input';
import { UpdateVehiculoInput } from './dto/update-vehiculo.input';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Vehiculo)
export class VehiculoResolver {
  constructor(private readonly vehiculoService: VehiculoService) {}

  @Mutation(() => Vehiculo)
  async createVehiculo(@Args('createVehiculoInput') createVehiculoInput: CreateVehiculoInput)
  :Promise<Vehiculo> {
    return this.vehiculoService.create(createVehiculoInput);
  }

  @Query(() => [Vehiculo], { name: 'vehiculos' })
  async findAll():Promise<Vehiculo[]> {
    return this.vehiculoService.findAll();
  }

  @Query(() => Vehiculo, { name: 'vehiculo' })
  findOne(@Args('id', { type: () => ID}, ParseUUIDPipe ) id: string): Promise<Vehiculo> {
    return this.vehiculoService.findOne(id);
  }

  @Mutation(() => Vehiculo)
  updateVehiculo(@Args('updateVehiculoInput') updateVehiculoInput: UpdateVehiculoInput): Promise<Vehiculo> {
    return this.vehiculoService.update(updateVehiculoInput.id, updateVehiculoInput);
  }

  @Mutation(() => Vehiculo)
  removeVehiculo(@Args('id', { type: () => ID }) id: string): Promise<Vehiculo> {
    return this.vehiculoService.remove(id);
  }
}