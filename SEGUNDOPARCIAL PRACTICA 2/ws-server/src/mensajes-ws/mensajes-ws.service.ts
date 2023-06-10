import { Injectable } from '@nestjs/common';
import {Socket} from 'socket.io'
import { Vehiculo } from '../vehiculo/entities/vehiculo.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { VehiculoService } from 'src/vehiculo/vehiculo.service';

interface ConnectedClients {
    [id:string]: {
       socket: Socket,
       vehiculo: Vehiculo
    }
}

@Injectable()
export class MensajesWsService {
    private connectedClients: ConnectedClients={}

    constructor( @InjectRepository(Vehiculo)
     private readonly vehiculoRepository: Repository<Vehiculo>,
     private readonly vehiculoService: VehiculoService
      ){}

    async registerClient(client:Socket, name: string){
        console.log(this.vehiculoService.prueba());
        const vehiculo =await  this.vehiculoRepository.findOneBy({ descripcion: name });
        if (!vehiculo) throw new Error('Vehiculo no encontrado');
        if (!vehiculo.estado) throw new Error('No activo');

        
        this.connectedClients[client.id]= {socket:client, vehiculo: vehiculo};
    }
    removeClient(clientId:string){
        delete this.connectedClients[clientId];
    }
    getConnectedClients():string[]{
        // return Object.keys(this.connectedClients).length;
        // console.log(this.connectedClients)
         return Object.keys(this.connectedClients);
    }
    getStudentFullName(id:string){
        return this.connectedClients[id].vehiculo.descripcion;
    }
}
