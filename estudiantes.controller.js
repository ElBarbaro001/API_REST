const express = require('express'),
    router = express.Router()
const service = require('../servicios/estudiantes.servicios')
//Mostrar alumnos
router.get('/', async (req, res) => {
    const estudiantes = await service.listarEst()
    res.send(estudiantes)
    //console.log(estudiantes);
})
//Mostrar Alumnos por fecha de nacimiento de manera ascendete
router.get('/fecha', async (req, res) => {
    const estudiantes = await service.listarEstfecha()
    res.send(estudiantes)
})
//Ingresar nuevo alumno
router.post('/nuevo', async (req, res) => {
    await service.ingresarEst(req.body)
    res.status(201).send('Estudiante creado con Exito!.')
})
//Mostrar alumnos por ID
router.get('/:idalumno', async (req, res) => {
    const estudiante = await service.listarEstCod(req.params.idalumno)
    if (estudiante == undefined)
        res.status(404).json('No existe estudiante con este codigo : ' + req.params.idalumno)
    else
        res.send(estudiante)
})
//Eliminar alumno por ID
router.delete('/:idalumno', async (req, res) => {
    const filas = await service.eliminarEst(req.params.idalumno)
    if (filas == 0)
        res.status(404).json('No existe el codigo ingresado: ' + req.params.idalumno)
    else
        res.send('Eliminado!.')
})
//Actualizar alumno por ID
router.put('actualizar/:idalumno', async (req, res) => {
    const filas = await service.actualizarEst(req.body, req.params.idalumno)
    if (filas == 0)
        res.status(404).json('No existe el codigo ingresado: ' + req.params.idalumno)
    else
        res.send('Estudiante actualizado.')
})
//Actualizar alumno por ID
router.put('actualizar/:idalumno', async (req, res) => {
    const filas = await service.upAlumno(req.body, req.params.idalumno)
    if (filas == 0)
        res.status(404).json('No existe el codigo ingresado: ' + req.params.idalumno)
    else
        res.send('Estudiante actualizado.')
})
//Ingresar nueva nota
router.post('/nuevanota', async (req, res) => {
    //const {idalumno,apellidos,nombres,carnet,nivel,idprograma} = req.body;
    await service.ingresarNota(req.body)
    res.status(201).send('Nota ingresada con Exito!.')
})
//Actualizar nota por IDalumno
router.put('/:idalumno', async (req, res) => {
    const filas = await service.ingresarNota(req.body, req.params.idalumno)
    if (filas == 0)
        res.status(404).json('No existe el Id del alumno ingresado: ' + req.params.idalumno)
    else
        res.send('Nota actualizado.')
})
//Actualizar alumno por Nombre
/*
router.put('actualizar/:nombre', async (req, res) => {
    const filas = await service.actualizarNombre(req.body, req.params.)
    if (filas == 0)
        res.status(404).json('No existe el codigo ingresado: ' + req.params.idalumno)
    else
        res.send('Estudiante actualizado.')
})
*/
// Mostrar alumnos por Documento
router.get('/:documento', async (req, res) => {
    const estudiante = await service.buscarxdocumento(req.params.documento)
    if (estudiante == undefined)
        res.status(404).json('No existe estudiante con este Documento : ' + req.params.documento)
    else
        res.send(estudiante)
})
router.get('/:documento', async (req, res) => {
    const estudiante = await service.buscarDocumento(req.params.documento)
    if (estudiante == undefined)
        res.status(404).json('No existe estudiante con este codigo : ' + req.params.documento)
    else
        res.send(estudiante)
})
router.get('/:documento', async (req, res) => {
    const estudiante = await service.documento(req.params.documento)
    if (estudiante == undefined)
        res.status(404).json('No existe estudiante con este codigo : ' + req.params.documento)
    else
        res.send(estudiante)
})
module.exports = router;
