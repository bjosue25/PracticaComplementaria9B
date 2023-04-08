require('dotenv').config();
const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();


const Vehiculo= require('./models/vehiculo');


app.use(express.json());
app.use(cors());
const Connection = async()=> { 
    try {
         mongoose.connect(process.env.MONGO); 
        console.log('La conexion correcta  ');

    } catch (error) {
        throw new Error('No se conecto' )
    }
  }

Connection();
app.get('/vehiculos', async (req, res) => {
  console.log('TRYING TO FETCH Vehiculos');
  try {
    const Vehiculos = await Vehiculo.find();
    res.status(200).json({
      Vehiculos: Vehiculos.map((Vehiculo) => ({
        id: Vehiculo.id,
        DescripcionVehiculo: Vehiculo.DescripcionVehiculo,
        PlacaVehiculo: Vehiculo.PlacaVehiculo,
        ColorVehiculo: Vehiculo.ColorVehiculo,
      })),
    });
    console.log('FETCHED Vehiculos');
  } catch (err) {
    console.error('ERROR FETCHING Vehiculos');
    console.error(err.message);
    res.status(500).json({ message: 'Failed to load Vehiculos.' });
  }
});
app.post('/vehiculos', async (req, res) => {
    console.log('TRYING TO STORE Vehiculo');
    const DescripcionVehiculo = req.body.DescripcionVehiculo;
    const PlacaVehiculo = req.body.PlacaVehiculo;
    const ColorVehiculo = req.body.ColorVehiculo;
    if (!DescripcionVehiculo || DescripcionVehiculo.trim().length === 0) {
      console.log('INVALID INPUT - NO DescripcionVehiculo');
      return res.status(422).json({ message: 'Invalid  DescripcionVehiculo.' });
    }
  
    const vehiculo = new Vehiculo({
      DescripcionVehiculo: DescripcionVehiculo,
      PlacaVehiculo: PlacaVehiculo,
      ColorVehiculo: ColorVehiculo,
    });
  
    try {
      await vehiculo.save();
      res
        .status(201)
        .json({ message: 'vehiculo saved', vehiculo: { id: vehiculo.id, DescripcionVehiculo: DescripcionVehiculo, PlacaVehiculo: PlacaVehiculo,ColorVehiculo: ColorVehiculo } });
      console.log('STORED NEW vehiculo');
    } catch (err) {
      console.error('ERROR FETCHING vehiculoS');
      console.error(err.message);
      res.status(500).json({ message: 'Failed to save vehiculo.' });
    }
  });
  app.delete('/vehiculos/:id', async (req, res) => {
    console.log('TRYING TO DELETE Vehiculo');
    try {
      await Vehiculo.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: 'Deleted vehiculo!' });
      console.log('DELETED Vehiculo');
    } catch (err) {
      console.error('ERROR FETCHING Vehiculos');
      console.error(err.message);
      res.status(500).json({ message: 'Failed to delete vehiculo.' });
    }
  });
  app.put('/vehiculo/:id', async (req, res) => {
    console.log('TRYING TO UPDATE vehiculo');
    try {
     const {id} = req.params;
     const {...data } =  req.body;
     console.log(id,data)
     await Vehiculo.findByIdAndUpdate(id,data )
    console.log('UPDATE vehiculo');
    res.status(200).json({ message: 'Actualizo' });
    } catch (err) {
      console.error('ERROR FETCHING vehiculo');
      console.error(err.message);
      res.status(500).json({ message: 'Failed to update vehiculo.' });
    }
});


app.listen(process.env.PORT,()=>{
    console.log("Servidor desconectado ")
})