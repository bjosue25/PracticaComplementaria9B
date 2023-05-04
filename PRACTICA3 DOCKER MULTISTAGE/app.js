require('dotenv').config();
const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();


const Vehiculo= require('./models/vehiculo');
const Parquear= require('./models/parquear');

app.use(express.json());
app.use(cors());
const Connection = async()=> { 
    try {
      await mongoose.connect(process.env.MONGO); 
        console.log('La conexion correcta  ');

    } catch (error) {
        throw new Error('No se conecto' )
    }
  }

Connection();


app.get('/parquear', async (req, res) => {
  console.log('TRYING TO FETCH Parqueo');
  try {
    const Parqueos = await Parquear.find();
    res.status(200).json({
      Parqueos: Parqueos.map((Parqueo) => ({
        id: Parqueo._id,
        ID_Vehiculo: Parqueo.ID_Vehiculo,
        ID_Parqueo: Parqueo.ID_Parqueo,
        Entrada: Parqueo.Entrada,
        Salida: Parqueo.Salida,
      })),
    });
    console.log('FETCHED Parqueo');
  } catch (err) {
    console.error('ERROR FETCHING Parqueo');
    console.error(err.message);
    res.status(500).json({ message: 'Failed to load Parqueo.' });
  }
});

app.post('/parquear', async (req, res) => {
    console.log('TRYING TO STORE Parqueo');
    const ID_Vehiculo = req.body.ID_Vehiculo;
    const ID_Parqueo = req.body.ID_Parqueo;
    const Entrada = req.body.Entrada;
    const Salida = req.body.Salida;
    if (!ID_Vehiculo || ID_Vehiculo.trim().length === 0) {
      console.log('INVALID INPUT - NO ID_Vehiculo');
      return res.status(422).json({ message: 'Invalid  ID_Vehiculo.' });
    }
  
    const parquear = new Parquear({
      ID_Vehiculo: ID_Vehiculo,
      ID_Parqueo: ID_Parqueo,
      Entrada: Entrada,
      Salida: Salida,
    });
  
    try {
      await parquear.save();
      res
        .status(201)
        .json({ message: 'parqueo saved', parquear: { id: parquear._id, ID_Vehiculo: ID_Vehiculo, ID_Parqueo: ID_Parqueo } });
      console.log('STORED NEW parqueo');
    } catch (err) {
      console.error('ERROR FETCHING parqueo');
      console.error(err.message);
      res.status(500).json({ message: 'Failed to save parqueo.' });
    }
  });



app.listen(process.env.PORT,()=>{
    console.log("Servidor Conectado ")
})