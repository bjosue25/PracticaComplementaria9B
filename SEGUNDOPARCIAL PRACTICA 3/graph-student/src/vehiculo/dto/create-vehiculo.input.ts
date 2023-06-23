import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

@InputType()
export class CreateVehiculoInput {

  @Field(()=>String )
  @IsNotEmpty()
  descripcion:string;

  @Field(()=>String )
  @IsNotEmpty()
  placa:string;

  @Field(()=>String )
  @IsNotEmpty()
  color:string;

  
  @Field(()=>Boolean)
  @IsOptional()
  estado:boolean;
}
