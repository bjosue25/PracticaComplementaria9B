import { IsUUID } from 'class-validator';
import { CreateVehiculoInput } from './create-vehiculo.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateVehiculoInput extends PartialType(CreateVehiculoInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;
}
