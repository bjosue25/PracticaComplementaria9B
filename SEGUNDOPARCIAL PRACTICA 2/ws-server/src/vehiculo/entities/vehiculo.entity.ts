import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vehiculo { 
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('varchar',{
        unique:true
    })
    descripcion:string;

    @Column('boolean', {default:true})
    estado:boolean;

}