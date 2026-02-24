const express = require('express'),
app = express(),
bodyparser = require('body-parser');
require('express-async-errors')
//const db = require('./db'),
const db = require('./db'),
//rutas = require('./controlador/estudiantes.controller')
rutas = require('./controlador/estudiantes.controller')
var cors = require('cors');
app.use(cors());
app.use(bodyparser.json())
//app.use('/gestion/alumnos', rutas)
app.use('/estudiantes', rutas)
app.use((err, req, res, next) => {
    console.log(res)
    res.status(err.status || 200).send('Inscripcion exitosa!')
    //res.status(err.status || 200).send('Algo salio mal!')
})
db.query("SELECT 1")
    .then(() => {
        console.log('Conexion a la Base de Datos.')
        app.listen(5000,
            () => console.log('Servidor iniciado 5000'))
    })
    .catch(err => console.log('No se conecto la base de datos. \n' + err))
