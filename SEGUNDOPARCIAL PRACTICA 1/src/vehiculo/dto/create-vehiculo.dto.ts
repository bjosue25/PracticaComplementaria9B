import { IsNotEmpty, IsNumber, IsString } from "class-validator";
export class CreateVehiculoDto {
    

    @IsString()
    @IsNotEmpty()
    descripcion:string;

    @IsString()
    @IsNotEmpty()
    placa:string;
    

    @IsString()
    @IsNotEmpty()
    color:string;

}
