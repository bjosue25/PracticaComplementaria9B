import { VehiculoDTO } from './dto/vehiculo.dto';
import { VehiculoService } from './vehiculo.service';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { VehiculoMsg } from 'src/common/constants';

@Controller()
export class VehiculoController {
  constructor(private readonly vehiculoService: VehiculoService) {}

  @MessagePattern(VehiculoMsg.CREATE)
  create(@Payload() vehiculoDTO: VehiculoDTO) {
    return this.vehiculoService.create(vehiculoDTO);
  }

  @MessagePattern(VehiculoMsg.FIND_ALL)
  findAll() {
    return this.vehiculoService.findAll();
  }

  @MessagePattern(VehiculoMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.vehiculoService.findOne(id);
  }
  @MessagePattern(VehiculoMsg.UPDATE)
  update(@Payload() payload: any) {
    return this.vehiculoService.update(payload.id, payload.VehiculoDTO);
  }

  @MessagePattern(VehiculoMsg.DELETE)
  delete(@Payload() id: string) {
    return this.vehiculoService.delete(id);
  }
}
