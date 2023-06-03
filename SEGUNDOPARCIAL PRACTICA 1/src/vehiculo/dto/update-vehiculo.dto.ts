import { PartialType } from '@nestjs/mapped-types';
import { CreateVehiculoDto } from './create-vehiculo.dto';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';
export class UpdateVehiculoDto extends PartialType(CreateVehiculoDto) {
    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}
