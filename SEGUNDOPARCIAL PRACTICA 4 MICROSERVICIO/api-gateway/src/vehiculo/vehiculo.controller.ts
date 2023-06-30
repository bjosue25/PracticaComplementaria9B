import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { VehiculoMSG } from './../common/constants';
import { Observable } from 'rxjs';
import { VehiculoDTO } from './dto/vehiculo.dto';
import { ClientProxySuperFlights } from './../common/proxy/client-proxy';
import { IVehiculo } from 'src/common/interfaces/vehiculo.interface';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('vehiculos')
// @UseGuards(JwtAuthGuard)
@Controller('api/v2/vehiculo')
export class VehiculoController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyVehiculo = this.clientProxy.clientProxyVehiculos();

  @Post()
  create(@Body() vehiculoDTO: VehiculoDTO): Observable<IVehiculo> {
    return this._clientProxyVehiculo.send(VehiculoMSG.CREATE, vehiculoDTO);
  }

  @Get()
  findAll(): Observable<IVehiculo[]> {
    return this._clientProxyVehiculo.send(VehiculoMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IVehiculo> {
    return this._clientProxyVehiculo.send(VehiculoMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() vehiculoDTO: VehiculoDTO): Observable<IVehiculo> {
    return this._clientProxyVehiculo.send(VehiculoMSG.UPDATE, { id, vehiculoDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyVehiculo.send(VehiculoMSG.DELETE, id);
  }
}
