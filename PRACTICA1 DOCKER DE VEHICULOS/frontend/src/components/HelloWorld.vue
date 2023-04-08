<template>
  <h2>Alquiler de Vehiculos</h2>
 <table class="table">
  <thead>
    
    <tr>
      <th scope="col">#</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Placa</th>
      <th scope="col">Color</th>
    </tr>
  </thead>
  <tbody>
  <tr v-for ="(vehiculo, index) in vehiculos" :key="index">
          <td>{{ vehiculo.id }}</td>
          <td>{{vehiculo.DescripcionVehiculo}}
          </td>
          <td>{{vehiculo.PlacaVehiculo}}
          </td>
          <td>{{vehiculo.ColorVehiculo}}
          </td>
        </tr>
  </tbody>
</table>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  created(){
     axios.get('http://localhost:80/vehiculos').then(response => this.vehiculos = response.data.Vehiculos)
  },

  data() {
      return {
       vehiculos: []
      }
    }
  }

</script>