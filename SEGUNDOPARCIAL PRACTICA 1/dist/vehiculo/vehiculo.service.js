"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculoService = void 0;
const common_1 = require("@nestjs/common");
const vehiculo_entity_1 = require("./entities/vehiculo.entity");
let VehiculoService = class VehiculoService {
    constructor() {
        this.vehics = [
            { id: 1, descripcion: 'Mazda', placa: 'MBA-711', color: 'Azul', estado: true },
            { id: 2, descripcion: 'Ford', placa: 'MAM-007', color: 'Rojo', estado: true },
        ];
    }
    create(createVehiculoDto) {
        const vehiculo = new vehiculo_entity_1.Vehiculo();
        vehiculo.id = Math.max(...this.vehics.map(elemento => elemento.id), 0) + 1;
        vehiculo.placa = createVehiculoDto.placa;
        vehiculo.color = createVehiculoDto.color;
        vehiculo.descripcion = createVehiculoDto.descripcion;
        this.vehics.push(vehiculo);
        return vehiculo;
    }
    findAll() {
        return this.vehics;
    }
    findOne(id) {
        const vehiculo = this.vehics.find(vehiculo => vehiculo.id === id);
        if (!vehiculo)
            throw new common_1.NotFoundException(`ID ${id} not found`);
        return vehiculo;
    }
    update(id, updatevehicDto) {
        const { descripcion, placa, color, estado } = updatevehicDto;
        const vehiculo = this.findOne(id);
        if (placa)
            vehiculo.placa = placa;
        if (color)
            vehiculo.color = color;
        if (estado != undefined)
            vehiculo.estado = estado;
        this.vehics = this.vehics.map(elemento => {
            if (elemento.id === id)
                return vehiculo;
            return elemento;
        });
        return vehiculo;
    }
    remove(id) {
        this.findOne(id);
        this.vehics = this.vehics.filter(elemento => elemento.id !== id);
    }
};
VehiculoService = __decorate([
    (0, common_1.Injectable)()
], VehiculoService);
exports.VehiculoService = VehiculoService;
//# sourceMappingURL=vehiculo.service.js.map