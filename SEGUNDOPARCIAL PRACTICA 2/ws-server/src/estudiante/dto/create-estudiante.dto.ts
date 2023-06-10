import { IsArray, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateEstudianteDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    identificacion:string;

    @IsString()
    @IsNotEmpty()
    nombre:string;

    @IsString()
    @IsNotEmpty()
    direccion:string;
    

    @IsString({each:true})
    @IsArray()
    @IsOptional()
    telefono:string[];

    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    @IsIn([1,2,3])
    tipo: number;
}
